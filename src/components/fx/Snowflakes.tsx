"use client";

/* eslint-disable react-hooks/purity -- decorative particle layout is
   intentionally randomized once per mount; not relevant to memoization
   correctness since this component renders nothing meaningful server-side. */

import { useMemo } from "react";

export default function Snowflakes() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 7 + Math.random() * 10,
        delay: -Math.random() * 14,
        drift: (Math.random() - 0.5) * 100,
        size: 4 + Math.random() * 8,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          style={
            {
              position: "absolute",
              left: `${f.left}%`,
              top: 0,
              width: f.size,
              height: f.size,
              borderRadius: "9999px",
              background: "var(--ink)",
              opacity: f.opacity,
              animation: `snow-fall ${f.duration}s linear ${f.delay}s infinite`,
              "--drift": `${f.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
