import { processSteps } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./ui";

export default function Process() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading id="process" eyebrow="How it works" title="From a free call to a working system" />
      </Reveal>
      <Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className="relative h-full rounded-xl border border-line bg-surface p-6 lg:rounded-none lg:border-x-0 lg:border-y-2 lg:border-t-teal lg:first:rounded-l-xl lg:last:rounded-r-xl"
            >
              <span className="font-display text-4xl font-bold text-teal" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-[0.95rem]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
