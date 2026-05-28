import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="relative px-8 lg:px-14 pt-20 pb-10 border-t border-bone/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="overflow-hidden mb-12">
          <div className="text-bone italic whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.95, fontWeight: 400 }}>
            Marouane <span className="text-amber">Souabni</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-bone/10 text-xs text-bone/40">
          <div>© 2026 Marouane Souabni. Full-Stack Developer.</div>
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-bone/30">Performance · 98+</span>
            <span className="text-bone/30">Accessibility · 100</span>
            <span className="text-bone/30">Best Practices · 100</span>
            <span className="text-bone/30">SEO · 100</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sbnmarouan" className="hover:text-amber transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/marouane-souabni-a10079385/" className="hover:text-amber transition-colors">LinkedIn</a>
            <a href="mailto:sbnmarouan@gmail.com" className="hover:text-amber transition-colors">Email</a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-[10px] tracking-[0.25em] text-bone/25">
          <span>FIG. 99 — END OF DOCUMENT</span>
          <Link to="/#top" className="hover:text-amber transition-colors">↑ BACK TO TOP</Link>
        </div>
      </div>
    </footer>
  );
}
