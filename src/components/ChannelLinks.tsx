import { contact } from "@/lib/content";

const btn =
  "flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 px-5 font-display font-semibold";

/** Direct contact channels: Instagram DM, WhatsApp, email. */
export default function ChannelLinks({ onDark = false }: { onDark?: boolean }) {
  const tone = onDark ? "border-offwhite/30 text-offwhite hover:bg-offwhite/10" : "border-navy text-navy hover:bg-navy hover:text-offwhite";
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <a href={contact.instagramDM} className={`${btn} ${tone}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
        DM on Instagram
      </a>
      <a href={contact.whatsapp} className={`${btn} ${tone}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z" />
        </svg>
        WhatsApp
      </a>
      <a href={`mailto:${contact.email}`} className={`${btn} ${tone}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
        Email
      </a>
    </div>
  );
}
