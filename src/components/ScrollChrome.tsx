"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/content";
import ThemeDock from "./ThemeDock";

export default function ScrollChrome() {
  const [activeLabel, setActiveLabel] = useState<string>(sections[0].label);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.round((doc.scrollTop / scrollable) * 100) : 0);

      // Sections are stacked with position:sticky, so several can be
      // geometrically "stuck" at the same on-screen position at once —
      // IntersectionObserver can't tell which one is actually painted on
      // top. Instead: walk sections in document order and keep the last
      // one whose top has reached the activation line — that's always the
      // most-recently-covering (i.e. currently visible) panel.
      let current: string = sections[0].label;
      const threshold = window.innerHeight * 0.5;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = s.label;
        }
      }
      setActiveLabel(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-3.5 sm:px-5 py-3 bg-bg/75 backdrop-blur-md border-b border-line">
        <div className="flex items-center gap-3 text-sm min-w-0">
          <span className="font-extrabold tracking-tight shrink-0">
            hadi<span className="text-amber">.</span>
          </span>
          <span className="hidden sm:inline text-line">|</span>
          <span className="hidden sm:inline font-mono text-xs text-ink-dim transition-opacity truncate">
            {activeLabel}
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs text-amber">{progress}%</span>
          <a
            href="#contact"
            className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-md bg-amber text-[#161105]"
          >
            contact ↗
          </a>
        </div>
      </div>

      <ThemeDock />
    </>
  );
}
