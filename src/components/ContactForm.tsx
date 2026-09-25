"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { contact } from "@/lib/content";
import { FORMSPREE_ID } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const field =
  "w-full rounded-md border border-line bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-dim/60 focus:outline-none focus:border-amber";

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
      className="grid gap-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-xs font-mono text-ink-dim">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5 text-xs font-mono text-ink-dim">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 text-xs font-mono text-ink-dim">
        What are you building?
        <textarea name="message" required rows={4} className={field} />
      </label>
      <input type="hidden" name="_subject" value="New project inquiry — hadimoustafa.dev" />
      {/* honeypot for bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-mono text-sm font-bold px-5 py-3 rounded-md bg-amber text-[#161105] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send inquiry →"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-ink-dim">
            {error ?? "Something went wrong."} You can also email me at{" "}
            <a href={`mailto:${contact.email}`} className="text-amber">
              {contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
