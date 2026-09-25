export const sections = [
  { id: "hero", label: "01 — hero" },
  { id: "about", label: "02 — about" },
  { id: "case-studies", label: "03 — case studies" },
  { id: "testimonials", label: "04 — reviews" },
  { id: "faq", label: "05 — faq" },
  { id: "contact", label: "06 — contact" },
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
  slug: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  definition?: { word: string; pronunciation: string; body: string };
  /** Real screenshot/diagram in /public. Only rendered when set; alt is required. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Meta description for the case-study page, ≤ 160 chars. */
  metaDescription: string;
  caseStudy: { problem: string; approach: string[]; result: string };
};

export const flagships: Flagship[] = [
  {
    slug: "governor",
    metaDescription:
      "How I built Governor, a lightweight Go LLM gateway that enforces hard spend caps with atomic budget checks and mid-stream cancellation.",
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
    caseStudy: {
      problem:
        "LLM spend is invisible until the invoice arrives. Teams that want hard limits usually have to stand up heavyweight proxies like LiteLLM or Helicone, which is a lot of infrastructure for one question: can this request afford to run?",
      approach: [
        "A single Go gateway that sits between the app and the model provider.",
        "Atomic budget checks before a request is forwarded, so concurrent calls can't race past a cap.",
        "Streaming responses are metered as they arrive and cancelled mid-stream the moment a budget is hit.",
        "Real-time cost visibility per key, without a separate observability stack.",
      ],
      result:
        "A lightweight, self-hostable gateway that enforces spend caps instead of just reporting them. Actively in development, and also my vehicle for learning Go properly.",
    },
  },
  {
    slug: "m2c-municipality-platform",
    metaDescription:
      "Case study: M2C, a municipality management platform for resident records, requests and internal workflows, built on Next.js and PostgreSQL.",
    tag: "02 — PUBLIC INFRASTRUCTURE",
    title: "M2C — Municipality Management Platform",
    description:
      "Resident records, requests, internal workflows — built to hold up under the unglamorous, high-stakes load public systems actually see.",
    stack: ["Next.js", "PostgreSQL", "REST"],
    github: "https://github.com/hadi-moustafa",
    caseStudy: {
      problem:
        "Municipal work runs on resident records, requests and internal approvals, and it's often tracked on paper or in scattered spreadsheets. Public systems get unglamorous but high-stakes load: every record matters, and downtime means residents can't be served.",
      approach: [
        "A Next.js platform backed by PostgreSQL, with a REST API for resident records, requests and workflows.",
        "Relational schema designed around the municipality's real processes, not a generic CRUD template.",
        "Internal workflows modelled explicitly, so a request's state is always known and auditable.",
      ],
      result:
        "One system of record for residents, requests and internal workflows, built to hold up under the load public services actually see.",
    },
  },
  {
    slug: "melhemauto",
    metaDescription:
      "Case study: MelhemAuto, a React, Node.js and MongoDB management system running in production for an auto-service business in Africa.",
    tag: "03 — SHIPPED & RUNNING",
    title: "MelhemAuto",
    description:
      "A management system for a working auto-service business in Africa — real customers, still in production. Built for reliability first: this one can't go down mid-shift.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/hadi-moustafa",
    caseStudy: {
      problem:
        "A working auto-service business in Africa needed to manage customers and day-to-day operations. The system has to be up during every shift, because when it goes down the business stops.",
      approach: [
        "A React front end on a Node.js + MongoDB backend, built around the shop's real workflow.",
        "Reliability first: simple, predictable flows over clever features.",
        "Shipped to production and supported with real customers.",
      ],
      result: "In production today, serving a real business with real customers.",
    },
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

export const quotes = [
  "Act only according to that maxim whereby you can at the same time will that it should become a universal law.",
  "Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me.",
  "Science is organized knowledge. Wisdom is organized life.",
  "He who is cruel to animals becomes hard also in his dealings with men.",
  "Enlightenment is man's emergence from his self-incurred immaturity.",
  "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
  "Man is what he believes.",
  "To live without Hope is to Cease to live.",
  "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
  "Above all, don't lie to yourself.",
];

/** Shown next to every CTA. Only promise what you can keep. */
export const responseTime = "24 hours";

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Backend-heavy work: APIs, databases, internal business systems, integrations, and LLM/AI tooling. I also build the full stack (Next.js/React front ends) when a project needs one person end-to-end.",
  },
  {
    q: "Do you work remotely and across time zones?",
    a: "Yes. I work remotely as a freelancer, and my code already runs in more than one country. I'm based in Lebanon (UTC+2/+3) and plan overlap hours with your team.",
  },
  {
    q: "How quickly will you reply to an inquiry?",
    a: `Within ${responseTime}. Send a short description of what you're building and I'll reply with questions or a next step.`,
  },
  {
    q: "What does a project look like from start to finish?",
    a: "A short call to understand the problem, a written scope with milestones, then regular working demos. I care about where the load lands and what happens when things fail, so that's designed in from the start.",
  },
  {
    q: "Do you support the system after launch?",
    a: "Yes. Several of my systems are still in production, and I stay on for fixes, monitoring and improvements if you want me to.",
  },
];

/**
 * Real client reviews only — never invent these. The testimonials section
 * renders nothing while this array is empty.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  /** Real photo in /public, e.g. "/testimonials/jane.jpg" */
  photo?: string;
}[] = [];

export const contact = {
  email: "hadimoustafa3@gmail.com",
  github: "https://github.com/hadi-moustafa",
  linkedin: "https://linkedin.com/in/hadi-moustafa-3a30b3363",
  phone: "+961 81 277 281",
};
