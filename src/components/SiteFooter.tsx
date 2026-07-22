"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, quotes } from "@/lib/content";
import Reveal from "./Reveal";

const QUOTE_INTERVAL_MS = 6000;

export default function SiteFooter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, QUOTE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" className="stack-panel z-[80]">
      <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6">
          <Reveal>
            <div className="text-center py-16 min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-lg italic max-w-xl mx-auto text-ink-dim"
                  style={{ fontFamily: "var(--font-accent-serif)" }}
                >
                  &ldquo;{quotes[index]}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
              <div className="flex justify-center gap-1.5 mt-6">
                {quotes.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === index ? "bg-amber" : "bg-line"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <footer className="border-t border-line pt-10 pb-10">
            <div className="flex justify-between flex-wrap gap-5">
              <div>
                <a href={`mailto:${contact.email}`} className="mr-4.5 text-sm hover:text-amber">
                  {contact.email}
                </a>
                <a href={contact.github} className="mr-4.5 text-sm hover:text-amber">
                  GitHub
                </a>
                <a href={contact.linkedin} className="mr-4.5 text-sm hover:text-amber">
                  LinkedIn
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-sm hover:text-amber"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="font-mono text-xs text-ink-dim">
                {"// built by hand, not a template"}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
