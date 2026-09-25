import Image from "next/image";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

/** Real client reviews. Renders nothing until `testimonials` has entries. */
export default function Testimonials({ n }: { n: string }) {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-navy text-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-3 !text-teal">{n} — testimonials</p>
          <h2 id="testimonials-title" className="mb-10 font-display text-3xl font-bold sm:text-4xl">
            What clients say
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="h-full rounded-xl border border-offwhite/15 p-6">
                <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.photo && (
                    <Image
                      src={t.photo}
                      alt={`Photo of ${t.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-sm text-offwhite/75">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
