import { ph } from "@/lib/placeholder";
import Slides from "./Slides";
import { T } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const lead = [
  { value: "821", label: "customer conversations started" },
  { value: "$0.08", label: "per conversation, on average" },
];
const totals = [
  { value: "$66.31", label: "total ad spend" },
  { value: "2", label: "campaigns" },
  { value: "$0.06", label: "best cost per conversation" },
];
const campaigns = [
  { title: "Campaign A: 614 conversations", body: "$36.88 spent, at $0.06 per conversation." },
  { title: "Campaign B: 207 conversations", body: "$29.43 spent, at $0.14 per conversation." },
];

const slides = [
  { src: "/images/africa-client/cover.webp", alt: "Results: 821 new customer conversations for $66.31 in total ad spend. Two campaigns, one client." },
  { src: "/images/africa-client/numbers.webp", alt: "Two campaigns, both delivered. Campaign A: 614 conversations started, $0.06 per conversation, $36.88 total spend. Campaign B: 207 conversations started, $0.14 per conversation, $29.43 total spend." },
  { src: "/images/africa-client/cost-per-conversation.webp", alt: "Cost per conversation: $0.06, six cents for every person who messaged the business. Second campaign $0.14 per conversation, about $0.08 on average across both." },
  { src: "/images/africa-client/how-we-work.webp", alt: "One person, the whole stack: I build it, I market it, I fix it, I grow it." },
  { src: "/images/africa-client/call-to-action.webp", alt: "Your business could be next. Based in Lebanon or anywhere in the world, let's get people talking about your brand. DM me." },
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

export default function AfricaClientStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Client campaign · Paid ads · Messages</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        A client in Africa: 821 customer conversations for $66.31
      </h1>
      <p className="mt-5 text-lg">
        Two ad campaigns for one client, built to get new customers messaging the business.{" "}
        <strong className="text-navy">Objective: conversations started, not likes.</strong> Every person counted below sent the business a
        message.
      </p>

      <section className="mt-14">
        <h2 className={h2}>Goal and context</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-navy">Client:</strong> a business in Africa.
          </li>
          <li>
            <strong className="text-navy">Goal:</strong> start conversations with new customers, as cheaply as possible.
          </li>
          <li>
            <strong className="text-navy">Setup:</strong> two campaigns, $66.31 in total ad spend.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What I did</h2>
        <T as="p" className="mt-4">{ph("Africa client: platform, audience, creative, budget per day, campaign dates")}</T>
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
          {campaigns.map((c) => (
            <div key={c.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.95rem]">
          <strong className="text-navy">Note:</strong> the $0.08 average is the total spend divided by all 821 conversations ($66.31 ÷ 821).
        </p>
      </section>

      <section className="mt-14">
        <h2 className={h2}>The results post</h2>
        <p className="mt-3">The carousel I published with these numbers. Tap a slide to zoom.</p>
        <div className="mt-6">
          <Slides slides={slides} />
        </div>
      </section>
    </>
  );
}
