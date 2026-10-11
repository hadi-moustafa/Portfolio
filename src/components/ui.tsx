import type { ReactNode } from "react";
import { SHOW_PLACEHOLDERS, txt } from "@/lib/placeholder";
import { contact } from "@/lib/links";
import { positioning } from "@/lib/positioning";
import { btnPrimary } from "@/lib/styles";
import WhatsAppIcon from "./WhatsAppIcon";

export { WhatsAppIcon };

export { btnPrimary, btnSecondary, btnSecondaryOnDark, textLink } from "@/lib/styles";

/**
 * Every homepage section uses this: one container width, one left edge,
 * 64px vertical padding on mobile and 96px from lg up.
 */
export function Section({
  id,
  className = "",
  innerClassName = "",
  children,
}: {
  id: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <div className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24 ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  onDark = false,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow mb-3 ${onDark ? "!text-teal" : ""}`}>{eyebrow}</p>
      <h2 id={`${id}-title`} className={`font-display text-3xl font-bold sm:text-4xl ${onDark ? "text-offwhite" : "text-navy"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-3 text-lg ${onDark ? "text-offwhite/85" : ""}`}>{intro}</p>}
    </div>
  );
}

const TOKEN = /(\[\[PLACEHOLDER:.*?\]\])/g;

/**
 * Renders content text. Placeholders show as a dashed coral box in dev and
 * disappear in production (the whole element if nothing real is left).
 */
export function T({ children, as: Tag = "span", className }: { children: string; as?: "span" | "p" | "li" | "div" | "h3" | "h4" | "dd" | "dt"; className?: string }) {
  const v = txt(children);
  if (v === null) return null;
  if (!SHOW_PLACEHOLDERS) return <Tag className={className}>{v}</Tag>;
  return (
    <Tag className={className}>
      {v.split(TOKEN).map((part, i) =>
        part.startsWith("[[PLACEHOLDER:") ? <Ph key={i}>{part.slice(14, -2).trim()}</Ph> : part
      )}
    </Tag>
  );
}

/** Dev-only marker for a missing asset or block. */
export function Ph({ children, block = false }: { children: ReactNode; block?: boolean }) {
  if (!SHOW_PLACEHOLDERS) return null;
  const cls = "rounded border-2 border-dashed border-coral bg-coral/10 px-1.5 text-sm font-semibold text-coral-ink";
  return block ? (
    <div className={`${cls} flex min-h-24 items-center justify-center p-4 text-center`}>PLACEHOLDER: {children}</div>
  ) : (
    <span className={cls}>PLACEHOLDER: {children}</span>
  );
}

/** Primary call to action: WhatsApp with the prefilled message. */
export function WhatsAppButton({ label = positioning.primaryCta, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={contact.whatsappChat} className={`${btnPrimary} ${className}`} data-track="whatsapp">
      <WhatsAppIcon />
      {label}
    </a>
  );
}
