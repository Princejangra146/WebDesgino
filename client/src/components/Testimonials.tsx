import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real feedback from teams we’ve helped grow with modern web
            experiences.
          </p>
        </div>

        <StaggerTestimonials />
      </div>
    </section>
  );
}