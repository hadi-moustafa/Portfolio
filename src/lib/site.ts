import { contact, services } from "./content";
import { positioning } from "./positioning";

export const SITE_URL = "https://hadimoustafa.dev";
export const SITE_NAME = "Hadi Moustafa";
export const BRAND = "se.hadi";
export const SITE_TAGLINE = "Web Developer & Digital Marketer in Lebanon";
export const SITE_DESCRIPTION =
  "Websites and billing systems that bring you customers, built, run and marketed by one person. Hadi Moustafa (se.hadi), web developer and digital marketer in Lebanon. Free 20-minute call.";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        address: { "@type": "PostalAddress", addressCountry: "LB" },
        image: absoluteUrl("/images/hadi-headshot.webp"),
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
        address: { "@type": "PostalAddress", addressCountry: "LB" },
        areaServed: { "@type": "Country", name: "Lebanon" },
        slogan: positioning.tagline,
        knowsAbout: [
          "Billing and collections software",
          "Subscription billing for internet providers",
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
