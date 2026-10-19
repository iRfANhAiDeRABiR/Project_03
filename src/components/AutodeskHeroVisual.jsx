import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  PenTool,
  Building2,
  Box,
  CheckCircle2,
  Layers,
  Compass,
  Maximize2,
  Grid
} from 'lucide-react';

export default function AutodeskHeroVisual() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-cyan to-amber-500/20 opacity-30 blur-2xl"></div>

      {/* Main Console / CAD Viewport Container */}
      <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-navy-900/95 via-navy-950 to-navy-900 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
        
        {/* CAD Window Header Toolbar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-slate-400 font-mono text-[11px] ml-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Project_Master_Model.dwg / .rvt</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-brand-cyan">
              2D / 3D BIM Wireframe
            </span>
          </div>
        </div>

        {/* Viewport Canvas with Drafting Grid & Technical Geometry */}
        <div className="relative rounded-2xl bg-navy-950 border border-white/5 p-4 sm:p-6 overflow-hidden h-[340px] flex items-center justify-center">
          
          {/* Coordinate Grid Background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle, #38BDF8 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>

          {/* Abstract 3D ViewCube (Top Right of Viewport) */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-navy-900/90 border border-slate-600/60 shadow-lg flex flex-col items-center justify-center text-[9px] font-mono text-slate-300 pointer-events-none">
            <div className="w-full text-center border-b border-slate-700 py-0.5 text-cyan-400 font-bold">TOP</div>
            <div className="flex w-full justify-between px-1 text-[8px] text-slate-400">
              <span>W</span>
              <span>E</span>
            </div>
            <div className="w-full text-center border-t border-slate-700 py-0.5 text-[8px] text-slate-400">FRONT</div>
          </div>

          {/* Crosshair Coordinate Markers */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 space-y-0.5 pointer-events-none">
            <div>X: 14820.50 mm</div>
            <div>Y: 08430.25 mm</div>
            <div>Z: +03200.00 mm (Level 02)</div>
          </div>

          {/* SVG Vector Architecture & Engineering Composition */}
          <svg
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-[360px] drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            {/* 2D Architectural Floor Plan Layout Lines */}
            <path
              d="M30 180 H370 M30 180 V60 H180 V100 H370 V180"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Interior partitions */}
            <path
              d="M110 60 V180 M180 140 H370 M270 100 V180"
              stroke="#1E293B"
              strokeWidth="1.5"
            />

            {/* Dimension Line with Arrow ticks */}
            <line x1="30" y1="205" x2="370" y2="205" stroke="#38BDF8" strokeWidth="1" />
            <line x1="30" y1="198" x2="30" y2="212" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="370" y1="198" x2="370" y2="212" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="180" y="218" fill="#38BDF8" fontSize="10" fontFamily="monospace" textAnchor="middle">
              34,000 mm SPAN
            </text>

            {/* 3D Isometric Architectural & Mechanical Wireframe (Revit/Fusion) */}
            <g transform="translate(140, 40)">
              {/* Ground footprint */}
              <polygon
                points="60,80 130,45 200,80 130,115"
                fill="rgba(37, 99, 235, 0.08)"
                stroke="#2563EB"
                strokeWidth="1.5"
              />
              {/* Vertical Structural Columns */}
              <line x1="60" y1="80" x2="60" y2="20" stroke="#06B6D4" strokeWidth="2" />
              <line x1="130" y1="45" x2="130" y2="-15" stroke="#06B6D4" strokeWidth="2" />
              <line x1="200" y1="80" x2="200" y2="20" stroke="#06B6D4" strokeWidth="2" />
              <line x1="130" y1="115" x2="130" y2="55" stroke="#06B6D4" strokeWidth="2" />

              {/* Roof Frame */}
              <polygon
                points="60,20 130,-15 200,20 130,55"
                fill="rgba(6, 182, 212, 0.15)"
                stroke="#38BDF8"
                strokeWidth="2"
              />

              {/* Parametric Truss Diagonals */}
              <line x1="60" y1="20" x2="130" y2="55" stroke="#67E8F9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="130" y1="-15" x2="200" y2="20" stroke="#67E8F9" strokeWidth="1" strokeDasharray="3 3" />

              {/* Central Geometric Node */}
              <circle cx="130" cy="20" r="4" fill="#F59E0B" />
              <circle cx="130" cy="20" r="8" stroke="#F59E0B" strokeWidth="1" opacity="0.6" />
            </g>
          </svg>

          {/* Status Bar inside Viewport */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                SNAP: ON
              </span>
              <span className="text-cyan-400">ORTHO: ON</span>
              <span>GRID: 100</span>
            </div>
            <div className="text-slate-400">AUTODESK ENGINE READY</div>
          </div>
        </div>

        {/* Floating Badges & Cards (Directly fulfilling Section 5 requirements) */}
        
        {/* Floating Badge 1: AutoCAD (Top-Left) */}
        <div className="absolute -top-4 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl glass-card border border-red-500/40 shadow-xl flex items-center gap-2 bg-navy-900/90 animate-float-slow">
          <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">
            <PenTool className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">{t.hero.floatingBadges.autocad}</div>
            <div className="text-[9px] text-slate-400">2D & 3D Drafting</div>
          </div>
        </div>

        {/* Floating Badge 2: Revit (Top-Right) */}
        <div className="absolute -top-5 -right-3 sm:-right-5 px-3.5 py-2 rounded-xl glass-card border border-blue-500/40 shadow-xl flex items-center gap-2 bg-navy-900/90 animate-float-delayed">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">{t.hero.floatingBadges.revit}</div>
            <div className="text-[9px] text-slate-400">BIM Architecture</div>
          </div>
        </div>

        {/* Floating Badge 3: 3ds Max (Bottom-Left) */}
        <div className="absolute -bottom-4 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl glass-card border border-cyan-500/40 shadow-xl flex items-center gap-2 bg-navy-900/90">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">{t.hero.floatingBadges.max}</div>
            <div className="text-[9px] text-slate-400">3D Visualization</div>
          </div>
        </div>

        {/* Floating Badge 4: Subscription Available (Bottom-Right) */}
        <div className="absolute -bottom-5 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl glass-card border border-emerald-500/40 shadow-xl flex items-center gap-2 bg-navy-900/90">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">{t.hero.floatingBadges.subAvailable}</div>
            <div className="text-[9px] text-emerald-400 font-semibold">1 Year • 3 Years Official Access</div>
          </div>
        </div>

      </div>
    </div>
  );
}

