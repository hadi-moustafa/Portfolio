import Image from "next/image";
import { positioning } from "@/lib/positioning";
import { isPlaceholder, SHOW_PLACEHOLDERS } from "@/lib/placeholder";
import HeroCanvasLoader from "./HeroCanvasLoader";
import IspPhones from "./IspPhones";
import { btnSecondary, T, WhatsAppButton } from "./ui";

const trustIcons = [
  // phone call
  <path key="a" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  // document with check
  <path key="b" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 14l2 2 4-4" />,
  // clock
  <path key="c" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2" />,
];

function Headline() {
  const { headline, highlight } = positioning;
  const i = headline.indexOf(highlight);
  if (i < 0) return <>{headline}</>;
  return (
    <>
      {headline.slice(0, i)}
      <span className="text-teal-ink">{highlight}</span>
      {headline.slice(i + highlight.length)}
    </>
  );
}

function Availability() {
  const { taking, month } = positioning.availability;
  const filled = !isPlaceholder(taking) && !isPlaceholder(month);
  return (
    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/50 bg-teal/10 px-3 py-1.5 font-display text-xs font-semibold tracking-wider text-teal-ink">
      <span className="h-2 w-2 rounded-full bg-teal animate-[pulse-dot_2s_infinite]" />
      {filled ? (
        `TAKING ${taking} NEW PROJECTS IN ${month}`.toUpperCase()
      ) : (
        <>
          AVAILABLE FOR PROJECTS
          {SHOW_PLACEHOLDERS && (
            <T className="normal-case tracking-normal">{`· Taking ${taking} in ${month}`}</T>
          )}
        </>
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-20 sm:px-6 lg:pt-16 lg:pb-24">
        <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <Availability />
            <h1 id="hero-title" className="font-display text-[2.3rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              <Headline />
            </h1>
            <p className="mt-5 max-w-xl text-lg text-charcoal sm:text-xl">{positioning.subheadline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton />
              <a href="#work" className={btnSecondary}>
                {positioning.secondaryCta}
              </a>
            </div>

            <ul className="mt-5 flex flex-col gap-2 text-[0.95rem] text-charcoal sm:flex-row sm:flex-wrap sm:gap-x-5">
              {positioning.trustRow.map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0 text-teal-ink" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {trustIcons[i]}
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <Image
                src="/images/hadi-headshot.webp"
                alt="Hadi Moustafa"
                width={800}
                height={1000}
                sizes="56px"
                className="h-14 w-14 rounded-full border-2 border-surface object-cover object-top shadow-sm"
              />
              <p className="text-[0.95rem] text-charcoal">{positioning.credibility}</p>
            </div>
          </div>

          <div className="relative lg:py-8">
            <HeroCanvasLoader />
            <IspPhones preload />
          </div>
        </div>
      </div>
    </section>
  );
}
