"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import RecipeAccordion from "@/components/RecipeAccordion";
import PrivacyModal from "@/components/PrivacyModal";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { products } from "../data";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-vintage-green text-vintage-beige">
      <Navbar />

      <section className="container mx-auto px-6 py-24">
        <Link
          href="/products"
          className="text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity mb-12 block text-vintage-beige"
        >
          ← Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`aspect-[4/5] ${product.bgLight} relative border-2 border-vintage-beige/10 p-8 shadow-2xl`}
          >
            <div className="w-full h-full border border-vintage-green/10 flex flex-col items-center justify-center text-center p-12">
               <div className="mb-8 opacity-20">
                  <h5 className="font-serif text-xl uppercase tracking-tighter text-vintage-green">Krunshe</h5>
                  <div className="h-[1px] w-full bg-vintage-green" />
               </div>

               <h2 className={`font-serif text-5xl md:text-7xl italic ${product.color} mb-6`}>
                 {product.name}
               </h2>
               <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 text-vintage-green">
                 Pure Freeze-Dried Selection
               </p>
            </div>

            {/* Vintage Stamp */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-vintage-beige/20 rounded-full flex items-center justify-center -rotate-12 bg-vintage-beige shadow-md">
              <span className="text-[8px] uppercase font-bold tracking-tighter text-center opacity-40 text-vintage-green">
                Harvested<br/>at Peak<br/>Time
              </span>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-vintage-beige opacity-40" />
              <span className="text-xs uppercase tracking-[0.5em] block opacity-60 text-vintage-beige">The Detail</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-vintage-beige mb-8 uppercase leading-none">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-vintage-beige/90 leading-relaxed mb-12 border-l-2 border-vintage-beige/20 pl-8">
              {product.description}
            </p>

            <div className="h-[1px] w-full bg-vintage-beige/10 mb-12" />

            <h3 className="text-sm uppercase tracking-[0.4em] font-bold mb-8 text-vintage-beige">5 Ways to Enjoy</h3>
            {/* We need to pass light theme to accordion or ensure it looks good on green */}
            <div className="recipe-green-theme">
               <RecipeAccordion recipes={product.recipes} />
            </div>

            <div className="mt-16 bg-vintage-beige p-1 group">
               <Link
                href="/contact"
                className="w-full bg-vintage-green text-vintage-beige px-10 py-5 uppercase font-bold tracking-widest text-sm inline-block text-center hover:bg-vintage-beige hover:text-vintage-green transition-all border border-vintage-beige/10"
              >
                Inquire for B2B Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-vintage-green/90 py-20 border-t border-vintage-beige/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-vintage-beige/60">
            <Link href="/" className="hover:text-vintage-beige">Home</Link>
            <Link href="/products" className="hover:text-vintage-beige">Products</Link>
            <Link href="/contact" className="hover:text-vintage-beige">Contact</Link>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-vintage-beige">Privacy</button>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2024 Krunshe B2B. Zero Chemicals.</p>
        </div>
      </footer>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      <style jsx global>{`
        .recipe-green-theme h4 { color: #F5F5DC !important; }
        .recipe-green-theme p { color: #F5F5DC !important; opacity: 0.7; }
        .recipe-green-theme .border-b { border-color: rgba(245, 245, 220, 0.1) !important; }
        .recipe-green-theme svg { color: rgba(245, 245, 220, 0.4) !important; }
      `}</style>
    </main>
  );
}
