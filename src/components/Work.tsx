"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categoryLabels, flagships, secondaryProjects, type Category } from "@/lib/content";

type Filter = Category | "all";

// Only offer filters that have at least one project behind them.
const available = (Object.keys(categoryLabels) as Category[]).filter((c) =>
  [...flagships, ...secondaryProjects].some((p) => p.categories.includes(c))
);

function Chips({ categories }: { categories: Category[] }) {
  return (
    <>
      {categories.map((c) => (
        <span key={c} className="rounded-full bg-teal/15 px-2.5 py-0.5 text-xs font-semibold text-teal-ink">
          {categoryLabels[c]}
        </span>
      ))}
    </>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");

  // Service cards link to #work-<category> to pre-filter this section.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#work-(\w+)$/);
      if (m && available.includes(m[1] as Category)) {
        setFilter(m[1] as Category);
        document.getElementById("work")?.scrollIntoView();
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const show = (cats: Category[]) => filter === "all" || cats.includes(filter);
  const flag = flagships.filter((p) => show(p.categories));
  const rest = secondaryProjects.filter((p) => show(p.categories));

  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="eyebrow mb-3">selected work</p>
      <h2 id="work-title" className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Case studies &amp; projects
      </h2>

      <div role="group" aria-label="Filter projects" className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        {(["all", ...available] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-11 shrink-0 rounded-full border-2 px-4 text-sm font-semibold ${
              filter === f ? "border-navy bg-navy text-offwhite" : "border-line text-navy"
            }`}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      {flag.length > 0 && (
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {flag.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
              {p.image && (
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  className="h-auto w-full border-b border-line"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold tracking-wide text-teal-ink">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy">{p.title}</h3>
                {p.definition && (
                  <p className="mt-3 rounded-md bg-offwhite px-3 py-2 text-sm">
                    <b className="font-display text-navy">{p.definition.word}</b>{" "}
                    <span className="text-muted">{p.definition.pronunciation}</span> —{" "}
                    {p.definition.body}
                  </p>
                )}
                <p className="mt-3 text-[0.95rem]">{p.description}</p>
                {p.metrics && (
                  <dl className="mt-4 grid grid-cols-2 gap-2">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="flex flex-col rounded-md bg-offwhite px-3 py-2">
                        <dt className="text-xs text-muted">{m.label}</dt>
                        <dd className="order-first font-display text-xl font-bold tabular-nums text-navy">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chips categories={p.categories} />
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-x-5 pt-5 text-sm font-semibold">
                  <Link href={`/work/${p.slug}`} className="inline-flex min-h-11 items-center text-coral-ink hover:underline">
                    Read the case study →
                  </Link>
                  {p.github && (
                    <a href={p.github} className="inline-flex min-h-11 items-center text-navy hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          <h3 className="eyebrow mt-14 mb-4">also on the bench</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
                <h4 className="flex flex-wrap items-center gap-2 font-display text-lg font-semibold text-navy">
                  {p.title}
                  {p.badge && (
                    <span className="rounded border border-coral px-1.5 py-0.5 text-[0.65rem] font-semibold text-coral-ink">
                      {p.badge}
                    </span>
                  )}
                </h4>
                <p className="mt-2 text-[0.95rem]">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Chips categories={p.categories} />
                </div>
                {p.href && (
                  <a href={p.href} className="mt-auto inline-flex min-h-11 items-center pt-3 text-sm font-semibold text-coral-ink hover:underline">
                    View →
                  </a>
                )}
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
