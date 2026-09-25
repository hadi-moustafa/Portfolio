import Link from "next/link";
import type { ReactNode } from "react";
import { flagships, contact } from "@/lib/content";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

/** Layout for every page other than the home page: header, breadcrumbs, footer. */
export default function PageShell({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col pb-28 sm:pb-0">
      <header className="sticky top-0 z-[100] flex items-center justify-between px-3.5 sm:px-5 py-3 bg-bg/75 backdrop-blur-md border-b border-line">
        <Link href="/" className="font-extrabold tracking-tight text-sm">
          hadi<span className="text-amber">.</span>
        </Link>
        <nav className="flex items-center gap-4 text-xs font-mono">
          <Link href="/#case-studies" className="text-ink-dim hover:text-amber">
            work
          </Link>
          <Link href="/#faq" className="text-ink-dim hover:text-amber">
            faq
          </Link>
          <Link
            href="/#contact"
            className="font-bold px-3.5 py-1.5 rounded-md bg-amber text-[#161105]"
          >
            contact ↗
          </Link>
        </nav>
      </header>

      <main className="flex-1 max-w-[760px] w-full mx-auto px-6 py-12">
        <Breadcrumbs items={crumbs} />
        {children}
      </main>

      <SiteLinks />
    </div>
  );
}

export function SiteLinks() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-between gap-6 text-sm">
        <nav aria-label="Case studies" className="flex flex-wrap gap-x-4 gap-y-2">
          {flagships.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="text-ink-dim hover:text-amber">
              {p.title.split(" — ")[0]}
            </Link>
          ))}
        </nav>
        <nav aria-label="Site" className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="text-ink-dim hover:text-amber">
            Home
          </Link>
          <Link href="/privacy" className="text-ink-dim hover:text-amber">
            Privacy
          </Link>
          <a href={`mailto:${contact.email}`} className="text-ink-dim hover:text-amber">
            {contact.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
