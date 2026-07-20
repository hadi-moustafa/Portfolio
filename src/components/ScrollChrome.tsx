"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/content";

export default function ScrollChrome() {
  const [activeLabel, setActiveLabel] = useState<string>(sections[0].label);
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.round((doc.scrollTop / scrollable) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActiveLabel(match.label);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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

      <div className="hidden sm:flex fixed bottom-6 left-6 z-[100] items-center gap-2 bg-bg2/85 backdrop-blur-sm border border-line rounded-[10px] px-2.5 py-2">
        <span className="font-mono text-[0.65rem] text-ink-dim pr-1">theme</span>
        <div className="w-3.5 h-3.5 rounded-[4px] bg-amber border-2 border-[#3a2c0c]" />
        <button
          onClick={() => setDark((d) => !d)}
          className="w-[26px] h-[26px] rounded-md flex items-center justify-center text-xs font-mono text-ink-dim hover:text-ink"
          aria-label="Toggle theme"
        >
          {dark ? "☾" : "☀"}
        </button>
      </div>
    </>
  );
}
