export const sections = [
  { id: "hero", label: "01 — hero" },
  { id: "about", label: "02 — about" },
  { id: "projects", label: "03 — selected work" },
  { id: "contact", label: "04 — contact" },
] as const;

export const stats = [
  { num: "6", label: "systems shipped", amber: true },
  { num: "3", label: "in production now", amber: false },
  { num: "1", label: "LLM gateway, public", amber: true },
  { num: "2+", label: "countries running my code", amber: false },
];

export const timeline = [
  {
    date: "FEB 2026 — PRESENT",
    role: "Freelance Fullstack Engineer",
    org: "Remote / Self-Employed",
  },
  {
    date: "JAN 2026 — FEB 2026",
    role: "Software Engineering Intern — Team Lead",
    org: "TechTalks · LFM",
  },
  {
    date: "FEB 2026 — PRESENT",
    role: "M.Sc. Computer & Communication Engineering",
    org: "Islamic University of Lebanon",
  },
  {
    date: "GRAD. JUN 2025",
    role: "B.Sc. Computer Science — GPA 3.41",
    org: "Islamic University of Lebanon, Tyre",
  },
];

export type Flagship = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  definition?: { word: string; pronunciation: string; body: string };
};

export const flagships: Flagship[] = [
  {
    tag: "01 — LLM INFRASTRUCTURE",
    title: "Governor",
    description:
      "Atomic budget checks before a request goes out. Mid-stream cancellation the instant a cap is hit. Built so \"the AI bill spiraled\" stops being a story teams tell.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "WebSockets"],
    github: "#",
    demo: "#",
    definition: {
      word: "governor",
      pronunciation: "/ˈɡʌv.ər.nər/ · n.",
      body: "a mechanical device that automatically limits speed. here: a gateway that automatically limits what an LLM call is allowed to cost.",
    },
  },
  {
    tag: "02 — PUBLIC INFRASTRUCTURE",
    title: "M2C — Municipality Management Platform",
    description:
      "Resident records, requests, internal workflows — built to hold up under the unglamorous, high-stakes load public systems actually see.",
    stack: ["Next.js", "PostgreSQL", "REST"],
    github: "#",
    demo: "#",
  },
  {
    tag: "03 — SHIPPED & RUNNING",
    title: "MelhemAuto",
    description:
      "A management system for a working auto-service business in Africa — real customers, still in production. Built for reliability first: this one can't go down mid-shift.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

export const secondaryProjects = [
  {
    title: "Paws",
    description:
      "Stray animal tracking & adoption platform for a village in South Lebanon. Live, mobile-first.",
    href: "#",
    wip: false,
  },
  {
    title: "TechTalks",
    description:
      "Marketplace for Lebanese freelancers, built as team lead during internship. Live.",
    href: "#",
    wip: false,
  },
  {
    title: "Njoum",
    description: "A support & SOS app for women — quiet, safety-first design. More soon.",
    href: undefined,
    wip: true,
  },
];

export const contact = {
  email: "hadimoustafa3@gmail.com",
  github: "https://github.com/hadi-moustafa",
  linkedin: "https://linkedin.com/in/hadi-moustafa-3a30b3363",
  phone: "+961 81 277 281",
};
