import { contact, responseTime } from "@/lib/content";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="stack-panel z-[90]">
      <div className="stack-panel-scroll">
        <div className="stack-panel-inner max-w-[760px] mx-auto w-full px-6 py-16">
          <Reveal>
            <div className="font-mono text-xs tracking-wide uppercase text-amber mb-3.5">
              06 — contact
            </div>
            <h2 className="text-3xl font-bold mb-3">Start a project</h2>
            <p className="text-ink-dim mb-8">
              Tell me what you&apos;re building and where it hurts.{" "}
              <strong className="text-ink">I reply within {responseTime}.</strong> Prefer email?{" "}
              <a href={`mailto:${contact.email}`} className="text-amber">
                {contact.email}
              </a>
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
