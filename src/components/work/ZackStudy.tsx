import Image from "next/image";
import { ph } from "@/lib/placeholder";
import { GitHubButton } from "../Work";
import Zoomable from "../Zoomable";
import { Ph, T, textLink } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const screens = [
  { name: "pricing", alt: "Zack Production pricing section with photography and videography packages" },
  { name: "gallery", alt: "Zack Production gallery of photo work, filterable by category" },
  { name: "contact", alt: "Zack Production contact section with a booking form" },
];

export default function ZackStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Website + admin panel · Beirut</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Zack Production</h1>
      <p className="mt-5 text-xl">
        A cinematic website for a Beirut photography and film studio, plus an admin panel so the studio updates its own photos,
        pricing and text, without waiting on a developer.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        <a href="https://www.zackproduction.com" className={textLink}>
          Visit zackproduction.com&nbsp;→
        </a>
        <GitHubButton href="https://github.com/hadi-moustafa/Zack_Production" name="Zack Production" />
      </div>
      <T as="p" className="mt-5 border-l-4 border-teal pl-4 text-lg italic">{ph("Zack Production quote + name/role")}</T>

      <div className="mt-10 grid items-end gap-6 md:grid-cols-[1fr_minmax(0,14rem)]">
        <Image src="/images/zack/desktop-hero.webp" alt="Zack Production home page on desktop" width={1600} height={1000} preload sizes="(min-width: 1024px) 760px, 100vw" className="h-auto w-full rounded-xl border border-line" />
        <Image src="/images/zack/mobile-hero.webp" alt="Zack Production home page on a phone" width={780} height={1688} sizes="(min-width: 768px) 224px, 60vw" className="mx-auto h-auto w-3/5 rounded-2xl border-[6px] border-navy md:w-full" />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className={h2}>The problem</h2>
        <p className="mt-4">
          A photography studio sells on its pictures, so it needs a site that shows the work well on phones, makes booking easy and can
          change as often as the portfolio does.
        </p>
        <T as="p" className="mt-3">{ph("what Zack had before and what wasn't working")}</T>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className={h2}>What I built</h2>
        <ul className="mt-4 space-y-3">
          {[
            "A one-page public site: hero, about, gallery, pricing, clients and contact, built mobile-first.",
            "An admin panel to manage photos and categories, pricing, page text, clients, social links and incoming contact messages.",
            "A contact form that emails the studio and keeps every message in the admin panel.",
          ].map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {x}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Ph block>Zack Production admin panel screenshots</Ph>
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Screens</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {screens.map((s) => (
            <Zoomable key={s.name} src={`/images/zack/desktop-${s.name}.webp`} alt={s.alt} width={1600} height={1000} sizes="(min-width: 768px) 360px, 100vw" />
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className={h2}>Timeline</h2>
        <p className="mt-4">About three weeks from start to launch: September 15 to October 4, 2026.</p>
        <T as="p" className="mt-3">{ph("Zack Production results since launch (inquiries, bookings)")}</T>
        <details className="mt-6 rounded-xl border border-line bg-surface p-5">
          <summary className="cursor-pointer font-display font-semibold text-navy">For developers</summary>
          <p className="mt-3">
            Next.js on Vercel, Supabase (Postgres, Storage, Auth with row-level security) for content and the admin panel, and Resend for
            contact-form email.
          </p>
        </details>
      </section>
    </>
  );
}
