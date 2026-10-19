import React from 'react';
import SectionHeading from './common/SectionHeading';
import { whyChooseItems } from '../data/autodeskData';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  Clock,
  Headphones,
  CreditCard,
  Settings,
  MessageCircle
} from 'lucide-react';

export default function WhyChooseUs() {
  const { lang, t } = useLanguage();

  const iconMap = {
    ShieldCheck,
    Clock,
    Headphones,
    CreditCard,
    Settings,
    MessageCircle
  };

  return (
    <section id="why-us" className="py-16 md:py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Specialized Expertise"
          title={t.whyChoose.heading}
          subtitle={t.whyChoose.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseItems.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            const titleText = lang === 'bn' ? item.titleBn : item.title;
            const descText = lang === 'bn' ? item.descBn : item.desc;

            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {titleText}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {descText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
