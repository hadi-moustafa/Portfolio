import Image from "next/image";
import Link from "next/link";
import { education, timeline } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./ui";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <Image
            src="/images/hadi-headshot.webp"
            alt="Hadi Moustafa, software engineer and digital marketer, in a dark suit and glasses"
            width={800}
            height={1000}
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 420px, 100vw"
            className="w-full max-w-[420px] rounded-xl border border-line"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading id="about" eyebrow="About" title="One person, start to finish" />
          <div className="mt-5 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed">
            <p>
              I&apos;m Hadi, a software engineer and digital marketer in Lebanon. One person builds your
              system, keeps it running and helps the right customers find it, with no account managers
              and no handoffs. My latest project replaced a local ISP&apos;s Excel sheets and paper with
              a{" "}
              <Link href="/work/isp-net" className="font-semibold text-teal-ink underline underline-offset-4">
                billing and collections platform
              </Link>
              .
            </p>
            <p>
              <Link href="/work/isp-net" className="font-semibold text-teal-ink underline underline-offset-4">
                I build systems that handle money correctly
              </Link>
              : concurrency-tested, audit-logged, no double charges.
            </p>
          </div>

          <ol className="mt-8 grid gap-5 border-l-2 border-line pl-6 sm:grid-cols-2 sm:border-l-0 sm:pl-0">
            {timeline.map((t) => (
              <li key={t.role} className="relative sm:border-l-2 sm:border-line sm:pl-5">
                <span className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full bg-teal sm:-left-[6px]" />
                <div className="text-xs font-semibold tracking-wide text-teal-ink">{t.date}</div>
                <div className="font-display font-semibold text-navy">{t.role}</div>
                <div className="text-sm text-charcoal">{t.org}</div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[0.95rem]">{education}</p>
          <div className="mt-4 flex flex-wrap gap-x-6">
            <a href="/resume.pdf" className="inline-flex min-h-11 items-center text-[0.95rem] font-semibold text-navy underline underline-offset-4 hover:text-teal-ink" data-track="resume">
              Download résumé (PDF)
            </a>
            <Link href="/engineering" className="inline-flex min-h-11 items-center text-[0.95rem] font-semibold text-navy underline underline-offset-4 hover:text-teal-ink">
              Engineering notes
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
