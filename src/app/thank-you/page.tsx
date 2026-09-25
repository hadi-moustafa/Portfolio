import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { flagships, responseTime } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thanks for your inquiry",
  description: `Your message to Hadi Moustafa was received. Expect a reply within ${responseTime}.`,
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <PageShell crumbs={[{ name: "Thank you", path: "/thank-you" }]}>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
        Thanks, your message is in<span className="text-amber">.</span>
      </h1>
      <p className="text-lg text-ink-dim mb-10">
        I read every inquiry myself and will reply within{" "}
        <strong className="text-ink">{responseTime}</strong>. Keep an eye on your inbox (and your spam
        folder, just in case).
      </p>

      <h2 className="text-xl font-bold mb-4">While you wait, read a case study</h2>
      <ul className="space-y-3 mb-10">
        {flagships.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="text-amber">
              {p.title} →
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="font-mono text-sm px-5 py-3 rounded-md border border-line inline-block">
        ← Back to home
      </Link>
    </PageShell>
  );
}
