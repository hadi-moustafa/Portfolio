"use client";

import { useMemo } from "react";

const EMOJI = ["☕", "🐱", "📖", "🐈"];

export default function CozyFloaties() {
  const items = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        y: Math.random() * 100,
        duration: 22 + Math.random() * 18,
        delay: -Math.random() * 30,
        size: 20 + Math.random() * 16,
        emoji: EMOJI[i % EMOJI.length],
        opacity: 0.35 + Math.random() * 0.35,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          style={
            {
              position: "absolute",
              left: 0,
              top: 0,
              fontSize: it.size,
              opacity: it.opacity,
              animation: `cozy-float ${it.duration}s linear ${it.delay}s infinite`,
              "--y": `${it.y}vh`,
            } as React.CSSProperties
          }
        >
          {it.emoji}
        </span>
      ))}
    </div>
  );
}
