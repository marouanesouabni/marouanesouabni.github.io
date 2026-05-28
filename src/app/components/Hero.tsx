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

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <h1 className="text-bone tracking-tight" style={{ fontSize: "clamp(2rem, 7vw, 6.5rem)", lineHeight: 0.95, fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" }}>
              Marouane builds <br />
              <span className="italic text-amber">software</span> that <br />
              <span className="relative">
                feels <span className="italic">considered.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 600 14" fill="none">
                  <path d="M2 8 Q 150 2, 300 8 T 598 8" stroke="#ffb547" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="mt-8 lg:mt-12 flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="md:col-span-1 text-bone/55 text-sm md:text-base max-w-2xl" style={{ lineHeight: 1.65 }}>
                Full-stack developer based in Morocco, focused on Node, Express, React, and the messy real-time edges in between. Currently sketching with Google Cloud &amp; Firebase, and looking for a meaningful 2026 internship.
              </div>
              <div className="md:col-span-1 space-y-4 md:space-y-5">
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

            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#projects" className="group inline-flex items-center gap-3 bg-amber text-[#0c0c0c] rounded-full pl-6 pr-2 py-2 hover:bg-bone transition-colors text-sm">
                <span>See selected work</span>
                <span className="w-9 h-9 rounded-full bg-[#0c0c0c] text-amber flex items-center justify-center group-hover:rotate-45 transition-transform">→</span>
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-bone/70 hover:text-bone underline-offset-4 hover:underline">Or say hello →</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full sm:w-64 lg:w-72 lg:col-span-5"
          >
            <div className="relative max-w-xs mx-auto sm:mx-0">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-bone/10 grayscale hover:grayscale-0 transition-all duration-700">
                <ImageWithFallback
                  src="./profile.jpg"
                  alt="Marouane Souabni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -left-3 text-[8px] sm:text-[10px] tracking-[0.25em] text-bone/40 bg-[#0c0c0c] px-2 py-1 border border-bone/10">
                FIG. 01 — MAROUANE
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-amber text-[#0c0c0c] rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <div>
                  <div className="italic text-sm sm:text-base lg:text-2xl" style={{ lineHeight: 1 }}>open</div>
                  <div className="text-[8px] sm:text-[10px] tracking-[0.15em] mt-0.5 sm:mt-1">FOR WORK</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 lg:pt-10 border-t border-bone/10 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {[
            { k: "30+", v: "Projects shipped" },
            { k: "4 yrs", v: "Writing code" },
            { k: "12", v: "Certifications" },
            { k: "01", v: "Goal — to keep improving" },
          ].map(s => (
            <div key={s.v}>
              <div className="text-bone italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1 }}>{s.k}</div>
              <div className="text-[10px] sm:text-xs text-bone/40 mt-1 sm:mt-2 max-w-[160px]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
