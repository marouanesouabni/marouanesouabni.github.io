import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-24 px-8 lg:px-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #ece8e1 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-amber/5 blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-12">
          <span>PORTFOLIO</span>
          <span className="h-px w-12 bg-bone/15" />
          <span>VOLUME 03 · 2026</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-8"
          >
            <h1 className="text-bone tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)", lineHeight: 0.95, fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" }}>
              Marouane builds <br />
              <span className="italic text-amber">software</span> that <br />
              <span className="relative">
                feels <span className="italic">considered.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 600 14" fill="none">
                  <path d="M2 8 Q 150 2, 300 8 T 598 8" stroke="#ffb547" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl">
              <div className="sm:col-span-2 text-bone/55" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                Full-stack developer based in Morocco, focused on Node, Express, React, and the messy real-time edges in between. Currently sketching with Google Cloud &amp; Firebase, and looking for a meaningful 2026 internship.
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-bone/30">CURRENTLY</div>
                  <div className="text-bone text-sm mt-1">CS Student, freelancing on the side</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-bone/30">BASED IN</div>
                  <div className="text-bone text-sm mt-1">Morocco · GMT+1</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#projects" className="group inline-flex items-center gap-3 bg-amber text-[#0c0c0c] rounded-full pl-6 pr-2 py-2 hover:bg-bone transition-colors">
                <span className="text-sm">See selected work</span>
                <span className="w-9 h-9 rounded-full bg-[#0c0c0c] text-amber flex items-center justify-center group-hover:rotate-45 transition-transform">→</span>
              </a>
              <a href="#contact" className="text-sm text-bone/70 hover:text-bone underline-offset-4 hover:underline">Or say hello →</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-bone/10 grayscale hover:grayscale-0 transition-all duration-700">
                <ImageWithFallback
                  src="./profile.jpg"
                  alt="Marouane Souabni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -left-3 text-[10px] tracking-[0.25em] text-bone/40 bg-[#0c0c0c] px-2 py-1 border border-bone/10">
                FIG. 01 — MAROUANE, 2026
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber text-[#0c0c0c] rounded-full w-24 h-24 flex items-center justify-center text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <div>
                  <div className="italic" style={{ fontSize: "1.5rem", lineHeight: 1 }}>open</div>
                  <div className="text-[10px] tracking-[0.15em] mt-1">FOR INTERNSHIPS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-10 border-t border-bone/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "30+", v: "Projects shipped" },
            { k: "4 yrs", v: "Writing code" },
            { k: "12", v: "Certifications" },
            { k: "01", v: "Goal — to keep getting better" },
          ].map(s => (
            <div key={s.v}>
              <div className="text-bone italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", lineHeight: 1 }}>{s.k}</div>
              <div className="text-xs text-bone/40 mt-2 max-w-[160px]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
