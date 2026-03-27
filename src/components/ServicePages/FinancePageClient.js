"use client";

import React from "react";
import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import ServiceHero from "@/components/shared/ServiceHero";
import { Wallet, Coins, Calculator, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinancialPlanningScholarships() {
  const features = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Scholarship Audit",
      desc: "Identify and apply for university-specific merit awards and international funding opportunities."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Living Cost Analysis",
      desc: "Tailored budget planning for London vs. regional UK cities, including rent and utility estimates."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Proof of Funds",
      desc: "Detailed guidance on meeting the 28-day rule and verifying personal or sponsored bank statements."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <AdmissionNav isDark={true} />
      
      <ServiceHero 
        title={<>Financial Planning & <span className="text-brand-secondary">Scholarships</span></>}
        subtitle="Make your UK education affordable. We help you navigate tuition fees, funding rules, and exclusive scholarship options."
        icon={<Wallet className="w-12 h-12" />}
        gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">
                Secure Your <br/>
                <span className="text-brand-primary underline decoration-brand-secondary/30">Educational Future</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                UK education is an investment. Our expert financial advisors work with you to ensure that every penny is accounted for, from tuition deposits to your final graduation ceremony. We specialize in identifying "hidden" scholarships that many students miss.
              </p>
              
              <div className="space-y-4">
                {[
                  "Automatic merit scholarship evaluation",
                  "Comprehensive tuition fee payment plans",
                  "Expert bank statement verification",
                  "Part-time work regulation briefings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Financial Planning"
                className="relative rounded-[2rem] shadow-2xl border border-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-emerald-600 mb-6">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Need a financial roadmap?
          </h2>
          <p className="text-xl text-brand-secondary font-bold">
            Book a 1-on-1 strategy session with our finance experts.
          </p>
          <Link href="/apply-now">
            <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-2xl shadow-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 mx-auto mt-6">
              Check Eligibility <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <AdmissionFooter />
    </div>
  );
}
