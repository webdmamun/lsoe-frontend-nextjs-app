"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CheckCircle2, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function BannerBottom() {
  const stats = [
    { count: 15, suffix: "+", label: "Countries Served" },
    { count: 140, suffix: "+", label: "Partner Universities" },
    { count: 10, suffix: "+", label: "Years of Excellence" },
    { count: 99, suffix: "%", label: "Success Rate" },
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: "100% Free Consultation",
      description: "No hidden charges, a completely transparent process from start to finish."
    },
    {
      icon: ShieldCheck,
      title: "Prestigious Partnerships",
      description: "Direct priority affiliations with over 140 elite university establishments."
    },
    {
      icon: TrendingUp,
      title: "Digital-First Platform",
      description: "Track applications and upload compliance documents securely online."
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row xl:items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images & Floating Glass Stats */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] sm:h-[650px] w-full xl:w-[90%]"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
              alt="Students outside University"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Deep Heavy Base Gradient for contrast against stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Glassmorphic Stats Panel Overlapping Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-8 lg:bottom-16 right-0 lg:-right-8 xl:-right-12 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_40px_rgb(0,0,0,0.15)] max-w-sm sm:max-w-md w-[85%] sm:w-auto overflow-hidden"
          >
            {/* Glossy Top Edge Highlight */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 relative z-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-4xl font-black text-white drop-shadow-sm flex items-center tracking-tight mb-1">
                    <CountUp end={stat.count} duration={3} enableScrollSpy scrollSpyOnce />
                    <span className="text-brand-secondary ml-0.5">{stat.suffix}</span>
                  </span>
                  <span className="text-sm font-bold tracking-wide text-gray-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Copy & Features */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-10 mt-16 lg:mt-0 xl:pl-4"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/5 rounded-full border border-brand-primary/10">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary uppercase tracking-wider">
                Discover LSOE
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl lg:text-[3.5rem] font-black text-gray-900 leading-[1.05] tracking-tight">
              Connecting Ambitious Minds with <br className="hidden xl:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Elite Universities
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
              <p>
                Since 2013, London School of Excellence has helped students from 15+ countries gain places at leading UK universities — completely free of charge.
              </p>
              <p>
                Our partnerships with 140+ UK universities give your application priority consideration. Whether you need UCAS support, Student Route visa guidance, or scholarship help — we handle it all.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-6 border-t border-gray-100">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-3 group">
                <div className="w-14 h-14 rounded-[1rem] bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center text-brand-secondary group-hover:scale-110 group-hover:bg-brand-secondary/10 group-hover:-rotate-3 transition-all duration-300">
                  <feature.icon className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1.5">{feature.title}</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
