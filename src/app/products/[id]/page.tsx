"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import RecipeAccordion from "@/components/RecipeAccordion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { products } from "../data";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-24">
        <Link
          href="/products"
          className="text-xs uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity mb-12 block"
        >
          ← Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`aspect-[4/5] ${product.bgLight} relative border border-vintage-green/10 p-8`}
          >
            <div className="w-full h-full border border-vintage-green/20 flex flex-col items-center justify-center text-center p-12">
               {/* Logo Placeholder */}
               <div className="mb-8 opacity-20">
                  <h5 className="font-serif text-xl uppercase tracking-tighter">Krunshe</h5>
                  <div className="h-[1px] w-full bg-vintage-green" />
               </div>

               <h2 className={`font-serif text-5xl md:text-7xl italic ${product.color} mb-6`}>
                 {product.name}
               </h2>
               <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">
                 Pure Freeze-Dried Selection
               </p>
            </div>

            {/* Vintage Stamp */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-vintage-green/10 rounded-full flex items-center justify-center -rotate-12 bg-vintage-beige">
              <span className="text-[8px] uppercase font-bold tracking-tighter text-center opacity-30">
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
            <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-60">The Detail</span>
            <h1 className="text-4xl md:text-6xl font-serif text-vintage-green mb-8 uppercase leading-none">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-vintage-brown leading-relaxed mb-12 opacity-80">
              {product.description}
            </p>

            <div className="h-[1px] w-full bg-vintage-green/10 mb-12" />

            <h3 className="text-sm uppercase tracking-[0.4em] font-bold mb-8">5 Ways to Enjoy</h3>
            <RecipeAccordion recipes={product.recipes} />

            <div className="mt-16">
              <Link
                href="/contact"
                className="bg-vintage-green text-vintage-beige px-10 py-5 uppercase font-bold tracking-widest text-sm inline-block hover:bg-vintage-green-light transition-colors"
              >
                Inquire for B2B Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-vintage-paper py-20 border-t border-vintage-green/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2024 Krunshe B2B. Zero Chemicals.</p>
        </div>
      </footer>
    </main>
  );
}
