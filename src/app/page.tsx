import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Problems from "@/components/Problems";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <TrustStrip />
        <Problems />
        <Work />
        <Testimonials />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
