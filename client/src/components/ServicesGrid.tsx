import {
  Code,
  Palette,
  ShoppingCart,
  Sparkles,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "High‑performance marketing sites and web apps crafted with modern React, TypeScript, and Tailwind.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, conversion‑focused interfaces that feel smooth, intuitive, and on‑brand across devices.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce Experiences",
    description:
      "Optimized storefronts with clear product stories, frictionless checkout, and scalable architecture.",
  },
  {
    icon: Sparkles,
    title: "Brand & Visual Identity",
    description:
      "Logo, typography, and visual systems that make your digital presence instantly recognizable.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile‑First",
    description:
      "Experiences that look and feel amazing on phones, tablets, and desktops without compromise.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description:
      "Landing pages, A/B tests, and SEO‑ready structures built to improve key metrics over time.",
  },
];

export function ServicesGrid() {
  return (
    <div className="bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-12 md:pb-16">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#A855F7] uppercase mb-3">
            What we do
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold tracking-tight text-slate-50 mb-3">
            Digital experiences that look
            <br className="hidden md:block" />
            as good as they perform
          </h2>
          <p className="text-sm md:text-base text-slate-400">
            From first idea to launch and beyond, we design, build, and refine
            digital experiences that feel premium and perform in the real world.
          </p>
        </div>

        {/* Grid – 3 columns, aligned heights, card hover */}
        <div className="grid gap-x-14 gap-y-12 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group h-full rounded-3xl border border-slate-700/60 bg-transparent px-6 py-5 md:px-7 md:py-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200/80 hover:bg-white/5 flex flex-col justify-center"
            >
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-slate-50 mb-2">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* subtle separator before the next section */}
        <div className="mt-10 md:mt-12 h-px w-full bg-slate-800/60" />
      </div>
    </div>
  );
}