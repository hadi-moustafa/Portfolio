/**
 * Missing content is written as `[[PLACEHOLDER: what is needed]]`, via `ph()`.
 *
 * Placeholders render in `next dev`, on Vercel preview deploys, or when
 * SHOW_PLACEHOLDERS=1. In production they are stripped, and any element whose
 * content is only a placeholder is hidden. `npm run check:placeholders` lists
 * every one still in the source.
 */
export const SHOW_PLACEHOLDERS =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview" ||
  process.env.SHOW_PLACEHOLDERS === "1";

const TOKEN = /\s*\[\[PLACEHOLDER:.*?\]\]/g;

/** Marks content Hadi still has to supply. */
export const ph = (what: string) => `[[PLACEHOLDER: ${what}]]`;

export const isPlaceholder = (v: string | undefined | null) => !!v && /^\s*\[\[PLACEHOLDER:/.test(v);

/**
 * Text ready to render: placeholders kept in dev, stripped in production.
 * Returns null when nothing real is left, so callers can skip the element.
 */
export function txt(v: string | undefined | null): string | null {
  if (!v) return null;
  const out = SHOW_PLACEHOLDERS ? v : v.replace(TOKEN, "").trim();
  return out.length > 0 ? out : null;
}

/** Keeps only real entries in production (drops items whose key field is a placeholder). */
export function real<T>(items: T[], field: (t: T) => string | undefined): T[] {
  return SHOW_PLACEHOLDERS ? items : items.filter((t) => !isPlaceholder(field(t)));
}
