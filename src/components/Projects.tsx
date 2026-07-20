import { flagships, secondaryProjects } from "@/lib/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <div id="projects">
      {flagships.map((p, i) => (
        <section key={p.title} className="stack-panel" style={{ zIndex: 40 + i * 10 }}>
          <div className="stack-panel-scroll">
          <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6 py-10">
            {i === 0 && (
              <Reveal>
                <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
                  03 — selected work
                </div>
                <h2 className="text-3xl font-bold mb-10">Flagship systems</h2>
              </Reveal>
            )}
            <Reveal>
              <div className="relative border border-line rounded-2xl bg-bg2 overflow-visible">
                {p.definition && (
                  <div className="hidden md:block absolute -top-8 -left-5 w-[260px] bg-paper text-paper-ink px-4.5 py-4 rounded shadow-2xl -rotate-2 z-10">
                    <div className="font-extrabold text-sm">{p.definition.word}</div>
                    <div className="font-mono text-[0.7rem] text-paper-ink/60 mb-1.5">
                      {p.definition.pronunciation}
                    </div>
                    <div className="text-[0.78rem] leading-snug">{p.definition.body}</div>
                  </div>
                )}
                <div className="h-44 sm:h-56 rounded-t-2xl border-b border-line bg-gradient-to-br from-bg2 to-bg flex items-center justify-center px-4 text-center font-mono text-xs sm:text-sm text-ink-dim">
                  [ live demo / architecture — {p.title} ]
                </div>
                <div className="px-5 sm:px-7 py-6 sm:py-7">
                  {p.definition && (
                    <div className="md:hidden mb-5 bg-paper text-paper-ink px-4 py-3.5 rounded shadow-lg -rotate-1 max-w-xs">
                      <div className="font-extrabold text-sm">{p.definition.word}</div>
                      <div className="font-mono text-[0.7rem] text-paper-ink/60 mb-1.5">
                        {p.definition.pronunciation}
                      </div>
                      <div className="text-[0.78rem] leading-snug">{p.definition.body}</div>
                    </div>
                  )}
                  <div className="font-mono text-xs text-amber mb-2">{p.tag}</div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-ink-dim text-[0.92rem] max-w-xl mb-4">{p.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[0.68rem] px-2.5 py-0.5 rounded-full border border-line text-ink-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 text-sm">
                    {p.github && (
                      <a href={p.github} className="text-amber">
                        GitHub →
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} className="text-amber">
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </section>
      ))}

      <section className="stack-panel" style={{ zIndex: 40 + flagships.length * 10 }}>
        <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6 py-10">
          <Reveal>
            <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
              also on the bench
            </div>
            <div className="grid sm:grid-cols-3 gap-4.5">
              {secondaryProjects.map((p) => (
                <div key={p.title} className="border border-line rounded-[10px] p-5 bg-bg2">
                  <h3 className="font-bold mb-1.5 flex items-center gap-2">
                    {p.title}
                    {p.wip && (
                      <span className="font-mono text-[0.62rem] text-amber border border-amber-dim rounded px-1.5 py-0.5">
                        IN PROGRESS
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-ink-dim mb-2">{p.description}</p>
                  {p.href && (
                    <a href={p.href} className="text-amber text-sm">
                      View →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        </div>
      </section>
    </div>
  );
}
