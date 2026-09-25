import { responseTime } from "@/lib/content";
import ChannelLinks from "./ChannelLinks";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact({ n }: { n: string }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <p className="eyebrow mb-3">{n} — contact</p>
          <h2 id="contact-title" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Start a project
          </h2>
          <p className="mt-3 text-lg">
            Tell me what you&apos;re building and where it hurts.{" "}
            <strong className="text-navy">I reply within {responseTime}.</strong>
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
          <p className="mt-10 mb-4 font-display font-semibold text-navy">Prefer to message directly?</p>
          <ChannelLinks />
        </Reveal>
      </div>
    </section>
  );
}
