"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FRUITS = ["strawberry", "mango", "pineapple", "corn"];

export default function BackgroundDecorations() {
  const { scrollY } = useScroll();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Generate random positions for fruit decorations
    const newItems = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      type: FRUITS[Math.floor(Math.random() * FRUITS.length)],
      top: `${Math.random() * 300}%`, // Spread across long page
      left: `${Math.random() * 90}%`,
      scale: 0.5 + Math.random() * 1.5,
      rotate: Math.random() * 360,
      opacity: 0.03 + Math.random() * 0.05,
      speed: 0.1 + Math.random() * 0.4
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <FruitIcon key={item.id} item={item} scrollY={scrollY} />
      ))}
    </div>
  );
}

function FruitIcon({ item, scrollY }: { item: any, scrollY: any }) {
  const y = useTransform(scrollY, [0, 5000], [0, -5000 * item.speed]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        scale: item.scale,
        rotate: item.rotate,
        opacity: item.opacity,
        y
      }}
    >
      {item.type === "strawberry" && (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" className="text-vintage-green">
          <path d="M50 90C70 90 85 65 85 45C85 25 70 10 50 10C30 10 15 25 15 45C15 65 30 90 50 90Z" />
        </svg>
      )}
      {item.type === "mango" && (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" className="text-vintage-green">
          <path d="M50 85C80 85 90 60 90 40C90 20 70 10 50 10C30 10 10 20 10 40C10 60 20 85 50 85Z" />
        </svg>
      )}
      {item.type === "pineapple" && (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" className="text-vintage-green">
          <rect x="35" y="30" width="30" height="50" rx="15" />
          <path d="M40 10L50 30L60 10" />
        </svg>
      )}
      {item.type === "corn" && (
        <svg width="30" height="40" viewBox="0 0 100 100" fill="currentColor" className="text-vintage-green">
          <ellipse cx="50" cy="50" rx="20" ry="40" />
        </svg>
      )}
    </motion.div>
  );
}
