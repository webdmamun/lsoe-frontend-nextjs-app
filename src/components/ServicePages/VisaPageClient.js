"use client";

import React from "react";
import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import ServiceHero from "@/components/shared/ServiceHero";
import { Plane, ShieldCheck, FileText, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StudentVisaAdvice() {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "CAS Support",
      desc: "Full assistance in obtaining your Confirmation of Acceptance for Studies (CAS) from your chosen university."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Document Audit",
      desc: "Rigorous review of financial evidence, academic transcripts, and tuberculosis (TB) certificates to meet UKVI standards."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interview Prep",
      desc: "Mock credibility interviews with senior consultants to build confidence and ensure compliance."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <AdmissionNav isDark={true} />
      
      <ServiceHero 
        title={<>Student <span className="text-brand-secondary">Visa Advice</span></>}
        subtitle="Navigate complex UKVI regulations with our expert compliance team. We've maintained a 99% success rate for over a decade."
        icon={<Plane className="w-12 h-12" />}
        gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-primary"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">
                Your Pathway to a <br/>
                <span className="text-brand-primary underline decoration-brand-secondary/30">Seamless Entry</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Securing a student visa is the most critical step in your international education journey. A single error in documentation or a misunderstanding of current policies can lead to a refusal. Our mission is to eliminate that risk.
              </p>
              
              <div className="space-y-4">
                {[
                  "Detailed guidance on IHS payments",
                  "VFS Global biometric appointment scheduling",
                  "Dependant visa support for family members",
                  "Post-study work visa (Graduate Route) transition"
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
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop" 
                alt="Visa Documents"
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
            Ready to start your <br/> visa application?
          </h2>
          <p className="text-xl text-brand-secondary font-bold">
            Get a free document audit today from our senior consultants.
          </p>
          <Link href="/apply-now">
            <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-2xl shadow-xl hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-2 mx-auto mt-6">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <AdmissionFooter />
    </div>
  );
}
