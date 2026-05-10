"use client";

import { motion, AnimatePresence } from "framer-motion";

type PrivacyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-vintage-green/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-vintage-beige border-2 border-vintage-green p-8 md:p-12 max-w-lg w-full shadow-2xl"
          >
            <h3 className="font-serif text-3xl text-vintage-green mb-6 uppercase tracking-tight">Privacy Policy</h3>
            <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-vintage-brown opacity-80 mb-8">
              In accordance with European regulations (GDPR), we inform you that any data provided through this website will be treated with the utmost confidentiality and used solely for the purpose of professional communication and B2B partnership management. We do not sell or share your information with third parties without explicit consent.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-vintage-green text-vintage-beige py-4 uppercase font-bold tracking-widest text-xs hover:bg-vintage-green-light transition-colors"
            >
              I Understand
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
