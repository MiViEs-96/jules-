"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type RecipeProps = {
  recipes: { title: string; content: string }[];
};

export default function RecipeAccordion({ recipes }: RecipeProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="border-b border-vintage-green/10">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-6 flex justify-between items-center text-left group"
          >
            <h4 className="font-serif text-xl md:text-2xl text-vintage-green group-hover:italic transition-all">
              {recipe.title}
            </h4>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-vintage-green/40" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-vintage-brown leading-relaxed uppercase text-xs tracking-widest opacity-80">
                  {recipe.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
