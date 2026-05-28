const certs = [
  { issuer: "Meta", name: "Front-End Developer Professional Certificate", status: "Completed", year: "2025", note: "Issued via edX · 9 courses" },
  { issuer: "IBM", name: "Back-End JavaScript Developer Professional Certificate", status: "In Progress", year: "2026", note: "edX · Node, Express, databases" },
  { issuer: "LPI", name: "LPIC-1 System Administrator", status: "In Progress", year: "2026", note: "Linux Professional Institute" },
  { issuer: "Google", name: "Cloud Digital Leader", status: "Planned", year: "2026", note: "Foundational GCP certification" },
  { issuer: "MongoDB", name: "Associate Developer", status: "Completed", year: "2025", note: "Application development track" },
  { issuer: "freeCodeCamp", name: "Responsive Web Design", status: "Completed", year: "2024", note: "300 hr curriculum" },
];

const statusColor = (s: string) =>
  s === "Completed" ? "text-amber" : s === "In Progress" ? "text-bone" : "text-bone/40";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-8 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
          <span>SECTION 05</span>
          <span className="h-px w-12 bg-bone/15" />
          <span>CREDENTIALS</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <h2 className="lg:col-span-7 text-bone" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, fontWeight: 400 }}>
            Licenses &amp; <span className="italic text-amber">certifications</span>
          </h2>
          <p className="lg:col-span-5 text-bone/55 max-w-md">
            A running ledger of what I've earned and what I'm working toward — kept honest, including the in-progress ones.
          </p>
        </div>

        <div className="border-t border-bone/10">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className="group grid grid-cols-12 gap-4 items-baseline py-7 border-b border-bone/10 hover:bg-bone/[0.02] -mx-4 px-4 transition-colors"
            >
              <div className="col-span-12 sm:col-span-1 text-[10px] tracking-[0.25em] text-bone/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-6 sm:col-span-2 text-bone italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", lineHeight: 1 }}>
                {c.issuer}
              </div>
              <div className="col-span-12 sm:col-span-5 text-bone group-hover:text-amber transition-colors">
                {c.name}
              </div>
              <div className="col-span-6 sm:col-span-2 text-xs text-bone/45">{c.note}</div>
              <div className="col-span-6 sm:col-span-2 flex items-center justify-end gap-2 text-xs">
                <span className={statusColor(c.status)}>● {c.status}</span>
                <span className="text-bone/30">{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
