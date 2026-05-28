import { useState } from "react";

const groups = [
  {
    label: "Backend",
    items: ["Node.js", "Express", "Socket.io", "REST", "JWT", "GraphQL", "Python"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Motion", "Vite"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Google Cloud", "Firebase", "Docker", "GitHub Actions", "Vercel", "Render"],
  },
  {
    label: "Quality",
    items: ["Jest", "Vitest", "Playwright", "ESLint", "Cypress"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL"],
  },
];

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-8 lg:px-14">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #ece8e1 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
          <span>SECTION 04</span>
          <span className="h-px w-12 bg-bone/15" />
          <span>TOOLKIT</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <h2 className="lg:col-span-7 text-bone" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, fontWeight: 400 }}>
            Skills &amp; <span className="italic text-amber">technologies</span> I lean on daily.
          </h2>
          <p className="lg:col-span-5 text-bone/55 self-end max-w-md">
            Tools I reach for first, plus what I'm currently leveling up. Hover a chip to spotlight; click to filter.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map(g => (
            <div key={g.label} className="grid lg:grid-cols-12 gap-6 items-start border-t border-bone/10 pt-8">
              <div className="lg:col-span-3">
                <div className="text-[10px] tracking-[0.25em] text-amber mb-2">— CATEGORY</div>
                <div className="text-bone italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", lineHeight: 1, fontWeight: 400 }}>
                  {g.label}
                </div>
              </div>
              <div className="lg:col-span-9 flex flex-wrap gap-2">
                {g.items.map(it => (
                  <button
                    key={it}
                    onMouseEnter={() => setActive(it)}
                    onMouseLeave={() => setActive(null)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all ${
                      active === it
                        ? "bg-amber text-[#0c0c0c] border-amber"
                        : "border-bone/15 text-bone/70 hover:border-bone/40 hover:text-bone"
                    }`}
                  >
                    {it}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
