"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-xs uppercase tracking-[0.5em] mb-6 block opacity-60">Connect With Us</span>
              <h2 className="text-5xl md:text-7xl font-serif text-vintage-green mb-8 uppercase leading-none">
                Start a Partnership.
              </h2>
              <p className="text-lg md:text-xl font-serif italic text-vintage-brown leading-relaxed mb-12 opacity-80">
                Are you looking for premium, preservative-free ingredients for your business? Let's discuss how Krunshe can provide the purest freeze-dried fruit for your needs.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Direct Inquiry</h4>
                  <p className="font-serif text-2xl text-vintage-green italic">test@krunshe.com</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">B2B Headquarters</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60 leading-loose">
                    Milan, Italy<br/>
                    Pure Nature District
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/30 backdrop-blur-sm p-10 border border-vintage-green/10"
            >
              {submitted ? (
                <div className="py-20 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-6 text-vintage-green"
                  >
                    <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-serif text-3xl text-vintage-green mb-4">Message Received</h3>
                  <p className="text-xs uppercase tracking-widest opacity-60">
                    We will get back to you shortly to discuss your B2B requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest opacity-60">Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-vintage-green/20 py-2 focus:border-vintage-green outline-none transition-colors font-serif italic"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest opacity-60">Company</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-vintage-green/20 py-2 focus:border-vintage-green outline-none transition-colors font-serif italic"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-60">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-transparent border-b border-vintage-green/20 py-2 focus:border-vintage-green outline-none transition-colors font-serif italic"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-60">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-vintage-green/20 py-2 focus:border-vintage-green outline-none transition-colors font-serif italic resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-vintage-green text-vintage-beige py-5 uppercase font-bold tracking-[0.2em] text-xs hover:bg-vintage-green-light transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <footer className="bg-vintage-paper py-20 border-t border-vintage-green/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">© 2024 Krunshe B2B. Established in Purity.</p>
        </div>
      </footer>
    </main>
  );
}
