export type Project = {
  n: string;
  slug: string;
  title: string;
  kind: string;
  year: string;
  desc: string;
  headline: string;
  role: string;
  stack: string[];
  img: string;
  span: string;
  h: string;
  overview: string[];
  highlights: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    n: "01",
    slug: "notesboard",
    title: "NotesBoard",
    kind: "Full-stack · Realtime",
    year: "2026",
    desc: "A collaborative notes and analytics platform with live cursors, drag-to-organize widgets, and an offline-first sync layer.",
    headline: "A collaborative workspace for notes, lightweight analytics, and live team context.",
    role: "Full-stack developer",
    stack: ["React", "Express", "Socket.io", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200",
    span: "lg:col-span-7",
    h: "aspect-[16/10]",
    overview: [
      "NotesBoard turns scattered research notes into a shared workspace where teammates can write, organize, and review ideas in real time.",
      "The project focuses on the parts that usually make collaborative tools feel fragile: socket presence, optimistic updates, local draft recovery, and clear state boundaries between the client and API.",
    ],
    highlights: [
      "Live cursors and room-based presence powered by Socket.io.",
      "Drag-to-organize boards with stable local ordering before server sync.",
      "Offline draft persistence so notes survive refreshes and short network drops.",
      "Analytics snapshots for board activity and note movement.",
    ],
    outcomes: [
      "A calmer collaboration flow with fewer lost edits.",
      "A reusable real-time architecture for future workspace features.",
      "Clear separation between UI state, socket events, and persisted data.",
    ],
  },
  {
    n: "02",
    slug: "real-time-notifications",
    title: "Real-time Notifications",
    kind: "Backend",
    year: "2025",
    desc: "Event-driven notification module powering daily ops at Technocolabs with webhooks, REST, and push channels.",
    headline: "A backend notification layer for assignments, mentions, and status updates.",
    role: "Backend developer",
    stack: ["Node", "Redis", "REST", "JWT"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000",
    span: "lg:col-span-5",
    h: "aspect-[16/10]",
    overview: [
      "This module was designed to keep operational teams informed without forcing users to constantly refresh dashboards.",
      "The architecture combines authenticated REST endpoints, event queues, and push delivery so different notification types can be added without rewriting the core transport layer.",
    ],
    highlights: [
      "JWT-secured notification endpoints and socket handshakes.",
      "Event channels for task assignments, status changes, and mentions.",
      "Redis-backed delivery state for fast reads and retry-friendly writes.",
      "Webhook-ready structure for future integrations.",
    ],
    outcomes: [
      "Reduced delay between team actions and user awareness.",
      "A backend module that can grow from in-app notifications to external channels.",
      "Cleaner debugging through explicit event names and delivery states.",
    ],
  },
  {
    n: "03",
    slug: "alarm-clock",
    title: "Alarm Clock",
    kind: "Web app",
    year: "2025",
    desc: "A lightweight progressive web app for managing daily routines with offline readiness, tactile controls, and gentle haptics.",
    headline: "A focused PWA for alarms, routines, and everyday time checks.",
    role: "Frontend developer",
    stack: ["JavaScript", "HTML", "CSS", "PWA"],
    img: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1000",
    span: "lg:col-span-5",
    h: "aspect-[16/10]",
    overview: [
      "Alarm Clock is a small web app built around one expectation: setting and managing reminders should feel immediate.",
      "The interface keeps the core actions close together while the PWA layer makes the experience usable even when the network is not the center of the story.",
    ],
    highlights: [
      "Responsive alarm controls with readable time states.",
      "Offline-ready shell for quick repeat visits.",
      "Accessible form inputs for time, labels, and recurring routines.",
      "Lightweight styling with no heavy UI framework dependency.",
    ],
    outcomes: [
      "A compact app that loads quickly on mobile.",
      "A useful practice project for state, timers, and browser APIs.",
      "A cleaner base for future notification permission work.",
    ],
  },
  {
    n: "04",
    slug: "portfolio",
    title: "Portfolio (this site)",
    kind: "Frontend",
    year: "2026",
    desc: "A modern, performance-focused portfolio built with React 18, TypeScript, and Tailwind CSS v4.",
    headline: "A portfolio designed to make selected work, skills, and contact paths easy to scan.",
    role: "Frontend developer",
    stack: ["React", "TypeScript", "Tailwind v4", "Motion"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    span: "lg:col-span-7",
    h: "aspect-[16/10]",
    overview: [
      "This site packages a concise developer story into a single-page portfolio with richer project detail routes.",
      "The build keeps the visual language restrained and editorial while preserving practical navigation, fast loading, and responsive sections.",
    ],
    highlights: [
      "React component sections for hero, projects, experience, skills, certifications, and contact.",
      "Project detail routes that turn each featured item into a real page.",
      "Tailwind CSS v4 styling with custom font and color tokens.",
      "Production build through Vite.",
    ],
    outcomes: [
      "Project cards now lead to concrete pages instead of empty anchors.",
      "TypeScript tooling is installed so editor diagnostics are meaningful.",
      "The site is easier to extend with future case studies.",
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find(project => project.slug === slug);
}
