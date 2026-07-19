"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative max-w-[1000px] mx-auto px-6 pt-32 pb-16">
      <div className="min-h-[80vh] flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full border border-amber-dim text-amber">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-[pulse-dot_2s_infinite]" />
            SYSTEMS ONLINE
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1]"
        >
          HADI MOUSTAFA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-5 max-w-xl text-lg sm:text-xl text-ink-dim"
        >
          Backend engineer. I build for the moments when the system is under{" "}
          <em className="not-italic font-serif italic text-amber">real</em> load — not the demo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex gap-3.5 flex-wrap items-center"
        >
          <a
            href="#projects"
            className="font-mono text-sm font-bold px-5 py-3 rounded-md bg-amber text-[#161105]"
          >
            View Governor →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-3 rounded-md border border-line text-ink"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* annotation objects */}
      <motion.div
        initial={{ opacity: 0, rotate: 6, y: 10 }}
        whileInView={{ opacity: 1, rotate: 3, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden lg:block absolute top-24 right-2 w-[220px] bg-paper text-paper-ink px-4 py-4 rounded-sm shadow-2xl text-sm leading-snug"
        style={{ fontFamily: "var(--font-accent-serif)" }}
      >
        quick note: I write every line myself — AI-assisted, never AI-authored.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -4, y: 10 }}
        whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="hidden lg:block absolute top-56 right-[-30px] w-[300px] bg-paper text-paper-ink px-5 py-4 rounded shadow-2xl"
      >
        <div className="font-extrabold text-base">reliable</div>
        <div className="font-mono text-xs text-[#6b6355] mb-2">/rɪˈlaɪ.ə.bəl/ · adj.</div>
        <div className="text-[0.82rem] leading-relaxed">
          from Old French <i>relier</i> — to bind together again. what I&apos;m actually
          optimizing for in every system:{" "}
          <b className="text-amber-dim">it holds, even after it breaks.</b>
        </div>
      </motion.div>
    </section>
  );
}
