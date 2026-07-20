"use client";

import { useMemo } from "react";

const EMOJI = ["🍂", "🍁", "🍃"];

export default function FallingLeaves() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 8,
        delay: -Math.random() * 14,
        drift: (Math.random() - 0.5) * 160,
        size: 14 + Math.random() * 14,
        emoji: EMOJI[i % EMOJI.length],
        opacity: 0.5 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden" aria-hidden="true">
      {leaves.map((l) => (
        <span
          key={l.id}
          style={
            {
              position: "absolute",
              left: `${l.left}%`,
              top: 0,
              fontSize: l.size,
              opacity: l.opacity,
              animation: `leaf-fall ${l.duration}s linear ${l.delay}s infinite`,
              "--drift": `${l.drift}px`,
            } as React.CSSProperties
          }
        >
          {l.emoji}
        </span>
      ))}
    </div>
  );
}
