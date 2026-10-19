import React from 'react';

export default function Logo({ className = "h-10", showText = true, isDark = false }) {
  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Custom Original Brand Symbol: Shield + Leaf + Circuit */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-105">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="circuitGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#67E8F9" />
            </linearGradient>
          </defs>

          {/* Outer Shield Shell */}
          <path
            d="M20 3L35 8.5V19.5C35 28.5 28.5 35.8 20 38C11.5 35.8 5 28.5 5 19.5V8.5L20 3Z"
            fill="url(#shieldGrad)"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Protective Shield Layer */}
          <path
            d="M20 6.5L32 11V19C32 26.2 26.8 32.2 20 34C13.2 32.2 8 26.2 8 19V11L20 6.5Z"
            fill="#060E23"
            fillOpacity="0.8"
          />

          {/* Organic Leaf (Eco / Sustainability) */}
          <path
            d="M20 10C15 15 14 22 20 28C26 22 25 15 20 10Z"
            fill="url(#leafGrad)"
            opacity="0.9"
          />

          {/* Circuit Traces & Technology Nodes */}
          <path
            d="M20 14V24M17 19H23"
            stroke="#E0F2FE"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="20" cy="19" r="2.2" fill="#38BDF8" />
          <circle cx="17" cy="19" r="1.3" fill="#FFFFFF" />
          <circle cx="23" cy="19" r="1.3" fill="#FFFFFF" />
          <circle cx="20" cy="14" r="1.3" fill="#FFFFFF" />
          <circle cx="20" cy="24" r="1.3" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={`text-lg font-black tracking-wider leading-none ${isDark ? 'text-white' : 'text-slate-900'} flex items-center gap-1 font-sans`}>
            <span>ECOSAFEGUARD</span>
          </div>
          <div className={`text-[10px] font-bold tracking-[0.25em] ${isDark ? 'text-cyan-400' : 'text-blue-600'} uppercase leading-tight mt-0.5`}>
            TECHNOLOGY
          </div>
        </div>
      )}
    </div>
  );
}
