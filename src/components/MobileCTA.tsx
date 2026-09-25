import Link from "next/link";
import { responseTime } from "@/lib/content";

/** Sticky bottom call-to-action, mobile only. */
export default function MobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-[110] border-t border-line bg-bg/90 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Link
        href="/#contact"
        className="block w-full text-center font-mono text-sm font-bold py-3 rounded-md bg-amber text-[#161105]"
      >
        Start a project →
      </Link>
      <p className="mt-1.5 text-center font-mono text-[0.65rem] text-ink-dim">
        I reply within {responseTime}
      </p>
    </div>
  );
}
