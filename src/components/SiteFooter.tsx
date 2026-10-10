import Link from "next/link";
import { contact, flagships, navLinks, services } from "@/lib/content";
import Wordmark from "./Wordmark";

const link = "inline-flex min-h-11 items-center text-offwhite/85 hover:text-teal";

/** Site-wide footer (navy band). `n` is the section number on the home page. */
export default function SiteFooter({ n }: { n?: string }) {
  return (
    <footer className="bg-navy pb-32 text-offwhite sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {n && <p className="eyebrow mb-3 !text-teal">{n} — footer</p>}
            <Link href="/" aria-label="se.hadi — home" className="inline-flex min-h-11 items-center text-2xl">
              <Wordmark light />
            </Link>
            <p className="mt-3 text-sm text-offwhite/75">I build it. I market it. I fix it. I grow it.</p>
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

          <nav aria-label="Case studies">
            <h2 className="mb-2 font-display text-sm font-semibold text-teal">Case studies</h2>
            <ul>
              {flagships.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className={link}>
                    {p.title.split(" — ")[0]}
                  </Link>
                </li>
              ))}
              {navLinks.slice(2).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-2 font-display text-sm font-semibold text-teal">Get in touch</h2>
            <ul>
              <li>
                <a href={contact.instagram} className={link}>
                  Instagram {contact.instagramHandle}
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} className={link}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={`${link} break-all`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={link}>
                  {contact.phone}
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

        <div className="mt-10 flex flex-col gap-3 border-t border-offwhite/15 py-6 text-sm text-offwhite/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} se.hadi · Hadi Moustafa · Lebanon</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-teal">
              Privacy policy
            </Link>
            <span>{"// built by hand, not a template"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
