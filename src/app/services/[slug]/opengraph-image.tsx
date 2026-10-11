import { services } from "@/lib/content";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "A service from se.hadi, Hadi Moustafa in Lebanon";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug)!;
  return ogCard({
    eyebrow: s.slug === "billing-system" ? "Main offer · Lebanon" : "Service · Lebanon",
    title: s.title,
    subtitle: s.forWho,
  });
}
