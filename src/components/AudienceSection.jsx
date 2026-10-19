import React from 'react';
import SectionHeading from './common/SectionHeading';
import { audiencePersonas } from '../data/autodeskData';
import { useLanguage } from '../context/LanguageContext';
import {
  Compass,
  Cog,
  Palette,
  HardHat,
  Factory,
  Box,
  Video,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function AudienceSection() {
  const { lang, t } = useLanguage();

  const iconMap = {
    Compass,
    Cog,
    Palette,
    HardHat,
    Factory,
    Box,
    Video,
    GraduationCap,
    Briefcase
  };

  return (
    <section className="py-16 md:py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Who It Is For"
          title={t.audience.heading}
          subtitle={t.audience.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiencePersonas.map((persona) => {
            const Icon = iconMap[persona.icon] || Compass;
            const titleText = lang === 'bn' ? persona.titleBn : persona.title;
            const descText = lang === 'bn' ? persona.descBn : persona.desc;

            return (
              <div
                key={persona.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {titleText}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {descText}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    {t.audience.relevantLabel}
                  </span>
                  <span className="text-xs font-bold text-blue-600">
                    {persona.products}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
