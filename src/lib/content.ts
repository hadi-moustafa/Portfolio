export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const stats = [
  { num: "6", label: "systems shipped", accent: true },
  { num: "3", label: "in production now", accent: false },
  { num: "1", label: "LLM gateway, public", accent: true },
  { num: "2+", label: "countries running my code", accent: false },
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

export type Category = "engineering" | "marketing" | "fullstack";

export const categoryLabels: Record<Category, string> = {
  engineering: "Engineering",
  marketing: "Marketing",
  fullstack: "Full-stack",
};

export type Flagship = {
  categories: Category[];
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
    categories: ["engineering"],
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
    categories: ["engineering", "fullstack"],
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
    categories: ["fullstack"],
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

export type SecondaryProject = {
  title: string;
  description: string;
  categories: Category[];
  href?: string;
  badge?: string;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "se.hadi/ — brand & Instagram launch",
    description:
      "My own brand, built like a client project: identity and wordmark, a navy/teal/coral visual system, post templates, and a content plan across four pillars (showcases, quick tips, behind-the-scenes, results). Running now on @se.hadimoustafa.",
    categories: ["marketing"],
    href: "https://instagram.com/se.hadimoustafa",
    badge: "IN PROGRESS",
  },
  {
    title: "Paws",
    description:
      "Animal shelter management system built to organize pets and products, with vet integration and medical records for each pet. Originally built to digitise stray animal tracking and adoption for a village in South Lebanon.",
    categories: ["fullstack"],
    href: "https://paws-gamma-three.vercel.app/",
  },
  {
    title: "TechTalks (LFM)",
    description:
      "A centralized freelance marketplace empowering local Lebanese talent — creatives display portfolios and reach clients directly. Built as a collaborative internship project with TechTalks on the T3 stack (Next.js & Supabase).",
    categories: ["fullstack"],
    href: "https://techtalks-lebanese-freelance-market.vercel.app/",
  },
  {
    title: "Njoum",
    description:
      "A full system (mobile app + web platform) for enhancing the safety and support of girls and young women — real-time SOS emergency alerts and live location sharing via map APIs.",
    categories: ["fullstack"],
    badge: "IN PROGRESS",
  },
  {
    title: "Nexus",
    description:
      "A multi-platform news app (Flutter/Next.js) with a world-map UI. Supabase/PostgreSQL-backed, using Gemini AI for summaries, quizzes, and toxicity filtering — schema tracks users, articles, and engagement across web and mobile.",
    categories: ["fullstack", "engineering"],
    badge: "CLIENT PROJECT",
  },
];

export type ServiceSlug = "engineering" | "marketing" | "support" | "growth";

export type Service = {
  slug: ServiceSlug;
  word: string;
  pronunciation: string;
  tagline: string;
  /** Page title / H1 on /services/[slug] */
  title: string;
  metaDescription: string;
  includes: string[];
  intro: string;
  outcomes: string[];
  /** Which work filter proves this service */
  proof: Category | "all";
};

export const services: Service[] = [
  {
    slug: "engineering",
    word: "engineer",
    pronunciation: "/ˌen.dʒɪˈnɪər/ · v.",
    tagline: "building the thing that holds.",
    title: "Web & software development",
    metaDescription:
      "Web apps, e-commerce, management systems and financial trackers, built by a software engineer in Lebanon to hold up under real load.",
    includes: ["Web apps", "E-commerce", "Management systems", "Financial trackers"],
    intro:
      "Most software works in the demo. I build for the day after launch: real users, real data, and the moment a request fails halfway through. Backend-first, with a clean front end on top.",
    outcomes: [
      "A system designed around how your business actually works, not a generic template.",
      "APIs and databases built to handle load and failure without losing data.",
      "Code you own, documented so any engineer can pick it up.",
    ],
    proof: "engineering",
  },
  {
    slug: "marketing",
    word: "market",
    pronunciation: "/ˈmɑː.kɪt/ · v.",
    tagline: "getting it in front of the right people.",
    title: "Digital marketing",
    metaDescription:
      "Paid ads, growth strategy and content from an engineer who also markets, so what gets built also gets seen. Based in Lebanon, working worldwide.",
    includes: ["Paid ads", "Growth strategy", "Content"],
    intro:
      "A product nobody finds is a product nobody uses. I plan and run the marketing around what I build, with the same approach I use for systems: measure, find the bottleneck, fix it.",
    outcomes: [
      "A clear strategy: who you're for, where they are, and what to say to them.",
      "Paid campaigns set up with proper tracking, so you know what each result cost.",
      "Content that is consistent with your brand and actually gets published.",
    ],
    proof: "marketing",
  },
  {
    slug: "support",
    word: "support",
    pronunciation: "/səˈpɔːt/ · v.",
    tagline: "keeping it running.",
    title: "Website support & maintenance",
    metaDescription:
      "Client onboarding, website maintenance and troubleshooting to keep your site or system fast, secure and online after launch.",
    includes: ["Client onboarding", "Website maintenance", "Troubleshooting"],
    intro:
      "Launch is the start, not the finish. Several of my systems are still in production; I keep them updated, fix what breaks, and train the people who use them.",
    outcomes: [
      "Updates, backups and security patches handled for you.",
      "A real person to call when something breaks, who knows the system.",
      "Your team onboarded so they can use the system with confidence.",
    ],
    proof: "all",
  },
  {
    slug: "growth",
    word: "grow",
    pronunciation: "/ɡrəʊ/ · v.",
    tagline: "turning an audience into a community.",
    title: "Social media growth",
    metaDescription:
      "Social strategy, content creation and community management to turn followers into a community around your brand.",
    includes: ["Social strategy", "Content creation", "Community management"],
    intro:
      "Followers are a number; a community is an asset. I build social presence as a system: content pillars, a consistent visual identity, and a rhythm you can keep up.",
    outcomes: [
      "A content system with pillars, templates and a posting rhythm.",
      "A consistent visual identity across every post and highlight.",
      "Community management that turns comments and DMs into relationships.",
    ],
    proof: "marketing",
  },
];

export const processSteps = [
  {
    title: "Discovery call",
    body: "A paid consultation at $25/hour to understand what you're building, who it's for and what success looks like.",
  },
  {
    title: "Proposal",
    body: "A written scope with milestones, timeline and price, agreed before any work starts.",
  },
  {
    title: "Build",
    body: "Regular working demos while I build. You see progress every week, not just at the end.",
  },
  {
    title: "Launch & grow",
    body: "Go live, then support, marketing and growth, as much or as little as you need.",
  },
];

export const budgetRanges = ["$120–$500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "Not sure yet"];

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
    q: "What services do you offer?",
    a: "Four, which can be combined: engineering (web apps, e-commerce, management systems), marketing (paid ads, growth strategy, content), support (onboarding, maintenance, troubleshooting) and growth (social strategy, content creation, community management).",
  },
  {
    q: "How much does a project cost?",
    a: "Projects start from $120 for small jobs like fixes, landing pages or a content package. Larger systems are quoted after a discovery call (billed at $25/hour), with the price agreed in the proposal.",
  },
  {
    q: "How quickly will you reply to an inquiry?",
    a: `Within ${responseTime}, by email, Instagram DM or WhatsApp, whichever you used to reach me.`,
  },
  {
    q: "Do you work remotely and across time zones?",
    a: "Yes. I'm based in Lebanon (UTC+2/+3) and work remotely with clients in other countries, and I plan overlap hours with your team.",
  },
  {
    q: "Can you both build and market my product?",
    a: "Yes, that's the point of se.hadi. The same person who builds your system can market it, keep it running and grow its audience, so nothing gets lost between agencies.",
  },
  {
    q: "Do you support the system after launch?",
    a: "Yes. Several of my systems are still in production, and I offer ongoing maintenance, fixes and improvements.",
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
  instagram: "https://instagram.com/se.hadimoustafa",
  instagramHandle: "@se.hadimoustafa",
  instagramDM: "https://ig.me/m/se.hadimoustafa",
  /** TEMPORARY number — will be replaced with a dedicated business line. */
  whatsapp: "https://wa.me/96181277281",
  github: "https://github.com/hadi-moustafa",
  linkedin: "https://linkedin.com/in/hadi-moustafa-3a30b3363",
  phone: "+961 81 277 281",
};
