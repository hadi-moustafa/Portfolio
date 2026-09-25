@AGENTS.md

# Site standards (mandatory — apply to all existing and future work)

Production domain: **https://hadimoustafa.dev** (hooked to Vercel). Site-wide constants live in `src/lib/site.ts`; never hard-code the URL elsewhere.

Every change must keep all of these true. When adding a page or feature, check the list.

**Mobile-first (mandatory)**
- Design and write every component for a ~360–390px phone first; enhance upward with `sm:`/`md:`/`lg:` only. Unprefixed Tailwind classes = mobile.
- Touch targets ≥ 44px, body text ≥ 16px, no horizontal scroll at 320px, no hover-only interactions.
- Heavy/decorative extras (three.js, custom cursor) load only on large screens / fine pointers.
- Test every change at 390px width before desktop.

**Brand: se.hadi (light only)**
- Wordmark `se.hadi/`, navy with a teal slash, via `src/components/Wordmark.tsx`, on every page (nav, footer, 404, OG images, icons).
- Palette tokens (in `globals.css`): navy `#0D1B2A`, teal `#00C2CB`, coral `#FF6B5B`, off-white `#F5F5F0` (page bg), charcoal `#2B2B2B` (body text), teal-ink `#00767C` and coral-ink `#B83A2B` (small text). Never put small text in raw teal/coral on off-white (fails contrast). Coral buttons use navy text.
- Exactly two fonts: Poppins (headings, wordmark, section labels, buttons) and Inter (everything else). No monospace, no serif.
- No theme switcher, no dark mode.
- Instagram @se.hadimoustafa is linked in nav/contact/footer and in the schema `sameAs`.

**Per page**
- Unique `title` (via the root `title.template`) and unique meta `description`.
- Canonical tag: `alternates: { canonical: "/path" }` in the page's `metadata`.
- Exactly one `<h1>`, unique across the site; logical h2/h3 below it.
- Server-rendered, meaningful HTML ("proper page source"): content must appear in view-source, not only after JS runs.
- Visible breadcrumbs + `BreadcrumbList` JSON-LD on every page except home (use `src/components/PageShell.tsx`, which includes `Breadcrumbs.tsx`).
- Social share image: a `opengraph-image.tsx` (root one is inherited; add a specific one for important pages).
- Add the route to `src/app/sitemap.ts` (unless it is noindex, e.g. `/thank-you`) and to `public/llms.txt`.
- Internal links to/from related pages (header, footer, in-content links). Use `next/link` for internal routes.

**Site-wide**
- `sitemap.xml`, `robots.txt`, `llms.txt`, custom 404 (`src/app/not-found.tsx`), privacy policy (`/privacy`), thank-you page after inquiry (`/thank-you`, noindex).
- Structured data in root layout: `Person` + `ProfessionalService` (LocalBusiness). Keep it in sync with `src/lib/site.ts`.
- Favicon/icons are our own `s/` mark (`src/app/icon.png`, `apple-icon.png`, `favicon.ico`). The browser tab, titles, headers and page source must never show Vite, React, Vercel, or Next.js branding (`poweredByHeader: false`).
- Google Analytics 4 via `NEXT_PUBLIC_GA_ID` (loaded with `next/script`, `afterInteractive`). Privacy policy must list every tracker/processor used.
- Inquiry form posts to Formspree (`NEXT_PUBLIC_FORMSPREE_ID`) then redirects to `/thank-you`.
- Conversion: clear CTA above the fold, sticky mobile CTA, response-time promise (`responseTime` in `src/lib/content.ts`), case-study section, FAQ with at least 5 entries (+ `FAQPage` JSON-LD).

**Content integrity**
- No placeholder content ever ships (no lorem ipsum, "[image here]", fake links, TODO text).
- Reviews/testimonials and photos must be **real**. Never invent them. Components render nothing while their data arrays are empty.
- Every `<img>`/`next/image` has meaningful `alt` (or `alt=""` + `aria-hidden` if purely decorative).

**Performance / hygiene**
- Zero console errors or warnings in the browser and zero build warnings.
- No production browser source maps (`productionBrowserSourceMaps: false`).
- Keep JS small: heavy libs (three.js, FX) must be dynamically imported and only loaded where they render (e.g. desktop only). Check chunk sizes after `npm run build`.
- `npm run lint` and `npm run build` must pass before committing.
