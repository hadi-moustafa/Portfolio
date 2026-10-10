import { processSteps } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <Reveal>
        <p className="eyebrow mb-3">how we work</p>
        <h2
          id="process-title"
          className="font-display text-3xl font-bold text-navy sm:text-4xl"
        >
          From first call to growth
        </h2>
      </Reveal>
      <Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className="relative h-full rounded-xl border border-line bg-surface p-6 lg:rounded-none lg:border-y-2 lg:border-x-0 lg:border-t-teal lg:first:rounded-l-xl lg:last:rounded-r-xl"
            >
              <span className="font-display text-4xl font-bold text-teal">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.95rem]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
