"use client";

import { motion } from "framer-motion";

const AnimeFace = ({ eyeSize = 8, eyeX = 35, eyeY = 45, smileY = 60, smileW = 12 }) => (
  <g>
    {/* Eyes */}
    <g>
      <circle cx={eyeX} cy={eyeY} r={eyeSize} fill="black" />
      <circle cx={eyeX + 2} cy={eyeY - 3} r={eyeSize * 0.4} fill="white" />
      <circle cx={eyeX - 2} cy={eyeY + 3} r={eyeSize * 0.15} fill="white" />
    </g>
    <g>
      <circle cx={100 - eyeX} cy={eyeY} r={eyeSize} fill="black" />
      <circle cx={100 - eyeX + 2} cy={eyeY - 3} r={eyeSize * 0.4} fill="white" />
      <circle cx={100 - eyeX - 2} cy={eyeY + 3} r={eyeSize * 0.15} fill="white" />
    </g>
    {/* Cheeks */}
    <ellipse cx={eyeX - 10} cy={eyeY + 10} rx="6" ry="3" fill="#FFB6C1" opacity="0.6" />
    <ellipse cx={110 - eyeX} cy={eyeY + 10} rx="6" ry="3" fill="#FFB6C1" opacity="0.6" />
    {/* Smile */}
    <path
      d={`M${50 - smileW/2} ${smileY} Q50 ${smileY + 8} ${50 + smileW/2} ${smileY}`}
      fill="none"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </g>
);

export const MascotStrawberry = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="berryGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" style={{ stopColor: "#FF5E5E" }} />
        <stop offset="80%" style={{ stopColor: "#C11B1B" }} />
        <stop offset="100%" style={{ stopColor: "#8B0000" }} />
      </radialGradient>
    </defs>
    {/* Botanical Body */}
    <path
      d="M50 95C30 95 12 75 12 48C12 25 30 15 50 15C70 15 88 25 88 48C88 75 70 95 50 95Z"
      fill="url(#berryGrad)"
    />
    {/* Detailed Leaves */}
    <g fill="#2D4B32">
      <path d="M50 20L35 5C40 2 45 2 50 10Z" />
      <path d="M50 20L65 5C60 2 55 2 50 10Z" />
      <path d="M50 20L25 12C30 8 40 8 50 15Z" />
      <path d="M50 20L75 12C70 8 60 8 50 15Z" />
      <path d="M50 25C50 15 50 10 50 0" stroke="#2D4B32" strokeWidth="2" fill="none" />
    </g>
    {/* Seeds - Botanical pattern */}
    <g fill="#FFD700" opacity="0.6">
      {[
        [30, 40], [50, 35], [70, 40],
        [25, 55], [40, 50], [60, 50], [75, 55],
        [35, 70], [50, 65], [65, 70],
        [45, 82], [55, 82]
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="1" ry="2" transform={`rotate(${(x-50)*0.5}, ${x}, ${y})`} />
      ))}
    </g>
    <AnimeFace eyeY={45} smileY={62} />
  </svg>
);

export const MascotCorn = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <linearGradient id="cornGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FFD700" }} />
        <stop offset="50%" style={{ stopColor: "#FFEC8B" }} />
        <stop offset="100%" style={{ stopColor: "#DAA520" }} />
      </linearGradient>
    </defs>
    {/* Detailed Husks (Green leaves) */}
    <path d="M50 95C30 95 15 70 20 20C25 40 35 90 50 95Z" fill="#4A6E4F" />
    <path d="M50 95C70 95 85 70 80 20C75 40 65 90 50 95Z" fill="#3D5B42" />

    {/* Corn Ear (Kernels) */}
    <rect x="35" y="25" width="30" height="65" rx="15" fill="url(#cornGrad)" />

    {/* Kernel Grid Detail */}
    <g stroke="#DAA520" strokeWidth="0.2" opacity="0.4">
      {Array.from({ length: 8 }).map((_, row) => (
        <line key={row} x1="35" y1={30 + row * 8} x2="65" y2={30 + row * 8} />
      ))}
      {Array.from({ length: 4 }).map((_, col) => (
        <line key={col} x1={38 + col * 8} y1="25" x2={38 + col * 8} y2="90" />
      ))}
    </g>

    {/* Tassels/Silk */}
    <g stroke="#EEDD82" strokeWidth="0.5" opacity="0.6">
      <path d="M45 25Q50 10 55 25" fill="none" />
      <path d="M48 25Q50 15 52 25" fill="none" />
    </g>

    <AnimeFace eyeY={48} eyeSize={7} smileY={65} smileW={10} />
  </svg>
);

export const MascotMango = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FFD200" }} />
        <stop offset="40%" style={{ stopColor: "#FF8C00" }} />
        <stop offset="100%" style={{ stopColor: "#E31E24" }} />
      </linearGradient>
    </defs>
    {/* Botanical Kidney Shape */}
    <path
      d="M50 15C75 15 90 35 90 55C90 80 65 90 45 90C25 90 10 75 10 50C10 25 30 15 50 15Z"
      fill="url(#mangoGrad)"
    />
    {/* Stem & Leaf */}
    <path d="M50 15C50 5 55 5 55 10" stroke="#4A3728" strokeWidth="3" fill="none" />
    <path d="M55 10Q70 0 80 15" fill="#2D4B32" />

    <AnimeFace eyeX={38} eyeY={45} smileY={62} />
  </svg>
);

export const MascotPineapple = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full drop-shadow-xl ${className}`}>
    <defs>
      <radialGradient id="pineGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#FFF275" }} />
        <stop offset="100%" style={{ stopColor: "#DAA520" }} />
      </radialGradient>
    </defs>

    {/* Botanical Crown (Layered Leaves) */}
    <g fill="#2D4B32">
      <path d="M50 35L35 10C40 15 45 15 50 25Z" />
      <path d="M50 35L65 10C60 15 55 15 50 25Z" />
      <path d="M50 35L50 5C45 15 55 15 50 25Z" />
      <path d="M50 35L25 20C35 25 40 25 50 30Z" />
      <path d="M50 35L75 20C65 25 60 25 50 30Z" />
    </g>

    {/* Pineapple Body - Oval with scales */}
    <path d="M30 35C30 30 70 30 70 35L75 75C75 85 25 85 25 75Z" fill="url(#pineGrad)" />

    {/* Scales/Hexagon Detail */}
    <g stroke="#8B4513" strokeWidth="0.5" opacity="0.2" fill="none">
       {/* Diamond pattern */}
       <path d="M30 45L70 45M30 55L70 55M30 65L70 65M30 75L70 75" />
       <path d="M40 35L30 80M50 35L40 80M60 35L50 80M70 35L60 80" />
       <path d="M40 35L50 80M30 35L40 80M60 35L70 80" />
    </g>

    <AnimeFace eyeY={55} eyeSize={7} smileY={72} smileW={10} />
  </svg>
);
