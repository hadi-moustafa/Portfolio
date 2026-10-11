"use client";

import { useEffect } from "react";

const rules: [RegExp, string, string][] = [
  [/^https:\/\/wa\.me\//, "contact_click", "whatsapp"],
  [/^https:\/\/(ig\.me|instagram\.com)\//, "contact_click", "instagram"],
  [/^mailto:/, "contact_click", "email"],
  [/^tel:/, "contact_click", "phone"],
  [/\/resume\.pdf$/, "resume_download", "resume"],
  [/^\/(ar\/)?work\//, "case_study_open", "case_study"],
];

/**
 * GA4 click events: WhatsApp / Instagram / email clicks, résumé downloads,
 * case-study opens and demo clicks (links with data-track="demo").
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest("a");
      const href = a?.getAttribute("href");
      if (!a || !href) return;
      if (a.dataset.track === "demo") {
        window.gtag?.("event", "demo_click", { link_url: href });
        return;
      }
      const hit = rules.find(([re]) => re.test(href));
      if (hit) window.gtag?.("event", hit[1], { channel: hit[2], link_url: href, page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
