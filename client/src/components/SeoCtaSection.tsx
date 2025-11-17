export function SeoCtaSection() {
  return (
    <section className="py-20 md:py-24 bg-[#050505] text-slate-50">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-[28px] md:text-[34px] lg:text-[36px] font-display font-semibold tracking-tight mb-4 leading-snug">
          Boost Your Online Growth with Free SEO Consultation
        </h2>

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          At WebDesino, we help businesses in Delhi NCR and across India achieve
          higher Google rankings, more leads, and better conversions. Book your
          free consultation or request a website audit today to discover how we
          can transform your digital presence.
        </p>

        {/* URL input + primary button */}
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-9">
          <input
            type="url"
            placeholder="Enter your website URL here"
            className="w-full md:flex-1 rounded-sm border border-slate-700 bg-black px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-200/80 focus:border-slate-200/80"
          />
          <button className="inline-flex items-center justify-center rounded-sm bg-slate-100 px-6 py-3 text-xs md:text-sm font-medium text-slate-900 hover:bg-white transition-colors">
            Run SEO Audit
          </button>
        </div>

        {/* Secondary buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center rounded-sm border border-slate-500 bg-transparent px-6 py-3 text-[11px] md:text-xs font-medium tracking-wide text-slate-100 hover:bg-slate-900/70 transition-colors">
            Book free SEO consultation
          </button>
          <button className="inline-flex items-center justify-center rounded-sm border border-slate-500 bg-transparent px-6 py-3 text-[11px] md:text-xs font-medium tracking-wide text-slate-100 hover:bg-slate-900/70 transition-colors">
            Request for free website audit
          </button>
        </div>
      </div>
    </section>
  );
}