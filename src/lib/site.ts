import { contact, services } from "./content";

export const SITE_URL = "https://hadimoustafa.dev";
export const SITE_NAME = "Hadi Moustafa";
export const BRAND = "se.hadi";
export const SITE_TAGLINE = "Software Engineer & Digital Marketer in Lebanon";
export const SITE_DESCRIPTION =
  "I build it, market it, fix it and grow it. Hadi Moustafa (se.hadi) is a software engineer and digital marketer in Lebanon: web apps, marketing, support and social growth.";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Formspree form IDs are public (they appear in the form action), so a default is safe.
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "maendpak";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/** Person + ProfessionalService (a LocalBusiness subtype) for the root layout. */
export function siteJsonLd() {
  const sameAs = [contact.instagram, contact.github, contact.linkedin];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        jobTitle: "Software Engineer & Digital Marketer",
        image: absoluteUrl("/images/hadi-moustafa-headshot.webp"),
        url: SITE_URL,
        email: `mailto:${contact.email}`,
        telephone: contact.phone.replace(/\s/g, ""),
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: BRAND,
        alternateName: `${SITE_NAME} — ${SITE_TAGLINE}`,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: absoluteUrl("/opengraph-image"),
        email: contact.email,
        telephone: contact.phone.replace(/\s/g, ""),
        founder: { "@id": `${SITE_URL}/#person` },
        logo: absoluteUrl("/icon.png"),
        priceRange: "$120+",
        address: { "@type": "PostalAddress", addressCountry: "LB" },
        areaServed: "Worldwide",
        knowsAbout: [
          "Software engineering",
          "Web development",
          "Digital marketing",
          "Social media growth",
          "Website maintenance",
          "LLM infrastructure",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.metaDescription,
              url: absoluteUrl(`/services/${s.slug}`),
            },
          })),
        },
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
