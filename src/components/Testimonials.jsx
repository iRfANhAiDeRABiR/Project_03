import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { autodeskTestimonials } from '../data/autodeskTestimonialsData';
import { useLanguage } from '../context/LanguageContext';
import { Star, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % autodeskTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + autodeskTestimonials.length) % autodeskTestimonials.length);
  };

  return (
    <section className="py-16 md:py-24 relative bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={lang === 'bn' ? "গ্রাহকদের বাস্তব রিভিউ" : "Verified Customer Reviews"}
          title={t.testimonials.heading}
          subtitle={t.testimonials.subtitle}
        />

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {autodeskTestimonials.map((item) => {
            const name = lang === 'bn' ? item.clientNameBn : item.clientName;
            const role = lang === 'bn' ? item.roleBn : item.role;
            const tag = lang === 'bn' ? item.tagBn : item.tag;
            const content = lang === 'bn' ? item.contentBn : item.content;
            const date = lang === 'bn' ? item.dateBn : item.date;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div>
                  {/* Top: Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'bn' ? 'ভেরিফাইড' : 'Verified'}</span>
                    </span>
                  </div>

                  {/* Software Subscription Tag & Date */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 text-[10px]">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      {tag}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {date}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs text-slate-700 leading-relaxed mb-6 font-normal">
                    "{content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white font-bold flex items-center justify-center text-xs shadow-md shadow-blue-500/20 shrink-0">
                    {item.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{name}</div>
                    <div className="text-[11px] text-slate-500 truncate">{role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View with navigation controls */}
        <div className="md:hidden relative">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
            {(() => {
              const current = autodeskTestimonials[currentIndex];
              const name = lang === 'bn' ? current.clientNameBn : current.clientName;
              const role = lang === 'bn' ? current.roleBn : current.role;
              const tag = lang === 'bn' ? current.tagBn : current.tag;
              const content = lang === 'bn' ? current.contentBn : current.content;
              const date = lang === 'bn' ? current.dateBn : current.date;

              return (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'bn' ? 'ভেরিফাইড পারচেজ' : 'Verified'}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 text-[11px]">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      {tag}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed mb-6 font-normal">
                    "{content}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold flex items-center justify-center text-xs shadow-md shrink-0">
                      {current.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{name}</div>
                      <div className="text-xs text-slate-500">{role}</div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1.5">
              {autodeskTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
