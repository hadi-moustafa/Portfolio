import type { Metadata } from "next";
import ScrollChrome from "@/components/ScrollChrome";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex-1">
      <ScrollChrome />
      <Hero />
      <StatBar />
      <About />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}
