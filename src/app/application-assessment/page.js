"use client";

import React from "react";
import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import ServiceHero from "@/components/shared/ServiceHero";
import { FileCheck, Search, ClipboardList, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplicationAssessment() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Academic Profiling",
      desc: "Detailed evaluation of your grades and transcripts to match you with top-tier universities that fit your academic standing."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "SOP Refinement",
      desc: "Direct feedback from senior consultants to polish your Statement of Purpose and Personal Statement for maximum impact."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "End-to-End Submission",
      desc: "We manage the entire application portal process, ensuring all documents are uploaded correctly and deadlines are met."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <AdmissionNav isDark={true} />
      
      <ServiceHero 
        title={<>Application <span className="text-brand-secondary">Assessment</span></>}
        subtitle="A flawless submission is your ticket to a UK university. We provide strategic profiling and document auditing to ensure zero-error applications."
        icon={<FileCheck className="w-12 h-12" />}
        gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">
                Maximizing Your <br/>
                <span className="text-brand-primary underline decoration-brand-secondary/30">Acceptance Rate</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Applying to a UK university is about more than just filling out a form. It's about telling your story in a way that resonates with admissions officers. Our team of former university staff and education experts knows exactly what they are looking for.
              </p>
              
              <div className="space-y-4">
                {[
                  "Equivalency checks for international grades",
                  "Course-specific requirement matching",
                  "Direct liaison with university admissions",
                  "Strict deadline and intake monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-[2.5rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop" 
                alt="Assessment Work"
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
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-brand-primary mb-6">
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
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Start your assessment today.
          </h2>
          <p className="text-xl text-brand-secondary font-bold">
            Get a professional review of your profile within 48 hours.
          </p>
          <Link href="/apply-now">
            <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-2xl shadow-xl hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-2 mx-auto mt-6">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <AdmissionFooter />
    </div>
  );
}
