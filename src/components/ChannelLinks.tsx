import { contact } from "@/lib/links";
import { btnPrimary, btnSecondary, btnSecondaryOnDark } from "@/lib/styles";
import { WhatsAppIcon } from "./ui";

/** Direct contact: WhatsApp is primary (filled); Instagram and email are secondary (outlined). */
export default function ChannelLinks({ onDark = false, stacked = false }: { onDark?: boolean; stacked?: boolean }) {
  const outline = onDark ? btnSecondaryOnDark : btnSecondary;
  return (
    <div className={`grid gap-3 ${stacked ? "" : "sm:grid-cols-3"}`}>
      <a href={contact.whatsappChat} className={btnPrimary} data-track="whatsapp">
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a href={contact.instagramDM} className={outline}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
        Instagram
      </a>
      <a href={`mailto:${contact.email}`} className={outline}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
        Email
      </a>
    </div>
  );
}
