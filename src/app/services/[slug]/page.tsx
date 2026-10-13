import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqs, ownership, services } from "@/lib/content";
import { txt } from "@/lib/placeholder";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import PageShell from "@/components/PageShell";
import CtaBox from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { T, textLink, WhatsAppButton } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}` },
    twitter: { title: s.metaTitle, description: s.metaDescription },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);
  const price = txt(s.priceFrom);
  const priceNumber = price?.match(/\$([\d,]+)/)?.[1]?.replace(/,/g, "");
  const faqItems = faqs.filter((f) => /long|pay|own/i.test(f.q));

  return (
    <PageShell crumbs={[{ name: "Services", path: "/#services" }, { name: s.title, path: `/services/${s.slug}` }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.metaDescription,
          url: absoluteUrl(`/services/${s.slug}`),
          serviceType: s.title,
          areaServed: { "@type": "Country", name: "Lebanon" },
          provider: { "@id": `${SITE_URL}/#business` },
          ...(priceNumber && !price?.includes("PLACEHOLDER")
            ? { offers: { "@type": "Offer", priceCurrency: "USD", price: priceNumber, description: price } }
            : {}),
        }}
      />
      <ServiceIcon slug={s.slug} className="mb-5 h-11 w-11 text-teal-ink" />
      <p className="eyebrow mb-3">Service · Lebanon</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">{s.metaTitle}</h1>
      <p className="mt-5 text-lg">{s.intro}</p>
      <p className="mt-4">
        <strong className="text-navy">Who it&apos;s for:</strong> {s.forWho}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <WhatsAppButton />
        <Link href={s.proof.href} className={textLink} data-track="case_study">
          {s.proof.label}&nbsp;→
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">What you get</h2>
        <ul className="space-y-3">
          {s.includes.map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">What changes for you</h2>
        <ul className="space-y-3">
          {s.outcomes.map((o) => (
            <li key={o} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">How it works</h2>
        <p>
          A free 20-minute call, then a written proposal with a fixed price and milestones, weekly demos while I build, then
          launch and support. {ownership}{" "}
          <Link href="/#process" className="font-semibold text-teal-ink underline underline-offset-4">
            See the full process
          </Link>
          .
        </p>
        <div className="mt-4 grid gap-1">
          <T as="p">{s.timeline}</T>
          <T as="p" className="font-semibold text-navy">{s.priceFrom}</T>
        </div>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {faqItems.map((f) => (
            <details key={f.q}>
              <summary className="flex min-h-14 cursor-pointer items-center font-display font-semibold text-navy">{f.q}</summary>
              <T as="p" className="pb-5">{f.a}</T>
            </details>
          ))}
        </div>
      </section>

      <CtaBox title={s.slug === "billing-system" ? "Run a subscription business? Let's replace your Excel sheet." : `Let's talk about ${s.title.toLowerCase()}`} />

      <nav aria-label="Other services">
        <h2 className="eyebrow mb-4">Other services</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="flex min-h-14 items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-colors duration-200 hover:border-teal-ink">
              <ServiceIcon slug={o.slug} className="h-6 w-6 shrink-0 text-teal-ink" />
              <span className="font-display font-semibold text-navy">{o.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </PageShell>
  );
}
