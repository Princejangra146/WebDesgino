import {
  Code,
  Palette,
  ShoppingCart,
  Sparkles,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { FeatureSteps } from "@/components/ui/feature-section";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and scalability.",
    href: "#services",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users and drive engagement across all devices.",
    href: "#services",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Complete online store solutions with seamless checkout experiences and payment integration.",
    href: "#services",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description:
      "Cohesive brand design systems that communicate your unique value and resonate with audiences.",
    href: "#services",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "#services",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Strategic optimization to improve visibility, drive organic traffic, and boost conversions.",
    href: "#services",
  },
];

// top 3 services to highlight with images
const highlightedFeatures = [
  {
    step: "Web Development",
    title: "Lightning‑Fast Web Experiences",
    content:
      "We build high‑performance websites and web apps tailored to your business goals.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    step: "UI/UX Design",
    title: "Beautiful, Intuitive Interfaces",
    content:
      "Pixel‑perfect, conversion‑focused UI/UX design that feels effortless for your users.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  },
  {
    step: "E‑commerce",
    title: "Stores That Convert",
    content:
      "From product pages to checkout, we craft frictionless e‑commerce journeys that sell.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      {/* Highlight top 3 services with image + steps, matching deep black background */}
      <FeatureSteps
        features={highlightedFeatures}
        title="How We Deliver Results"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
        className="bg-[#050505] text-slate-50 pt-0"
      />
    </section>
  );
}