"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { responseTime } from "@/lib/content";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

function Note() {
  return (
    <div className="max-w-sm rounded-md border border-line bg-surface px-5 py-4 text-[0.95rem] leading-relaxed text-charcoal shadow-[0_10px_30px_-12px_rgba(13,27,42,0.25)] -rotate-1">
      <span className="font-semibold text-navy">how I work:</span>{" "}I build the system, then I get it
      seen. One person, start to finish: the platform an ISP now collects 75% faster with, and the ads
      that turned $68 into 88,701 impressions.
    </div>
  );
}

function Definition() {
  return (
    <div className="max-w-sm rounded-md bg-navy px-5 py-4 text-offwhite shadow-[0_10px_30px_-12px_rgba(13,27,42,0.5)] rotate-1">
      <div className="font-display text-lg font-semibold">reliable</div>
      <div className="mb-2 text-xs text-offwhite/70">/rɪˈlaɪ.ə.bəl/ · adj.</div>
      <p className="text-sm leading-relaxed">
        from Old French <i>relier</i> — to bind together again. what I&apos;m optimizing for in
        everything I ship: <b className="text-teal">it holds, even after it breaks.</b>
      </p>
    </div>
  );
}

export default function Hero() {
  // The canvas only renders at lg+, so only download three.js on those screens.
  const [showCanvas, setShowCanvas] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowCanvas(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="hero" aria-labelledby="hero-title" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6 lg:pb-24 lg:pt-20">
      <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div>
          <p className="eyebrow mb-4">01 — hero</p>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/50 bg-teal/10 px-3 py-1 font-display text-[0.7rem] font-semibold tracking-wider text-teal-ink md:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-[pulse-dot_2s_infinite]" />
            AVAILABLE FOR PROJECTS
          </span>
          <h1
            id="hero-title"
            className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl"
          >
            I build it. I <span className="text-teal-ink">market</span> it. I fix it. I{" "}
            <span className="text-teal-ink">grow</span> it.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-charcoal sm:text-xl">
            Software engineer &amp; digital marketer based in Lebanon — from the backend that holds
            under load to the audience that finds it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="flex min-h-12 items-center justify-center rounded-lg bg-coral px-6 font-display font-semibold text-navy hover:brightness-95"
            >
              Start a project →
            </a>
            <a
              href="#work"
              className="flex min-h-12 items-center justify-center rounded-lg border-2 border-navy px-6 font-display font-semibold text-navy hover:bg-navy hover:text-offwhite"
            >
              See my work
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Projects from $120 · I reply within {responseTime}
          </p>
        </div>

        <div className="relative mt-12 flex flex-col gap-5 lg:mt-0 lg:min-h-[480px] lg:justify-center lg:pl-6">
          {showCanvas && (
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <HeroCanvas />
            </div>
          )}
          <Note />
          <div className="lg:ml-12">
            <Definition />
          </div>
        </div>
      </div>
    </section>
  );
}
