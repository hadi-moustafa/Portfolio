import { contact } from "@/lib/content";
import Slides from "./Slides";
import { btnPrimary } from "../ui";

const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

const week = [
  { day: "Mon", plan: "Meeting + master's course study" },
  { day: "Tue", plan: "Content + outreach" },
  { day: "Wed", plan: "Coding + meetings" },
  { day: "Thu", plan: "Uni day" },
  { day: "Fri", plan: "Social + new leads" },
  { day: "Sat", plan: "Flexible: course work or buffer" },
  { day: "Sun", plan: "Day off" },
];

const promptCovers = [
  "About me: my work, working hours, time zone, best focus hours and low-energy hours.",
  "This week's inputs: fixed commitments, active projects and deadlines, recurring tasks, my top 3 goals and a brain dump.",
  "How to plan: sort by impact and urgency, plan to about 70% of my hours, put deep work in focus hours, batch similar tasks and flag what to drop.",
  "How to answer: week at a glance, a day-by-day plan, a priority table, a parked list, risks, my first move on Monday and a Friday review.",
];

const slides = [
  { src: "/images/monday-ritual/cover.webp", alt: "Monday ritual: I plan my week in 5 minutes. Every Monday I sit down with Claude and turn a messy week into a clear plan." },
  { src: "/images/monday-ritual/one-question.webp", alt: "Coffee. One tab. One question: here's everything on my plate this week, what comes first, and what can wait? Then I add my deadlines, meetings and energy." },
  { src: "/images/monday-ritual/the-week.webp", alt: "Then the week rearranges itself: Monday meeting and course study, Tuesday content and outreach, Wednesday coding and meetings, Thursday uni day, Friday social and new leads, Saturday flexible, Sunday day off." },
  { src: "/images/monday-ritual/stopped-doing.webp", alt: "Things I quietly stopped doing: Sunday-night dread, fifteen tabs and zero plan, staring at a blank to-do list, guessing what matters most. Mondays are kind of fun now." },
  { src: "/images/monday-ritual/dm-me.webp", alt: "Want my Monday prompt? DM me MONDAY and I'll send the exact prompt and setup I use with Claude." },
];

export default function MondayRitualStudy() {
  return (
    <>
      <p className="eyebrow mb-3">Content · Instagram carousel · Comment-to-DM</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Monday ritual: I plan my week in 5 minutes</h1>
      <p className="mt-5 text-lg">
        A five-slide Instagram carousel about how I plan every week with Claude, an AI assistant.{" "}
        <strong className="text-navy">The goal: useful content that starts conversations.</strong>{" "}
        The last slide offers my exact planning
        prompt to anyone who sends the word &ldquo;MONDAY&rdquo;.
      </p>

      <section className="mt-14">
        <h2 className={h2}>The idea</h2>
        <p className="mt-4">
          Before the inbox wakes up, I open Claude and ask one question: &ldquo;Here&apos;s everything on my plate this week. What comes
          first, and what can wait?&rdquo; Then I add my deadlines, meetings and how much energy I have, and get back a plan I can follow.
        </p>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What a planned week looks like</h2>
        <ul className="mt-6 grid gap-2">
          {week.map((d) => (
            <li
              key={d.day}
              className={`flex items-center gap-5 rounded-xl border px-5 py-3.5 ${d.day === "Sun" ? "border-coral bg-coral text-navy" : "border-line bg-surface"}`}
            >
              <span className={`w-10 shrink-0 font-display text-sm font-semibold tracking-widest uppercase ${d.day === "Sun" ? "text-navy" : "text-teal-ink"}`}>
                {d.day}
              </span>
              <span className="font-medium text-navy">{d.plan}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>What the prompt covers</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {promptCovers.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-line bg-surface p-5 sm:p-6">
          <p className="font-display text-lg font-semibold text-navy">Want the exact prompt?</p>
          <p className="mt-2">Send me &ldquo;MONDAY&rdquo; on Instagram and I&apos;ll send you the full prompt and setup.</p>
          <a href={contact.instagramDM} className={`${btnPrimary} mt-4`}>
            DM me &ldquo;MONDAY&rdquo;
          </a>
        </div>
      </section>

      <section className="mt-14">
        <h2 className={h2}>The carousel</h2>
        <p className="mt-3">All five slides, designed in the se.hadi brand. Tap a slide to zoom.</p>
        <div className="mt-6">
          <Slides slides={slides} />
        </div>
      </section>
    </>
  );
}
