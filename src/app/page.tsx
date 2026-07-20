import ScrollChrome from "@/components/ScrollChrome";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="flex-1">
      <ScrollChrome />
      <Hero />
      <StatBar />
      <About />
      <Projects />
      <SiteFooter />
    </div>
  );
}
