import Image from "next/image";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

/** Real client reviews. Renders nothing until `testimonials` has entries. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="stack-panel z-[80]">
      <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6 py-10">
          <Reveal>
            <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
              04 — reviews
            </div>
            <h2 className="text-3xl font-bold mb-10">What clients say</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name} className="border border-line rounded-[10px] p-6 bg-bg2">
                  <blockquote className="text-ink mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="flex items-center gap-3">
                    {t.photo && (
                      <Image
                        src={t.photo}
                        alt={`Photo of ${t.name}`}
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-ink-dim text-xs">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
