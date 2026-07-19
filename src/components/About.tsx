import { timeline } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-[1000px] mx-auto px-6 pt-28 pb-16">
      <Reveal>
        <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
          02 — about
        </div>
      </Reveal>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14">
        <Reveal delay={0.05}>
          <div>
            <h2 className="text-3xl font-bold mb-5">Architecture over stack.</h2>
            <div className="space-y-4 text-[#d8d2c6]">
              <p>
                I&apos;m a backend engineer finishing an M.Sc. in Computer &amp; Communication
                Engineering. Most of my work lives in the JavaScript ecosystem, but the language
                is the least interesting decision — what I care about is the shape of a system:
                where the load lands, what happens when a call fails halfway through, what breaks
                first under pressure.
              </p>
              <p>
                That instinct for structure isn&apos;t only technical — I read slowly and think
                in long chains of reasoning before I trust a conclusion. It shows up in how I
                engineer: understand the system before you touch it.
              </p>
              <p>
                Right now I&apos;m going deeper into AI infrastructure, building{" "}
                <span className="text-amber font-semibold">Governor</span>. I want to work where
                the backend carries real weight — healthcare, public infrastructure, AI
                platforms.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border-l-2 border-line pl-6">
            {timeline.map((t) => (
              <div key={t.role} className="mb-6 relative">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-amber" />
                <div className="font-mono text-xs text-amber-dim mb-1">{t.date}</div>
                <div className="font-bold text-sm">{t.role}</div>
                <div className="text-ink-dim text-sm">{t.org}</div>
              </div>
            ))}
            <a
              href="/resume.pdf"
              className="inline-block mt-3 text-sm text-amber border-b border-amber-dim"
            >
              ↓ Download résumé (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
