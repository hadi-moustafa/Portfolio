"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contact, navLinks } from "@/lib/links";
import WhatsAppIcon from "./WhatsAppIcon";
import Wordmark from "./Wordmark";

const arLabels: Record<string, string> = { Work: "أعمالي", Services: "الخدمات", About: "من أنا", Contact: "تواصل" };

/** Persistent top nav on every page. Mobile: wordmark + WhatsApp + menu button. */
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ar = pathname.startsWith("/ar");
  const base = ar ? "/ar" : "/";
  const links = navLinks.map((l) => ({ href: ar ? l.href.replace("/#", "/ar#") : l.href, label: ar ? arLabels[l.label] : l.label }));
  const lang = ar ? { href: "/", label: "English", hrefLang: "en" } : { href: "/ar", label: "عربي", hrefLang: "ar" };

  // Close the menu after navigating.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={base} aria-label="se.hadi — home" className="inline-flex min-h-11 items-center text-xl">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-navy transition-colors duration-200 hover:text-teal-ink">
              {l.label}
            </Link>
          ))}
          <a href={contact.instagram} aria-label={`Instagram ${contact.instagramHandle}`} className="flex h-11 w-11 items-center justify-center text-navy transition-colors duration-200 hover:text-teal-ink">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          <Link href={lang.href} hrefLang={lang.hrefLang} className="text-navy transition-colors duration-200 hover:text-teal-ink">
            {lang.label}
          </Link>
          <Link
            href={ar ? "/ar#contact" : "/#contact"}
            className="rounded-lg bg-coral px-4 py-2.5 font-display font-semibold text-navy transition duration-200 hover:-translate-y-0.5 hover:brightness-95"
          >
            {ar ? "ابدأ مشروعك" : "Start a project"}
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={contact.whatsappChat}
            data-track="whatsapp"
            className="flex min-h-11 items-center gap-1.5 rounded-lg bg-coral px-3 font-display text-sm font-semibold text-navy"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {ar ? "واتساب" : "WhatsApp"}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-navy"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-offwhite px-4 pt-2 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-3.5 font-display text-lg font-medium text-navy">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={lang.href} hrefLang={lang.hrefLang} className="block py-3.5 font-display text-lg font-medium text-navy">
                {lang.label}
              </Link>
            </li>
          </ul>
          <a href={contact.instagram} className="mt-2 inline-flex min-h-11 items-center text-[0.95rem] text-navy underline underline-offset-4">
            {contact.instagramHandle} on Instagram
          </a>
        </nav>
      )}
    </header>
  );
}
