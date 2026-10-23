import { ph } from "./placeholder";

export { contact, navLinks, responseTime } from "./links";
import { contact } from "./links";



/** Max 3 items; education is a single line below it (details in the résumé). */
export const timeline = [
  { date: "FEB 2026 — PRESENT", role: "Freelance software engineer & digital marketer", org: "se.hadi, Lebanon" },
  { date: "JAN 2026 — FEB 2026", role: "Software engineering intern, team lead", org: "TechTalks · LFM" },
];
export const education = "B.Sc. Computer Science (Islamic University of Lebanon, 2025) · M.Sc. Computer & Communication Engineering in progress";

/* ───────────────────────── Work ───────────────────────── */

export type Category = "systems" | "websites" | "marketing";

export const categoryLabels: Record<Category, string> = {
  systems: "Business systems",
  websites: "Websites",
  marketing: "Marketing",
};

export type CaseStudy = {
  slug: string;
  categories: Category[];
  /** Category label on the card, e.g. "BILLING SYSTEM". */
  label: string;
  /** Short name for breadcrumbs, footer and links. */
  name: string;
  title: string;
  description: string;
  /** 16:9 thumbnail. */
  image: { src: string; alt: string };
  /** Max 2, plain language. */
  stats: { value: string; label: string }[];
  /** Max 3, client-friendly (no jargon). */
  tags: string[];
  github?: string;
  live?: string;
  /** The project's Instagram post on @se.hadimoustafa. */
  instagram?: string;
  metaDescription: string;
  featured?: boolean;
  /** Not a real project yet: a dev-only slot that never renders in production. */
  placeholder?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "isp-net",
    featured: true,
    categories: ["systems"],
    label: "BILLING & COLLECTIONS SYSTEM",
    name: "ISP.NET",
    title: "ISP.NET: billing and collections for a local internet provider",
    description:
      "A private billing and collections system that replaced a local ISP's Excel sheets and paper. Every subscriber, payment and reminder in one place, on the owner's phone.",
    image: {
      src: "/images/isp/card.webp",
      alt: "Three phone screens from the ISP.NET app: the subscriber list with Pay buttons, the monthly dashboard and the WhatsApp message editor",
    },
    stats: [
      { value: "236", label: "subscribers managed" },
      { value: "71%", label: "of this month's billing settled" },
    ],
    tags: ["Billing", "Collections", "WhatsApp reminders"],
    instagram: "https://www.instagram.com/p/DeT5y8Rja4j/",
    metaDescription:
      "Case study: ISP.NET, billing and collections software that moved a local internet provider in Lebanon off Excel and paper. 236 subscribers, one-tap WhatsApp reminders.",
  },
  {
    slug: "zack-production",
    categories: ["websites"],
    label: "WEBSITE + ADMIN PANEL",
    name: "Zack Production",
    title: "Zack Production: a website the studio runs itself",
    description:
      "A cinematic website for a Beirut photography and film studio, with an admin panel to update photos, pricing, clients and page text without a developer.",
    image: {
      src: "/images/zack/desktop-hero.webp",
      alt: "The Zack Production website home page on desktop: a full-width photo with the studio name and a contact button",
    },
    stats: [
      { value: "3 weeks", label: "from start to launch" },
    ],
    tags: ["Website", "Admin panel", "Photography studio"],
    live: "https://www.zackproduction.com",
    github: "https://github.com/hadi-moustafa/Zack_Production",
    metaDescription:
      "Case study: a website and admin panel for Zack Production, a photography and film studio in Beirut. The studio updates photos, pricing and text itself.",
  },
  {
    slug: "africa-client-campaign",
    categories: ["marketing"],
    label: "CLIENT CAMPAIGN · MESSAGES",
    name: "Africa client campaign",
    title: "A client in Africa: 821 customer conversations for $66.31",
    description:
      "Two ad campaigns for a business in Africa, built to get new customers messaging the business. About $0.08 per conversation.",
    image: {
      src: "/images/africa-client/card.webp",
      alt: "Results: 821 new customer conversations",
    },
    stats: [
      { value: "821", label: "customer conversations" },
      { value: "$0.06", label: "per conversation, best campaign" },
    ],
    tags: ["Paid ads", "Messages", "Two campaigns"],
    metaDescription:
      "Case study: two ad campaigns for a business in Africa. 821 customer conversations for $66.31 in total ad spend, from $0.06 per conversation.",
  },
  {
    slug: "hadi-tech-store",
    categories: ["marketing"],
    label: "CLIENT CAMPAIGN · PROFILE VISITS",
    name: "Tech store campaign",
    title: "Tech store: 98 Instagram profile visits for $6.83",
    description:
      "A Meta campaign for Hadi's technology store, built to send new people to the store's Instagram profile. Reported straight from Ads Manager.",
    image: {
      src: "/images/hadi-tech-store/card.webp",
      alt: "Campaign results: 98 Instagram profile visits from a single ad campaign, 9,659 people reached, 10,241 impressions, $6.83 spent",
    },
    stats: [
      { value: "98", label: "Instagram profile visits" },
      { value: "$0.07", label: "per profile visit" },
    ],
    tags: ["Instagram & Facebook ads", "Profile visits", "Technology store"],
    instagram: "https://www.instagram.com/p/DebkLSZtoiF/",
    metaDescription:
      "Case study: a Meta ads campaign for a technology store. 98 Instagram profile visits for $6.83 (about $0.07 each), 9,659 people reached, 10,241 impressions.",
  },
  {
    slug: "meta-tiktok-ad-campaign",
    categories: ["marketing"],
    label: "TEST CAMPAIGN · PAID SOCIAL",
    name: "$68 test campaign",
    title: "Test campaign: what $68 of ads buys",
    description:
      "A small Meta + TikTok test for a fashion brand in Africa, run with @zeinabali_93. Objective: reach and engagement, not sales.",
    image: {
      src: "/images/marketing/card.webp",
      alt: "TikTok and Meta Ads Manager results: $68.35 spent, 88,701 impressions, 218 profile visits at $0.13 and 6,092 engagements at $0.01",
    },
    stats: [
      { value: "218", label: "profile visits at $0.13 each" },
      { value: "6,092", label: "engagements at about $0.01 each" },
    ],
    tags: ["Instagram & Facebook ads", "TikTok ads", "Test budget"],
    instagram: "https://www.instagram.com/p/DeT_KwAjWt3/",
    metaDescription:
      "A $68 Meta + TikTok test campaign, honestly reported: 218 profile visits at $0.13, 6,092 engagements at about $0.01 and 88,701 impressions.",
  },
  {
    slug: "reach-milestone",
    categories: ["marketing"],
    label: "MILESTONE · META INSIGHTS",
    name: "Reach milestone",
    title: "Milestone: 192,377 people reached in 15 days",
    description:
      "Over 15 days, the work I ran on Meta reached 192,377 people and was shown 248,309 times. Both totals come straight from Meta Insights.",
    image: {
      src: "/images/reach-milestone/card.webp",
      alt: "Milestone: we reached 192,377 people",
    },
    stats: [
      { value: "192,377", label: "people reached" },
      { value: "248,309", label: "impressions" },
    ],
    tags: ["Instagram & Facebook", "Reach", "Meta Insights"],
    metaDescription:
      "Milestone: 192,377 people reached and 248,309 impressions in 15 days, straight from Meta Insights. Social media and ads work by Hadi Moustafa (se.hadi).",
  },
  {
    slug: "monday-ritual",
    categories: ["marketing"],
    label: "CONTENT · INSTAGRAM CAROUSEL",
    name: "Monday ritual carousel",
    title: "Monday ritual: I plan my week in 5 minutes",
    description:
      "A five-slide Instagram carousel on planning the week with Claude, ending in a comment-to-DM offer: send \"MONDAY\" for the exact prompt.",
    image: {
      src: "/images/monday-ritual/card.webp",
      alt: "Carousel cover: I plan my week in 5 minutes. Every Monday I sit down with Claude and turn a messy week into a clear plan.",
    },
    stats: [],
    tags: ["Instagram content", "Carousel design", "Comment-to-DM"],
    metaDescription:
      "An Instagram carousel by se.hadi: how I plan my week in 5 minutes with Claude, the planned week, and a comment-to-DM offer for the exact planning prompt.",
  },
];

