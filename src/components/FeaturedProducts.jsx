import React from 'react';
import SectionHeading from './common/SectionHeading';
import { allProducts } from '../data/productsData';
import { useLanguage } from '../context/LanguageContext';
import { Cloud, Palette, PenTool, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  const { lang, t, handleSelectProduct } = useLanguage();

  const featuredItems = allProducts.filter((p) => p.featured);

  const iconMap = {
    "microsoft-365": Cloud,
    "adobe-creative-cloud": Palette,
    "autocad": PenTool,
    "chatgpt-claude-ai": Sparkles
  };

  return (
    <section id="featured" className="py-16 md:py-24 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Top Rated"
          title={t.featured.heading}
          subtitle={t.featured.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((product) => {
            const Icon = iconMap[product.id] || Sparkles;
            const productName = lang === 'bn' ? product.nameBn || product.name : product.name;
            const productTagline = lang === 'bn' ? product.taglineBn || product.tagline : product.tagline;
            const productBadge = lang === 'bn' ? product.badgeBn || product.badge : product.badge;

            return (
              <div
                key={product.id}
                className="relative group flex flex-col justify-between p-6 rounded-3xl glass-card border border-brand-cyan/20 hover:border-brand-cyan/60 bg-gradient-to-b from-navy-900/90 to-navy-950/90 shadow-xl hover:shadow-cyan-glow/20 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-cyan-500 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  {productBadge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {productBadge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {productName}
                  </h3>
                  <p className="text-xs text-brand-cyan font-medium mb-3">
                    {productTagline}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 mb-5">
                    {lang === 'bn' ? product.descriptionBn : product.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    {(lang === 'bn' && product.featuresBn ? product.featuresBn : product.features)
                      .slice(0, 3)
                      .map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Pricing & Order CTA */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Starts at</span>
                      <span className="text-2xl font-extrabold text-white">৳ {product.price.toLocaleString()}</span>
                    </div>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        ৳ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleSelectProduct(product)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-blue to-cyan-500 text-white shadow-cyan-glow hover:brightness-110 hover:shadow-lg transition-all duration-200"
                  >
                    <span>{t.featured.orderNow}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

