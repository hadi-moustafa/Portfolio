import { stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function StatBar() {
  return (
    <section id="stats" className="stack-panel z-[20]">
      <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6">
          <Reveal>
            <div className="font-mono text-xs tracking-wide uppercase text-amber mb-8 text-center">
              by the numbers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-line">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-10 text-center ${
                    i < stats.length - 1 ? "sm:border-r border-line" : ""
                  }`}
                >
                  <div
                    className={`text-5xl sm:text-6xl font-extrabold ${
                      s.amber ? "text-amber" : "text-ink"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-wide text-ink-dim font-mono mt-3">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
