import { ispNumbers } from "@/lib/content";
import { ph } from "@/lib/placeholder";
import IspPhones from "../IspPhones";
import PhoneFrame from "../PhoneFrame";
import Zoomable from "../Zoomable";
import { Ph, T, WhatsAppButton } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const modules = [
  {
    title: "Collections, with an offline field view",
    benefit:
      "Collectors work from their route list (the app calls it Dabdabeh): today's houses in order, drag to reorder, Pay right on the row. It keeps working without internet and saves payments offline.",
    image: null as null | { src: string; w: number; h: number; alt: string },
    missing: "isp/offline-field-view.png (offline field view screen)",
  },
  {
    title: "Arabic WhatsApp reminders, with a live preview",
    benefit:
      "Debt warnings and payment confirmations are written for you in Arabic, with the customer's name, amount and date filled in automatically. Check the live preview, then send in one tap.",
    image: { src: "/images/isp/whatsapp-templates.webp", w: 819, h: 1679, alt: "WhatsApp message editor with an Arabic debt warning, the placeholders for name and amount, and a live preview" },
  },
  {
    title: "Subscribers, one tap from paid",
    benefit: "Every subscriber in one list, searchable and filterable by payment, debt or expiry, with a Pay button on each row.",
    image: { src: "/images/isp/subscribers.webp", w: 825, h: 1716, alt: "Subscriber list showing a total of 236, with a green Pay button on each row (names hidden)" },
  },
  {
    title: "Finance: the month at a glance",
    benefit: "How much of this month's billing is settled, what's overdue, and a monthly log you can filter and export to Excel.",
    image: { src: "/images/isp/monthly-log.webp", w: 817, h: 1219, alt: "Monthly log for October 2026 with $4,147 collected, filters by company, service, owner and collector, and an Export to Excel button" },
  },
  {
    title: "Products and technicians",
    benefit: "Stock, equipment and product sales, plus field jobs for technicians with the location attached.",
    image: null,
    missing: "isp/menu.png or products/technicians screen",
  },
];

export default function IspNetStudy() {
  return (
    <>
      {/* 1. Hero */}
      <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <p className="eyebrow mb-3">Billing & collections system · Lebanon</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">ISP.NET</h1>
          <p className="mt-5 text-xl text-charcoal">
            A local internet provider now sees who has paid, who owes and what&apos;s left to collect on one screen, instead of
            Excel sheets and paper.
          </p>
          <T as="p" className="mt-5 border-l-4 border-teal pl-4 text-lg italic">
            {ph('client name or "Owner, local ISP, (town)" + one-line quote')}
          </T>
          <div className="mt-6">
            <WhatsAppButton label="Get a system like this" />
          </div>
        </div>
        <div className="mt-14 lg:mt-0">
          <IspPhones preload />
        </div>
      </div>

      {/* 2. The problem */}
      <section className="mt-20 max-w-3xl">
        <h2 className={h2}>The problem</h2>
        <p className="mt-4">
          The provider tracked every collection in Excel sheets, and sometimes on pen and paper. There was no single place to see
          the month&apos;s billing, who had paid and who still owed.
        </p>
        <T as="p" className="mt-3">{ph("the specific pain: missed payments, no view of who owes what, collectors visiting wrong houses, disputes")}</T>
        <div className="mt-5">
          <Ph block>isp/old-excel-sheet.jpg: redacted &ldquo;before&rdquo; Excel sheet or paper log</Ph>
        </div>
      </section>

      {/* 3. What I built */}
      <section className="mt-20">
        <h2 className={h2}>What I built</h2>
        <p className="mt-3 max-w-3xl">Five modules in one private, login-only app that runs on the owner&apos;s and collectors&apos; phones.</p>
        <div className="mt-10 grid gap-12">
          {modules.map((m, i) => (
            <article key={m.title} className="grid items-center gap-6 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10">
              <div className={`order-last mx-auto w-full max-w-[15rem] ${i % 2 ? "" : "md:order-first"}`}>
                {m.image ? (
                  <PhoneFrame src={m.image.src} alt={m.image.alt} width={m.image.w} height={m.image.h} sizes="240px" />
                ) : (
                  <Ph block>{m.missing}</Ph>
                )}
              </div>
              <div>
                {i < 2 && <p className="eyebrow mb-2">Headline feature</p>}
                <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">{m.title}</h3>
                <p className="mt-2 text-lg">{m.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Results */}
      <section className="mt-20">
        <h2 className={h2}>The numbers, straight from the dashboard</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:items-start">
          <Zoomable
            src="/images/isp/dashboard.webp"
            alt="ISP.NET dashboard: 5,875 billed this month, 71% settled, 4,147 paid, 1,728 left to collect, 236 active subscribers"
            width={825}
            height={1216}
            sizes="280px"
            className="mx-auto w-full max-w-[17rem]"
            caption="The dashboard these numbers come from. Amounts are in US dollars."
          />
          <div>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ispNumbers.map((n) => (
                <div key={n.label} className="flex flex-col rounded-xl border border-line bg-surface p-4">
                  <dt className="text-sm text-charcoal">{n.label}</dt>
                  <dd className="order-first font-display text-2xl font-bold tabular-nums text-navy">{n.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-charcoal">A snapshot of one month (October 2026), not a before/after comparison.</p>
            <T as="p" className="mt-4">{ph("measured before/after stat confirmed by the client: hours saved per week, % paid on time")}</T>
          </div>
        </div>
      </section>

      {/* 5. Security and trust */}
      <section className="mt-20 max-w-3xl">
        <h2 className={h2}>Security and trust</h2>
        <p className="mt-3">It holds a business&apos;s money, so it&apos;s a private, login-only system.</p>
        <ul className="mt-5 space-y-3">
          {[
            "Staff and collectors each sign in with their own account; collector logins can't be turned into admin access.",
            "Every payment and change is recorded in a plain-English activity log, with who did it and when.",
            "A database-level rule stops any invoice from being paid more than it's worth, even if two people submit at the same time.",
            "Invoices are generated automatically each day inside the database, in Beirut time.",
          ].map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {x}
            </li>
          ))}
          <T as="li">{ph("backups: how often, where, and who can see what")}</T>
        </ul>
      </section>

      {/* 6. How it was built */}
      <section className="mt-20 max-w-3xl">
        <h2 className={h2}>How it was built</h2>
        <p className="mt-4">
          Built over about ten weeks, from late July to early October 2026, and released in phases while the business kept running.
          Existing subscribers came in through an Excel import with duplicate checks.
        </p>
        <T as="p" className="mt-3">{ph("rollout and migration from Excel: how long, who was trained, any hiccups")}</T>
        <details className="mt-6 rounded-xl border border-line bg-surface p-5">
          <summary className="cursor-pointer font-display font-semibold text-navy">For developers</summary>
          <p className="mt-3">
            React + TypeScript front end, Supabase (Postgres, auth) back end, and an offline-first PWA using IndexedDB (Dexie) that
            syncs when the connection returns. Billing runs as scheduled Postgres jobs (pg_cron) with integrity constraints on payments.
          </p>
        </details>
      </section>

      {/* 7. Demo */}
      <section className="mt-20 max-w-3xl">
        <h2 className={h2}>See it working</h2>
        <div className="mt-5">
          <Ph block>isp/demo.mp4: 60–90 s walkthrough (find subscriber → Pay → WhatsApp confirmation → activity log)</Ph>
        </div>
        <div className="mt-4">
          <Ph>demo URL for the &ldquo;Try the demo&rdquo; button (fake data)</Ph>
        </div>
      </section>
    </>
  );
}
