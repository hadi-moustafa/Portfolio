import Link from "next/link";
import { ownership, packages, paymentTerms, services, servicesByProblem, type Service } from "@/lib/content";
import { real } from "@/lib/placeholder";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import { Section, SectionHeading, T, textLink, WhatsAppButton } from "./ui";

const card =
  "flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(13,27,42,0.4)]";

const ordered = servicesByProblem.map((slug) => services.find((s) => s.slug === slug)!);

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className={card}>
      <p className="eyebrow">You say</p>
      <p className="mt-2 font-display text-lg font-semibold text-navy">&ldquo;{s.pain}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
        <ServiceIcon slug={s.slug} className="h-9 w-9 shrink-0 text-teal-ink" />
        <h3 className="font-display text-xl font-bold text-navy">{s.fix}</h3>
      </div>
      <ul className="mt-3 space-y-1 text-[0.95rem]">
        {s.includes.slice(0, 3).map((x) => (
          <li key={x} className="flex gap-2">
            <span aria-hidden="true" className="text-teal-ink">/</span>
            {x}
          </li>
        ))}
      </ul>
      <div className="mt-4 grid gap-1 text-[0.95rem]">
        <T as="div">{s.timeline}</T>
        <T as="div" className="font-semibold text-navy">{s.priceFrom}</T>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-5">
        <Link href={`/services/${s.slug}`} className={textLink}>
          Learn more&nbsp;→
        </Link>
        <Link href={s.proof.href} className={`${textLink} text-sm`} data-track="case_study">
          {s.proof.label}
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  const tiers = real(packages, (p) => p.name);

  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          id="services"
          eyebrow="Services"
          title="Which one sounds like you?"
          intro="Pick the problem that costs you the most. I fix that first, and the rest can be added later, by the same person."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <ServiceCard s={s} />
          </Reveal>
        ))}
        <Reveal delay={ordered.length * 0.05}>
          <div className="flex h-full flex-col justify-center rounded-xl border-2 border-dashed border-line p-6">
            <h3 className="font-display text-xl font-bold text-navy">Not sure which one you need?</h3>
            <p className="mt-2">Tell me what&apos;s going wrong and I&apos;ll tell you where I&apos;d start.</p>
            <div className="mt-5">
              <WhatsAppButton label="Ask me on WhatsApp" />
            </div>
          </div>
        </Reveal>
      </div>

      {tiers.length > 0 && (
        <>
          <h3 className="mt-14 font-display text-xl font-semibold text-navy">Packages</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {tiers.map((p, i) => (
              <article key={i} className={card}>
                <T as="h4" className="font-display text-xl font-bold text-navy">{p.name}</T>
                <T as="p" className="mt-1 font-display text-2xl font-bold text-navy">{p.price}</T>
                <ul className="mt-3 space-y-1">
                  {p.includes.map((x, j) => (
                    <T as="li" key={j}>{x}</T>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </>
      )}
      <p className="mt-8 text-[0.95rem]">
        <T>{paymentTerms}</T> <strong className="text-navy">{ownership}</strong>
      </p>
    </Section>
  );
}
