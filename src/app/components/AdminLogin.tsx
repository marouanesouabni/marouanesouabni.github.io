import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../lib/api";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await api<{ token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      sessionStorage.setItem("portfolio_admin_token", result.token);
      navigate("/dashboard", { replace: true });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return <main className="min-h-screen grid place-items-center px-6 bg-[#0c0c0c]">
    <form onSubmit={submit} className="w-full max-w-md border border-bone/10 bg-bone/[0.02] p-8 sm:p-10 rounded-sm">
      <p className="text-[10px] tracking-[0.25em] text-amber mb-5">PRIVATE AREA</p>
      <h1 className="text-4xl text-bone mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Dashboard access</h1>
      <p className="text-sm text-bone/55 mb-8">Sign in with your administrator account.</p>
      <label className="block mb-5"><span className="text-[10px] tracking-[0.2em] text-bone/45 block mb-2">EMAIL</span><input required type="email" value={email} onChange={event => setEmail(event.target.value)} className="w-full bg-transparent border border-bone/15 px-4 py-3 text-bone focus:outline-none focus:border-amber" /></label>
      <label className="block mb-6"><span className="text-[10px] tracking-[0.2em] text-bone/45 block mb-2">PASSWORD</span><input required type="password" value={password} onChange={event => setPassword(event.target.value)} className="w-full bg-transparent border border-bone/15 px-4 py-3 text-bone focus:outline-none focus:border-amber" /></label>
      {error && <p className="mb-4 text-sm text-red-300" role="alert">{error}</p>}
      <button disabled={loading} className="w-full rounded-full bg-amber py-3 text-[#0c0c0c] disabled:opacity-60">{loading ? "Signing in…" : "Sign in"}</button>
    </form>
  </main>;
}
