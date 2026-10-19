import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white py-2 px-4 text-xs sm:text-sm font-medium shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span className="tracking-wide font-medium">
          {t.announcement}
        </span>
      </div>
    </div>
  );
}
