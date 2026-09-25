"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contact, navLinks } from "@/lib/content";
import Wordmark from "./Wordmark";

/** Persistent top nav on every page. Mobile: wordmark + menu button. */
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu after navigating.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="se.hadi — home" className="inline-flex min-h-11 items-center text-xl">
          <Wordmark />
        </Link>

        <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-teal/50 bg-teal/10 px-3 py-1 font-display text-[0.7rem] font-semibold tracking-wider text-teal-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-[pulse-dot_2s_infinite]" />
          AVAILABLE FOR PROJECTS
        </span>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-navy hover:text-teal-ink">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-lg bg-coral px-4 py-2.5 font-display font-semibold text-navy hover:brightness-95"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-navy"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="lg:hidden border-t border-line bg-offwhite px-4 pb-6 pt-2">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-3.5 font-display text-lg font-medium text-navy">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 font-display text-xs font-semibold tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            AVAILABLE FOR PROJECTS
          </div>
          <a href={contact.instagram} className="mt-4 inline-block text-sm text-navy underline underline-offset-4">
            {contact.instagramHandle} on Instagram
          </a>
        </nav>
      )}
    </header>
  );
}
