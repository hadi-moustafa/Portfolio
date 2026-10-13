import { ph } from "@/lib/placeholder";
import Zoomable from "../Zoomable";
import { T, textLink } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const lead = [
  { value: "98", label: "Instagram profile visits" },
  { value: "$0.07", label: "per profile visit" },
];
const totals = [
  { value: "$6.83", label: "total spend" },
  { value: "9,659", label: "people reached" },
  { value: "10,241", label: "impressions" },
];

function Tiles({ items, big = false }: { items: { value: string; label: string }[]; big?: boolean }) {
  return (
    <dl className={`grid gap-3 ${items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((m) => (
        <div key={m.label} className="flex flex-col rounded-xl border border-line bg-surface p-5">
          <dt className="text-[0.95rem] text-charcoal">{m.label}</dt>
          <dd className={`order-first font-display font-bold tabular-nums text-navy ${big ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function TechStoreStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Client campaign · Meta ads · Profile visits</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        A technology store: 98 Instagram profile visits for $6.83
      </h1>
      <p className="mt-5 text-lg">
        Hadi runs a technology store and wanted more people visiting the store&apos;s Instagram account.{" "}
        <strong className="text-navy">Objective: Instagram profile visits.</strong> One Meta campaign, one ad set, and every number below
        comes straight from Meta Ads Manager.
      </p>
      <p className="mt-4">
        <a href="https://www.instagram.com/p/DebkLSZtoiF/" className={textLink}>
          See the results post on Instagram&nbsp;↗
        </a>
      </p>

      <section className="mt-14">
        <h2 className={h2}>Goal and context</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-navy">Client:</strong> Hadi, owner of a technology store.
          </li>
          <li>
            <strong className="text-navy">Goal:</strong> get new people to visit the store&apos;s Instagram profile.
          </li>
          <li>
            <strong className="text-navy">Setup:</strong> a single Meta campaign with one ad set, optimised for Instagram profile visits.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What I did</h2>
        <T as="p" className="mt-4">{ph("tech store: audience, targeting, creative, budget per day, campaign dates")}</T>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Results</h2>
        <div className="mt-6">
          <Tiles items={lead} big />
        </div>
        <div className="mt-3">
          <Tiles items={totals} />
        </div>
        <p className="mt-4 text-[0.95rem]">
          <strong className="text-navy">Note:</strong> profile visits are counted on a 1-day click basis. Frequency was 1.06, so almost
          everyone saw the ad once, and 1,000 impressions cost about $0.67. The campaign was still running when these numbers were taken.
        </p>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Receipts</h2>
        <p className="mt-3">Tap to zoom.</p>
        <div className="mt-6 grid gap-6">
          <Zoomable
            src="/images/hadi-tech-store/meta-ads-manager.png"
            alt="Meta Ads Manager, campaign and ad set rows: 9,659 people reached, 10,241 impressions, frequency 1.06, 98 Instagram profile visits on 1-day click, $6.83 spent"
            width={1800}
            height={170}
            caption="Meta Ads Manager, campaign and ad set level."
          />
          <Zoomable
            src="/images/hadi-tech-store/results-post.webp"
            alt="Results summary: 98 Instagram profile visits from a single ad campaign, 9,659 people reached, 10,241 impressions, $6.83 total spent"
            width={1080}
            height={1350}
            sizes="(min-width: 768px) 448px, 100vw"
            className="max-w-md"
            caption="The results post, as shared on Instagram."
          />
        </div>
      </section>
    </>
  );
}
