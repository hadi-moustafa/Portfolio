"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { contact } from "@/lib/links";
import { formTextEn, type FormText } from "@/lib/form-text";
import { btnPrimary } from "@/lib/styles";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "maendpak";
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
const RATE_KEY = "contact:lastSent";
const RATE_MS = 60_000;

// 16px text prevents iOS zoom-on-focus. Navy-tinted borders for contrast, teal focus ring.
const field =
  "w-full min-h-12 rounded-lg border-2 border-navy/35 bg-surface px-4 py-3 text-base text-charcoal placeholder:text-muted transition-colors duration-200 hover:border-navy/60 focus:border-teal-ink focus:outline-none focus:ring-4 focus:ring-teal/30 aria-[invalid=true]:border-coral-ink";
const label = "grid content-start gap-1.5 text-[0.95rem] font-semibold text-navy";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;

type Errors = Partial<Record<"name" | "contact" | "need" | "message", string>>;

function validate(data: FormData, t: FormText): Errors {
  const e: Errors = {};
  const get = (k: string) => String(data.get(k) ?? "").trim();
  if (get("name").length < 2) e.name = t.invalidName;
  const c = get("contact");
  if (!EMAIL.test(c) && !(PHONE.test(c) && c.replace(/\D/g, "").length >= 7)) e.contact = t.invalidContact;
  if (!get("need")) e.need = t.invalidNeed;
  if (get("message").length < 10) e.message = t.invalidMessage;
  return e;
}

function lastSent(): number {
  try {
    return Number(localStorage.getItem(RATE_KEY) ?? 0);
  } catch {
    return 0;
  }
}

export default function ContactForm({ t = formTextEn, thankYouPath = "/thank-you" }: { t?: FormText; thankYouPath?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data, t);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
      return;
    }
    if (Date.now() - lastSent() < RATE_MS) {
      setStatus("error");
      setMessage(t.errorTooSoon);
      return;
    }

    // Formspree uses `email` as the reply-to address when the visitor gave one.
    const c = String(data.get("contact")).trim();
    if (EMAIL.test(c)) data.set("email", c);

    setStatus("sending");
    setMessage(null);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
        setMessage(body?.errors?.map((x) => x.message).join(" ") ?? null);
        setStatus("error");
        return;
      }
      try {
        localStorage.setItem(RATE_KEY, String(Date.now()));
      } catch {
        /* storage unavailable: skip the client-side throttle */
      }
      window.gtag?.("event", "generate_lead", { method: "contact_form", need: data.get("need") });
      setStatus("sent");
      setTimeout(() => router.push(thankYouPath), 900);
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <span id={`err-${k}`} className="text-sm font-medium text-coral-ink">
        {errors[k]}
      </span>
    ) : null;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `err-${k}` : undefined });

  return (
    <form onSubmit={onSubmit} action={ENDPOINT} method="POST" noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.name}
          <input name="name" required autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </label>
        <label className={label}>
          {t.contact}
          <input name="contact" required autoComplete="tel" className={field} {...aria("contact")} />
          {err("contact") ?? <span className="text-sm font-normal text-charcoal">{t.contactHint}</span>}
        </label>
      </div>
      <label className={label}>
        {t.need}
        <select name="need" required defaultValue="" className={field} {...aria("need")}>
          <option value="" disabled>
            {t.needPlaceholder}
          </option>
          {t.needs.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        {err("need")}
      </label>
      <label className={label}>
        {t.message}
        <textarea name="message" required rows={5} placeholder={t.messagePlaceholder} className={field} {...aria("message")} />
        {err("message")}
      </label>
      <label className={label}>
        <span>
          {t.budget} <span className="font-normal text-charcoal">{t.budgetOptional}</span>
        </span>
        <select name="budget" defaultValue="" className={field}>
          <option value="">{t.budgetPlaceholder}</option>
          {t.budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>
      <input type="hidden" name="_subject" value="New project inquiry — hadimoustafa.dev" />
      {/* honeypot for bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <button type="submit" disabled={status === "sending" || status === "sent"} className={`${btnPrimary} w-full disabled:opacity-60 sm:w-auto`}>
          {status === "sending" ? t.sending : `${t.submit} →`}
        </button>
        <p className="mt-3 text-sm text-charcoal">{t.microcopy}</p>
      </div>
      <div aria-live="polite">
        {status === "sent" && (
          <p className="rounded-lg border-2 border-teal-ink bg-teal/10 px-4 py-3 font-semibold text-navy">{t.success}</p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-lg border-2 border-coral-ink bg-coral/10 px-4 py-3 text-navy">
            {message ?? t.errorGeneric} {t.errorFallback}{" "}
            <a href={contact.whatsappChat} className="font-semibold underline">
              WhatsApp
            </a>{" "}
            ·{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
