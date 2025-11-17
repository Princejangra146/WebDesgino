"use client";

import SphereImageGrid, {
  ImageData,
} from "@/components/ui/img-sphere";

const techImages: ImageData[] = [
  {
    id: "react",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "React",
    title: "React",
    description: "Component-driven UIs for fast, interactive experiences.",
  },
  {
    id: "nextjs",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Next.js",
    title: "Next.js",
    description: "SEO‑friendly, production‑ready React framework.",
  },
  {
    id: "tailwind",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
    description: "Utility‑first styling for rapid UI development.",
  },
  {
    id: "node",
    src: "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=1200&q=80",
    alt: "Node.js",
    title: "Node.js",
    description: "Fast, scalable backend services in JavaScript.",
  },
  {
    id: "mongodb",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    alt: "MongoDB",
    title: "MongoDB",
    description: "Flexible NoSQL database for modern applications.",
  },
  {
    id: "typescript",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "TypeScript",
    title: "TypeScript",
    description: "Type‑safe JavaScript for fewer bugs and better DX.",
  },
  {
    id: "figma",
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Figma",
    title: "Figma",
    description: "Collaborative design system and prototyping.",
  },
  {
    id: "wordpress",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    alt: "WordPress",
    title: "WordPress",
    description: "Content‑driven sites with a powerful CMS.",
  },
];

export function TechnologyStack() {
  return (
    <section
      id="technology"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">
            Technology Stack
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A modern stack of frameworks, tools, and services we use to
            build high‑performance digital experiences.
          </p>
        </div>

        <div className="flex justify-center">
          <SphereImageGrid
            images={techImages}
            containerSize={600}
            sphereRadius={220}
            dragSensitivity={0.8}
            momentumDecay={0.96}
            maxRotationSpeed={6}
            baseImageScale={0.15}
            hoverScale={1.3}
            perspective={1000}
            autoRotate
            autoRotateSpeed={0.2}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}