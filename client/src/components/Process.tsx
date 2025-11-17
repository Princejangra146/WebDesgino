import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your goals, audience, and competition to define a clear strategy.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "We craft beautiful, intuitive interfaces that feel on‑brand and effortless to use.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Our engineers ship fast, performant experiences using modern frameworks.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We handle testing, optimization, and deployment so you can launch with confidence.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">
            Our Process
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A clear, collaborative workflow that takes you from idea to live
            product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
                data-testid={`step-${index}`}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-white/10 -translate-x-1/2" />
                )}
                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-white/5/5 bg-gradient-to-b from-white/5 to-white/0 px-6 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-2 hover:border-primary/60">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold text-slate-600/40 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}