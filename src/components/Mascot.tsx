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
        className="bg-white border border-vintage-green p-3 rounded-2xl mb-4 relative shadow-lg max-w-[150px] text-center"
      >
        <p className="text-[10px] uppercase font-bold tracking-tight text-vintage-green leading-tight">
          we are looking for partners, click to me
        </p>
        {/* Pointer */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-vintage-green rotate-45" />
      </motion.div>

      {/* Mascot Image/SVG */}
      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-24 h-24 cursor-pointer"
        >
          {mascot === "strawberry" ? (
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" fill="#8B0000" />
              <path d="M35 15C40 5 60 5 65 15L50 25Z" fill="#2D4B32" />
              {[25, 40, 55, 70, 35, 50, 65, 45, 55].map((x, i) => (
                <circle key={i} cx={x} cy={30 + (i % 3) * 15} r="2" fill="#FFD700" opacity="0.6" />
              ))}
            </svg>
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <rect x="35" y="20" width="30" height="60" rx="15" fill="#FFD700" />
              <path d="M30 30Q20 50 30 85M70 30Q80 50 70 85" fill="none" stroke="#2D4B32" strokeWidth="8" strokeLinecap="round" />
              {[38, 45, 52, 59].map((x) =>
                [25, 35, 45, 55, 65].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#DAA520" />
                ))
              )}
            </svg>
          )}
        </motion.div>
      </Link>
    </div>
  );
}
