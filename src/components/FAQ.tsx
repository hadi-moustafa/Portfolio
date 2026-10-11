import { faqs } from "@/lib/content";
import { txt } from "@/lib/placeholder";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";
import { Section, SectionHeading, T } from "./ui";

export default function FAQ({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <Section id="faq">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: txt(f.a) },
          })),
        }}
      />
      <Reveal>
        <SectionHeading id="faq" eyebrow="FAQ" title="Questions people ask before we start" />
        <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-semibold text-navy">
                <h3 className="text-base sm:text-lg">{f.q}</h3>
                <span aria-hidden="true" className="text-2xl leading-none text-teal-ink transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <T as="p" className="pb-5">{f.a}</T>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
