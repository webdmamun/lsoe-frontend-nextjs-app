"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* Animated 404 Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary select-none drop-shadow-sm">
            404
          </div>
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-secondary/20 pointer-events-none"
          >
            <Compass className="w-48 h-48 md:w-64 md:h-64" />
          </motion.div>
        </motion.div>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Oops! You've gone off the map.
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Let's get you back on track to your educational journey.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={goBack}
            className="group flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:border-brand-primary/30 hover:bg-gray-50 hover:text-brand-primary transition-all active:scale-95 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <Link 
            href="/"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full shadow-lg shadow-brand-secondary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pt-8 border-t border-gray-200/60"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4 h-[1px] w-full relative">
            <span className="bg-slate-50 px-4 text-xs font-semibold tracking-wider uppercase text-gray-500 flex items-center gap-2">
              <Search className="w-4 h-4" /> Helpful Links
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
            <Link href="/about-us" className="text-gray-600 font-medium hover:text-brand-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="text-gray-600 font-medium hover:text-brand-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/partner-with-us" className="text-gray-600 font-medium hover:text-brand-primary transition-colors">
              Partner With Us
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
