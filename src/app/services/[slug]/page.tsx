import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqs, flagships, secondaryProjects, services } from "@/lib/content";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import PageShell from "@/components/PageShell";
import CtaBox from "@/components/CtaBox";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";

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
  const title = `${s.title} in Lebanon`;
  return {
    title,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title, description: s.metaDescription, url: `/services/${s.slug}` },
    twitter: { title, description: s.metaDescription },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();

  const inProof = (cats: string[]) => s.proof === "all" || cats.includes(s.proof);
  const caseStudies = flagships.filter((p) => inProof(p.categories));
  const projects = secondaryProjects.filter((p) => inProof(p.categories));
  const others = services.filter((o) => o.slug !== s.slug);

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
          areaServed: "Worldwide",
          provider: { "@id": `${SITE_URL}/#business` },
          offers: { "@type": "Offer", priceCurrency: "USD", price: "120", description: "Projects from $120" },
        }}
      />
      <ServiceIcon slug={s.slug} className="mb-5 h-11 w-11 text-teal-ink" />
      <p className="eyebrow mb-3">
        {s.word} <span className="normal-case tracking-normal text-muted">{s.pronunciation}</span>
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">{s.title}</h1>
      <p className="mt-3 font-display text-xl font-semibold text-teal-ink">{s.tagline}</p>
      <p className="mt-5 text-lg">{s.intro}</p>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">What&apos;s included</h2>
        <ul className="flex flex-wrap gap-2">
          {s.includes.map((x) => (
            <li key={x} className="rounded-full border-2 border-teal/50 bg-surface px-4 py-2 font-semibold text-navy">
              {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">What you get</h2>
        <ul className="space-y-3">
          {s.outcomes.map((o) => (
            <li key={o} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {o}
            </li>
          ))}
        </ul>
      </section>

      {(caseStudies.length > 0 || projects.length > 0) && (
        <section className="mt-10">
          <h2 className="mb-4 font-display text-2xl font-bold text-navy">Proof</h2>
          <ul className="space-y-3">
            {caseStudies.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="block rounded-xl border border-line bg-surface p-5 hover:border-teal-ink">
                  <span className="font-display font-semibold text-navy">{p.title}</span>
                  <span className="mt-1 block text-sm text-muted">Read the case study →</span>
                </Link>
              </li>
            ))}
            {projects.map((p) => (
              <li key={p.title} className="rounded-xl border border-line bg-surface p-5">
                <span className="font-display font-semibold text-navy">{p.title}</span>
                {p.badge && <span className="ml-2 text-xs font-semibold text-coral-ink">{p.badge}</span>}
                <p className="mt-1 text-sm">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl font-bold text-navy">How it works</h2>
        <p>
          A free discovery call, a written proposal, weekly progress while I work, then launch and
          ongoing support. Projects start from $120.{" "}
          <Link href="/#process" className="font-semibold text-teal-ink underline underline-offset-4">
            See the full process
          </Link>
          .
        </p>
        <details className="mt-6 border-y border-line">
          <summary className="flex min-h-14 cursor-pointer items-center font-display font-semibold text-navy">
            {faqs[1].q}
          </summary>
          <p className="pb-5">{faqs[1].a}</p>
        </details>
      </section>

      <CtaBox title={`Let's talk about ${s.title.toLowerCase()}`} />

      <nav aria-label="Other services">
        <h2 className="eyebrow mb-4">other services</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="flex min-h-14 items-center gap-3 rounded-xl border border-line bg-surface p-4 hover:border-teal-ink">
              <ServiceIcon slug={o.slug} className="h-6 w-6 shrink-0 text-teal-ink" />
              <span className="font-display font-semibold text-navy">{o.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </PageShell>
  );
}
