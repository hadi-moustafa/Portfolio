import Link from "next/link";
import { services } from "@/lib/content";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-3">services</p>
          <h2 id="services-title" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            One person. Four ways to help.
          </h2>
          <p className="mt-3 max-w-2xl text-lg">
            Hire me for one, or for all four — the same person who builds it can market it, keep it
            running and grow it.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border-2 border-teal/40 bg-offwhite p-6">
                <ServiceIcon slug={s.slug} className="mb-5 h-9 w-9 text-teal-ink" />
                <h3 className="font-display text-2xl font-bold text-navy">{s.word}</h3>
                <p className="text-xs text-muted">{s.pronunciation}</p>
                <p className="mt-3 font-semibold text-navy">{s.tagline}</p>
                <ul className="mt-3 space-y-1 text-[0.95rem]">
                  {s.includes.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden="true" className="text-teal-ink">/</span>
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-x-5 pt-6 text-sm font-semibold">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-11 items-center text-coral-ink underline-offset-4 hover:underline"
                  >
                    {s.title} →
                  </Link>
                  <a
                    href={s.proof === "all" ? "#work" : `#work-${s.proof}`}
                    className="inline-flex min-h-11 items-center text-navy underline-offset-4 hover:underline"
                  >
                    See proof ↓
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
