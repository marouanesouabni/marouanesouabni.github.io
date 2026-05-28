import { Link } from "react-router";

import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28 px-8 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
              <span>SECTION 02</span>
              <span className="h-px w-12 bg-bone/15" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-bone" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, fontWeight: 400 }}>
              A handful of things <br />
              I've <span className="italic text-amber">made.</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-xs text-sm text-bone/50">
            Four selected projects from the last two years. Click through for the long version, with build notes and decisions.
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {projects.map(p => (
            <article key={p.n} className={`group relative ${p.span}`}>
              <Link to={`/projects/${p.slug}`} className="block" aria-label={`Open ${p.title} project page`}>
                <div className={`relative ${p.h} overflow-hidden rounded-sm border border-bone/10`}>
                  <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] text-bone/70">
                    FIG. {p.n} · {p.year}
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.25em] text-amber">
                    {p.kind.toUpperCase()}
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-bone group-hover:text-amber transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", lineHeight: 1.05, fontWeight: 400 }}>
                      <span className="italic">— </span>{p.title}
                    </h3>
                    <p className="mt-3 text-bone/55 text-sm max-w-xl">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.stack.map(s => (
                        <span key={s} className="text-[11px] tracking-[0.15em] text-bone/40">{s.toUpperCase()}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 w-12 h-12 rounded-full border border-bone/15 flex items-center justify-center text-bone/60 group-hover:bg-amber group-hover:text-[#0c0c0c] group-hover:border-amber group-hover:rotate-45 transition-all">
                    →
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/projects" className="inline-flex items-center gap-3 border border-bone/15 hover:border-amber rounded-full px-6 py-3 text-sm text-bone/80 hover:text-amber transition-colors">
            View all projects <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
