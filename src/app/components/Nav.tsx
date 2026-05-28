import { useState, useEffect } from "react";
import { Link } from "react-router";

const links = [
  { n: "01", l: "About", href: "/#about" },
  { n: "02", l: "Projects", href: "/#projects" },
  { n: "03", l: "Experience", href: "/#experience" },
  { n: "04", l: "Skills", href: "/#skills" },
  { n: "05", l: "Certifications", href: "/#certifications" },
  { n: "06", l: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-[#0c0c0c]/70 border-b border-bone/5" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14 h-20 flex items-center justify-between">
        <Link to="/#top" className="flex items-baseline gap-2 text-bone">
          <span className="tracking-[0.2em] text-xs">MAROUANE</span>
          <span className="italic text-amber" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", lineHeight: 1 }}>Souabni</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 border border-bone/10 rounded-full px-2 py-1.5 backdrop-blur-md bg-bone/[0.02]">
          {links.map(item => (
            <Link key={item.l} to={item.href} className="group relative px-4 py-1.5 text-xs text-bone/60 hover:text-bone transition-colors flex items-center gap-1.5">
              <span className="text-amber/70 text-[10px]">{item.n}</span>{item.l}
            </Link>
          ))}
        </nav>
        <Link to="/#contact" className="group inline-flex items-center gap-2 text-xs text-bone">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
          </span>
          Available for work
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </header>
  );
}
