import Link from "next/link";
import { caseStudies, contact, services } from "@/lib/content";
import { positioning } from "@/lib/positioning";
import Wordmark from "./Wordmark";

const link = "inline-flex min-h-11 items-center text-offwhite/85 transition-colors duration-200 hover:text-teal";

/** Site-wide footer (navy band). */
export default function SiteFooter() {
  return (
    <footer className="bg-navy pb-32 text-offwhite sm:pb-10" dir="ltr" lang="en">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="se.hadi — home" className="inline-flex min-h-11 items-center text-2xl">
              <Wordmark light />
            </Link>
            <p className="mt-3 text-sm text-offwhite/80">{positioning.tagline}</p>
          </div>

          <nav aria-label="Services">
            <h2 className="mb-2 font-display text-sm font-semibold text-teal">Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={link}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Work">
            <h2 className="mb-2 font-display text-sm font-semibold text-teal">Work</h2>
            <ul>
              {caseStudies
                .filter((p) => !p.placeholder)
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className={link}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/engineering" className={link}>
                  Engineering notes
                </Link>
              </li>
              <li>
                <Link href="/#about" className={link}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-2 font-display text-sm font-semibold text-teal">Get in touch</h2>
            <ul>
              <li>
                <a href={contact.whatsappChat} className={link} data-track="whatsapp">
                  WhatsApp {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.instagram} className={link}>
                  Instagram {contact.instagramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={`${link} break-all`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.github} className={link}>
                  GitHub
                </a>
              </li>
              <li>
                <a href={contact.linkedin} className={link}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-offwhite/15 py-6 text-sm text-offwhite/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} se.hadi · Hadi Moustafa · Lebanon</p>
          <div className="flex items-center gap-5">
            <Link href="/ar" hrefLang="ar" className="inline-flex min-h-11 items-center hover:text-teal">
              عربي
            </Link>
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-teal">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
