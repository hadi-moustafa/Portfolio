import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  // Keep section numbers sequential while the testimonials section is hidden.
  const offset = testimonials.length > 0 ? 1 : 0;
  const num = (n: number) => String(n + offset).padStart(2, "0");

  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <StatBar />
        <About />
        <Services />
        <Work />
        <Testimonials n="06" />
        <Process n={num(6)} />
        <FAQ />
        <Contact n={num(7)} />
      </main>
      <SiteFooter n={num(8)} showQuotes />
    </>
  );
}
