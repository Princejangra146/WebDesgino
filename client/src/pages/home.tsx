
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ProjectsParallax } from "@/components/ProjectsParallax";
import { Process } from "@/components/Process";
import { Metrics } from "@/components/Metrics";
import { Testimonials } from "@/components/Testimonials";
import { TechnologyStack } from "@/components/TechnologyStack";

import { Footer } from "@/components/Footer";
import { SeoCtaSection } from "@/components/SeoCtaSection";
import WorldMapDemo from "@/components/world-map-demo";
import CoverDemo from "@/components/cover-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
     
      <Hero />
      <Services />
      <Portfolio />
      <ProjectsParallax />
      <Process />
      <Metrics />
      <SeoCtaSection />
      <Testimonials />
      <TechnologyStack />
      <CoverDemo />
      <WorldMapDemo />
      
      <Footer />
    </div>
  );
}