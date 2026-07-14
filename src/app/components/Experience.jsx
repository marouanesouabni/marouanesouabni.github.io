import { useState } from "react";

const jobs = [
  {
    co: "Technocolabs Softwares Inc.",
    role: "Full-Stack Developer Intern (MERN)",
    when: "Remote · Oct 2025 — Present",
    points: [
      "Built a real-time notification system with Socket.io, delivering alerts to ~150 ms in 3 channels (task assignment, status change, mention).",
      "Implemented JWT auth middleware that secured 100% of API routes and WebSocket handshakes, cutting unauthorized access attempts to zero in staging.",
      "Deployed full-stack environments across 4 platforms (Render, Vercel, Railway, Netlify), reducing deployment issues by standardizing env configs across services.",
      "Added health endpoints enabling uptime monitoring for the first time — adopted by the team lead for incident response within the first week.",
    ],
  },
  {
    co: "Freelance",
    role: "Full-Stack Developer",
    when: "Remote · 2024 — 2025",
    points: [
      "Shipped 6 client projects end-to-end across React, Node, and Firebase.",
      "Designed Stripe-based checkout for a small e-commerce client, processing ~$8k in first month.",
      "Maintained a backlog of 30+ tickets at >95% on-time delivery.",
    ],
  },
  {
    co: "Open Source",
    role: "Backend Contributor",
    when: "2024",
    points: [
      "Submitted 12 merged PRs to small Node libraries — auth flows, rate-limiters, docs.",
      "Wrote integration tests that increased coverage on a popular auth helper by 18%.",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="relative py-28 px-8 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
          <span>SECTION 03</span>
          <span className="h-px w-12 bg-bone/15" />
          <span>EXPERIENCE</span>
        </div>
        <h2 className="text-bone mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, fontWeight: 400 }}>
          My work <span className="italic text-amber">experiences</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {jobs.map((j, i) => (
                <button
                  key={j.co}
                  onClick={() => setActive(i)}
                  className={`text-left whitespace-nowrap lg:whitespace-normal px-4 py-3 border-l-2 transition-all ${
                    active === i ? "border-amber text-bone bg-bone/[0.03]" : "border-bone/10 text-bone/40 hover:text-bone/70"
                  }`}
                >
                  <div className="text-[10px] tracking-[0.2em] mb-1 text-bone/40">0{i + 1}</div>
                  <div className="text-sm">{j.co}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-10 lg:border-l border-bone/10">
            <div className="text-amber italic mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
              {job.co}
            </div>
            <h3 className="text-bone mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.05, fontWeight: 400 }}>
              {job.role}
            </h3>
            <div className="text-xs tracking-[0.2em] text-bone/40 mb-8">{job.when.toUpperCase()}</div>

            <ul className="space-y-5">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-5 text-bone/65" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                  <span className="text-amber shrink-0 mt-1.5">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
