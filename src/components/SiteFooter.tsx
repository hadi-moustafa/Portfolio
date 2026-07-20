import { contact } from "@/lib/content";
import Reveal from "./Reveal";

export default function SiteFooter() {
  return (
    <section id="contact" className="stack-panel z-[80]">
      <div className="stack-panel-scroll">
      <div className="stack-panel-inner max-w-[1000px] mx-auto w-full px-6">
        <Reveal>
          <div className="text-center py-16">
            <blockquote
              className="text-lg italic max-w-xl mx-auto text-[#d8d2c6]"
              style={{ fontFamily: "var(--font-accent-serif)" }}
            >
              &ldquo;[ a line you choose — quote, thinker, or reflection goes here ]&rdquo;
            </blockquote>
            <cite className="block mt-3.5 text-xs text-ink-dim font-mono not-italic">
              — placeholder, swap for your own
            </cite>
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
            <div className="font-mono text-xs text-ink-dim">// built by hand, not a template</div>
          </div>
        </footer>
      </div>
      </div>
    </section>
  );
}
