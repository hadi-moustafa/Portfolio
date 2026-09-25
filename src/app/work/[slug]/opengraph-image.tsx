import { flagships } from "@/lib/content";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Case study by Hadi Moustafa";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return flagships.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = flagships.find((f) => f.slug === slug)!;
  return ogCard({ eyebrow: `CASE STUDY · ${p.tag.split(" — ")[1]}`, title: p.title, subtitle: p.description.split(" — ")[0] });
}
