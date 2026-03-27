"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  Users, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Gem,
  ArrowRight
} from "lucide-react";

const mainFeatures = [
  {
    title: "13+ Years of Excellence",
    description: "Over 13 years of pioneering student success and global educational alliances.",
    icon: Gem,
    className: "md:col-span-2 bg-slate-900 text-white",
    color: "text-brand-secondary"
  },
  {
    title: "Global Reach",
    description: "Spanning across 15+ countries with 140+ university partners worldwide.",
    icon: Globe,
    className: "bg-white",
    color: "text-brand-primary"
  },
  {
    title: "Personalized Guidance",
    description: "Every student's journey is unique. We tailor our consulting to your goals.",
    icon: Users,
    className: "bg-white",
    color: "text-blue-500"
  }
];

const qualities = [
  { text: "Industry Trends", icon: Lightbulb },
  { text: "Ethical Standards", icon: ShieldCheck },
  { text: "Global Dynamics", icon: Zap },
  { text: "Academic Needs", icon: Target },
];

export default function WhyLSOE() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm"
          >
            The LSOE Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight"
          >
            Why We Are Renowned <br/>
            for <span className="text-brand-primary">Consultancy</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg font-medium"
          >
            We evolve with educational trends, listen deeply, and guide with precision to ensure your future-ready success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Main Large Card */}
          {mainFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-10 rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1 ${item.className}`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className={`${item.className.includes('bg-slate-900') ? 'text-slate-400' : 'text-slate-500'} font-medium leading-relaxed`}>
                  {item.description}
                </p>
                {item.className.includes('bg-slate-900') && (
                  <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Zap className="w-24 h-24 text-brand-secondary" />
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Quality Grid Tiles */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {qualities.map((q, idx) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:border-brand-primary/20 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-bold text-slate-800">{q.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="md:col-span-3 bg-gradient-to-br from-brand-primary to-blue-700 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 shadow-xl shadow-brand-primary/20 border-b-4 border-brand-secondary"
          >
            <h4 className="text-2xl md:text-3xl font-bold">Ready to take the next step <br className="hidden md:block" /> towards your global future?</h4>
            <button className="px-10 py-5 bg-white text-brand-primary rounded-full font-black flex items-center gap-2 group hover:gap-4 transition-all shadow-lg">
              Consult Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

