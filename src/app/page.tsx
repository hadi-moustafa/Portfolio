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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <StatBar />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