/** Developer-facing projects on /engineering (not part of the client pitch). */
export const engineeringProjects = [
  {
    slug: "governor",
    name: "Governor",
    title: "Governor: a hard spending cap for LLM calls",
    description:
      "An open-source Go gateway that sits between an app and OpenAI or Anthropic, and stops a request the moment it would cross a spend cap.",
    github: "https://github.com/hadi-moustafa/Governor",
    metaDescription:
      "Governor, an open-source Go LLM gateway with atomic spend caps, per-chunk metering and upstream cancellation. Benchmarks, tests and honest limits.",
  },
  {
    slug: "m2c",
    name: "M2C",
    title: "M2C: a municipality management platform (graduation project)",
    description:
      "My university graduation project: resident records, requests and internal workflows for a municipality, on Next.js and PostgreSQL.",
    github: "https://github.com/hadi-moustafa/Graduation-Project-M2C-Municipality-Managment-System",
    metaDescription:
      "M2C, a municipality management platform built as a university graduation project: resident records, requests and workflows on Next.js and PostgreSQL.",
  },
] as const;

/* ───────────────────────── ISP.NET numbers (from the dashboard, USD) ───────────────────────── */

export const ispNumbers = [
  { value: "236", label: "active subscribers" },
  { value: "166", label: "paid this month" },
  { value: "70", label: "not paid yet (25 overdue)" },
  { value: "$5,875", label: "billed this month" },
  { value: "$4,147", label: "collected (71% settled)" },
  { value: "$1,728", label: "left to collect ($619 overdue)" },
  { value: "49 · $1,228", label: "payments collected in the last 5 days" },
];

