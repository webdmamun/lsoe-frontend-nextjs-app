"use client";

import React from "react";
import Link from "next/link";
import { FileCheck, Plane, Wallet, Home, ArrowRight } from "lucide-react";

export default function ComprehensiveSupportWUA() {
  const services = [
    {
      id: "assessment",
      icon: <FileCheck className="w-8 h-8 text-brand-primary" />,
      title: "Application Assessment",
      desc: "We review your application thoroughly and maintain close contact with your chosen university to ensure a flawless submission.",
      link: "/application-assessment",
      colSpan: "md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-50/50"
    },
    {
      id: "visa",
      icon: <Plane className="w-8 h-8 text-pink-600" />,
      title: "Student Visa Advice",
      desc: "Our visa experts will guide you through the latest UKVI policies, document prep, and interview techniques to maximize success rates.",
      link: "/student-visa-advice",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-pink-50 to-rose-50/50"
    },
    {
      id: "finance",
      icon: <Wallet className="w-8 h-8 text-emerald-600" />,
      title: "Financial Planning & Scholarships",
      desc: "We negotiate on your behalf to secure merit-based scholarships and provide comprehensive proof-of-funds guidance.",
      link: "/financial-planning-scholarships",
      colSpan: "md:col-span-1 lg:col-span-1",
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-50/50"
    },
    {
      id: "accommodation",
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Secure Accommodation",
      desc: "We leverage our vast network of private landlords and PBSAs to secure comfortable, safe housing tailored to your budget.",
      link: "/secure-accommodation",
      colSpan: "md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-br from-purple-50 to-fuchsia-50/50"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-sm font-bold tracking-wide text-brand-primary uppercase">Elite Concierge Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight mb-4">
            Comprehensive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Admission Services</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Missing one single document can cost you months. Don't leave your future to chance—our specialists manage your entire journey end-to-end.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
          {services.map((svc) => (
            <Link 
              key={svc.id} 
              href={svc.link}
              className={`group relative rounded-[2rem] p-8 border border-white shadow-sm hover:shadow-2xl transition-all duration-500 ${svc.bgClass} ${svc.colSpan} flex flex-col justify-between overflow-hidden cursor-pointer`}
            >
              {/* Glossy Overlay effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-8">
                <span className="inline-flex items-center font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
