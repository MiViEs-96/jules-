"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Mascot() {
  const [mascot, setMascot] = useState<"strawberry" | "corn" | null>(null);

  useEffect(() => {
    setMascot(Math.random() > 0.5 ? "strawberry" : "corn");
  }, []);

  if (!mascot) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white border-2 border-vintage-green p-3 rounded-2xl mb-4 relative shadow-xl max-w-[150px] text-center"
      >
        <p className="text-[10px] uppercase font-bold tracking-tight text-vintage-green leading-tight">
          we are looking for partners, click to me
        </p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b-2 border-r-2 border-vintage-green rotate-45" />
      </motion.div>

      {/* Mascot Anime Style */}
      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-28 h-28 cursor-pointer relative"
        >
          {mascot === "strawberry" ? (
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
              {/* Body with gradient */}
              <defs>
                <radialGradient id="berryGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                  <stop offset="0%" style={{ stopColor: "#FF4D4D" }} />
                  <stop offset="100%" style={{ stopColor: "#E31E24" }} />
                </radialGradient>
              </defs>
              <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" fill="url(#berryGrad)" />

              {/* Leaves */}
              <path d="M35 15C40 5 60 5 65 15L50 25Z" fill="#2D4B32" />
              <path d="M45 10C48 2 52 2 55 10L50 20Z" fill="#3D5B42" />

              {/* Seeds */}
              {[25, 40, 55, 70, 35, 50, 65, 45, 55].map((x, i) => (
                <circle key={i} cx={x} cy={35 + (i % 3) * 15} r="1.2" fill="#FFD700" opacity="0.4" />
              ))}

              {/* Anime Eyes - Large & Sparkly */}
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

              {/* Blushed Cheeks */}
              <ellipse cx="25" cy="55" rx="6" ry="3" fill="#FFB6C1" opacity="0.7" />
              <ellipse cx="75" cy="55" rx="6" ry="3" fill="#FFB6C1" opacity="0.7" />

              {/* Kawaii Smile */}
              <path d="M44 60Q50 68 56 60" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
              <defs>
                <radialGradient id="cornGrad" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                  <stop offset="0%" style={{ stopColor: "#FFEC8B" }} />
                  <stop offset="100%" style={{ stopColor: "#FFD700" }} />
                </radialGradient>
              </defs>
              {/* Husk */}
              <path d="M30 30Q15 50 30 90" fill="none" stroke="#4A6E4F" strokeWidth="6" strokeLinecap="round" />
              <path d="M70 30Q85 50 70 90" fill="none" stroke="#4A6E4F" strokeWidth="6" strokeLinecap="round" />

              {/* Corn Body */}
              <rect x="35" y="20" width="30" height="65" rx="15" fill="url(#cornGrad)" />

              {/* Anime Eyes */}
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

              {/* Smile */}
              <path d="M46 52Q50 58 54 52" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" />

              {/* Blushed Cheeks */}
              <circle cx="38" cy="50" r="3" fill="#FFB6C1" opacity="0.7" />
              <circle cx="62" cy="50" r="3" fill="#FFB6C1" opacity="0.7" />
            </svg>
          )}
        </motion.div>
      </Link>
    </div>
  );
}
