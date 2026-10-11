import type { MetadataRoute } from "next";
import { caseStudies, engineeringProjects, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

// /ar is noindex until the Arabic copy is reviewed, and /thank-you is always noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1),
    ...services.map((s) => page(`/services/${s.slug}`, s.slug === "billing-system" ? 0.95 : 0.85)),
    ...caseStudies.filter((c) => !c.placeholder).map((c) => page(`/work/${c.slug}`, 0.8)),
    page("/engineering", 0.5),
    ...engineeringProjects.map((p) => page(`/engineering/${p.slug}`, 0.5)),
    page("/privacy", 0.2, "yearly"),
  ];
}
