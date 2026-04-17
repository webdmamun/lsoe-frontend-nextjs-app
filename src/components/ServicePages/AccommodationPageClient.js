"use client";

import React from "react";
import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import ServiceHero from "@/components/shared/ServiceHero";
import { Home, MapPin, Building, Key, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import RelatedServices from "@/components/shared/RelatedServices";

export default function SecureAccommodation() {
  const features = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "University Halls",
      desc: "Guaranteed priority booking for first-year international students in official university managed accommodation."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Regional Expertise",
      desc: "Find safe housing in proximity to your campus across London, Birmingham, Manchester, and Leeds."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Verified PBSAs",
      desc: "Access to private Purpose-Built Student Accommodations with all-inclusive bills and 24/7 security."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <AdmissionNav isDark={true} />
      
      <ServiceHero 
        title={<>Secure <span className="text-brand-secondary">Accommodation</span></>}
        subtitle="Feel at home before you land. We partner with the UK's leading housing providers to find you safe, affordable living spaces."
        icon={<Home className="w-12 h-12" />}
        gradient="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">
                Your Home <br/>
                <span className="text-brand-primary underline decoration-brand-secondary/30">Away From Home</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Finding a place to live in a new country can be daunting. We take that stress away by vetting properties and managing the booking process for you. Whether you want a vibrant social hall or a quiet studio, we have first-priority access to the best beds in the UK.
              </p>
              
              <div className="space-y-4">
                {[
                  "Contract transparency & legal reviews",
                  "All-inclusive utility bill packages",
                  "Airport pick-up & move-in coordination",
                  "Safety-first location proximity audits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-[2.5rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop" 
                alt="Student Accommodation"
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
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 mb-6">
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
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Find your perfect room.
          </h2>
          <p className="text-xl text-brand-secondary font-bold">
            Exclusive early-bird booking for LSOE students.
          </p>
          <Link href="/apply-now">
            <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-2xl shadow-xl hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-2 mx-auto mt-6">
              View Available Beds <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <RelatedServices current="/secure-accommodation" />
      <AdmissionFooter />
    </div>
  );
}
