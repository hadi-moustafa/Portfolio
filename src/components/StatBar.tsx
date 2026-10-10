import { stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function StatBar() {
  return (
    <section id="proof" aria-labelledby="proof-title" className="bg-navy text-offwhite">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <h2 id="proof-title" className="eyebrow mb-8 text-center !text-teal">
            02 — by the numbers
          </h2>
          <dl className="grid grid-cols-2 gap-y-10 lg:flex lg:justify-center [&>*:last-child:nth-child(odd)]:col-span-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse px-2 text-center lg:flex-1">
                <dt className="mt-2 text-sm text-offwhite/75">{s.label}</dt>
                <dd
                  className={`font-display text-5xl font-bold tabular-nums lg:text-6xl ${
                    s.accent ? "text-teal" : "text-offwhite"
                  }`}
                >
                  {s.num}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
