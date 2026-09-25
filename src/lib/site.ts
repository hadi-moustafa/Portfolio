import { contact } from "./content";

export const SITE_URL = "https://hadimoustafa.dev";
export const SITE_NAME = "Hadi Moustafa";
export const SITE_TAGLINE = "Backend Engineer";
export const SITE_DESCRIPTION =
  "Freelance backend engineer building systems that hold under load — public infrastructure, production business systems, and AI/LLM tooling.";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Formspree form IDs are public (they appear in the form action), so a default is safe.
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "maendpak";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/** Person + ProfessionalService (a LocalBusiness subtype) for the root layout. */
export function siteJsonLd() {
  const sameAs = [contact.github, contact.linkedin];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        jobTitle: "Backend Engineer",
        url: SITE_URL,
        email: `mailto:${contact.email}`,
        telephone: contact.phone.replace(/\s/g, ""),
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: `${SITE_NAME} — Backend Engineering`,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: absoluteUrl("/opengraph-image"),
        email: contact.email,
        telephone: contact.phone.replace(/\s/g, ""),
        founder: { "@id": `${SITE_URL}/#person` },
        address: { "@type": "PostalAddress", addressCountry: "LB" },
        areaServed: "Worldwide",
        knowsAbout: ["Backend engineering", "LLM infrastructure", "Next.js", "PostgreSQL", "Go"],
        sameAs,
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
