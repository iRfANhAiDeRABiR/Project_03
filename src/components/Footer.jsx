import React from 'react';
import Logo from './common/Logo';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const autodeskProductsList = [
    "AutoCAD",
    "Revit",
    "3ds Max",
    "Maya",
    "Fusion 360",
    "Civil 3D"
  ];

  const collectionsList = [
    "AEC Collection",
    "Product Design & Manufacturing Collection",
    "Media & Entertainment Collection"
  ];

  const supportLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Order Support", href: "#order" },
    { label: "Why Us", href: "#why-us" },
    { label: "Terms & Privacy", href: "#security" }
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isDark={false} />
            <p className="text-sm font-medium text-slate-800 italic">
              "{t.brandTagline}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Autodesk Software Subscriptions</span>
            </div>
          </div>

          {/* Col 2: Autodesk Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.colProducts}
            </h4>
            <ul className="space-y-2.5">
              {autodeskProductsList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#collections"
                    className="hover:text-blue-600 transition-colors text-slate-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Collections (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.colCollections}
            </h4>
            <ul className="space-y-2.5">
              {collectionsList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#collections"
                    className="hover:text-blue-600 transition-colors text-slate-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Support (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              {t.footer.colSupport}
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-blue-600 transition-colors text-slate-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Trademark Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-[11px] text-slate-500">
            {t.footer.copyright}
          </div>

          <div className="text-[10px] text-slate-500 max-w-2xl text-center md:text-right leading-normal">
            {t.footer.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
}
