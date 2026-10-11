import Link from "next/link";
import { addOnServices, flagshipService, ownership, packages, paymentTerms, type Service } from "@/lib/content";
import { real } from "@/lib/placeholder";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import { Section, SectionHeading, T, textLink, WhatsAppButton } from "./ui";

const card =
  "flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(13,27,42,0.4)]";

function Meta({ s }: { s: Service }) {
  return (
    <div className="mt-4 grid gap-1 text-[0.95rem]">
      <T as="div">{s.timeline}</T>
      <T as="div" className="font-semibold text-navy">{s.priceFrom}</T>
    </div>
  );
}

function Links({ s }: { s: Service }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-5">
      <Link href={`/services/${s.slug}`} className={textLink}>
        Learn more&nbsp;→
      </Link>
      <Link href={s.proof.href} className={`${textLink} text-sm`} data-track="case_study">
        See proof
      </Link>
    </div>
  );
}

export default function Services() {
  const f = flagshipService;
  const tiers = real(packages, (p) => p.name);

  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          id="services"
          eyebrow="Services"
          title="One main offer, with add-ons when you need them"
          intro="Start with the problem that costs you the most. Everything else can be added later, by the same person."
        />
      </Reveal>

      <Reveal>
        <article className={`${card} mt-10 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-10`}>
          <div className="flex flex-col">
            <p className="eyebrow">Main offer</p>
            <div className="mt-3 flex items-center gap-3">
              <ServiceIcon slug={f.slug} className="h-10 w-10 shrink-0 text-teal-ink" />
              <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">{f.title}</h3>
            </div>
            <p className="mt-4 text-lg">
              <strong className="text-navy">For:</strong> {f.forWho}
            </p>
            <Meta s={f} />
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <WhatsAppButton label="Talk about your billing" />
              <Link href={`/services/${f.slug}`} className={textLink}>
                Learn more&nbsp;→
              </Link>
              <Link href={f.proof.href} className={`${textLink} text-sm`} data-track="case_study">
                See proof
              </Link>
            </div>
          </div>
          <ul className="mt-6 space-y-3 lg:mt-0">
            {f.includes.map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
                {x}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <h3 className="mt-14 font-display text-xl font-semibold text-navy">Add-ons</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {addOnServices.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <article className={card}>
              <ServiceIcon slug={s.slug} className="mb-4 h-9 w-9 text-teal-ink" />
              <h4 className="font-display text-xl font-bold text-navy">{s.title}</h4>
              <p className="mt-2 text-[0.95rem]">{s.forWho}</p>
              <ul className="mt-3 space-y-1 text-[0.95rem]">
                {s.includes.slice(0, 3).map((x) => (
                  <li key={x} className="flex gap-2">
                    <span aria-hidden="true" className="text-teal-ink">/</span>
                    {x}
                  </li>
                ))}
              </ul>
              <Meta s={s} />
              <Links s={s} />
            </article>
          </Reveal>
        ))}
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
