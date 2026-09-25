import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/site";
import JsonLd from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail + matching BreadcrumbList structured data. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="font-semibold text-navy">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-teal-ink hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
