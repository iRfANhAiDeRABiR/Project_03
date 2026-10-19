import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Clock, Zap, Headphones, Lock, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  const { t } = useLanguage();

  const iconMap = {
    Shield: ShieldCheck,
    Clock: Clock,
    Zap: Zap,
    Headphones: Headphones,
    Lock: Lock,
    CheckCircle: CheckCircle
  };

  return (
    <section className="relative z-20 py-4 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none sm:justify-between no-scrollbar">
          {t.trustBar.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs flex-shrink-0 hover:border-blue-400 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
