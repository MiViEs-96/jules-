"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Simple transition for background opacity on scroll
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(232, 226, 210, 0)", "rgba(232, 226, 210, 0.98)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-vintage-green/5 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <h1 className="font-serif font-bold text-vintage-green tracking-tighter uppercase text-2xl md:text-3xl leading-none">
            Krunshe
          </h1>
          <span className="text-vintage-brown font-sans tracking-[0.4em] uppercase text-[8px] mt-1">
            Nature's Crunch
          </span>
        </Link>

        <div className="flex gap-8">
          <Link href="/" className={`hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest ${pathname === '/' ? 'text-vintage-green' : 'text-vintage-brown'}`}>Home</Link>
          <Link href="/products" className={`hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest ${pathname.startsWith('/products') ? 'text-vintage-green' : 'text-vintage-brown'}`}>Products</Link>
          <Link href="/contact" className={`hover:text-vintage-green-light transition-colors uppercase text-[10px] font-bold tracking-widest ${pathname === '/contact' ? 'text-vintage-green' : 'text-vintage-brown'}`}>Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
