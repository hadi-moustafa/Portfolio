import type { Metadata } from "next";
import Link from "next/link";
import { engineeringProjects } from "@/lib/content";
import PageShell from "@/components/PageShell";
import { GitHubButton } from "@/components/Work";
import { textLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Engineering notes",
  description:
    "Developer-facing projects by Hadi Moustafa: Governor, an open-source Go LLM spend-cap gateway, and M2C, a municipality platform graduation project.",
  alternates: { canonical: "/engineering" },
};

export default function EngineeringPage() {
  return (
    <PageShell crumbs={[{ name: "Engineering notes", path: "/engineering" }]}>
      <p className="eyebrow mb-3">For developers</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Engineering notes</h1>
      <p className="mt-5 text-lg">
        The developer side of my work: open-source and academic projects, written up for engineers. If you&apos;re a business
        owner, the{" "}
        <Link href="/#work" className="font-semibold text-teal-ink underline underline-offset-4">
          client case studies
        </Link>{" "}
        are probably more useful.
      </p>
      <div className="mt-10 grid gap-5">
        {engineeringProjects.map((p) => (
          <article key={p.slug} className="rounded-xl border border-line bg-surface p-6 shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)]">
            <h2 className="font-display text-2xl font-bold text-navy">{p.title}</h2>
            <p className="mt-3">{p.description}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <Link href={`/engineering/${p.slug}`} className={textLink}>
                Read the notes&nbsp;→
              </Link>
              <GitHubButton href={p.github} name={p.name} />
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
