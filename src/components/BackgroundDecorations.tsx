"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundDecorations() {
  const { scrollY } = useScroll();

  // Parallax effects for different fruit shapes
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -150]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -300]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.03]">
      {/* Strawberry shape top left */}
      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-64 h-64 text-vintage-green">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" />
        </svg>
      </motion.div>

      {/* Mango shape mid right */}
      <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[8%] w-80 h-80 text-vintage-green rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M30 20C50 10 90 30 80 70C70 100 30 90 20 70C10 50 10 30 30 20Z" />
        </svg>
      </motion.div>

      {/* Pineapple shape mid left */}
      <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[10%] w-72 h-96 text-vintage-green -rotate-12">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <rect x="35" y="20" width="30" height="60" rx="10" />
          <path d="M40 10L50 25L60 10" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Another strawberry bottom right */}
      <motion.div style={{ y: y4 }} className="absolute top-[80%] right-[15%] w-56 h-56 text-vintage-green -rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" />
        </svg>
      </motion.div>
    </div>
  );
}
