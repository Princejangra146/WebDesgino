import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#111827] via-[#020617] to-black" />
);

const items = [
  {
    title: "Web Development",
    description: "High-performance websites built with modern frameworks.",
  },
  {
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that feel effortless to use.",
  },
  {
    title: "E‑commerce",
    description: "Conversion-focused stores optimized for sales.",
  },
  {
    title: "Mobile Apps",
    description: "Responsive, app-like experiences across devices.",
  },
  {
    title: "SEO",
    description: "Technical and on-page SEO to boost your visibility.",
  },
  {
    title: "Branding",
    description: "Visual identity and messaging that stand out online.",
  },
];

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton />}
          // you can later replace Skeleton with your own image for each service
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}