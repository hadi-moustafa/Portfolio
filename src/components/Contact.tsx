import { contact, responseTime } from "@/lib/links";
import ChannelLinks from "./ChannelLinks";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./ui";

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-line bg-surface">
      <Reveal>
        <SectionHeading
          id="contact"
          eyebrow="Contact"
          title="Tell me what's slowing your business down"
          intro={
            <>
              The fastest way is WhatsApp. Or use the form, and{" "}
              <strong className="text-navy">I&apos;ll reply within {responseTime}.</strong>
            </>
          }
        />
      </Reveal>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.05}>
          <aside className="rounded-xl border border-line bg-offwhite p-6">
            <h3 className="font-display text-lg font-semibold text-navy">Message me directly</h3>
            <p className="mt-1 mb-5 text-[0.95rem]">WhatsApp {contact.phone}</p>
            <ChannelLinks stacked />
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
