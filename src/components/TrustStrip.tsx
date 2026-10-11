import { clientsLine, trustQuote } from "@/lib/content";
import { T } from "./ui";

/** Slim, light strip under the hero: who the work was for (real clients only). */
export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-6">
        <p className="eyebrow shrink-0">Recent work for</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem] font-medium text-navy">
          {clientsLine.map((c, i) => (
            <li key={c} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-teal sm:inline-block" />}
              {c}
            </li>
          ))}
        </ul>
        <T as="p" className="text-sm md:ml-auto">{trustQuote}</T>
      </div>
    </div>
  );
}
