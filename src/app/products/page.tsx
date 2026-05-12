"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import PrivacyModal from "@/components/PrivacyModal";
import { useState, useEffect } from "react";
import { products } from "./data";
import { MascotStrawberry, MascotCorn, MascotMango, MascotPineapple } from "@/components/MascotLibrary";

const MascotMap: Record<string, React.FC<{ className?: string }>> = {
  strawberry: MascotStrawberry,
  corn: MascotCorn,
  mango: MascotMango,
  pineapple: MascotPineapple,
};

export default function ProductsPage() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [responder, setResponder] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleHover = (productId: string) => {
    if (isMobile) return;
    setHoveredProduct(productId);
    // Pick a random product that is NOT the hovered one to respond
    const others = products.filter(p => p.id !== productId);
    const randomOther = others[Math.floor(Math.random() * others.length)];
    setResponder(randomOther.id);
  };

  return (
    <main className="min-h-screen bg-vintage-beige text-vintage-brown relative">
      <Navbar />

      {/* Background Peeking Mascots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [-20, 0, -20] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-10 top-1/4 w-32 h-32 opacity-20"
        >
          <MascotStrawberry />
        </motion.div>
        <motion.div
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -right-12 bottom-1/3 w-40 h-40 opacity-15 rotate-[-15deg]"
        >
          <MascotPineapple />
        </motion.div>
      </div>

      <section className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="text-xs uppercase tracking-[0.5em] mb-4 text-vintage-brown"
          >
            The Full Harvest
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-center uppercase text-vintage-brown"
          >
            Our Products
          </motion.h2>
          <div className="w-24 h-[1px] bg-vintage-brown mt-6 opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          {products.map((product, i) => {
            const MascotComp = MascotMap[product.id] || MascotMap.strawberry;
            const isHovered = hoveredProduct === product.id;
            const isResponding = responder === product.id && hoveredProduct !== null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => handleHover(product.id)}
                onMouseLeave={() => { setHoveredProduct(null); setResponder(null); }}
                className="relative group"
              >
                {/* Product Mascot Near Card */}
                <div className={`absolute -top-16 ${i % 2 === 0 ? '-left-8' : '-right-8'} w-24 h-24 z-20 pointer-events-none`}>
                  <motion.div
                    animate={isHovered ? { scale: 1.2, y: -10 } : { y: [0, -5, 0] }}
                    transition={isHovered ? { type: "spring" } : { duration: 3, repeat: Infinity }}
                  >
                    <MascotComp />

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white border border-vintage-green px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                        >
                          <p className="text-[9px] font-bold uppercase text-vintage-green">I'm the best</p>
                        </motion.div>
                      )}
                      {isResponding && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-vintage-green border border-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                        >
                          <p className="text-[9px] font-bold uppercase text-white">is not true, I am</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="bg-white/40 p-6 md:p-8 border border-vintage-brown/10 hover:border-vintage-green/30 transition-colors shadow-sm backdrop-blur-sm">
                  <Link href={`/products/${product.id}`} className="group block">
                    <div className={`aspect-video ${product.bgLight} mb-6 md:mb-8 relative border border-vintage-brown/5 overflow-hidden shadow-inner`}>
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                         <div className="w-full h-full border border-vintage-green/5 flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-700">
                            <h3 className={`font-serif text-4xl md:text-5xl italic ${product.color} mb-2`}>{product.name}</h3>
                            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 text-vintage-green">Click to explore recipes</span>
                         </div>
                      </div>
                      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-vintage-green/10" />
                      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-vintage-green/10" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="font-bold uppercase tracking-[0.2em] text-sm mb-2 text-vintage-brown">{product.name}</h4>
                        <p className="text-xs opacity-60 max-w-md uppercase tracking-wider leading-relaxed text-vintage-brown/80">
                          {product.description.substring(0, 100)}...
                        </p>
                      </div>
                      <span className="text-vintage-green font-serif italic text-lg group-hover:pr-4 transition-all">Details →</span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <footer className="bg-vintage-beige/80 py-20 border-t border-vintage-brown/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-vintage-brown/60">
            <Link href="/" className="hover:text-vintage-green">Home</Link>
            <Link href="/products" className="hover:text-vintage-green">Products</Link>
            <Link href="/contact" className="hover:text-vintage-green">Contact</Link>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-vintage-green">Privacy</button>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2024 Krunshe B2B. Nature's Purity.</p>
        </div>
      </footer>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </main>
  );
}
