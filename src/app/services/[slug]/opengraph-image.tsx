import { services } from "@/lib/content";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "A service by Hadi Moustafa (se.hadi)";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug)!;
  return ogCard({
    eyebrow: `Service · ${s.word}`,
    title: s.title,
    subtitle: `${s.tagline} ${s.includes.join(" · ")}.`,
  });
}
