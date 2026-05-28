import { Link, Navigate, useParams } from "react-router";

import { getProjectBySlug, projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projects.findIndex(item => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="pt-24">
      <section className="relative px-8 lg:px-14 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-bone/55 hover:text-amber transition-colors mb-12">
            <span>←</span>
            Back to selected work
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-bone/40 mb-6">
                <span>PROJECT {project.n}</span>
                <span className="h-px w-12 bg-bone/15" />
                <span>{project.year}</span>
              </div>
              <h1 className="text-bone" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.2rem, 8vw, 7rem)", lineHeight: 0.95, fontWeight: 400 }}>
                {project.title}
              </h1>
              <p className="mt-8 max-w-2xl text-bone/60" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                {project.headline}
              </p>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-3 lg:grid-cols-1 gap-4 text-sm">
              <ProjectMeta label="ROLE" value={project.role} />
              <ProjectMeta label="TYPE" value={project.kind} />
              <ProjectMeta label="STACK" value={project.stack.join(" · ")} />
            </div>
          </div>

          <div className="mt-14 relative aspect-[16/9] overflow-hidden rounded-sm border border-bone/10">
            <ImageWithFallback src={project.img} alt={`${project.title} project preview`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4">
              <div className="text-[10px] tracking-[0.25em] text-bone/70">
                FIG. {project.n} · CASE STUDY
              </div>
              <div className="text-[10px] tracking-[0.25em] text-amber">
                {project.kind.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-14 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-[10px] tracking-[0.25em] text-bone/40 mb-5">OVERVIEW</div>
            <div className="space-y-5">
              {project.overview.map(paragraph => (
                <p key={paragraph} className="text-bone/65" style={{ fontSize: "1rem", lineHeight: 1.75 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l border-bone/10 lg:pl-10">
            <div className="text-[10px] tracking-[0.25em] text-bone/40 mb-5">BUILD NOTES</div>
            <ul className="space-y-4">
              {project.highlights.map(item => (
                <li key={item} className="flex gap-4 text-bone/65" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <span className="text-amber shrink-0 mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-14 pb-28">
        <div className="max-w-[1400px] mx-auto border-y border-bone/10 py-12">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-[10px] tracking-[0.25em] text-bone/40 mb-4">RESULTS</div>
              <h2 className="text-bone" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.8rem)", lineHeight: 1, fontWeight: 400 }}>
                What changed after the build.
              </h2>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-4">
              {project.outcomes.map((item, index) => (
                <div key={item} className="border border-bone/10 rounded-sm p-5 bg-bone/[0.02]">
                  <div className="text-[10px] tracking-[0.25em] text-amber mb-4">{String(index + 1).padStart(2, "0")}</div>
                  <p className="text-sm text-bone/65 leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-bone/55 hover:text-amber transition-colors">
            <span>←</span>
            All selected work
          </Link>
          <Link to={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-3 border border-bone/15 hover:border-amber rounded-full px-6 py-3 text-sm text-bone/80 hover:text-amber transition-colors">
            Next project: {nextProject.title}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-bone/10 rounded-sm p-5 bg-bone/[0.02]">
      <div className="text-[10px] tracking-[0.25em] text-bone/35 mb-2">{label}</div>
      <div className="text-bone/75">{value}</div>
    </div>
  );
}
