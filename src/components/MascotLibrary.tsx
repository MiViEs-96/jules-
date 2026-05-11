"use client";

import { motion } from "framer-motion";

export const MascotStrawberry = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="berryGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" style={{ stopColor: "#FF4D4D" }} />
        <stop offset="100%" style={{ stopColor: "#E31E24" }} />
      </radialGradient>
    </defs>
    <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" fill="url(#berryGrad)" />
    <path d="M35 15C40 5 60 5 65 15L50 25Z" fill="#2D4B32" />
    <path d="M45 10C48 2 52 2 55 10L50 20Z" fill="#3D5B42" />
    {[25, 40, 55, 70, 35, 50, 65, 45, 55].map((x, i) => (
      <circle key={i} cx={x} cy={35 + (i % 3) * 15} r="1.2" fill="#FFD700" opacity="0.4" />
    ))}
    <g>
      <circle cx="35" cy="45" r="9" fill="black" />
      <circle cx="37" cy="42" r="3.5" fill="white" />
      <circle cx="33" cy="48" r="1.5" fill="white" />
    </g>
    <g>
      <circle cx="65" cy="45" r="9" fill="black" />
      <circle cx="67" cy="42" r="3.5" fill="white" />
      <circle cx="63" cy="48" r="1.5" fill="white" />
    </g>
    <ellipse cx="25" cy="55" rx="6" ry="3" fill="#FFB6C1" opacity="0.7" />
    <ellipse cx="75" cy="55" rx="6" ry="3" fill="#FFB6C1" opacity="0.7" />
    <path d="M44 60Q50 68 56 60" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const MascotCorn = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="cornGrad" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
        <stop offset="0%" style={{ stopColor: "#FFEC8B" }} />
        <stop offset="100%" style={{ stopColor: "#FFD700" }} />
      </radialGradient>
    </defs>
    <path d="M30 30Q15 50 30 90" fill="none" stroke="#4A6E4F" strokeWidth="6" strokeLinecap="round" />
    <path d="M70 30Q85 50 70 90" fill="none" stroke="#4A6E4F" strokeWidth="6" strokeLinecap="round" />
    <rect x="35" y="20" width="30" height="65" rx="15" fill="url(#cornGrad)" />
    <g>
      <circle cx="42" cy="40" r="7.5" fill="black" />
      <circle cx="44" cy="38" r="3" fill="white" />
      <circle cx="41" cy="43" r="1.2" fill="white" />
    </g>
    <g>
      <circle cx="58" cy="40" r="7.5" fill="black" />
      <circle cx="60" cy="38" r="3" fill="white" />
      <circle cx="57" cy="43" r="1.2" fill="white" />
    </g>
    <path d="M46 52Q50 58 54 52" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="38" cy="50" r="3" fill="#FFB6C1" opacity="0.7" />
    <circle cx="62" cy="50" r="3" fill="#FFB6C1" opacity="0.7" />
  </svg>
);

export const MascotMango = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="mangoGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" style={{ stopColor: "#FFD200" }} />
        <stop offset="100%" style={{ stopColor: "#FF8C00" }} />
      </radialGradient>
    </defs>
    <path d="M50 85C80 85 90 60 90 40C90 20 70 10 50 10C30 10 10 20 10 40C10 60 20 85 50 85Z" fill="url(#mangoGrad)" />
    <path d="M50 10C55 2 65 5 60 15Q55 20 50 15" fill="#4A6E4F" />
    <g>
      <circle cx="38" cy="40" r="8" fill="black" />
      <circle cx="40" cy="37" r="3" fill="white" />
      <circle cx="36" cy="42" r="1.2" fill="white" />
    </g>
    <g>
      <circle cx="62" cy="40" r="8" fill="black" />
      <circle cx="64" cy="37" r="3" fill="white" />
      <circle cx="60" cy="42" r="1.2" fill="white" />
    </g>
    <ellipse cx="28" cy="50" rx="5" ry="2.5" fill="#FFB6C1" opacity="0.7" />
    <ellipse cx="72" cy="50" rx="5" ry="2.5" fill="#FFB6C1" opacity="0.7" />
    <path d="M44 58Q50 65 56 58" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const MascotPineapple = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="pineGrad" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
        <stop offset="0%" style={{ stopColor: "#FFF275" }} />
        <stop offset="100%" style={{ stopColor: "#F5C300" }} />
      </radialGradient>
    </defs>
    {/* Crown */}
    <path d="M35 30L50 5L65 30" fill="#2D4B32" />
    <path d="M42 30L50 12L58 30" fill="#4A6E4F" />
    {/* Body */}
    <rect x="30" y="30" width="40" height="55" rx="15" fill="url(#pineGrad)" />
    {/* Crosshatch pattern */}
    <path d="M35 45L65 45M35 60L65 60M35 75L65 75M45 35L45 80M55 35L55 80" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />
    <g>
      <circle cx="42" cy="50" r="7" fill="black" />
      <circle cx="44" cy="48" r="2.5" fill="white" />
    </g>
    <g>
      <circle cx="58" cy="50" r="7" fill="black" />
      <circle cx="60" cy="48" r="2.5" fill="white" />
    </g>
    <circle cx="36" cy="60" r="2.5" fill="#FFB6C1" opacity="0.7" />
    <circle cx="64" cy="60" r="2.5" fill="#FFB6C1" opacity="0.7" />
    <path d="M46 65Q50 72 54 65" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
