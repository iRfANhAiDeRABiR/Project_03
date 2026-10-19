import React from 'react';
import SectionHeading from './common/SectionHeading';
import { comparisonMatrix } from '../data/autodeskData';
import { useLanguage } from '../context/LanguageContext';
import { Check, Minus, ArrowRight } from 'lucide-react';

export default function ProductComparison() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Capabilities"
          title={t.comparison.heading}
          subtitle={t.comparison.subtitle}
        />

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700">
                <th className="py-4 px-6">{t.comparison.colProduct}</th>
                <th className="py-4 px-6">{t.comparison.colBestFor}</th>
                <th className="py-4 px-6 text-center">{t.comparison.col2d}</th>
                <th className="py-4 px-6 text-center">{t.comparison.col3d}</th>
                <th className="py-4 px-6 text-center">{t.comparison.colBim}</th>
                <th className="py-4 px-6 text-center">{t.comparison.colRendering}</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonMatrix.map((row) => (
                <tr key={row.product} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                    {row.product}
                  </td>
                  <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm font-normal">
                    {lang === 'bn' ? row.bestForBn : row.bestFor}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.cad2d ? (
                      <span className="inline-flex w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mx-auto">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex text-slate-300 justify-center">
                        <Minus className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.cad3d ? (
                      <span className="inline-flex w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mx-auto">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex text-slate-300 justify-center">
                        <Minus className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.bim ? (
                      <span className="inline-flex w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mx-auto">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex text-slate-300 justify-center">
                        <Minus className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.rendering ? (
                      <span className="inline-flex w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mx-auto">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex text-slate-300 justify-center">
                        <Minus className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href="#order"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-4">
          {comparisonMatrix.map((row) => (
            <div
              key={row.product}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-900"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <h4 className="text-base font-bold text-slate-900">{row.product}</h4>
                <a
                  href="#order"
                  className="text-xs font-bold text-blue-600 flex items-center gap-1"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="text-xs text-slate-600 mb-4">
                <span className="text-slate-800 block mb-0.5 font-bold">Best For:</span>
                <span>{lang === 'bn' ? row.bestForBn : row.bestFor}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">2D CAD</span>
                  {row.cad2d ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Minus className="w-4 h-4 text-slate-300" />
                  )}
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">3D</span>
                  {row.cad3d ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Minus className="w-4 h-4 text-slate-300" />
                  )}
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">BIM</span>
                  {row.bim ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Minus className="w-4 h-4 text-slate-300" />
                  )}
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-600 font-medium">Rendering</span>
                  {row.rendering ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Minus className="w-4 h-4 text-slate-300" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
