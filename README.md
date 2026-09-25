# hadimoustafa.dev

Portfolio and freelance site for Hadi Moustafa, backend engineer. Next.js 16 (App Router), deployed on Vercel at https://hadimoustafa.dev.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Environment variables (set in Vercel)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-…`). Analytics is off when unset. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional override of the Formspree form ID (defaults to `maendpak`). |

## Content

All copy lives in `src/lib/content.ts`: projects/case studies, FAQ, response time, and testimonials (real reviews only). Site-wide URL/SEO constants live in `src/lib/site.ts`. See `CLAUDE.md` for the site standards every change must meet.
