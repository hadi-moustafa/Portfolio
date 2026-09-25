import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { contact, flagships, responseTime } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thanks for your inquiry",
  description: `Your message to Hadi Moustafa was received. Expect a reply within ${responseTime}.`,
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <PageShell crumbs={[{ name: "Thank you", path: "/thank-you" }]}>
      <h1 className="mb-5 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        Thanks, your message is in<span className="text-teal">/</span>
      </h1>
      <p className="mb-10 text-lg">
        I read every inquiry myself and will reply within{" "}
        <strong className="text-navy">{responseTime}</strong>. Keep an eye on your inbox (and your spam
        folder, just in case). Meanwhile, you can follow along on Instagram at{" "}
        <a href={contact.instagram} className="font-semibold text-teal-ink underline underline-offset-4">
          {contact.instagramHandle}
        </a>
        .
      </p>

      <h2 className="mb-4 font-display text-xl font-bold text-navy">While you wait, read a case study</h2>
      <ul className="mb-10">
        {flagships.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="inline-flex min-h-11 items-center font-semibold text-coral-ink hover:underline">
              {p.title} →
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="flex min-h-12 items-center justify-center rounded-lg border-2 border-navy px-6 font-display font-semibold text-navy sm:inline-flex">
        ← Back to home
      </Link>
    </PageShell>
  );
}
