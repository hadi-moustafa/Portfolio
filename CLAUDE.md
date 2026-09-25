@AGENTS.md

# Site standards (mandatory — apply to all existing and future work)

Production domain: **https://hadimoustafa.dev** (hooked to Vercel). Site-wide constants live in `src/lib/site.ts`; never hard-code the URL elsewhere.

Every change must keep all of these true. When adding a page or feature, check the list.

**Per page**
- Unique `title` (via the root `title.template`) and unique meta `description`.
- Canonical tag: `alternates: { canonical: "/path" }` in the page's `metadata`.
- Exactly one `<h1>`, unique across the site; logical h2/h3 below it.
- Server-rendered, meaningful HTML ("proper page source"): content must appear in view-source, not only after JS runs.
- Visible breadcrumbs + `BreadcrumbList` JSON-LD on every page except home (use `src/components/Breadcrumbs.tsx`).
- Social share image: a `opengraph-image.tsx` (root one is inherited; add a specific one for important pages).
- Add the route to `src/app/sitemap.ts` (unless it is noindex, e.g. `/thank-you`) and to `public/llms.txt`.
- Internal links to/from related pages (header, footer, in-content links). Use `next/link` for internal routes.

**Site-wide**
- `sitemap.xml`, `robots.txt`, `llms.txt`, custom 404 (`src/app/not-found.tsx`), privacy policy (`/privacy`), thank-you page after inquiry (`/thank-you`, noindex).
- Structured data in root layout: `Person` + `ProfessionalService` (LocalBusiness). Keep it in sync with `src/lib/site.ts`.
- Favicon/icons are our own (`src/app/icon.svg`, `apple-icon.png`, `favicon.ico`). The browser tab, titles, headers and page source must never show Vite, React, Vercel, or Next.js branding (`poweredByHeader: false`).
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
