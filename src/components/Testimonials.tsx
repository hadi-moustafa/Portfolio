import Image from "next/image";
import { testimonials } from "@/lib/content";
import { real } from "@/lib/placeholder";
import Reveal from "./Reveal";
import { Section, SectionHeading, T } from "./ui";

/** Real client reviews only. Renders nothing in production until a real one exists. */
export default function Testimonials() {
  const items = real(testimonials, (t) => t.quote);
  if (items.length === 0) return null;

  return (
    <Section id="testimonials" className="bg-navy text-offwhite">
      <Reveal>
        <SectionHeading id="testimonials" eyebrow="Testimonials" title="What clients say" onDark />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <figure className="flex h-full flex-col rounded-xl border border-offwhite/15 bg-offwhite/5 p-6">
              <blockquote className="text-lg leading-relaxed">
                &ldquo;<T>{t.quote}</T>&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                {t.photo && !t.short && (
                  <Image src={t.photo} alt={`Photo of ${t.name}`} width={96} height={96} className="h-12 w-12 rounded-full object-cover" />
                )}
                <div>
                  <T as="div" className="font-display font-semibold">{t.name}</T>
                  <div className="text-sm text-offwhite/80">
                    {!t.short && t.role && (
                      <>
                        <T>{t.role}</T>,{" "}
                      </>
                    )}
                    <T>{t.business}</T>
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
