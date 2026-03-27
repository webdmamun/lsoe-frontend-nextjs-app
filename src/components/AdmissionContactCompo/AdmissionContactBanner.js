'use client';

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Mail, MapPin } from "lucide-react";

export default function AdmissionContactBanner() {
  const contactQuickStats = [
    { icon: <PhoneCall className="w-5 h-5" />, label: "Call Us", val: "Mon — Fri, 10:00 AM — 5:00 PM" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "WhatsApp", val: "+44 (0)1708 784763" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", val: "info.office@londonschoolofexcellence.com" },
  ];

  return (
    <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Cinematic Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                <span>Our Global Network</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Let's Start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Conversation</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                Whether you're an aspiring student, a supportive parent, or a potential institutional partner — we're here to provide expert boutique guidance.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 max-w-xl mt-auto"
            >
              {contactQuickStats.map((stat, i) => (
                <div key={i} className="p-3.5 px-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-5 group hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <div className="scale-90">{stat.icon}</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[9px] font-black uppercase tracking-tighter text-slate-500 mb-0.5">{stat.label}</p>
                    <p className="text-[14px] font-bold text-white leading-none whitespace-nowrap">{stat.val}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full rounded-[3rem] bg-gradient-to-br from-brand-primary to-brand-secondary p-[1px] shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[3rem] bg-slate-900/40 backdrop-blur-3xl overflow-hidden flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                  alt="Contact Center"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                  <div className="w-16 h-1 w-12 bg-brand-secondary rounded-full" />
                  <h3 className="text-3xl font-black text-white">Central Support Hub</h3>
                  <p className="text-slate-300 font-medium">Connecting 10,000+ students to global opportunities since 2013.</p>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-2xl"
            >
              <MessageSquare className="w-12 h-12 text-brand-secondary" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

