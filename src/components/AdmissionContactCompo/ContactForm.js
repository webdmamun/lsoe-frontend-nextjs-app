'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to capture lead
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-xl shadow-green-100/50">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black text-slate-900">Message Received!</h2>
          <p className="text-xl text-slate-600 font-medium">
            Thank you for reaching out. One of our senior consultants will contact you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-slate-900 text-white rounded-full font-black hover:bg-brand-primary transition-all active:scale-95"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Send us an <br/>
                <span className="text-brand-primary underline decoration-brand-secondary/30">Enquiry</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Have specific questions about UK admissions, visas, or partnerships? Fill out the form and our specialized team will get back to you with tailored advice.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <User className="w-5 h-5" />, title: "Student Support", desc: "Expert guidance for your academic journey." },
                { icon: <MessageSquare className="w-5 h-5" />, title: "Partner Inquiries", desc: "Collaborate with LSOE's global network." },
                { icon: <CheckCircle2 className="w-5 h-5" />, title: "Quick Response", desc: "Guaranteed feedback within 1 business day." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" required
                        placeholder="John Doe"
                        className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all font-bold text-slate-900"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="email" required
                        placeholder="john@example.com"
                        className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all font-bold text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="tel" required
                        placeholder="+44 000 000 000"
                        className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all font-bold text-slate-900"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Subject</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select className="w-full pl-16 pr-8 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all font-bold text-slate-900 appearance-none">
                        <option>General Enquiry</option>
                        <option>UK Admission Support</option>
                        <option>Partner Request</option>
                        <option>Student Visa Advice</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Your Message</label>
                  <textarea 
                    required rows="5"
                    placeholder="How can we help you today?"
                    className="w-full px-8 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary outline-none transition-all font-bold text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-slate-900 text-white rounded-[1.5rem] font-black hover:bg-brand-primary transition-all active:scale-[0.98] shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send Enquiry"}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

