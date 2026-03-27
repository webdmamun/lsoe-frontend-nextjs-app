"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "Our Mission",
    description: "To inspire and empower students by providing seamless access to world-class educational opportunities through transparency and integrity.",
    icon: Target,
    color: "from-blue-500 to-cyan-400",
    delay: 0.1
  },
  {
    title: "Our Vision",
    description: "To become the most trusted global consultancy, shaping futures where every student reaches their full potential through innovative pathways.",
    icon: Eye,
    color: "from-brand-secondary to-blue-600",
    delay: 0.2
  },
  {
    title: "Our Values",
    description: "Built on professional excellence, empathy, and open communication to deliver unmatched student success and growth.",
    icon: ShieldCheck,
    color: "from-brand-primary to-indigo-600",
    delay: 0.3
  }
];

export default function MissionVision() {
  return (
    <section className="bg-white py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-brand-primary font-bold tracking-widest uppercase text-sm">Strategic Strategic Orientation</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Driven by Purpose. <br/>
              Defined by <span className="text-brand-primary">Excellence</span>.
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            Our strategic framework ensures every decision we make aligns with the long-term success of our students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-[2.5rem] -z-10 transition-transform group-hover:scale-[1.02] duration-500 shadow-xl shadow-slate-200/50" />
                
                <div className="p-10 space-y-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                      {pillar.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 mt-auto">
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                          className={`h-full bg-gradient-to-r ${pillar.color}`}
                       />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

