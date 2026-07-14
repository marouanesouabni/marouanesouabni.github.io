const items = ["React", "Node.js", "JavaScript", "Express", "MongoDB", "Tailwind", "Motion", "Vite", "JWT", "Nodemailer"];

export function Marquee() {
  return (
    <div className="relative border-y border-bone/10 overflow-hidden py-8">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="text-bone/30 inline-flex items-center gap-16 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem" }}>
            {it}
            <span className="text-amber not-italic" style={{ fontSize: "1rem" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}
