import React, { useState, useMemo } from 'react';
import SectionHeading from './common/SectionHeading';
import { autodeskProducts } from '../data/autodeskData';
import { useLanguage } from '../context/LanguageContext';
import {
  PenTool,
  Building2,
  Box,
  Video,
  Cpu,
  MapPin,
  Wrench,
  Layers,
  Search,
  ArrowRight,
  Check,
  Clock
} from 'lucide-react';

export default function MainProductSales() {
  const { lang, t, handleSelectProduct } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    PenTool,
    Building2,
    Box,
    Video,
    Cpu,
    MapPin,
    Wrench,
    Layers
  };

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return autodeskProducts;
    return autodeskProducts.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.taglineBn && p.taglineBn.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.idealFor.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section id="products" className="py-16 md:py-24 relative bg-navy-900/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Catalog"
          title={t.mainProducts.heading}
          subtitle={t.mainProducts.subtitle}
        />

        {/* Search Filter Box */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.mainProducts.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-navy-950/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm shadow-inner transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const Icon = iconMap[product.icon] || PenTool;
            const badgeText = lang === 'bn' ? product.badgeBn || product.badge : product.badge;
            const taglineText = lang === 'bn' ? product.taglineBn || product.tagline : product.tagline;
            const idealForText = lang === 'bn' ? product.idealForBn || product.idealFor : product.idealFor;
            const featuresList = lang === 'bn' && product.featuresBn ? product.featuresBn : product.features;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/50 bg-navy-950/80 shadow-lg hover:shadow-cyan-glow/20 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {badgeText}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>

                  {/* Tagline / Short Description */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {taglineText}
                  </p>

                  {/* Ideal For Badge */}
                  <div className="p-2.5 rounded-xl bg-navy-900/90 border border-white/5 mb-4">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      {t.mainProducts.idealForLabel}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {idealForText}
                    </span>
                  </div>

                  {/* Feature Bullets (First 3) */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {featuresList.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 truncate">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Subscription Duration, Price & CTA */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.mainProducts.durationLabel} {lang === 'bn' ? '১ বছর ও ৩ বছর' : '1 Year & 3 Years'}</span>
                    </span>
                    <span className="font-mono font-bold text-white text-sm">
                      {product.priceDisplay}
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelectProduct(product, product.defaultDuration)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-cyan-glow hover:brightness-110 hover:shadow-lg transition-all duration-200"
                  >
                    <span>{t.mainProducts.actionBtn} {product.name} →</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

