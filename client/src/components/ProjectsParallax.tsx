"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/components/hero-parallax-demo";

export function ProjectsParallax() {
  return (
    <section
      id="projects-parallax"
      className="bg-[#050505] text-slate-50"
    >
      <HeroParallax products={products} />
    </section>
  );
}