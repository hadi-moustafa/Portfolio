import Link from "next/link";
import { ph } from "@/lib/placeholder";
import Slides from "./Slides";
import { T } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const lead = [
  { value: "192,377", label: "people reached" },
  { value: "248,309", label: "impressions" },
];

const slides = [
  { src: "/images/reach-milestone/milestone.webp", alt: "Milestone: we reached 192,377 people in the last 15 days, with 248,309 impressions. Source: Meta Insights." },
  { src: "/images/reach-milestone/proof.webp", alt: "Straight from Meta: a Meta Insights table of reach and impressions per row, totalling 192,377 accounts reached and 248,309 impressions over the last 15 days." },
  { src: "/images/reach-milestone/thank-you.webp", alt: "Thank you for trusting us. Every number in this post started with a client who believed in our work." },
];

export default function ReachMilestoneStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Milestone · Meta Insights · Last 15 days</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">192,377 people reached in 15 days</h1>
      <p className="mt-5 text-lg">
        Over 15 days, the work I ran on Meta reached <strong className="text-navy">192,377 people</strong> and showed up on screens{" "}
        <strong className="text-navy">248,309 times</strong>. No estimates: both numbers are the totals in Meta Insights.
      </p>

      <section className="mt-14">
        <h2 className={h2}>The numbers</h2>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {lead.map((m) => (
            <div key={m.label} className="flex flex-col rounded-xl border border-line bg-surface p-5">
              <dt className="text-[0.95rem] text-charcoal">{m.label}</dt>
              <dd className="order-first font-display text-4xl font-bold tabular-nums text-navy sm:text-5xl">{m.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.95rem]">
          <strong className="text-navy">Reach</strong> counts the accounts that saw the work at least once.{" "}
          <strong className="text-navy">Impressions</strong> count every time it was shown, so one person can add several.
        </p>
        <T as="p" className="mt-4">{ph("reach milestone: the 15-day date range and which accounts or campaigns it covers")}</T>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Why it matters</h2>
        <p className="mt-4">
          Every number here started with a client who trusted me with their brand. Reach on its own isn&apos;t a sale, but it is the top of
          the funnel: the people who can now message, visit or buy. For what that turns into, see{" "}
          <Link href="/work/africa-client-campaign" className="font-semibold text-teal-ink underline underline-offset-4">
            821 conversations for $66.31
          </Link>
          .
        </p>
      </section>

      <section className="mt-14">
        <h2 className={h2}>The milestone post</h2>
        <p className="mt-3">The carousel I published, with the Meta Insights screenshot. Tap a slide to zoom.</p>
        <div className="mt-6">
          <Slides slides={slides} />
        </div>
      </section>
    </>
  );
}
