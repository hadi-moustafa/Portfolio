import Image from "next/image";
import Link from "next/link";
import { caseStudies, categoryLabels, type CaseStudy, type Category } from "@/lib/content";
import { SHOW_PLACEHOLDERS } from "@/lib/placeholder";
import Reveal from "./Reveal";
import WorkFilter from "./WorkFilter";
import { Ph, Section, SectionHeading, T, textLink } from "./ui";

const visible = caseStudies.filter((c) => SHOW_PLACEHOLDERS || !c.placeholder);

export function GitHubButton({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      aria-label={`${name} source code on GitHub`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border-2 border-line text-navy transition-colors duration-200 hover:border-navy"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
      </svg>
    </a>
  );
}

function Card({ p }: { p: CaseStudy }) {
  const featured = !!p.featured;
  return (
    <article
      data-cats={p.categories.join(" ")}
      className={`work-card group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(13,27,42,0.4)] ${
        featured ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : ""
      }`}
    >
      <div className={`aspect-video overflow-hidden border-b border-line bg-offwhite ${featured ? "lg:aspect-auto lg:border-r lg:border-b-0" : ""}`}>
        {p.placeholder ? (
          <Ph block>case study image</Ph>
        ) : (
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={1600}
            height={900}
            sizes={featured ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
            className={`h-full w-full ${featured ? "object-contain" : "object-cover object-top"}`}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow">{p.label}</p>
        <h3 className={`mt-2 font-display font-bold text-navy ${featured ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
          <T>{p.title}</T>
        </h3>
        <T as="p" className="mt-3">{p.description}</T>
        {p.stats.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-3">
            {p.stats.slice(0, 2).map((m) => (
              <div key={m.label} className="flex flex-col rounded-lg bg-offwhite px-3 py-2.5">
                <dt className="text-sm text-charcoal">{m.label}</dt>
                <dd className="order-first font-display text-2xl font-bold tabular-nums text-navy">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {p.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
            {p.tags.slice(0, 3).map((t) => (
              <li key={t} className="rounded-full bg-teal/15 px-3 py-1 text-sm font-medium text-teal-ink">
                {t}
              </li>
            ))}
          </ul>
        )}
        {!p.placeholder && (
          <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-6">
            <Link href={`/work/${p.slug}`} className={textLink} data-track="case_study">
              Read the case study&nbsp;→
            </Link>
            <div className="flex items-center gap-4">
              {p.live && (
                <a href={p.live} className={textLink}>
                  {new URL(p.live).hostname.replace(/^www\./, "")}&nbsp;↗
                </a>
              )}
              {p.instagram && (
                <a href={p.instagram} className={textLink}>
                  Instagram post&nbsp;↗
                </a>
              )}
              {p.github && <GitHubButton href={p.github} name={p.name} />}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);
  const cats = (Object.keys(categoryLabels) as Category[]).filter((c) => visible.some((p) => p.categories.includes(c)));
  const cols = rest.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <Section id="work">
      <Reveal>
        <SectionHeading id="work" eyebrow="Selected work" title="Proof, not promises" intro="Real projects, real numbers, straight from the dashboards and ad accounts." />
      </Reveal>
      {visible.length >= 3 && <WorkFilter target="work-grid" filters={cats.map((c) => ({ id: c, label: categoryLabels[c] }))} />}
      <div id="work-grid" data-filter="all" className="mt-8 grid gap-6">
        {featured.map((p) => (
          <Card key={p.slug} p={p} />
        ))}
        {rest.length > 0 && (
          <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
            {rest.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        )}
      </div>
      <p className="mt-8 text-[0.95rem]">
        Looking for the developer side?{" "}
        <Link href="/engineering" className="font-semibold text-teal-ink underline underline-offset-4">
          Engineering notes: Governor and M2C
        </Link>
        .
      </p>
    </Section>
  );
}
