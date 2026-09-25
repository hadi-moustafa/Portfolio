"use client";

import { useEffect, useState } from "react";
import { quotes } from "@/lib/content";

const QUOTE_INTERVAL_MS = 6000;

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), QUOTE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex min-h-[150px] flex-col justify-center text-center">
      <blockquote
        key={index}
        className="mx-auto max-w-xl text-lg italic text-offwhite/85 animate-[quote-in_0.6s_ease-out]"
        aria-live="polite"
      >
        &ldquo;{quotes[index]}&rdquo;
      </blockquote>
      <div className="mt-6 flex justify-center gap-1.5" aria-hidden="true">
        {quotes.map((_, i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-teal" : "bg-offwhite/25"}`} />
        ))}
      </div>
    </div>
  );
}
