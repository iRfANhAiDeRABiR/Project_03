import React from 'react';
import SectionHeading from './common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Cpu, Headphones, ArrowRight } from 'lucide-react';

export default function IntroductionSection() {
  const { t } = useLanguage();

  const icons = [Layers, Cpu, Headphones];

  return (
    <section id="intro" className="py-16 md:py-24 relative overflow-hidden bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Pillars"
          title={t.intro.heading}
          subtitle={t.intro.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.intro.cards.map((card, idx) => {
            const Icon = icons[idx] || Layers;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl glass-card glass-card-hover border border-white/10 hover:border-brand-cyan/40 bg-navy-900/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Decorative hover gradient corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-tr-2xl rounded-bl-full group-hover:bg-brand-cyan/10 transition-colors"></div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <a
                  href="#catalog"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

