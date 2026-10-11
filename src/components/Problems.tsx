import Link from "next/link";
import { problems } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading, textLink } from "./ui";

const icons: Record<(typeof problems)[number]["icon"], React.ReactNode> = {
  ledger: <path d="M5 3h11l3 3v15H5zM9 8h6M9 12h6M9 16h3" />,
  clock: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2" />,
  megaphone: <path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1zM16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />,
};

export default function Problems() {
  return (
    <Section id="problems">
      <Reveal>
        <SectionHeading id="problems" eyebrow="Problems I solve" title="Sound familiar?" />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)]">
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-teal-ink" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icons[p.icon]}
              </svg>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">&ldquo;{p.title}&rdquo;</h3>
              <p className="mt-2">{p.body}</p>
              <Link href={p.href} className={`${textLink} mt-auto pt-3`}>
                {p.link}&nbsp;→
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
