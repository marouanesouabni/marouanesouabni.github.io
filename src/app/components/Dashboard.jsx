import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { motion } from "motion/react";
import { api } from "../lib/api";

export function Dashboard() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("portfolio_admin_token");
  const [messages, setMessages] = useState([]);
  const [databaseConnected, setDatabaseConnected] = useState(true);
  const [status, setStatus] = useState("Loading messages…");

  useEffect(() => {
    if (!token) return;
    api("/messages", {}, token)
      .then(result => { setMessages(result.messages); setDatabaseConnected(result.databaseConnected); setStatus(""); })
      .catch(error => { setStatus(error instanceof Error ? error.message : "Unable to load messages."); });
  }, [token]);

  const unread = useMemo(() => messages.filter(message => message.status === "new").length, [messages]);
  if (!token) return <Navigate to="/admin" replace />;
  const authToken = token;

  async function updateStatus(id, nextStatus) {
    try {
      const result = await api(`/messages/${id}`, { method: "PATCH", body: JSON.stringify({ status: nextStatus }) }, authToken);
      setMessages(current => current.map(message => message._id === id ? result.message : message));
    } catch (error) { setStatus(error instanceof Error ? error.message : "Unable to update the message."); }
  }

  function signOut() { sessionStorage.removeItem("portfolio_admin_token"); navigate("/admin", { replace: true }); }

  return <main className="min-h-screen bg-[#0c0c0c] text-bone px-6 py-8 sm:px-10 lg:px-14">
    <div className="max-w-6xl mx-auto">
      <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="flex items-start justify-between gap-6 border-b border-bone/10 pb-7 mb-8">
        <div><p className="text-[10px] tracking-[0.25em] text-amber mb-2">PRIVATE DASHBOARD</p><h1 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Portfolio inbox</h1></div>
        <button onClick={signOut} className="text-xs tracking-wider border border-bone/15 px-4 py-2 hover:border-amber hover:text-amber">SIGN OUT</button>
      </motion.header>
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Metric index={0} label="TOTAL MESSAGES" value={messages.length} />
        <Metric index={1} label="NEEDS REVIEW" value={unread} accent />
        <Metric index={2} label="DATABASE" value={databaseConnected ? "CONNECTED" : "OFFLINE"} />
      </div>
      {status && <p className="mb-6 text-sm text-bone/60">{status}</p>}
      {!databaseConnected && <p className="mb-6 border border-amber/30 p-4 text-sm text-amber">MongoDB is not connected, so new messages are not being saved yet.</p>}
      <section className="border border-bone/10">
        <div className="px-5 py-4 border-b border-bone/10 flex justify-between"><span className="text-xs tracking-[0.2em] text-bone/50">CONTACT MESSAGES</span><span className="text-xs text-bone/40">{messages.length} total</span></div>
        {messages.length === 0 && !status ? <p className="p-8 text-sm text-bone/50">No messages yet.</p> : messages.map((message, index) => <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} key={message._id} className="p-5 border-b last:border-b-0 border-bone/10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3"><div><h2 className="text-lg text-bone">{message.name}</h2><a className="text-sm text-amber" href={`mailto:${message.email}`}>{message.email}</a></div><div className="text-right"><span className="text-[10px] tracking-wider border border-bone/15 px-2 py-1">{message.type}</span><p className="mt-2 text-xs text-bone/40">{new Date(message.createdAt).toLocaleString()}</p></div></div>
          <p className="whitespace-pre-wrap text-sm text-bone/70 leading-6">{message.message}</p>
          <div className="mt-4 flex gap-2">{["new", "read", "archived"].map(next => <button key={next} onClick={() => updateStatus(message._id, next)} className={`text-[10px] uppercase tracking-wider px-3 py-1.5 border ${message.status === next ? "border-amber text-amber" : "border-bone/15 text-bone/45 hover:border-bone/40"}`}>{next}</button>)}</div>
        </motion.article>)}
      </section>
    </div>
  </main>;
}

function Metric({ label, value, accent = false, index }) {
  return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.07 }} className="border border-bone/10 p-5"><p className="text-[10px] tracking-[0.2em] text-bone/45 mb-3">{label}</p><p className={`text-3xl ${accent ? "text-amber" : "text-bone"}`}>{value}</p></motion.div>;
}