/* ───────────────────────── Problems ───────────────────────── */

export const problems = [
  {
    icon: "ledger",
    title: "You don't know who has paid and who hasn't.",
    body: "It lives in spreadsheets, on paper and in someone's memory, so every month starts with guesswork.",
    href: "/work/isp-net",
    link: "See the billing system",
  },
  {
    icon: "clock",
    title: "Collections take too long and customers slip through.",
    body: "Reminders go out late or not at all, and nobody follows up on the ones who didn't pay.",
    href: "/services/billing-system",
    link: "How collections work",
  },
  {
    icon: "megaphone",
    title: "Your website or ads bring attention but not customers.",
    body: "People see you, but there's no clear offer, no easy way to reach you and no tracking of what works.",
    href: "/services/marketing",
    link: "See the marketing work",
  },
] as const;

/* ───────────────────────── Services ───────────────────────── */

export type ServiceSlug = "billing-system" | "engineering" | "marketing" | "support" | "growth";

export type Service = {
  slug: ServiceSlug;
  /** Card/H1 title */
  title: string;
  /** The owner's problem in their own words (homepage card opener). */
  pain: string;
  /** The fix, in plain words (homepage card heading). */
  fix: string;
  /** <title> tag (keyword-targeted) */
  metaTitle: string;
  metaDescription: string;
  forWho: string;
  /** What they get (card shows the first 3). */
  includes: string[];
  timeline: string;
  priceFrom: string;
  intro: string;
  outcomes: string[];
  proof: { href: string; label: string };
};

