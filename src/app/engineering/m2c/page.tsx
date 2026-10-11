import type { Metadata } from "next";
import { engineeringProjects } from "@/lib/content";
import { ph } from "@/lib/placeholder";
import CtaBox from "@/components/CtaBox";
import PageShell from "@/components/PageShell";
import { Ph, T, textLink } from "@/components/ui";

const p = engineeringProjects[1];
const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

export const metadata: Metadata = {
  title: "M2C municipality platform (graduation project)",
  description: p.metaDescription,
  alternates: { canonical: "/engineering/m2c" },
};

export default function M2CPage() {
  return (
    <PageShell crumbs={[{ name: "Engineering notes", path: "/engineering" }, { name: "M2C", path: "/engineering/m2c" }]}>
      <p className="eyebrow mb-3">University graduation project · Next.js · PostgreSQL</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">M2C: a municipality management platform</h1>
      <p className="mt-5 text-lg">
        My university graduation project: a platform for a municipality&apos;s resident records, requests and internal workflows. It&apos;s an
        academic project, not a system in production, so there are no business results to report.
      </p>
      <a href={p.github} className={`${textLink} mt-3`}>
        Source on GitHub&nbsp;→
      </a>

      <section className="mt-12">
        <h2 className={h2}>What it demonstrates</h2>
        <ul className="mt-4 space-y-3">
          {[
            "A relational PostgreSQL schema designed around a municipality's real processes: residents, requests and approvals.",
            "Workflows modelled explicitly, so a request's state is always known.",
            "A Next.js application with a REST API on top.",
          ].map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
              {x}
            </li>
          ))}
        </ul>
        <T as="p" className="mt-4">{ph("M2C: what was built, team size, scale")}</T>
      </section>

      <section className="mt-12">
        <h2 className={h2}>Screens</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Ph block>m2c/screen-1.png</Ph>
          <Ph block>m2c/screen-2.png</Ph>
          <Ph block>m2c/screen-3.png</Ph>
        </div>
      </section>

      <CtaBox title="Need a records or workflow system for your organisation?" />
    </PageShell>
  );
}
