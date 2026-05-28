import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0c0c0c] text-bone selection:bg-amber selection:text-[#0c0c0c]">
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="pt-20">
      <Projects />
    </main>
  );
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return null;
}
