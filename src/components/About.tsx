import Image from "next/image";
import Link from "next/link";
import { timeline } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="eyebrow mb-3">03 — about</p>
        <h2 id="about-title" className="mb-8 font-display text-3xl font-bold text-navy sm:text-4xl">
          Architecture over stack.
        </h2>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr_0.9fr] lg:gap-12">
        <Reveal>
          <Image
            src="/images/hadi-moustafa-headshot.webp"
            alt="Hadi Moustafa, software engineer and digital marketer, in a dark suit and glasses"
            width={800}
            height={1000}
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 360px, 100vw"
            className="mx-auto w-full max-w-[360px] rounded-xl border border-line"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              I&apos;m a software engineer finishing an M.Sc. in Computer &amp; Communication
              Engineering. Most of my work lives in the JavaScript ecosystem, but the language is
              the least interesting decision — what I care about is the shape of a system: where the
              load lands, what happens when a call fails halfway through, what breaks first under
              pressure.
            </p>
            <p>
              That instinct for structure isn&apos;t only technical — I read slowly and think in
              long chains of reasoning before I trust a conclusion. It shows up in how I engineer:
              understand the system before you touch it.
            </p>
            <p>
              It&apos;s the same instinct behind the marketing. An audience is a system too: find
              where attention actually lands, fix what&apos;s leaking, then grow what works. So I
              don&apos;t just build your product — I help the right people find it.
            </p>
            <p>
              Right now I&apos;m going deeper into AI infrastructure, building{" "}
              <Link href="/work/governor" className="font-semibold text-teal-ink underline underline-offset-4">
                Governor
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="border-l-2 border-line pl-6">
            {timeline.map((t) => (
              <li key={t.role} className="relative mb-6">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal" />
                <div className="text-xs font-semibold tracking-wide text-teal-ink">{t.date}</div>
                <div className="font-display font-semibold text-navy">{t.role}</div>
                <div className="text-sm text-muted">{t.org}</div>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            className="inline-flex min-h-11 items-center font-semibold text-teal-ink underline underline-offset-4"
          >
            ↓ Download résumé (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}
