'use client';

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import ApplyNowForm from "@/components/ApplyNowCompo/ApplyNowForm";

export default function LSOEEnquiryForm() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-pink-50/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Animated Visual Composition (Left side) */}
        <div className="w-full lg:w-[45%] lg:order-1 order-2 mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-secondary/20 rounded-full mix-blend-multiply blur-2xl animate-blob" />
            <div className="absolute top-10 left-0 w-48 h-48 bg-brand-primary/20 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply blur-2xl animate-blob animation-delay-4000" />

            {/* Main Interactive Card */}
            <div className="relative z-10 bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white transition-transform hover:-translate-y-2 duration-500">
              <div className="flex flex-col items-center gap-6">
                <div className="p-5 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[1.5rem] text-white shadow-lg">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">Expert Support</h3>
                  <p className="text-gray-500 font-medium mt-2 leading-relaxed">
                    Our dedicated counsellors are ready to securely process your enquiry and map your study future.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Checkmark Items */}
            <div className="absolute top-1/4 -right-12 hidden md:flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-lg border border-gray-100 animate-bounce cursor-default">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Response in 24h</span>
            </div>
          </div>
        </div>

        {/* Premium Form (Right side) - Now using the full ApplyNow component */}
        <div className="w-full lg:w-[55%] lg:order-2 order-1">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
            {/* Top edge gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />

            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
                Let LSOE Help You
              </h2>
              <p className="text-gray-500 font-medium text-lg">
                Complete your application below for premium guidance on courses, universities, and exclusive scholarships!
              </p>
            </div>

            <ApplyNowForm isStandalone={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
