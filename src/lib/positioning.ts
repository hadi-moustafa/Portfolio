import { ph } from "./placeholder";

/**
 * Positioning: the single source of truth for who the site is for and what it sells.
 * Change the niche here and the hero, metadata, OG image and JSON-LD follow.
 *
 * Hero headline options (pick one by setting `headline` below):
 *   1. "Stop chasing payments on Excel and paper."
 *   2. "Billing and collections software for local ISPs and subscription businesses."
 *   3. "Websites and systems that bring you customers, built, run and marketed by one person."  ← chosen 2026-10-11
 */
export const positioning = {
  /** Primary offer. ISP.NET is the proof. */
  offerName: "Billing & collections system",
  niche:
    "Subscriber billing and collections software for local internet providers and other subscription businesses (generators, water, cable, gyms, schools), replacing Excel and paper.",
  /** Secondary offer; other services are add-ons. */
  secondaryOffer: "Website + marketing launch for small businesses",

  /** `highlight` must appear verbatim in `headline`; it renders in teal. */
  headline: "Websites and systems that bring you customers, built, run and marketed by one person.",
  highlight: "bring you customers",
  subheadline:
    "For local internet providers, subscription businesses and small businesses in Lebanon: billing systems that get you paid on time, and websites and ads that turn attention into customers.",

  primaryCta: "Chat on WhatsApp",
  secondaryCta: "See my work",
  trustRow: ["Free 20-minute call", "Fixed price in writing", "Reply within 24 hours"],

  /** Hero availability badge. Leave `taking` as a placeholder to show plain "Available for projects". */
  availability: {
    taking: ph("N new projects"),
    month: ph("month"),
  },

  credibility: "Hadi Moustafa, software engineer and digital marketer, Lebanon",

  /** Footer + OG brand line (no longer the hero headline). */
  tagline: "I build it. I market it. I fix it. I grow it.",
} as const;

/** Prefilled WhatsApp message (the [my business] part is for the visitor to fill in). */
export const whatsappPrefill = "Hi Hadi, I saw your website and I'd like to talk about [my business]";
