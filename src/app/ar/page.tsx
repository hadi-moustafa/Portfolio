import type { Metadata } from "next";
import Link from "next/link";
import { arAddOns, arFaqs, arFlagship, arForm, arHero, arProcess, reviewNote } from "@/lib/ar";
import { contact } from "@/lib/links";
import ChannelLinks from "@/components/ChannelLinks";
import ContactForm from "@/components/ContactForm";
import IspPhones from "@/components/IspPhones";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import { btnSecondary, Section, SectionHeading, T, textLink, WhatsAppButton } from "@/components/ui";

// noindex until Hadi has reviewed the Arabic copy; no hreflang until then either.
export const metadata: Metadata = {
  title: "مطوّر مواقع ومسوّق رقمي في لبنان",
  description: "مواقع وأنظمة فوترة تجلب لك الزبائن، يبنيها ويشغّلها ويسوّق لها شخص واحد: هادي مصطفى في لبنان. مكالمة مجانية لمدة 20 دقيقة.",
  alternates: { canonical: "/ar" },
  robots: { index: false, follow: true },
  openGraph: { locale: "ar_LB", url: "/ar" },
};

const card = "flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_6px_20px_-14px_rgba(13,27,42,0.35)]";

export default function ArabicHome() {
  return (
    <>
      <main id="main" dir="rtl" lang="ar" className="flex-1">
        <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
          <T as="p">{reviewNote}</T>
        </div>

        <section id="hero" aria-labelledby="hero-title">
          <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-20 sm:px-6 lg:pt-16 lg:pb-24">
            <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
              <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/50 bg-teal/10 px-3 py-1.5 text-sm font-semibold text-teal-ink">
                  <span className="h-2 w-2 rounded-full bg-teal" />
                  {arHero.badge}
                </span>
                <h1 id="hero-title" className="text-[2.2rem] leading-[1.25] font-bold text-navy sm:text-5xl lg:text-[3.2rem]">
                  {arHero.headlineBefore}
                  <span className="text-teal-ink">{arHero.highlight}</span>
                  {arHero.headlineAfter}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed sm:text-xl">{arHero.sub}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <WhatsAppButton label={arHero.primary} />
                  <Link href="/#work" hrefLang="en" className={btnSecondary}>
                    {arHero.secondary}
                  </Link>
                </div>
                <ul className="mt-5 flex flex-col gap-2 text-[0.95rem] sm:flex-row sm:flex-wrap sm:gap-x-5">
                  {arHero.trust.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.95rem]">{arHero.credibility}</p>
              </div>
              <div dir="ltr" className="relative lg:py-8">
                <IspPhones preload />
              </div>
            </div>
          </div>
        </section>

        <Section id="services" className="border-t border-line">
          <SectionHeading id="services" eyebrow="الخدمات" title="خدمة أساسية، وإضافات عند الحاجة" />
          <article className={`${card} mt-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-10`}>
            <div>
              <div className="flex items-center gap-3">
                <ServiceIcon slug="billing-system" className="h-10 w-10 shrink-0 text-teal-ink" />
                <h3 className="text-2xl font-bold text-navy sm:text-3xl">{arFlagship.title}</h3>
              </div>
              <p className="mt-4 text-lg">
                <strong className="text-navy">لمن:</strong> {arFlagship.forWho}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <WhatsAppButton label="تحدّث معي عن الفوترة" />
                <Link href="/work/isp-net" hrefLang="en" className={textLink}>
                  شاهد مشروع ISP.NET&nbsp;←
                </Link>
              </div>
            </div>
            <ul className="mt-6 space-y-3 lg:mt-0">
              {arFlagship.includes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-teal-ink">/</span>
                  {x}
                </li>
              ))}
            </ul>
          </article>
          <h3 className="mt-14 text-xl font-semibold text-navy">خدمات إضافية</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {arAddOns.map((s) => (
              <article key={s.slug} className={card}>
                <ServiceIcon slug={s.slug} className="mb-4 h-9 w-9 text-teal-ink" />
                <h4 className="text-xl font-bold text-navy">{s.title}</h4>
                <p className="mt-2 text-[0.95rem]">{s.forWho}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="process">
          <SectionHeading id="process" eyebrow="طريقة العمل" title="من مكالمة مجانية إلى نظام يعمل" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arProcess.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-line border-t-2 border-t-teal bg-surface p-6">
                <span className="font-display text-4xl font-bold text-teal" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-[0.95rem]">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="faq">
          <SectionHeading id="faq" eyebrow="أسئلة شائعة" title="أسئلة قبل أن نبدأ" />
          <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
            {arFaqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-navy">
                  <h3 className="text-base sm:text-lg">{f.q}</h3>
                  <span aria-hidden="true" className="text-2xl leading-none text-teal-ink transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <T as="p" className="pb-5">{f.a}</T>
              </details>
            ))}
          </div>
        </Section>

        <Section id="contact" className="border-t border-line bg-surface">
          <SectionHeading id="contact" eyebrow="تواصل" title="أخبرني ما الذي يبطئ عملك" intro="الأسرع عبر واتساب. أو استخدم النموذج وسأرد خلال 24 ساعة." />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
            <ContactForm t={arForm} />
            <aside className="rounded-xl border border-line bg-offwhite p-6">
              <h3 className="text-lg font-semibold text-navy">راسلني مباشرة</h3>
              <p className="mt-1 mb-5 text-[0.95rem]">
                واتساب <span dir="ltr">{contact.phone}</span>
              </p>
              <ChannelLinks stacked />
            </aside>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
