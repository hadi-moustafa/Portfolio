import { caseStudies } from "@/lib/content";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Case study by Hadi Moustafa (se.hadi)";
export const size = ogSize;
export const contentType = "image/png";

const studies = caseStudies.filter((c) => !c.placeholder);

export function generateStaticParams() {
  return studies.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = studies.find((f) => f.slug === slug)!;
  return ogCard({
    eyebrow: `Case study · ${p.label}`,
    title: ((t) => t[0].toUpperCase() + t.slice(1))(p.title.split(": ")[1] ?? p.title),
    subtitle: p.stats.map((s) => `${s.value} ${s.label}`).join(" · "),
  });
}
