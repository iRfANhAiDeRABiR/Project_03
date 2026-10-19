import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangle, Skull, X, ShieldCheck, Check } from 'lucide-react';

export default function CrackedVsOfficial() {
  const { lang } = useLanguage();

  return (
    <section id="comparison" className="py-16 md:py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {lang === 'bn'
              ? 'কেন ক্র্যাকড অটোক্যাড ও Keygen ব্যবহার করা বিপজ্জনক?'
              : 'Why is Using Cracked AutoCAD & Keygen Dangerous?'}
          </h2>
          
          {/* Dual-color Accent Line (Blue Left, Red Right) */}
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-rose-500 mx-auto mt-3 mb-3"></div>

          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600 leading-relaxed">
            {lang === 'bn'
              ? 'সামান্য টাকা বাঁচাতে গিয়ে আপনার পাসওয়ার্ড, পিসি ফাইল ও মূল্যবান ড্রয়িং (.dwg) নষ্ট করবেন না!'
              : "Don't risk your passwords, PC files, and valuable drawing (.dwg) files trying to save a little money!"}
          </p>
        </div>

        {/* 2 Comparison Cards (Red Danger vs Green Official) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Cracked Software Risks (Red Card) */}
          <div className="rounded-[2rem] p-6 sm:p-8 lg:p-10 border-2 border-rose-400 bg-[#fff8f8] shadow-sm flex flex-col justify-start transition-all hover:shadow-md">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-rose-100">
              <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-rose-600 tracking-tight">
                {lang === 'bn'
                  ? 'ক্র্যাকড AutoCAD ও Keygen (মারাত্মক ঝুঁকি)'
                  : 'Cracked AutoCAD & Keygen (Severe Risks)'}
              </h3>
            </div>

            {/* List of Warning Points */}
            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              
              {/* Point 1: Keygen & Stealer */}
              <div className="flex items-start gap-3">
                <Skull className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn' ? (
                    <span>
                      <strong className="font-bold text-slate-900">Keygen ও পাসওয়ার্ড হ্যাকিং ঝুঁকি:</strong> পাইরেটেড অটোক্যাডের সাথে পাওয়া <strong className="font-bold text-slate-900">Keygen</strong> অ্যাক্টিভেটরগুলোর সাথে সাইলেন্টলি <strong className="font-bold text-slate-900">RedLine / Vidar Stealer</strong> ম্যালওয়্যার যুক্ত থাকে, যা আপনার ব্যাংক পাসওয়ার্ড ও পার্সোনাল ডাটা চুরি করে!
                    </span>
                  ) : (
                    <span>
                      <strong className="font-bold text-slate-900">Keygen & Password Hacking Risk:</strong> Activators and <strong className="font-bold text-slate-900">Keygens</strong> bundled with pirated AutoCAD silently install <strong className="font-bold text-slate-900">RedLine / Vidar Stealer</strong> malware that steals banking credentials and personal data!
                    </span>
                  )}
                </div>
              </div>

              {/* Point 2: License Error Crashes */}
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-rose-500 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'অ্যাসাইনমেন্ট বা ক্লায়েন্ট প্রজেক্ট জমা দেওয়ার ঠিক আগে "License is Not Valid" বা "Serial Error" পপ-আপে হঠাৎ সফটওয়্যার বন্ধ হওয়া।'
                    : 'Software abruptly crashing with "License is Not Valid" or "Serial Error" pop-ups right before submitting client projects or assignments.'}
                </div>
              </div>

              {/* Point 3: Ransomware File Corruption */}
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-rose-500 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'র‍্যানসামওয়্যার বা ভাইরাসে পিসির সকল মূল্যবান ক্যাড ফাইল (.dwg) লক বা কারাপ্ট হয়ে যাওয়া।'
                    : 'Ransomware or malware permanently encrypting or corrupting all valuable CAD drawing files (.dwg) on your workstation.'}
                </div>
              </div>

              {/* Point 4: Rendering Crashes */}
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-rose-500 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'ভারি প্রজেক্ট রেন্ডারিং করার সময় অটো বন্ধ হয়ে সেভ না হওয়া কাজ ড্রপ করা।'
                    : 'Abrupt application crashes during heavy project rendering causing loss of unsaved design progress.'}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Official Autodesk Own Email Subscription (Green Card) */}
          <div className="rounded-[2rem] p-6 sm:p-8 lg:p-10 border-2 border-[#10b981] bg-[#f4fdf8] shadow-sm flex flex-col justify-start transition-all hover:shadow-md">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-emerald-100">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-700 tracking-tight">
                {lang === 'bn'
                  ? 'অফিশিয়াল Autodesk Own Email Subscription'
                  : 'Official Autodesk Own Email Subscription'}
              </h3>
            </div>

            {/* List of Official Benefits */}
            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              
              {/* Point 1: Own Email Invitation */}
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'আপনার নিজের পার্সোনাল Autodesk ইমেইলেই অফিশিয়াল ইনভাইটেশন।'
                    : 'Official Autodesk team invitation delivered directly to your personal email address.'}
                </div>
              </div>

              {/* Point 2: Direct Official Download */}
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'autodesk.com থেকে সরাসরি অরিজিনাল লেটেস্ট ভার্সন ডাউনলোডের সুবিধা।'
                    : 'Direct installer downloads of genuine latest versions directly from autodesk.com.'}
                </div>
              </div>

              {/* Point 3: 100% Genuine Access */}
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? 'অটোক্যাড সহ অন্তর্ভুক্ত সকল অফিশিয়াল অ্যাপসের শতভাগ অফিশিয়াল অ্যাক্সেস।'
                    : '100% genuine official access to AutoCAD and all included official toolsets.'}
                </div>
              </div>

              {/* Point 4: Virus-Free Environment */}
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 stroke-[2.5] flex-shrink-0 mt-0.5" />
                <div>
                  {lang === 'bn'
                    ? '১০০% ভাইরাসমুক্ত ও নিশ্চিন্তে প্রজেক্ট জমা দেওয়ার পেশাদার পরিবেশ।'
                    : '100% virus-free, secure environment ensuring smooth and confident project delivery.'}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

