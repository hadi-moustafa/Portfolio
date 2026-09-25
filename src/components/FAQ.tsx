import { faqs } from "@/lib/content";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Reveal>
        <p className="eyebrow mb-3">faq</p>
        <h2 id="faq-title" className="mb-8 font-display text-3xl font-bold text-navy sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-semibold text-navy">
                <h3 className="text-base sm:text-lg">{f.q}</h3>
                <span aria-hidden="true" className="text-2xl leading-none text-teal-ink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
