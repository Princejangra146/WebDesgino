import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <section className="py-20 md:py-24 bg-[#050505] text-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-white to-white">
          Build amazing websites <br />
          at <Cover>Web Designo</Cover>
        </h2>

        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mt-2 mb-6">
          Launch high-converting digital experiences faster with a modern tech
          stack, bold visuals, and conversion-focused UX.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <button className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/40 hover:bg-[#6D28D9] transition-colors">
            Start your project
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent px-7 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900/70 transition-colors">
            See our work
          </button>
        </div>
      </div>
    </section>
  );
}