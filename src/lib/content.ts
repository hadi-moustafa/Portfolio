export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

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

/** Drives the "by the numbers" strip. "completed" = delivered, e.g. a finished campaign. */
export type ProjectStatus = "in-production" | "completed" | "in-development" | "paused";

export type Flagship = {
  categories: Category[];
  status: ProjectStatus;
  /** Where the client/users are. Only set when known; counted in the stats. */
  country?: string;
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
  /** Real, client-reported numbers only. The block renders only when set. */
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
  /** Extra detail section on the case-study page, e.g. "What's inside". */
  highlights?: { title: string; items: { title: string; body: string }[] };
  ctaTitle?: string;
};

export const flagships: Flagship[] = [
  {
    slug: "isp-net",
    status: "in-production",
    country: "Lebanon",
    categories: ["engineering", "fullstack"],
    metaDescription:
      "Case study: ISP.NET, a secure management platform that moved a local internet provider off Excel and paper, with 75% faster collection.",
    tag: "BUSINESS SYSTEMS",
    title: "ISP.NET — ISP Management Platform",
    description:
      "A secure management platform for a local internet provider that ran on Excel and paper. Finance, collections, products, technicians and WhatsApp reminders, all in one system.",
    stack: ["React", "TypeScript", "Supabase", "Offline-first PWA"],
    caseStudy: {
      problem:
        "A local internet provider wrote down every collection in Excel sheets, and sometimes on pen and paper. There was no single place to see the month's billing, who had paid and who still owed.",
      approach: [
        "Finance: income and reports in one place.",
        "Collections: every subscriber's payment tracked, with a Pay button on every row.",
        "Products: stock, equipment and sales.",
        "Technicians: field jobs assigned by location.",
        "WhatsApp automation: debt warnings and payment confirmations sent for the owner, in the customer's own language.",
        "Security first: protected access because it holds a business's money, and every action logged in a plain-English history.",
      ],
      result:
        "The business now runs on one system instead of spreadsheets and notebooks. It was built for one business, not the public, so there is no public URL or live demo.",
    },
    metrics: [
      { value: "90%", label: "better money management" },
      { value: "75%", label: "faster collection" },
    ],
    metricsNote: "Compared with Excel sheets and pen and paper.",
    highlights: {
      title: "What's inside",
      items: [
        {
          title: "The whole month at a glance",
          body: "How much of this month's billing is settled, paid vs. unpaid subscribers with overdue flagged, what was collected today and over the last 5 days, and product sales one tap away.",
        },
        {
          title: "Every subscriber, one tap from paid",
          body: "The full list in one place, searchable by name and filterable by payment, debt or expiry. The Pay button on each row logs the payment.",
        },
        {
          title: "Reminders that send themselves",
          body: "WhatsApp debt warnings and payment confirmations with fully customisable wording and a live preview. Names, amounts and dates fill in automatically.",
        },
        {
          title: "Every payment leaves a trail",
          body: "A monthly log you can filter by company, service, owner, collector and status, then export to Excel, plus an activity log of every action.",
        },
        {
          title: "And a lot more under the hood",
          body: "Tasks, collectors, technicians, owners, addresses, products and sales, Excel import with duplicate checks, a financial report, an offline field view and collection feedback.",
        },
      ],
    },
    ctaTitle: "Need a system for your business?",
  },
  {
    slug: "meta-tiktok-ad-campaign",
    status: "completed",
    categories: ["marketing"],
    metaDescription:
      "Case study: what $68 of Meta and TikTok ads got. 88,701 impressions at $0.77 per 1,000, and 6,092 post engagements at $0.01 each.",
    tag: "PAID SOCIAL",
    title: "$68 ad campaign — Meta + TikTok",
    description:
      "What $68 of ads actually got: 88,701 impressions across Instagram, Facebook and TikTok at $0.77 per 1,000. For an anonymous client, with help from @zeinabali_93, October 2026.",
    stack: ["Meta Ads", "TikTok Ads", "Instagram", "Facebook"],
    caseStudy: {
      problem:
        "An anonymous client had two goals and one tight budget: get engagement on the posts, and send people to the profile, across Instagram, Facebook and TikTok.",
      approach: [
        "Worked on the ads together with @zeinabali_93.",
        "Split the Meta budget into two ad sets, each optimised for one goal: post engagement ($19.91) and profile visits ($28.44).",
        "Ran a $20 TikTok campaign alongside it from Oct 4 to Oct 10, 2026.",
        "Reported every number straight from TikTok Ads Manager and Meta Ads Manager.",
      ],
      result:
        "$68.35 in total ad spend bought 88,701 impressions. On Meta, 60,906 people were reached and 6,092 post engagements cost $0.01 each. On TikTok, $20 bought 14,235 impressions in one week.",
    },
    metrics: [
      { value: "88,701", label: "impressions" },
      { value: "$68.35", label: "total ad spend" },
      { value: "$0.77", label: "per 1,000 impressions" },
      { value: "6,092", label: "post engagements" },
      { value: "60,906", label: "people reached on Meta" },
      { value: "218", label: "profile visits" },
    ],
    metricsNote: "Numbers from TikTok Ads Manager and Meta Ads Manager, October 2026.",
    highlights: {
      title: "The breakdown",
      items: [
        {
          title: "TikTok ads: $20.00",
          body: "14,235 impressions in one week (Oct 4–10, 2026), with the peak on Oct 8.",
        },
        {
          title: "Meta, engagement ad set: $19.91",
          body: "53,513 people reached and 3,743 post engagements, at $0.01 each.",
        },
        {
          title: "Meta, profile-visits ad set: $28.44",
          body: "8,119 people reached and 218 profile visits, at $0.13 each.",
        },
        {
          title: "Meta overall: $48.35",
          body: "74,466 impressions across Instagram and Facebook, at an average frequency of 1.22.",
        },
      ],
    },
    ctaTitle: "Want results like these for your brand?",
  },
  {
    slug: "governor",
    status: "in-development",
    categories: ["engineering"],
    metaDescription:
      "How I built Governor, a lightweight Go LLM gateway that enforces hard spend caps with atomic budget checks and mid-stream cancellation.",
    tag: "LLM INFRASTRUCTURE",
    title: "Governor",
    description:
      "A lightweight LLM gateway, built in Go (learning Go as I go). Real-time cost visibility and hard spend caps — atomic budget checks before a request goes out, mid-stream cancellation the instant one is hit — without standing up LiteLLM/Helicone-style infrastructure.",
    stack: ["Go", "LLM Gateway", "Cost Enforcement"],
    github: "https://github.com/hadi-moustafa/Governor",
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
    status: "paused",
    categories: ["engineering", "fullstack"],
    metaDescription:
      "Case study: M2C, a municipality management platform for resident records, requests and internal workflows, built on Next.js and PostgreSQL.",
    tag: "PUBLIC INFRASTRUCTURE",
    title: "M2C — Municipality Management Platform",
    description:
      "Resident records, requests, internal workflows — built to hold up under the unglamorous, high-stakes load public systems actually see.",
    stack: ["Next.js", "PostgreSQL", "REST"],
    github: "https://github.com/hadi-moustafa/Graduation-Project-M2C-Municipality-Managment-System",
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
];

export type SecondaryProject = {
  title: string;
  description: string;
  categories: Category[];
  status: ProjectStatus;
  country?: string;
  href?: string;
  badge?: string;
};

// Bench projects return once each has real photos and a case study.
export const secondaryProjects: SecondaryProject[] = [];

const allProjects = [...flagships, ...secondaryProjects];
const shipped = allProjects.filter((p) => p.status === "in-production" || p.status === "completed");
const countries = new Set(shipped.flatMap((p) => (p.country ? [p.country] : [])));
const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

/** Computed from the projects above, so it updates as projects are added. Zero/weak stats are hidden. */
export const stats = [
  { n: shipped.length, label: plural(shipped.length, "project shipped", "projects shipped"), min: 1 },
  {
    n: allProjects.filter((p) => p.status === "in-production").length,
    label: "in production now",
    min: 1,
  },
  { n: flagships.length, label: plural(flagships.length, "case study", "case studies"), min: 1 },
  { n: countries.size, label: "countries running my work", min: 2 },
]
  .filter((s) => s.n >= s.min)
  .map((s, i) => ({ num: String(s.n), label: s.label, accent: i % 2 === 0 }));

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
  /** Real starting price in USD. Until set, the page falls back to the site-wide "from $120". */
  price?: { from: number; per?: "month" };
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
      "Launch is the start, not the finish. I keep what I ship updated, fix what breaks, and train the people who use it.",
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
    a: "Yes. I offer ongoing maintenance, fixes and improvements for what I build, including systems already running in production.",
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
