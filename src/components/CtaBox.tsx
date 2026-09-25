import Link from "next/link";
import { responseTime } from "@/lib/content";
import ChannelLinks from "./ChannelLinks";

export default function CtaBox({ title = "Need something like this?" }: { title?: string }) {
  return (
    <aside className="my-12 rounded-2xl bg-navy p-6 text-offwhite sm:p-8">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-offwhite/80">
        Tell me what you&apos;re building. Projects from $120, and I reply within {responseTime}.
      </p>
      <Link
        href="/#contact"
        className="mt-5 flex min-h-12 items-center justify-center rounded-lg bg-coral px-6 font-display font-semibold text-navy hover:brightness-95 sm:inline-flex"
      >
        Start a project →
      </Link>
      <div className="mt-5">
        <ChannelLinks onDark />
      </div>
    </aside>
  );
}
