"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { products } from "./data";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="text-xs uppercase tracking-[0.5em] mb-4"
          >
            The Full Harvest
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-center uppercase text-vintage-green"
          >
            Our Products
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/products/${product.id}`} className="group block">
                <div className={`aspect-video ${product.bgLight} mb-8 relative border border-vintage-green/5 overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="w-full h-full border border-vintage-green/10 flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-700">
                        <h3 className={`font-serif text-4xl md:text-5xl italic ${product.color} mb-2`}>{product.name}</h3>
                        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Click to explore recipes</span>
                     </div>
                  </div>
                  {/* Vintage corner accents */}
                  <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-vintage-green/20" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-vintage-green/20" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold uppercase tracking-[0.2em] text-sm mb-2">{product.name}</h4>
                    <p className="text-xs opacity-60 max-w-md uppercase tracking-wider leading-relaxed">
                      {product.description.substring(0, 100)}...
                    </p>
                  </div>
                  <span className="text-vintage-green font-serif italic text-lg group-hover:pr-4 transition-all">Details →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-vintage-paper py-20 border-t border-vintage-green/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2024 Krunshe B2B. Nature's Purity.</p>
        </div>
      </footer>
    </main>
  );
}
