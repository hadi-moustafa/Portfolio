import { faqs } from "@/lib/content";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="stack-panel z-[85]">
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
      <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[760px] mx-auto w-full px-6 py-16">
          <Reveal>
            <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
              05 — faq
            </div>
            <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex justify-between gap-4 cursor-pointer list-none font-semibold">
                    <h3 className="text-base">{f.q}</h3>
                    <span aria-hidden="true" className="text-amber transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-dim text-[0.95rem]">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
