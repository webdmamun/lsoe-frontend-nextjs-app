'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gift, Users, CreditCard, ArrowRight, Sparkles, Star } from "lucide-react";

const ReferralProgram = () => {
  const steps = [
    {
      id: 1,
      title: "Invite a Peer",
      desc: "Share your unique referral link or submit their details directly via our secure portal.",
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      delay: 0.1
    },
    {
      id: 2,
      title: "Expert Onboarding",
      desc: "Our senior consultants provide them with a complimentary 1-on-1 strategy session.",
      icon: <Sparkles className="w-8 h-8 text-brand-secondary" />,
      delay: 0.2
    },
    {
      id: 3,
      title: "Successful Enrollment",
      desc: "Once your referral successfully enrolls into their chosen UK university program.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      delay: 0.3
    },
    {
      id: 4,
      title: "Unlock Rewards",
      desc: "Receive premium financial incentives and exclusive LSOE alumni benefits.",
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      delay: 0.4
    }
  ];

  return (
    <section className="w-full py-24 bg-gray-900 relative overflow-hidden">
      {/* Premium Dark Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Gift className="w-4 h-4 text-brand-secondary" />
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">The LSOE Ambassador Program</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Refer Ambitious Minds, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Earn Elite Rewards
              </span>
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Help your peers unlock world-class education while you gain exclusive financial incentives through our high-tier referral network.
            </p>
          </div>
        </div>

        {/* Dynamic Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10"
            >
              {/* Step indicator circle */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors">
                {step.id}
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  {step.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-medium leading-relaxed text-[17px]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Decorative line extension */}
              {step.id < 4 && (
                 <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Central Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-[3rem] p-12 md:p-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden group shadow-2xl shadow-brand-primary/5"
        >
          {/* Glass Glossy Effect */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left space-y-4">
             <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">Ready to start your <br className="hidden lg:block"/> journey as an ambassador?</h3>
             <p className="text-gray-300 font-medium text-lg leading-relaxed">Join hundreds of successful referrers who have helped peers achieve UK academic excellence.</p>
          </div>

          <Link href="/refer-and-earn" className="relative z-10 w-full md:w-auto">
            <button className="w-full md:w-auto px-12 py-5 bg-white text-gray-900 font-black text-lg rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:bg-brand-secondary hover:text-white hover:shadow-brand-secondary/40 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95">
               Join Now <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
          
          {/* Background Ornament SVG */}
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
             <Gift className="w-64 h-64 text-white" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ReferralProgram;
