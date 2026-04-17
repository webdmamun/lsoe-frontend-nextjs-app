'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle, Edit3 } from "lucide-react";

const faqs = [
  {
    question: "Is the LSOE admissions service really free?",
    answer:
      "Yes — 100% free. LSOE charges students nothing for its admissions support. Our service is funded by our partner universities, who pay us a referral fee only when a student successfully enrols. You receive full, expert support at absolutely no cost — no hidden fees, no consultancy charges.",
  },
  {
    question: "Who is eligible for Student Finance England?",
    answer:
      "UK Home students (UK nationals and those with settled status) studying at an approved UK university are typically eligible for a Tuition Fee Loan of up to £9,535 per year and a Maintenance Loan based on household income. Some postgraduate students can also access a Master's Loan of up to £12,167. Our advisors can confirm your exact entitlement during a free consultation.",
  },
  {
    question: "Can international students apply through LSOE?",
    answer:
      "Absolutely. LSOE supports students from over 15 countries applying to UK universities. We assist with course selection, university shortlisting, application preparation, and the UK Student Route visa process — all at no charge. English language requirements (typically IELTS 6.0) and equivalent academic qualifications are required.",
  },
  {
    question: "How long does the UK university application process take?",
    answer:
      "The timeline varies by intake. For September entry, most UCAS applications close in January. We recommend starting 3–6 months before your target intake to allow time for document preparation, university offers, and visa processing. Our team will walk you through every step and keep your application on track from start to offer.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 relative z-10">
        
        {/* Left Side: Header & Visual */}
        <div className="w-full lg:w-5/12 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10">
              <HelpCircle className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary uppercase tracking-wider">Expert Guidance</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Common <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Questions
              </span>
            </h2>
            
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
              Finding the right path can be overwhelming. We've compiled the most frequent inquiries to help you navigate your journey with confidence.
            </p>
          </div>

          {/* Decorative Visual Card */}
          <div className="hidden lg:block relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-[2.5rem] blur-xl" />
             <div className="relative bg-white/60 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl overflow-hidden group">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                      <MessageCircle className="w-8 h-8" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg">Still have questions?</h4>
                      <p className="text-gray-500 text-sm font-medium mt-1">Our team is available 24/7 for a 1-on-1 consultation.</p>
                   </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 animate-bounce">
                   <Edit3 className="w-5 h-5 text-brand-primary/40" />
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full lg:w-7/12">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`group rounded-3xl transition-all duration-300 ${
                    isOpen 
                    ? "bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-transparent" 
                    : "bg-gray-50/50 hover:bg-white border border-gray-100 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-[19px] font-bold tracking-tight pr-8 transition-colors ${
                      isOpen ? "text-brand-primary" : "text-gray-900 group-hover:text-brand-primary"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-brand-primary border-brand-primary text-white rotate-180" : "text-gray-400"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-8">
                          <div className="w-full h-px bg-gray-100 mb-6" />
                          <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
