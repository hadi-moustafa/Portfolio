import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import PageShell from "@/components/PageShell";
import CtaBox from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import AfricaClientStudy from "@/components/work/AfricaClientStudy";
import IspNetStudy from "@/components/work/IspNetStudy";
import MarketingStudy from "@/components/work/MarketingStudy";
import MelhemAutoStudy from "@/components/work/MelhemAutoStudy";
import MondayRitualStudy from "@/components/work/MondayRitualStudy";
import ReachMilestoneStudy from "@/components/work/ReachMilestoneStudy";
import TechStoreStudy from "@/components/work/TechStoreStudy";
import ZackStudy from "@/components/work/ZackStudy";

export const dynamicParams = false;

const studies = caseStudies.filter((c) => !c.placeholder);

const bodies: Record<string, { Body: () => React.ReactNode; cta: string; ctaBody?: string }> = {
  "isp-net": { Body: IspNetStudy, cta: "Run a subscription business? Let's replace your Excel sheet." },
  "zack-production": { Body: ZackStudy, cta: "Want a website you can run yourself?" },
  "africa-client-campaign": { Body: AfricaClientStudy, cta: "Want customers messaging your business?" },
  "melhem-auto-service": { Body: MelhemAutoStudy, cta: "Want your posts working this hard for your shop?" },
  "hadi-tech-store": { Body: TechStoreStudy, cta: "Want more people visiting your page?" },
  "meta-tiktok-ad-campaign": { Body: MarketingStudy, cta: "Want to test your own ads, honestly reported?" },
  "reach-milestone": { Body: ReachMilestoneStudy, cta: "Want your brand in front of more people?" },
  "monday-ritual": { Body: MondayRitualStudy, cta: "Want content like this for your brand?" },
};

export function generateStaticParams() {
  return studies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = studies.find((s) => s.slug === slug);
  if (!p) return {};
  const title = `${p.name} case study`;
  return {
    title,
    description: p.metaDescription,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.metaDescription, url: `/work/${p.slug}`, type: "article" },
    twitter: { title, description: p.metaDescription },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const p = studies.find((s) => s.slug === slug);
  const entry = bodies[slug];
  if (!p || !entry) notFound();
  const { Body } = entry;
  const others = studies.filter((s) => s.slug !== p.slug);

  return (
    <PageShell wide crumbs={[{ name: "Work", path: "/#work" }, { name: p.name, path: `/work/${p.slug}` }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.title,
          description: p.metaDescription,
          url: absoluteUrl(`/work/${p.slug}`),
          image: absoluteUrl(p.image.src),
          author: { "@id": `${SITE_URL}/#person` },
          inLanguage: "en",
        }}
      />
      <article>
        <Body />
      </article>

      <div className="max-w-3xl">
        <CtaBox title={entry.cta} body={entry.ctaBody} />
      </div>

      <nav aria-label="More case studies">
        <h2 className="eyebrow mb-4">More case studies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/work/${o.slug}`} className="rounded-xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-teal-ink">
              <div className="font-display font-semibold text-navy">{o.title}</div>
              <div className="mt-1 line-clamp-2 text-[0.95rem]">{o.description}</div>
            </Link>
          ))}
        </div>
      </nav>
    </PageShell>
  );
}
