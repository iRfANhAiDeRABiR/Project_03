import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 lg:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 border border-blue-200 bg-blue-50 text-blue-600 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {title}{' '}
          {highlight && (
            <span className="gradient-text-cyan">{highlight}</span>
          )}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
