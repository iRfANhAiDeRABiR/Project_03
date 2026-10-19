import React, { useState } from 'react';

// Official bKash Logo loaded from verified online source with instant vector fallback
export function BkashLogo({ className = "w-6 h-6" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="https://cdn.worldvectorlogo.com/logos/bkash.svg"
        alt="bKash"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  return (
    <svg className={className} viewBox="11.2 10.7 458 209.5" xmlns="http://www.w3.org/2000/svg">
      <path d="M327.99 110.75l12.99 58.4 85.01-43.04z" fill="#d12053" />
      <path d="M352.16 23.48L328 110.76l98.01 15.35z" fill="#e2136e" />
      <path d="M248.31 10.7l101.38 12.11-23.97 86.76z" fill="#d12053" />
      <path d="M247.52 27.76h11.29l31.67 40.5z" fill="#9e1638" />
      <path d="M428.69 125.55l-29.46-40.77 47.66-8.53z" fill="#d12053" />
      <path d="M423.77 137.5l3.04-9.07-74.39 37.74z" fill="#e2136e" />
      <path d="M325.91 113.05l15.52 69.77-46.06 37.46z" fill="#9e1638" />
      <path d="M442.25 96.97l27.05-.46-19.55-19.89z" fill="#e2136e" />
    </svg>
  );
}

// Official Nagad Logo loaded from verified online source with instant vector fallback
export function NagadLogo({ className = "w-6 h-6" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/bn/thumb/9/97/%E0%A6%A8%E0%A6%97%E0%A6%A6%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg/320px-%E0%A6%A8%E0%A6%97%E0%A6%A6%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg.png"
        alt="Nagad"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#F7941D" />
      <path
        d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20"
        stroke="#ED1C24"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="23" cy="18" r="2.8" fill="#FFFFFF" />
      <path d="M20 20L27 27" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Official Rocket Logo loaded from verified online source with instant vector fallback
export function RocketLogo({ className = "w-6 h-6" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rocket_mobile_banking_logo.svg"
        alt="Rocket"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28L23 8L36 5L32 17L12 36L15 25L4 28Z" fill="#8C3494" />
      <path d="M23 8L18 22L32 17L23 8Z" fill="#6A1B7B" />
      <path d="M18 22L12 36L15 25L18 22Z" fill="#AB47BC" />
      <circle cx="28" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// Glossy 3D Blue Shield Icon (Exact match to reference replacement warranty screenshot)
export function Shield3D({ className = "w-16 h-16" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shield3dGrad" x1="12" y1="8" x2="60" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.3" stopColor="#0EA5E9" />
          <stop offset="0.7" stopColor="#0284C7" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="shield3dBorder" x1="36" y1="4" x2="36" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" />
          <stop offset="0.5" stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="shield3dHighlight" x1="18" y1="12" x2="36" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="0.8" stopColor="#FFFFFF" stopOpacity="0.05" />
        </linearGradient>
        <filter id="shield3dDrop" x="4" y="6" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284C7" floodOpacity="0.32" />
        </filter>
      </defs>
      <g filter="url(#shield3dDrop)">
        {/* Main 3D Curved Shield Body */}
        <path
          d="M36 7L16 15C16 32 24 50 36 61C48 50 56 32 56 15L36 7Z"
          fill="url(#shield3dGrad)"
          stroke="url(#shield3dBorder)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Left Side 3D Specular Sheen */}
        <path
          d="M36 10L19 17C19 31 25 46 36 56V10Z"
          fill="url(#shield3dHighlight)"
        />
        {/* Crisp Center White Shield Checkmark */}
        <path
          d="M29 33L34 38L44 26"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
