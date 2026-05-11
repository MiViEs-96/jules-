"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MascotStrawberry, MascotCorn, MascotMango, MascotPineapple } from "./MascotLibrary";

export default function Mascot() {
  const pathname = usePathname();
  const [mascot, setMascot] = useState<"strawberry" | "corn" | "mango" | "pineapple" | null>(null);

  useEffect(() => {
    const types: ("strawberry" | "corn" | "mango" | "pineapple")[] = ["strawberry", "corn", "mango", "pineapple"];
    setMascot(types[Math.floor(Math.random() * types.length)]);
  }, []);

  // Only show on Home page as per requirement
  if (pathname !== "/" || !mascot) return null;

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

      {/* Mascot */}
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
          {mascot === "strawberry" && <MascotStrawberry />}
          {mascot === "corn" && <MascotCorn />}
          {mascot === "mango" && <MascotMango />}
          {mascot === "pineapple" && <MascotPineapple />}
        </motion.div>
      </Link>
    </div>
  );
}
