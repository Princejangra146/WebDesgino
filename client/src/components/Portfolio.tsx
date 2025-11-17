import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "LuxeFashion E-commerce",
    category: "E-commerce",
    tags: ["React", "Shopify", "Design"],
    description:
      "A premium fashion e-commerce platform with seamless checkout and personalized recommendations.",
  },
  {
    title: "DataViz Analytics Platform",
    category: "SaaS",
    tags: ["Next.js", "D3.js", "API"],
    description:
      "Powerful analytics dashboard for real-time business intelligence and data visualization.",
  },
  {
    title: "Artist Portfolio Showcase",
    category: "Portfolio",
    tags: ["Design", "Webflow", "Animation"],
    description:
      "Elegant portfolio website showcasing creative work with immersive visual experiences.",
  },
  {
    title: "FinanceFlow Corporate Site",
    category: "Corporate",
    tags: ["WordPress", "SEO", "Security"],
    description:
      "Professional corporate website for a leading financial services company.",
  },
  {
    title: "Savory Fine Dining",
    category: "Restaurant",
    tags: ["Booking", "CMS", "Mobile"],
    description:
      "Sophisticated restaurant website with integrated reservation system and menu management.",
  },
  {
    title: "FitLife Wellness App",
    category: "Health & Fitness",
    tags: ["React Native", "Streaming", "API"],
    description:
      "Dynamic fitness platform with on-demand classes and personalized workout plans.",
  },
  {
    title: "HomeFinder Real Estate",
    category: "Real Estate",
    tags: ["Vue.js", "Maps", "Search"],
    description:
      "Comprehensive property listing platform with advanced search and interactive maps.",
  },
  {
    title: "InnovateTech Product Launch",
    category: "Tech Startup",
    tags: ["Gatsby", "Marketing", "Animation"],
    description:
      "Modern product landing page for an innovative SaaS solution with compelling storytelling.",
  },
];

export function Portfolio() {
  // map existing projects into HoverEffect items (no images, dark theme)
  const hoverItems = projects.map((project) => ({
    title: project.title,
    description: project.description,
    link: "#", // or a real case-study URL if you have one
  }));

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-[#050505] text-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing successful projects that drive real business results.
          </p>
        </div>

        <HoverEffect items={hoverItems} />
      </div>
    </section>
  );
}