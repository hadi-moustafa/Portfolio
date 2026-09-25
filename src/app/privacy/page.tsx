import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { contact } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What data hadimoustafa.dev collects (Google Analytics, contact form via Formspree), why, how long it's kept, and how to request deletion.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "25 September 2026";

export default function PrivacyPage() {
  return (
    <PageShell crumbs={[{ name: "Privacy policy", path: "/privacy" }]}>
      <h1 className="mb-2 font-display text-4xl font-bold tracking-tight text-navy">Privacy policy</h1>
      <p className="mb-10 text-sm text-muted">Last updated: {UPDATED}</p>

      <div className="space-y-8 [&_a]:font-semibold [&_a]:text-teal-ink [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy">
        <section>
          <h2>Who I am</h2>
          <p>
            This website ({SITE_URL}) is run by Hadi Moustafa (se.hadi), a freelance software engineer and digital marketer based in Lebanon. For any
            privacy question, email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </section>

        <section>
          <h2>What I collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-navy">Contact form.</strong> If you send an inquiry, I receive
              the name, email address, project type, budget range and message you enter. The form is processed by{" "}
              <a href="https://formspree.io/legal/privacy-policy" rel="noopener">
                Formspree
              </a>
              , which delivers it to my inbox.
            </li>
            <li>
              <strong className="text-navy">Analytics.</strong> I use Google Analytics 4 to see
              aggregate usage (pages visited, referrer, device type, approximate location). IP
              addresses are anonymised. Google&apos;s handling is described in its{" "}
              <a href="https://policies.google.com/privacy" rel="noopener">
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong className="text-navy">Direct messages.</strong> If you contact me on
              Instagram or WhatsApp, those messages are handled under Meta&apos;s own privacy
              policies. I only use them to reply to you.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why, and on what basis</h2>
          <p>
            Inquiry details are used only to reply to you and discuss a potential project
            (legitimate interest / steps prior to a contract). Analytics data is used to improve
            this site. I never sell your data or use it for advertising.
          </p>
        </section>

        <section>
          <h2>How long I keep it</h2>
          <p>
            Inquiry emails are kept for as long as needed to handle the conversation and any
            resulting project. Google Analytics data is retained for up to 14 months.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You can ask for a copy of your data, a correction, or deletion at any time by emailing{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>. You can block analytics with
            any standard browser privacy setting or extension.
          </p>
        </section>

        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </div>
    </PageShell>
  );
}
