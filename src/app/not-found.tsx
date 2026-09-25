import type { Metadata } from "next";
import Link from "next/link";
import { flagships, services } from "@/lib/content";
import SiteFooter from "@/components/SiteFooter";
import Wordmark from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist on hadimoustafa.dev. Head back home, see my services or read a case study.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:py-24">
        <p className="eyebrow mb-4">error 404 · route not found</p>
        <h1 className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
          This page doesn&apos;t exist<span className="text-teal">/</span>
        </h1>
        <p className="mt-5 text-lg">
          The page you asked for isn&apos;t on <Wordmark /> — it may have moved, or the link may
          have a typo.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="flex min-h-12 items-center justify-center rounded-lg bg-coral px-6 font-display font-semibold text-navy">
            ← Back to home
          </Link>
          <Link href="/#contact" className="flex min-h-12 items-center justify-center rounded-lg border-2 border-navy px-6 font-display font-semibold text-navy">
            Contact me
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <nav aria-label="Services">
            <h2 className="eyebrow mb-2">services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-flex min-h-11 items-center font-semibold text-coral-ink hover:underline">
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Case studies">
            <h2 className="eyebrow mb-2">case studies</h2>
            <ul>
              {flagships.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className="inline-flex min-h-11 items-center font-semibold text-coral-ink hover:underline">
                    {p.title.split(" — ")[0]} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
