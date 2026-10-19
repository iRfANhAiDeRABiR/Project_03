import React, { useState } from 'react';
import SectionHeading from './common/SectionHeading';
import { autodeskFaqData } from '../data/autodeskFaqData';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-white border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Clear Guidance"
          title={t.faq.heading}
          subtitle={t.faq.subtitle}
        />

        <div className="space-y-3.5">
          {autodeskFaqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const questionText = lang === 'bn' ? item.questionBn : item.question;
            const answerText = lang === 'bn' ? item.answerBn : item.answer;
            const categoryText = lang === 'bn' ? item.categoryBn : item.category;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-blue-200 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {questionText}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                      {categoryText}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-blue-100 text-blue-700 border-blue-200' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 animate-in fade-in-50 duration-200">
                    {answerText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific Autodesk configuration question?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Our team can help verify version requirements and hardware compatibility.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-blue-700 border border-blue-200 shadow-sm flex-shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Autodesk Support</span>
          </a>
        </div>

      </div>
    </section>
  );
}
