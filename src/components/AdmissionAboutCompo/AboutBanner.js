'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, Globe2, GraduationCap, Award, Users } from "lucide-react";

const videoSlides = [
  "https://media.londonschoolofexcellence.com/lsoe-website-videos/video_1_apdmms.mp4",
  "https://media.londonschoolofexcellence.com/lsoe-website-videos/video_3_yj5hqm.mp4",
  "https://media.londonschoolofexcellence.com/lsoe-website-videos/video_2_llaykh.mp4",
];

export default function AboutBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Years Excellence", value: "13+", icon: Award },
    { label: "Global Partners", value: "140+", icon: GraduationCap },
    { label: "Student Success", value: "10K+", icon: Users },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-32 lg:pt-40 overflow-hidden bg-slate-900">
      {/* Cinematic Background Videos */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={videoSlides[currentIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            {/* Breadcrumb Glass Card */}
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-brand-secondary" />
              <span>About Us</span>
            </motion.nav>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
              >
                Pioneering <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Future-Ready</span> <br/>
                Education.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-300 max-w-xl leading-relaxed font-medium"
              >
                Since 2013, LSOE has been bridging the gap between global aspirations and academic excellence. We've spent 13 years empowering the next generation.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Cards Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-6 relative">
             <div className="absolute -inset-10 bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
             
             {stats.map((stat, idx) => {
               const Icon = stat.icon;
               return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8 + (idx * 0.1) }}
                   className={`p-8 rounded-[2.5rem] backdrop-blur-2xl border border-white/10 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-white/5 ${idx === 1 ? 'mt-12 bg-white/10 shadow-2xl shadow-black/20' : 'bg-white/5'}`}
                 >
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                     <Icon className="w-8 h-8" />
                   </div>
                   <div>
                     <p className="text-4xl font-black text-white">{stat.value}</p>
                     <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                   </div>
                 </motion.div>
               );
             })}
             
             {/* Dynamic Float Icon */}
             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-3xl bg-brand-secondary/10 backdrop-blur-md border border-white/10 flex items-center justify-center mt-12 self-end ml-12"
             >
                <Globe2 className="w-10 h-10 text-brand-secondary" />
             </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Slope Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-[2]" />
    </section>
  );
}

