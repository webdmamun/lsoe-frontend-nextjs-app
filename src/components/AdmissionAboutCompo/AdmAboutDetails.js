"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Users2, Sparkles } from "lucide-react";

export default function AdmAboutDetails() {
  return (
    <section className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden px-6">
      {/* Decorative background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="w-full h-[500px] lg:h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 lg:-right-12 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl shadow-brand-primary/10 border border-white max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">13 Years of Excellence</p>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Empowering students with strategic alliances since 2013 across 15+ countries.
              </p>
            </motion.div>

            {/* Decorative Dot Grid */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#012759" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
              </svg>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold tracking-wide uppercase"
              >
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Our Heritage
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
              >
                Pioneering Excellence <br/>
                Since <span className="text-brand-primary">2013</span>.
              </motion.h2>
              <div className="w-20 h-1.5 bg-brand-secondary rounded-full" />
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium"
            >
              <p>
                <strong className="text-slate-900">London School of Excellence (LSOE)</strong> is a global leader in career guidance and recruitment. Over the past 13 years, we have been the bridge to world-class educational opportunities.
              </p>
              <p>
                Our mission is simple: to develop empowered learners through strategic alliances with globally recognized educational and cultural institutions. We don't just provide advice; we design future-ready academic pathways.
              </p>
              <p>
                With our sophisticated digital ecosystem, we've simplified the international study journey. From admission advice and visa assistance to budgeting and secure accommodation, we manage every detail with precision.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="grid sm:grid-cols-2 gap-6 pt-10 border-t border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Strategic Guidance</h4>
                  <p className="text-sm text-slate-500 mt-1">Accurate, up-to-date support on global pathways.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <Users2 className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Expert Alliances</h4>
                  <p className="text-sm text-slate-500 mt-1">Partnerships with world-class institutions.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