export const services: Service[] = [
  {
    slug: "billing-system",
    title: "Billing & collections system",
    pain: "I chase payments in Excel or a notebook.",
    fix: "A billing & collections system",
    metaTitle: "Billing software for internet providers in Lebanon",
    metaDescription:
      "Subscriber billing and collections software for local ISPs and subscription businesses in Lebanon: who paid, who owes, one-tap WhatsApp reminders. Replaces Excel.",
    forWho:
      "Local internet providers and other subscription businesses: generators, water, cable, gyms and schools.",
    includes: [
      "Every subscriber and payment in one place, with who owes what",
      "One-tap WhatsApp reminders in Arabic, written for you",
      "A collector view that works offline in the field",
      "Monthly reports and Excel export",
      "A full activity log of every payment and change",
    ],
    timeline: "Typical timeline: 6–10 weeks",
    priceFrom: "From $1,500",
    intro:
      "If your billing lives in Excel, on paper or in a notebook, you're losing money you've already earned. I build a private, login-only system around how your business actually collects: subscribers, collectors, payments and reminders, in one place on your phone.",
    outcomes: [
      "Know at a glance how much of this month's billing is settled and who is overdue.",
      "Send payment reminders and confirmations on WhatsApp in one tap, in your customers' language.",
      "Give collectors a route list that keeps working in the field, even without internet.",
      "Keep a trail of every payment, so disputes are settled by the record, not by memory.",
    ],
    proof: { href: "/work/isp-net", label: "See ISP.NET" },
  },
  {
    slug: "engineering",
    title: "Websites & web apps",
    pain: "People can only find me on Instagram.",
    fix: "A website you can update yourself",
    metaTitle: "Website for small business in Lebanon",
    metaDescription:
      "Websites and web apps for small businesses in Lebanon, with an admin panel so you can update content yourself. Built by a web developer who also markets.",
    forWho: "Small businesses that need a website that brings in customers, and that they can update themselves.",
    includes: ["A fast, mobile-first website", "An admin panel to edit photos, prices and text", "Contact forms and WhatsApp buttons wired up", "Search basics and analytics set up"],
    timeline: "Typical timeline: 2–4 weeks",
    priceFrom: "From $500",
    intro:
      "Most small-business websites look fine and do nothing. I build sites around one job, getting you customers, with a clear offer, an easy way to contact you and an admin panel so you're never waiting on a developer to change a price.",
    outcomes: [
      "A site that loads fast on phones, where most of your visitors are.",
      "Content you can update yourself, without breaking anything.",
      "Code and accounts in your name: you own everything.",
    ],
    proof: { href: "/work/zack-production", label: "See Zack Production" },
  },
  {
    slug: "marketing",
    title: "Digital marketing",
    pain: "I post, but nobody visits or messages.",
    fix: "Ads that bring visits and messages",
    metaTitle: "Digital marketing in Lebanon",
    metaDescription:
      "Paid ads and campaign setup on Instagram, Facebook and TikTok for small businesses in Lebanon, with honest reporting on what each result cost.",
    forWho: "Businesses that get attention online but not enough messages, calls or sales.",
    includes: ["Instagram, Facebook and TikTok ads", "Audience and offer planning", "Tracking so you know what each result cost"],
    timeline: "First ads live within a week",
    priceFrom: "From $150 per month, plus your ad budget",
    intro:
      "A campaign is only as good as what it's measured against. I set a plain objective, run the ads, and report exactly what each result cost, including what didn't work.",
    outcomes: [
      "A clear objective and audience before any money is spent.",
      "Campaigns set up with tracking, so you know what each result cost.",
      "Plain-language reports straight from Ads Manager.",
    ],
    proof: { href: "/work/africa-client-campaign", label: "See 821 conversations for $66" },
  },
  {
    slug: "support",
    title: "Support & maintenance",
    pain: "My website or system needs fixing.",
    fix: "Support & maintenance",
    metaTitle: "Website support & maintenance in Lebanon",
    metaDescription:
      "Ongoing support for websites and business systems in Lebanon: updates, fixes, backups and training for your team, from the person who built it.",
    forWho: "Businesses with a website or system already running that need someone reliable to keep it that way.",
    includes: ["Updates, fixes and backups", "Training for your team", "A real person to message when something breaks"],
    timeline: "Monthly, with a reply within 24 hours",
    priceFrom: "From $50 per month",
    intro:
      "Launch is the start, not the finish. I keep what I ship updated, fix what breaks and train the people who use it.",
    outcomes: [
      "Updates, backups and security fixes handled for you.",
      "One person to message who already knows your system.",
      "Your team trained to use the system with confidence.",
    ],
    proof: { href: "/work/isp-net", label: "See a system I support" },
  },
  {
    slug: "growth",
    title: "Social media growth",
    pain: "I don't have time for social media.",
    fix: "Social media, handled for you",
    metaTitle: "Social media management in Lebanon",
    metaDescription:
      "Social media strategy, content and community management for small businesses in Lebanon, so your posts turn followers into customers.",
    forWho: "Businesses that post but don't see followers turn into messages or customers.",
    includes: ["Content plan and post templates", "A consistent visual identity", "Comments and DMs handled"],
    timeline: "First content plan within 2 weeks, then monthly",
    priceFrom: "From $250 per month",
    intro:
      "Followers are a number; customers are the point. I set up a content system you can keep up with: what to post, how it looks and how to answer the people who reply.",
    outcomes: [
      "A content plan with templates and a rhythm you can keep.",
      "One visual identity across every post and highlight.",
      "Comments and DMs answered, so interest turns into conversations.",
    ],
    proof: { href: "/work/reach-milestone", label: "See 192,377 people reached" },
  },
];

/** Homepage order: most common problem first. */
export const servicesByProblem: ServiceSlug[] = ["billing-system", "engineering", "marketing", "growth", "support"];

