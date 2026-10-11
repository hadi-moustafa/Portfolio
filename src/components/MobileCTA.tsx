"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { contact, responseTime } from "@/lib/links";
import { btnPrimary } from "@/lib/styles";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Sticky WhatsApp call-to-action, mobile only. It slides away while the
 * contact form is on screen so it never covers the fields or the submit button.
 */
export default function MobileCTA() {
  const ar = usePathname().startsWith("/ar");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("contact");
    if (!form) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { rootMargin: "0px 0px -10% 0px" });
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-[110] border-t border-line bg-offwhite/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-200 sm:hidden ${
        hidden ? "pointer-events-none translate-y-full" : ""
      }`}
    >
      <a href={contact.whatsappChat} className={`${btnPrimary} w-full`} data-track="whatsapp" tabIndex={hidden ? -1 : undefined}>
        <WhatsAppIcon />
        {ar ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
      </a>
      <p className="mt-1.5 text-center text-sm text-charcoal">
        {ar ? "أرد خلال 24 ساعة" : `I reply within ${responseTime}`}
      </p>
    </div>
  );
}
