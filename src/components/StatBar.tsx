import { stats } from "@/lib/content";
import Reveal from "./Reveal";

export default function StatBar() {
  return (
    <Reveal>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-line">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-6 ${i < stats.length - 1 ? "sm:border-r border-line" : ""}`}
            >
              <div className={`text-3xl font-extrabold ${s.amber ? "text-amber" : "text-ink"}`}>
                {s.num}
              </div>
              <div className="text-[0.68rem] uppercase tracking-wide text-ink-dim font-mono mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
