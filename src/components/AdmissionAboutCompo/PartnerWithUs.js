"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Globe2, TrendingUp, ShieldCheck, ArrowDownCircle } from "lucide-react";

export default function PartnerWithUs() {
  const scrollToForm = () => {
    const formElement = document.getElementById('partner-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "Competitive Commissions" },
    { icon: <Globe2 className="w-5 h-5" />, text: "Global University Network" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Compliance & Visa Support" },
  ];

  return (
    <section className="relative w-full bg-slate-900 pt-32 lg:pt-48 pb-24 overflow-hidden px-6">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary">
              <Handshake className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Institutional Partnerships</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Recruitment Network
              </span>
            </h1>

            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              Join London School of Excellence's global partner ecosystem. Access direct university priority admissions and premium incentives for qualified student referrals.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                <div className="text-brand-secondary">{b.icon}</div>
                <span className="text-sm font-bold text-gray-300">{b.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            onClick={scrollToForm}
            className="group flex items-center gap-4 text-white hover:text-brand-secondary transition-colors"
          >
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-secondary transition-colors animate-bounce">
               <ArrowDownCircle className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-lg tracking-tight">Become a Partner</span>
          </motion.button>
        </div>

        {/* Right: Visual Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-6">
                 <div className="bg-brand-primary/20 aspect-video rounded-2xl border border-brand-primary/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/40 animate-pulse" />
                 </div>
                 <div className="bg-white/5 h-24 rounded-2xl border border-white/10" />
               </div>
               <div className="space-y-6 pt-12">
                 <div className="bg-white/5 h-32 rounded-2xl border border-white/10" />
                 <div className="bg-brand-secondary/20 aspect-square rounded-2xl border border-brand-secondary/30 flex items-center justify-center">
                    <Handshake className="w-16 h-16 text-brand-secondary opacity-50" />
                 </div>
               </div>
            </div>
          </div>
          
          {/* Decorative Halo */}
          <div className="absolute -inset-10 bg-brand-primary/20 rounded-full blur-[100px] opacity-50" />
        </motion.div>

      </div>
    </section>
  );
}
