import Slides from "./Slides";
import Zoomable from "../Zoomable";
import { textLink } from "../ui";
import { contact } from "@/lib/content";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const boosts = [
  {
    title: "Boost one: engagement",
    lead: { value: "5,090", label: "post engagements" },
    reach: "23,538",
    cost: "Less than half a cent per engagement",
    body: "Likes, comments, shares and saves from real people who stopped scrolling.",
  },
  {
    title: "Boost two: traffic",
    lead: { value: "2,904", label: "profile visits" },
    reach: "44,436",
    cost: "Under 2 cents per visit",
    body: "People who saw the ad, got curious and went to see the shop for themselves.",
  },
];

const why = [
  { title: "The right post", body: "Creative worth stopping the scroll for." },
  { title: "The right audience", body: "Shown to people who might actually buy." },
  { title: "Someone watching", body: "Numbers tracked, so nothing gets wasted." },
];

const slides = [
  { src: "/images/melhem-auto/cover.webp", alt: "Case study, retail: Pennies per result. How two small Instagram boosts put a retail brand in front of tens of thousands of people." },
  { src: "/images/melhem-auto/brief.webp", alt: "The brief: a retail brand, small budget, big goals. Goal 01: get people engaging. Goal 02: send people to the profile." },
  { src: "/images/melhem-auto/engagement-boost.webp", alt: "Engagement boost: 5,090 post engagements. 23,538 people reached, at less than half a cent per engagement." },
  { src: "/images/melhem-auto/traffic-boost.webp", alt: "Traffic boost: 2,904 profile visits. 44,436 people reached, at under 2 cents per visit." },
  { src: "/images/melhem-auto/why-it-works.webp", alt: "Cheap isn't luck, it's setup: the right post, the right audience, and someone watching the numbers." },
  { src: "/images/melhem-auto/call-to-action.webp", alt: "Your business could be next. In Lebanon or anywhere in the world, I build it, market it, fix it and grow it. DM me GROW." },
];

export default function MelhemAutoStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Client · Ads & social media · Instagram boosts</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        Melhem Auto Service: pennies per result from two Instagram boosts
      </h1>
      <p className="mt-5 text-lg">
        Melhem Auto Service sells quality auto parts imported from the USA, from Angré, Abidjan. I&apos;m their{" "}
        <strong className="text-navy">Ads & Social Media Manager</strong>. Small budget, big goals: two focused boosts put the shop in front of
        tens of thousands of people.
      </p>

      <section className="mt-14">
        <h2 className={h2}>The brief</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <strong className="text-navy">Client:</strong>{" "}Melhem Auto Service, an auto parts shop in Abidjan.
          </li>
          <li>
            <strong className="text-navy">Goal 1:</strong>{" "}get more people engaging with their posts.
          </li>
          <li>
            <strong className="text-navy">Goal 2:</strong>{" "}send more people to their Instagram profile.
          </li>
          <li>
            <strong className="text-navy">Setup:</strong>{" "}two boosts, one per goal, on a small budget.
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Results</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {boosts.map((b) => (
            <div key={b.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display text-lg font-semibold text-navy">{b.title}</h3>
              <dl className="mt-3 space-y-3">
                <div className="flex flex-col">
                  <dt className="text-[0.95rem] text-charcoal">{b.lead.label}</dt>
                  <dd className="order-first font-display text-4xl font-bold tabular-nums text-navy sm:text-5xl">{b.lead.value}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-[0.95rem] text-charcoal">people reached</dt>
                  <dd className="order-first font-display text-2xl font-bold tabular-nums text-navy">{b.reach}</dd>
                </div>
              </dl>
              <p className="mt-3">{b.body}</p>
              <p className="mt-3 font-semibold text-teal-ink">{b.cost}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Why it works</h2>
        <p className="mt-4">Cheap isn&apos;t luck. It&apos;s setup.</p>
        <ol className="mt-6 grid gap-3">
          {why.map((w, i) => (
            <li key={w.title} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
              <span className="font-display text-2xl font-bold tabular-nums text-teal-ink">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">{w.title}</h3>
                <p className="mt-1">{w.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className={h2}>The results post</h2>
        <p className="mt-3">The carousel I published with these numbers. Tap a slide to zoom.</p>
        <p className="mt-4">
          <a href="https://www.instagram.com/reel/De9yPH-NfGT/" className={textLink}>
            See the results post on Instagram&nbsp;↗
          </a>
        </p>
        <div className="mt-6">
          <Slides slides={slides} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>The partnership</h2>
        <p className="mt-3">The announcement post: I&apos;m now the Ads & Social Media Manager for Melhem Auto Service.</p>
        <Zoomable
          src="/images/melhem-auto/partnership.webp"
          alt="New partnership announcement: I'm now the Ads & Social Media Manager for Melhem Auto Service. Quality auto parts imported directly from the USA, at the best prices. Angré, Abidjan, +225 07 13 53 55 53, with a QR code to follow the shop."
          width={1080}
          height={1080}
          sizes="(min-width: 640px) 420px, 100vw"
          className="mt-6 max-w-md"
        />
        <p className="mt-4">
          <a href={contact.instagram} className={textLink}>
            Follow {contact.instagramHandle}{" "}on Instagram&nbsp;↗
          </a>
        </p>
      </section>
    </>
  );
}
