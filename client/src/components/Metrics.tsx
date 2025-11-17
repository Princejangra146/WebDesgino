const metrics = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "5 Years",
    label: "Industry Experience",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="py-16 md:py-20 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/40 bg-gradient-to-r from-violet-600 to-violet-500 shadow-[0_20px_60px_rgba(88,28,135,0.55)]">
          {/* subtle dark overlay so it fits the rest of the page */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y divide-violet-400/20 lg:divide-y-0 lg:divide-x">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-8 md:py-10 px-6 text-center"
                data-testid={`metric-${index}`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.25em] text-violet-100/80">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
