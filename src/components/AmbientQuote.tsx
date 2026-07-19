import Reveal from "./Reveal";

export default function AmbientQuote() {
  return (
    <section className="text-center px-6 py-24">
      <Reveal>
        <blockquote
          className="text-lg italic max-w-xl mx-auto text-[#d8d2c6]"
          style={{ fontFamily: "var(--font-accent-serif)" }}
        >
          &ldquo;[ a line you choose — quote, thinker, or reflection goes here ]&rdquo;
        </blockquote>
        <cite className="block mt-3.5 text-xs text-ink-dim font-mono not-italic">
          — placeholder, swap for your own
        </cite>
      </Reveal>
    </section>
  );
}