/** Three tiers: affordable, mid-range, and custom (no price). Hadi can edit these freely. */
export const packages: { name: string; price: string; summary: string; includes: string[] }[] = [
  {
    name: "Starter",
    price: "$650",
    summary: "For a small business getting online properly for the first time.",
    includes: [
      "A website you can update yourself (up to 3 pages)",
      "WhatsApp button and contact form wired up",
      "Instagram profile tidied up: bio, highlights and link",
      "1 month of ads management (ad budget not included)",
      "1 month of support after launch",
    ],
  },
  {
    name: "Growth",
    price: "$1,100",
    summary: "For a business ready to bring in customers every month.",
    includes: [
      "A website with an admin panel (up to 6 pages)",
      "2 months of ads management (ad budget not included)",
      "1 month of social media: content plan, post templates and a consistent look",
      "Analytics set up, with a results report straight from Ads Manager",
      "3 months of support after launch",
    ],
  },
  {
    name: "Custom",
    price: "Priced per project",
    summary: "For a business that needs a system built around how it works.",
    includes: [
      "A billing & collections system, or another system built for your business",
      "Website, ads and social media together",
      "Ongoing monthly support",
      "A fixed price and milestones in writing, after a free 20-minute call",
    ],
  },
];
export const paymentTerms = "Clients in Lebanon pay by Whish Money. Clients abroad: ask me for payment options.";
export const ownership = "You own the code and accounts.";

export const processSteps = [
  { title: "Free 20-minute call", body: "Tell me what's going wrong. I'll ask questions and tell you honestly whether I can help." },
  { title: "Written proposal", body: "A fixed price and milestones in writing, agreed before any work starts." },
  { title: "Build with weekly demos", body: "You see working progress every week, so changes happen early, not at the end." },
  { title: "Launch & support", body: "We go live together, your team gets trained, and I stay on to fix and improve." },
];



export const faqs = [
  {
    q: "How long does a project take?",
    a: `It depends on the scope, and you get a timeline in the written proposal before any work starts. For reference, the Zack Production website took about three weeks and the ISP.NET billing system about ten. Typical timelines: a website 2–4 weeks, a billing system 6–10 weeks, and ads go live within a week.`,
  },
  {
    q: "How do I pay, and is there a deposit?",
    a: `You pay a fixed price: a deposit before work starts, then the rest at the milestones agreed in the proposal. Clients in Lebanon pay by Whish Money to ${contact.phone}. If you're abroad, message me and we'll agree on a payment method that works for you.`,
  },
  {
    q: "Who owns the code and accounts?",
    a: "You do. The code, domain, hosting and ad accounts are set up in your name, and you get everything at handover.",
  },
  {
    q: "What if I don't like the result? Can I get a refund?",
    a: "Communication comes first. Before any work starts, we agree in writing on exactly what you need, and I ask every question I need answered. Each outcome includes one revision, once we've both confirmed a revision is actually needed. There are no refunds on delivered work: it was done knowing everything we needed to know, based on what we agreed together.",
  },
  {
    q: "Do you work with small budgets?",
    a: "Yes. Tell me your budget on the free call and I'll tell you honestly what it can and can't buy, and which part to do first.",
  },
  {
    q: "Do you work in Arabic?",
    a: "Yes. I work in Arabic and English, and systems like ISP.NET send customer messages in Arabic.",
  },
  {
    q: "What happens after launch?",
    a: "I train your team, fix anything that comes up, and can keep supporting and improving the system or campaign every month.",
  },
  {
    q: "Do you work with clients outside Lebanon?",
    a: "Yes. I'm in Lebanon (UTC+2/+3) and work remotely, with overlap hours planned around your time zone.",
  },
];

/**
 * Real client reviews only. Never invent these. Entries made with ph() are
 * dev-only slots and never render in production.
 * `short`: show only first name + business type.
 */
export const testimonials: {
  quote: string;
  name: string;
  role?: string;
  business: string;
  photo?: string;
  short?: boolean;
}[] = [
  { quote: ph("client quote (ISP.NET)"), name: ph("name"), role: ph("role"), business: ph("business") },
  { quote: ph("client quote (Zack Production)"), name: ph("name"), role: ph("role"), business: ph("business") },
  { quote: ph("client quote (marketing)"), name: ph("first name"), business: ph("business type"), short: true },
];

/** Slim trust strip under the hero. Real, public-safe client descriptions only. */
export const clientsLine = ["Zack Production, Beirut", "A local internet provider, Lebanon", "A fashion brand in Africa"];
export const trustQuote = ph("one-line client testimonial for the trust strip");
