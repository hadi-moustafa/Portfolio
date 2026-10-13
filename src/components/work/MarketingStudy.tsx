import { ph } from "@/lib/placeholder";
import Zoomable from "../Zoomable";
import { T, textLink } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const lead = [
  { value: "218", label: "profile visits, at $0.13 each" },
  { value: "6,092", label: "engagements for $48.35 (about $0.01 each)" },
];
const totals = [
  { value: "$68.35", label: "total spend" },
  { value: "88,701", label: "impressions" },
  { value: "$0.77", label: "per 1,000 impressions" },
];
const breakdown = [
  { title: "Meta overall: $48.35", body: "60,906 people reached, 74,466 impressions, average frequency 1.22." },
  { title: "Meta, engagement ad set: $19.91", body: "53,513 people reached and 3,743 engagements, at $0.01 each." },
  { title: "Meta, profile-visits ad set: $28.44", body: "8,119 people reached, 19,956 impressions at a frequency of 2.46, and 218 profile visits at $0.13 each." },
  { title: "TikTok: $20.00", body: "14,235 impressions in 3 days (spend ran about Oct 6–9), peaking on Oct 8." },
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

export default function MarketingStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Test campaign · Meta + TikTok · October 2026</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Test campaign: what $68 of ads buys</h1>
      <p className="mt-5 text-lg">
        A small paid-social test for a fashion brand in Africa, run together with @zeinabali_93.{" "}
        <strong className="text-navy">Objective: reach and engagement, not sales.</strong> Every number below comes straight from Meta
        Ads Manager and TikTok Ads Manager.
      </p>
      <p className="mt-4">
        <a href="https://www.instagram.com/p/DeT_KwAjWt3/" className={textLink}>
          See the results post on Instagram&nbsp;↗
        </a>
      </p>
      <div className="mt-5">
        <T as="div" className="rounded-xl border-2 border-dashed border-coral p-4">{ph("pilot: leads/messages, cost per result, testimonial (real client marketing pilot goes here)")}</T>
      </div>

      <section className="mt-14">
        <h2 className={h2}>Goal and context</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-navy">When:</strong> October 4–10, 2026.
          </li>
          <li>
            <strong className="text-navy">Budget:</strong> $68.35 in total: $48.35 on Meta (Instagram and Facebook), split into an engagement ad set
            ($19.91) and a profile-visits ad set ($28.44), plus $20.00 on TikTok.
          </li>
          <li>
            <strong className="text-navy">Goal:</strong> get people engaging with the posts and visiting the profile. Sales were not the objective.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What I did</h2>
        <T as="p" className="mt-4">{ph("audience, targeting, creative, placements")}</T>
        <div className="mt-4">
          <T as="div">{ph("marketing/ad-creatives/*.jpg: the actual ad creatives that ran")}</T>
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Results</h2>
        <div className="mt-6">
          <Tiles items={lead} big />
        </div>
        <div className="mt-3">
          <Tiles items={totals} />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {breakdown.map((b) => (
            <div key={b.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display text-lg font-semibold text-navy">{b.title}</h3>
              <p className="mt-2">{b.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.95rem]">
          <strong className="text-navy">Note:</strong> the two Meta ad sets use different attribution settings (1-day click for profile visits,
          7-day click or 1-day view for engagement), so their cost per result isn&apos;t directly comparable.
        </p>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What I learned, and what&apos;s next</h2>
        <T as="p" className="mt-4">{ph("what I learned / what I'd do next")}</T>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Receipts</h2>
        <p className="mt-3">Cropped to the key rows. Tap to zoom.</p>
        <div className="mt-6 grid gap-6">
          <Zoomable
            src="/images/marketing/meta-ads-manager.png"
            alt="Meta Ads Manager: all ad sets reached 60,906 people with 74,466 impressions and 6,092 results for $48.35; profile-visits ad set 218 results at $0.13; engagement ad set 3,743 results at $0.01"
            width={1478}
            height={183}
            caption="Meta Ads Manager, ad set level."
          />
          <Zoomable
            src="/images/marketing/tiktok-ads-manager.png"
            alt="TikTok Ads Manager, Oct 4 to 10, 2026: $20.00 spent and 14,235 impressions, with spend and impressions peaking on Oct 8"
            width={811}
            height={591}
            sizes="(min-width: 768px) 600px, 100vw"
            className="max-w-xl"
            caption="TikTok Ads Manager, campaign performance."
          />
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Update</h2>
        <T as="p" className="mt-4">{ph("followers gained, DMs, outcomes after 14 days")}</T>
      </section>
    </>
  );
}
