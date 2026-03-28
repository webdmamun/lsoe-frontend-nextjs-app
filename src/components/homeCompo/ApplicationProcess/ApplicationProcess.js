'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, UserCheck, School, MessageSquare, CreditCard, Calendar, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Apply Online",
    desc: "Fill in the simplified application form on our portal to get started.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Eligibility Check",
    desc: "Our senior consultants review your academic profile for qualification.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    icon: <School className="w-6 h-6" />,
    title: "Expert Selection",
    desc: "We help you match with the perfect course and prestigious institution.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Institutional Lobbying",
    desc: "We communicate directly with universities to secure your offer.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Finance & Support",
    desc: "Bespoke guidance for your student finance and scholarship applications.",
    color: "bg-red-500/10 text-red-500"
  }
];

export default function ApplicationProcess() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Your Future, <br/>
                <span className="text-brand-primary">Made Simple</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Our proven 5-step methodology ensures a seamless transition from your current qualifications to a world-class UK degree.
              </p>
            </div>

            <div className="relative space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-[28px] top-8 bottom-8 w-[2px] bg-slate-100 hidden md:block" />

              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 md:gap-8 group relative"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 z-10 ${step.color} shadow-sm group-hover:scale-110 group-hover:shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-black text-slate-800 mb-1 group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-max"
            >
              <Link 
                href="/apply-now"
                className="group flex items-center gap-4 px-10 py-5 bg-slate-100 text-slate-900 rounded-2xl font-black hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-slate-100/50"
              >
                <Calendar className="w-6 h-6 shrink-0" />
                <span className="shrink-0">Book Professional Consultation</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-white shadow-blue-100/50">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                alt="Successful international students at London School of Excellence" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Glass Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 md:left-20 p-8 bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-2xl shadow-blue-500/10 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <p className="text-sm font-black text-slate-900">Guaranteed Support</p>
              </div>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                We handle the complexity, so you can focus on your academic excellence.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
