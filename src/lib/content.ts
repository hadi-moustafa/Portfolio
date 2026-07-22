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
      "A lightweight LLM gateway, built in Go (learning Go as I go). Real-time cost visibility and hard spend caps — atomic budget checks before a request goes out, mid-stream cancellation the instant one is hit — without standing up LiteLLM/Helicone-style infrastructure.",
    stack: ["Go", "LLM Gateway", "Cost Enforcement"],
    github: "https://github.com/hadi-moustafa",
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
    github: "https://github.com/hadi-moustafa",
  },
  {
    tag: "03 — SHIPPED & RUNNING",
    title: "MelhemAuto",
    description:
      "A management system for a working auto-service business in Africa — real customers, still in production. Built for reliability first: this one can't go down mid-shift.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/hadi-moustafa",
  },
];

export const secondaryProjects = [
  {
    title: "Paws",
    description:
      "Animal shelter management system built to organize pets and products, with vet integration and medical records for each pet. Originally built to digitise stray animal tracking and adoption for a village in South Lebanon.",
    href: "https://paws-gamma-three.vercel.app/",
    badge: undefined,
  },
  {
    title: "TechTalks (LFM)",
    description:
      "A centralized freelance marketplace empowering local Lebanese talent — creatives display portfolios and reach clients directly. Built as a collaborative internship project with TechTalks on the T3 stack (Next.js & Supabase).",
    href: "https://techtalks-lebanese-freelance-market.vercel.app/",
    badge: undefined,
  },
  {
    title: "Njoum",
    description:
      "A full system (mobile app + web platform) for enhancing the safety and support of girls and young women — real-time SOS emergency alerts and live location sharing via map APIs.",
    href: undefined,
    badge: "IN PROGRESS",
  },
  {
    title: "Nexus",
    description:
      "A multi-platform news app (Flutter/Next.js) with a world-map UI. Supabase/PostgreSQL-backed, using Gemini AI for summaries, quizzes, and toxicity filtering — schema tracks users, articles, and engagement across web and mobile.",
    href: undefined,
    badge: "CLIENT PROJECT",
  },
];

export const contact = {
  email: "hadimoustafa3@gmail.com",
  github: "https://github.com/hadi-moustafa",
  linkedin: "https://linkedin.com/in/hadi-moustafa-3a30b3363",
  phone: "+961 81 277 281",
};
