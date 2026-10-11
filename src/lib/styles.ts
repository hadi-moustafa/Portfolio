// Shared class strings (safe to import from client components).

const btnBase =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 font-display font-semibold transition duration-200 focus-visible:outline-offset-4";
export const btnPrimary = `${btnBase} bg-coral text-navy hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_8px_20px_-8px_rgba(255,107,91,0.8)]`;
export const btnSecondary = `${btnBase} border-2 border-navy text-navy hover:bg-navy hover:text-offwhite`;
export const btnSecondaryOnDark = `${btnBase} border-2 border-offwhite/40 text-offwhite hover:bg-offwhite/10`;
/** Teal text link with an arrow that never wraps onto its own line. */
export const textLink =
  "inline-flex min-h-11 items-center whitespace-nowrap font-semibold text-teal-ink underline-offset-4 transition-colors duration-200 hover:underline";

