"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { budgetRanges, contact, services } from "@/lib/content";
import { FORMSPREE_ID } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// 16px text prevents iOS zoom-on-focus.
const field =
  "w-full min-h-12 rounded-lg border-2 border-line bg-offwhite px-4 py-3 text-base text-charcoal placeholder:text-muted focus:border-teal-ink focus:outline-none";
const label = "grid gap-1.5 text-sm font-semibold text-navy";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          errors?: { message: string }[];
        } | null;
        setError(data?.errors?.map((e) => e.message).join(" ") ?? null);
        setStatus("error");
        return;
      }
      window.gtag?.("event", "generate_lead", { method: "contact_form" });
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" required autoComplete="email" inputMode="email" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Project type
          <select name="project_type" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose one…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className={label}>
          Budget
          <select name="budget" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose a range…
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        What are you building?
        <textarea name="message" required rows={5} className={field} />
      </label>
      <input type="hidden" name="_subject" value="New project inquiry — hadimoustafa.dev" />
      {/* honeypot for bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 w-full rounded-lg bg-coral px-6 font-display font-semibold text-navy hover:brightness-95 disabled:opacity-60 sm:w-auto sm:justify-self-start"
      >
        {status === "sending" ? "Sending…" : "Send inquiry →"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm">
          {error ?? "Something went wrong."} You can also email me at{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-coral-ink underline">
            {contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
