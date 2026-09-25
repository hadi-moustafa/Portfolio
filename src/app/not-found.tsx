import type { Metadata } from "next";
import Link from "next/link";
import { flagships } from "@/lib/content";
import { SiteLinks } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist on hadimoustafa.dev. Head back home or read a case study.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col pb-28 sm:pb-0">
      <main className="flex-1 max-w-[760px] w-full mx-auto px-6 py-24">
        <div className="font-mono text-xs text-amber mb-4">ERROR 404 · ROUTE NOT FOUND</div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5">
          This endpoint doesn&apos;t exist<span className="text-amber">.</span>
        </h1>
        <p className="text-lg text-ink-dim mb-10">
          The page you asked for isn&apos;t here. It may have moved, or the link may have a typo.
        </p>
        <div className="flex flex-wrap gap-3.5 mb-12">
          <Link
            href="/"
            className="font-mono text-sm font-bold px-5 py-3 rounded-md bg-amber text-[#161105]"
          >
            ← Back to home
          </Link>
          <Link href="/#contact" className="font-mono text-sm px-5 py-3 rounded-md border border-line">
            Contact me
          </Link>
        </div>
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink-dim mb-3">Case studies</h2>
        <ul className="space-y-2">
          {flagships.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="text-amber">
                {p.title} →
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteLinks />
    </div>
  );
}
