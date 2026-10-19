import React from 'react';
import SectionHeading from './common/SectionHeading';
import { autodeskProducts } from '../data/autodeskData';
import { useLanguage } from '../context/LanguageContext';
import {
  PenTool,
  Check,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function FeaturedAutoCAD() {
  const { t, handleSelectProduct } = useLanguage();

  const autocadProduct = autodeskProducts.find((p) => p.id === 'autocad') || autodeskProducts[0];

  return (
    <section className="py-16 md:py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Solution"
          title={t.featuredAutoCad.heading}
          subtitle={t.featuredAutoCad.productSubtitle}
        />

        {/* 2-Column Spotlight Box */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-slate-50 border-2 border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT: AutoCAD Product Showcase Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl p-6 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Header ribbon */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      A
                    </div>
                    <div>
                      <div className="text-white font-extrabold tracking-wide">AUTODESK AUTOCAD</div>
                      <div className="text-[10px] text-slate-400">2D Drafting & 3D Modeling Precision</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active Subscription
                  </span>
                </div>

                {/* Drafting Blueprint Illustration */}
                <div className="relative h-64 rounded-xl bg-navy-950 border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>

                  {/* SVG Blueprint Details */}
                  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
                    <circle cx="160" cy="90" r="60" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="160" cy="90" r="30" fill="rgba(6, 182, 212, 0.1)" stroke="#06B6D4" strokeWidth="2" />
                    <rect x="60" y="40" width="200" height="100" rx="8" stroke="#334155" strokeWidth="1.5" />
                    <line x1="60" y1="40" x2="260" y2="140" stroke="#1E293B" strokeWidth="1" />
                    <line x1="60" y1="140" x2="260" y2="40" stroke="#1E293B" strokeWidth="1" />
                    
                    {/* Crosshair coordinate node */}
                    <circle cx="160" cy="90" r="3" fill="#EF4444" />
                    <line x1="160" y1="20" x2="160" y2="160" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="20" y1="90" x2="300" y2="90" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>

                  {/* Bottom metrics */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-2">
                    <span className="text-cyan-400">Layer: 0_A-WALL</span>
                    <span>Scale: 1:100</span>
                    <span className="text-emerald-400">Status: Verified</span>
                  </div>
                </div>

                {/* Trust guarantee badge */}
                <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Specialized Toolsets (MEP, Architecture, Electrical)</span>
                  </div>
                  <span className="text-cyan-400 font-bold">Included</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Copy, Features, Pricing & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-600 border border-red-200 mb-4">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Flagship CAD Solution</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                  {t.featuredAutoCad.productName}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {t.featuredAutoCad.productSubtitle}
                </p>

                {/* Key Capabilities Checklist */}
                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {t.featuredAutoCad.featuresHeading}
                  </div>
                  <div className="space-y-2.5">
                    {t.featuredAutoCad.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5 font-medium">
                      {t.featuredAutoCad.subscriptionTitle}
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                      {t.featuredAutoCad.priceValue}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectProduct(autocadProduct, '1 Year')}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-md hover:brightness-110 transition-all"
                  >
                    <span>{t.featuredAutoCad.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{t.featuredAutoCad.specialistPrompt}</span>
                  <a
                    href="#contact"
                    className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                  >
                    <span>{t.featuredAutoCad.specialistAction}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
