"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  // For home, we do the full transition.
  // For other pages, we stay in the shrunk state.
  const logoScale = useTransform(smoothScrollY, [0, 400], [isHome ? 2.5 : 1, 1]);

  // Adjusted logoY:
  // On home, 0 scroll: "5vh" (centered)
  // On home, 400 scroll: "0px" (top of navbar)
  const logoY = useTransform(smoothScrollY, [0, 400], [isHome ? "5vh" : "0px", "0px"]);

  const navHeight = useTransform(smoothScrollY, [0, 400], [isHome ? "100vh" : "80px", "80px"]);
  const navBg = useTransform(
    smoothScrollY,
    [350, 400],
    [isHome ? "rgba(232, 226, 210, 0)" : "rgba(232, 226, 210, 0.98)", "rgba(232, 226, 210, 0.98)"]
  );
  const opacityMotto = useTransform(smoothScrollY, [0, 200], [isHome ? 1 : 0, 0]);
  const navLinksOpacity = useTransform(smoothScrollY, [380, 400], [isHome ? 0 : 1, 1]);

  return (
    <>
      <motion.nav
        style={{
          height: navHeight,
          backgroundColor: navBg,
        }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: logoY, scale: logoScale }}
          className="flex flex-col items-center z-10"
        >
          <Link href="/">
            <h1 className="font-serif font-bold text-vintage-green tracking-tighter uppercase text-3xl md:text-5xl">
              Krunshe
            </h1>
          </Link>
          <motion.p
            style={{ opacity: opacityMotto }}
            className="text-vintage-brown font-sans tracking-[0.5em] uppercase text-[8px] md:text-[10px] mt-4 text-center whitespace-nowrap"
          >
            Nature's Crunch, Unaltered
          </motion.p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          style={{ opacity: navLinksOpacity }}
          className="absolute bottom-4 flex gap-8"
        >
          <Link href="/" className="hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest text-vintage-brown">Home</Link>
          <Link href="/products" className="hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest text-vintage-brown">Products</Link>
          <Link href="/contact" className="hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest text-vintage-brown">Contact</Link>
        </motion.div>

        <motion.div
          style={{ opacity: useTransform(smoothScrollY, [380, 400], [isHome ? 0 : 0.1, 0.1]) }}
          className="absolute bottom-0 w-full h-[1px] bg-vintage-green"
        />
      </motion.nav>

      {/* Spacer for the hero transition */}
      <div style={{ height: isHome ? "100vh" : "80px" }} />
    </>
  );
}
