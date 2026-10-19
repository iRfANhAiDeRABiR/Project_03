import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function SecuritySection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-xs">
            <ShieldCheck className="w-10 h-10 stroke-[1.8]" />
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Subscription Advisory</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {t.authenticity.heading}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
              {t.authenticity.notice}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" /> {t.authenticity.bullet1}
              </span>
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" /> {t.authenticity.bullet2}
              </span>
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" /> {t.authenticity.bullet3}
              </span>
            </div>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors shadow-xs"
          >
            <span>Ask a Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </section>
  );
}
