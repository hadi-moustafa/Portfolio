"use client";

import { useEffect } from "react";

const rules: [RegExp, string][] = [
  [/^https:\/\/(ig\.me|instagram\.com)\//, "instagram"],
  [/^https:\/\/wa\.me\//, "whatsapp"],
  [/^mailto:/, "email"],
  [/^tel:/, "phone"],
];

/** Sends a GA4 `contact_click` event when a contact channel link is clicked. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest("a");
      const href = a?.getAttribute("href");
      if (!href) return;
      const hit = rules.find(([re]) => re.test(href));
      if (hit) window.gtag?.("event", "contact_click", { channel: hit[1] });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
