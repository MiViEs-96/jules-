"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import PrivacyModal from "@/components/PrivacyModal";
import { useState } from "react";

export default function Home() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Content - Motto */}
      <section className="container mx-auto px-6 pt-48 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-12 italic text-vintage-green leading-tight">
            "Buy fruit when it's time to buy it.<br/>No chemicals. No preservatives."
          </h2>
          <p className="text-xl md:text-2xl text-vintage-brown font-serif italic leading-relaxed mb-16 opacity-80">
            Krunshe is your B2B gateway to nature's original flavor. Minimalist by design, vintage in spirit, pure in essence.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/products"
              className="group relative px-10 py-5 overflow-hidden"
            >
              <span className="relative z-10 text-vintage-beige uppercase font-bold tracking-[0.2em] text-sm">Explore Our Harvest</span>
              <div className="absolute inset-0 bg-vintage-green group-hover:bg-vintage-green-light transition-colors duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group relative px-10 py-5 overflow-hidden border-2 border-vintage-green"
            >
              <span className="relative z-10 text-vintage-green uppercase font-bold tracking-[0.2em] text-sm group-hover:text-vintage-beige transition-colors duration-300">B2B Inquiry</span>
              <div className="absolute inset-0 bg-vintage-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#2D4B32] text-[#F5F5DC] py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-vintage-beige/10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative border border-vintage-beige/30 p-4 bg-white/5 backdrop-blur-sm">
               <div className="w-full h-full border border-vintage-beige/20 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 border-2 border-vintage-beige/40 rounded-full mb-8 flex items-center justify-center">
                    <span className="font-serif text-4xl">K</span>
                  </div>
                  <h4 className="font-serif text-2xl italic mb-4">The Vintage Standard</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60 leading-loose">
                    Inspired by the honest production methods of the early 20th century. Before the age of synthetic additives.
                  </p>
               </div>
            </div>
            {/* Stamp-like element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-vintage-beige/20 rounded-full flex items-center justify-center rotate-12">
              <span className="text-[10px] uppercase font-bold tracking-tighter text-center opacity-40">Guaranteed Pure<br/>No Chemicals<br/>Est. 2024</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.5em] mb-6 block opacity-70">Our Philosophy</span>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 uppercase leading-none">Nature's Time,<br/>Honored.</h3>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed font-serif italic">
              "We don't add. We preserve. By harvesting at the peak of ripeness and using advanced freeze-drying, we lock in nature's perfection."
            </p>
            <div className="space-y-6">
              {[
                { title: "100% Pure Fruit", desc: "No sugar, no oils, no additives. Ever." },
                { title: "Vintage Soul", desc: "A return to simple, honest food production." },
                { title: "B2B Excellence", desc: "Scalable purity for your high-end products." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-vintage-beige/40 font-serif text-2xl">0{i+1}</div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h5>
                    <p className="text-xs opacity-60 uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Sneak Peek */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col items-center mb-20">
          <span className="text-xs uppercase tracking-[0.5em] mb-4 opacity-60">The Collection</span>
          <h3 className="text-4xl md:text-6xl font-serif text-center uppercase">Our Staples</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: 'Boiled Corn', color: 'bg-yellow-100' },
            { name: 'Mango', color: 'bg-orange-100' },
            { name: 'Pineapple', color: 'bg-yellow-50' },
            { name: 'Strawberry', color: 'bg-red-50' }
          ].map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] ${product.color} mb-8 overflow-hidden relative border border-vintage-green/5`}>
                <div className="absolute inset-0 bg-vintage-green/0 group-hover:bg-vintage-green/10 transition-colors duration-500" />
                <div className="w-full h-full flex items-center justify-center p-12">
                   <div className="w-full h-full border border-vintage-green/20 flex flex-col items-center justify-center text-center">
                     <span className="font-serif italic text-vintage-green/60 text-2xl mb-2">{product.name}</span>
                     <span className="text-[10px] uppercase tracking-widest opacity-40">Pure Freeze-Dried</span>
                   </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-vintage-green/20" />
              </div>
              <h4 className="font-bold uppercase tracking-[0.3em] text-xs text-center group-hover:text-vintage-green transition-colors">{product.name}</h4>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/products" className="text-sm font-bold uppercase tracking-widest border-b-2 border-vintage-green pb-2 hover:opacity-60 transition-opacity">
            View Full Product List
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E8E2D2] py-20 border-t border-vintage-green/10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-vintage-green mb-2 uppercase tracking-tighter">Krunshe</h2>
            <div className="w-12 h-[1px] bg-vintage-green mx-auto mb-4" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-vintage-brown">Nature's Crunch, Unaltered</p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] mb-16">
            <Link href="/" className="hover:text-vintage-green-light transition-colors">Home</Link>
            <Link href="/products" className="hover:text-vintage-green-light transition-colors">Products</Link>
            <Link href="/contact" className="hover:text-vintage-green-light transition-colors">Contact</Link>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-vintage-green-light transition-colors">Privacy</button>
          </div>

          <div className="max-w-md text-center mb-12">
            <p className="text-[10px] uppercase tracking-widest leading-loose opacity-50">
              Krunshe is a registered trademark. We specialize in high-quality freeze-dried products for the B2B market. No chemicals, no preservatives, just pure nature.
            </p>
          </div>

          <p className="text-[9px] opacity-40 uppercase tracking-[0.3em]">© 2024 Krunshe B2B. Crafted for Health.</p>
        </div>
      </footer>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </main>
  );
}
