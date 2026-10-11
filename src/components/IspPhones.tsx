import PhoneFrame from "./PhoneFrame";

/** Three real ISP.NET screens + one result card from the same dashboard. */
export default function IspPhones({ preload = false }: { preload?: boolean }) {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-[26rem] lg:mt-0 lg:max-w-none">
      <div className="relative flex items-end justify-center">
        <PhoneFrame
          src="/images/isp/subscribers.webp"
          alt="ISP.NET subscriber list: 236 subscribers, each row with a green Pay button (names hidden)"
          width={825}
          height={1716}
          className="relative z-0 -mr-6 w-[34%] translate-y-4 -rotate-3"
          sizes="(min-width: 1024px) 170px, 30vw"
        />
        <PhoneFrame
          src="/images/isp/dashboard.webp"
          alt="ISP.NET dashboard: 5,875 billed this month, 71% settled, 166 paid and 70 not paid yet"
          width={825}
          height={1216}
          className="relative z-10 w-[40%]"
          sizes="(min-width: 1024px) 210px, 38vw"
          preload={preload}
        />
        <PhoneFrame
          src="/images/isp/whatsapp-templates.webp"
          alt="ISP.NET WhatsApp message editor: an Arabic debt warning with a live preview"
          width={819}
          height={1679}
          className="relative z-0 -ml-6 w-[34%] translate-y-4 rotate-3"
          sizes="(min-width: 1024px) 170px, 30vw"
        />
      </div>
      <div className="absolute -bottom-6 left-1/2 z-20 w-max -translate-x-1/2 rounded-xl border border-line bg-surface px-4 py-3 shadow-[0_14px_30px_-12px_rgba(13,27,42,0.35)] lg:left-auto lg:right-0 lg:translate-x-0">
        <p className="font-display text-base font-bold text-navy tabular-nums">236 subscribers · 71% settled</p>
        <p className="text-sm text-charcoal">of this month&apos;s billing, ISP.NET dashboard</p>
      </div>
    </div>
  );
}
