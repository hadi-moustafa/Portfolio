import { responseTime } from "@/lib/links";
import ChannelLinks from "./ChannelLinks";

export default function CtaBox({ title = "Need something like this?", body }: { title?: string; body?: string }) {
  return (
    <aside className="my-12 rounded-2xl bg-navy p-6 text-offwhite sm:p-8">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-offwhite/85">
        {body ?? "Tell me what's slowing your business down."} Free 20-minute call, fixed price in writing, and I reply within {responseTime}.
      </p>
      <div className="mt-6">
        <ChannelLinks onDark />
      </div>
    </aside>
  );
}
