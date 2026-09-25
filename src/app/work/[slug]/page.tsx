import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { flagships, responseTime } from "@/lib/content";
import PageShell from "@/components/PageShell";

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
  const description = p.metaDescription;
  return {
    title,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description, url: `/work/${p.slug}`, type: "article" },
    twitter: { title, description },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = flagships.filter((f) => f.slug !== p.slug);

  return (
    <PageShell crumbs={[{ name: "Case studies", path: "/#case-studies" }, { name: p.title, path: `/work/${p.slug}` }]}>
      <article>
        <div className="font-mono text-xs text-amber mb-3">{p.tag}</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">{p.title}</h1>
        <p className="text-lg text-ink-dim mb-6">{p.description}</p>
        <ul className="flex gap-2 flex-wrap mb-10" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li
              key={s}
              className="font-mono text-[0.7rem] px-2.5 py-0.5 rounded-full border border-line text-ink-dim"
            >
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
            className="w-full h-auto rounded-xl border border-line mb-10"
          />
        )}

        <h2 className="text-2xl font-bold mb-3">The problem</h2>
        <p className="text-ink-dim mb-8">{p.caseStudy.problem}</p>

        <h2 className="text-2xl font-bold mb-3">The approach</h2>
        <ul className="list-disc pl-5 space-y-2 text-ink-dim mb-8">
          {p.caseStudy.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-3">The result</h2>
        <p className="text-ink-dim mb-8">{p.caseStudy.result}</p>

        {(p.github || p.demo) && (
          <div className="flex gap-5 text-sm mb-12">
            {p.github && (
              <a href={p.github} className="text-amber" rel="noopener">
                GitHub →
              </a>
            )}
            {p.demo && (
              <a href={p.demo} className="text-amber" rel="noopener">
                Live demo →
              </a>
            )}
          </div>
        )}
      </article>

      <aside className="border border-line rounded-2xl bg-bg2 p-6 mb-12">
        <h2 className="text-xl font-bold mb-2">Need a system like this?</h2>
        <p className="text-ink-dim text-sm mb-4">
          Tell me what you&apos;re building. I reply within {responseTime}.
        </p>
        <Link
          href="/#contact"
          className="inline-block font-mono text-sm font-bold px-5 py-3 rounded-md bg-amber text-[#161105]"
        >
          Start a project →
        </Link>
      </aside>

      <nav aria-label="More case studies">
        <h2 className="font-mono text-xs uppercase tracking-wide text-amber mb-4">More case studies</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/work/${o.slug}`}
              className="border border-line rounded-[10px] p-5 hover:border-amber"
            >
              <div className="font-bold mb-1">{o.title}</div>
              <div className="text-sm text-ink-dim line-clamp-2">{o.description}</div>
            </Link>
          ))}
        </div>
      </nav>
    </PageShell>
  );
}
