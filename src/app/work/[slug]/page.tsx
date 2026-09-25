import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, flagships, services } from "@/lib/content";
import PageShell from "@/components/PageShell";
import CtaBox from "@/components/CtaBox";

export const dynamicParams = false;

export function generateStaticParams() {
  return flagships.map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return flagships.find((p) => p.slug === slug);
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title.split(" — ")[0]} case study`;
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
  const p = getProject(slug);
  if (!p) notFound();

  const others = flagships.filter((f) => f.slug !== p.slug);
  const related = services.filter((s) => s.proof === "all" || (p.categories as string[]).includes(s.proof));

  return (
    <PageShell crumbs={[{ name: "Work", path: "/#work" }, { name: p.title.split(" — ")[0], path: `/work/${p.slug}` }]}>
      <article>
        <p className="eyebrow mb-3">{p.tag}</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">{p.title}</h1>
        <p className="mt-5 text-lg">{p.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categories and tech stack">
          {p.categories.map((c) => (
            <li key={c} className="rounded-full bg-teal/15 px-2.5 py-0.5 text-xs font-semibold text-teal-ink">
              {categoryLabels[c]}
            </li>
          ))}
          {p.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {s}
            </li>
          ))}
        </ul>

        {p.image && (
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            priority
            className="mt-10 h-auto w-full rounded-xl border border-line"
          />
        )}

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-navy">The problem</h2>
            <p>{p.caseStudy.problem}</p>
          </section>
          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-navy">The approach</h2>
            <ul className="space-y-3">
              {p.caseStudy.approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
                  {a}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-navy">The result</h2>
            <p>{p.caseStudy.result}</p>
          </section>
        </div>

        {(p.github || p.demo) && (
          <div className="mt-8 flex flex-wrap gap-x-6 font-semibold">
            {p.github && (
              <a href={p.github} className="inline-flex min-h-11 items-center text-coral-ink hover:underline">
                GitHub →
              </a>
            )}
            {p.demo && (
              <a href={p.demo} className="inline-flex min-h-11 items-center text-coral-ink hover:underline">
                Live demo →
              </a>
            )}
          </div>
        )}
      </article>

      <CtaBox title="Need a system like this?" />

      <nav aria-label="Related services" className="mb-10">
        <h2 className="eyebrow mb-3">related services</h2>
        <ul className="flex flex-wrap gap-2">
          {related.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="inline-flex min-h-11 items-center rounded-full border-2 border-navy px-4 text-sm font-semibold text-navy hover:bg-navy hover:text-offwhite">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="More case studies">
        <h2 className="eyebrow mb-4">more case studies</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/work/${o.slug}`} className="rounded-xl border border-line bg-surface p-5 hover:border-teal-ink">
              <div className="font-display font-semibold text-navy">{o.title}</div>
              <div className="mt-1 line-clamp-2 text-sm text-muted">{o.description}</div>
            </Link>
          ))}
        </div>
      </nav>
    </PageShell>
  );
}
