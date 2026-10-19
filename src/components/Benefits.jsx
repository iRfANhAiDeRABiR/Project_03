import React from 'react';
import SectionHeading from './common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import {
  Zap,
  Lock,
  ShieldCheck,
  Wrench,
  CreditCard,
  MousePointerClick,
  MessageSquare,
  Building
} from 'lucide-react';

export default function Benefits() {
  const { t } = useLanguage();

  const icons = [
    Zap,
    Lock,
    ShieldCheck,
    Wrench,
    CreditCard,
    MousePointerClick,
    MessageSquare,
    Building
  ];

  return (
    <section className="py-16 md:py-24 relative bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Value Proposition"
          title={t.benefits.heading}
          subtitle={t.benefits.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.cards.map((card, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-brand-cyan/40 hover:bg-navy-850 transition-all duration-300 group shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-navy-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

