import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 shadow-2xl overflow-hidden text-center text-white">
          
          {/* Subtle Ambient Glow Effects */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white border border-white/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autodesk Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {t.finalCta.heading}
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.finalCta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>{t.finalCta.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm bg-blue-800/40 hover:bg-blue-800/60 border border-white/20 text-white transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-cyan-200" />
                <span>{t.finalCta.contactBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
