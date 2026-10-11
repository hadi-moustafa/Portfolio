"use client";

import { useEffect, useState } from "react";

/**
 * Filter chips for the work grid. Cards stay server-rendered; this only sets
 * `data-filter` on the grid, and CSS (globals.css) hides non-matching cards.
 */
export default function WorkFilter({ filters, target }: { filters: { id: string; label: string }[]; target: string }) {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.getElementById(target)?.setAttribute("data-filter", filter);
  }, [filter, target]);

  // Links like /#work-marketing pre-filter the grid.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#work-(\w+)$/);
      if (m && filters.some((f) => f.id === m[1])) {
        setFilter(m[1]);
        document.getElementById("work")?.scrollIntoView();
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [filters]);

  return (
    <div role="group" aria-label="Filter projects" className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {[{ id: "all", label: "All" }, ...filters].map((f) => (
        <button
          key={f.id}
          type="button"
          aria-pressed={filter === f.id}
          onClick={() => setFilter(f.id)}
          className={`min-h-11 shrink-0 rounded-full border-2 px-4 text-sm font-semibold transition-colors duration-200 ${
            filter === f.id ? "border-navy bg-navy text-offwhite" : "border-line bg-surface text-navy hover:border-navy"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
