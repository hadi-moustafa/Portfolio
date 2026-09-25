import Link from "next/link";
import { contact, responseTime } from "@/lib/content";

/** Sticky bottom call-to-action, mobile only. */
export default function MobileCTA() {
  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-[110] border-t border-line bg-offwhite/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="flex gap-2">
        <Link
          href="/#contact"
          className="flex min-h-12 flex-1 items-center justify-center rounded-lg bg-coral font-display font-semibold text-navy"
        >
          Start a project →
        </Link>
        <a
          href={contact.whatsapp}
          aria-label="Message me on WhatsApp"
          className="flex min-h-12 w-12 items-center justify-center rounded-lg border-2 border-navy text-navy"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
            <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z" />
          </svg>
        </a>
      </div>
      <p className="mt-1.5 text-center text-xs text-muted">I reply within {responseTime}</p>
    </div>
  );
}
