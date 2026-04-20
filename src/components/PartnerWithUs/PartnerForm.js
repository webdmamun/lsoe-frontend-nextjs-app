'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Send, CheckCircle2, ShieldCheck, Briefcase, Globe2, Sparkles, Loader2 } from "lucide-react";

const PartnerForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    try {
      if (emailjs && typeof emailjs.init === 'function') {
        emailjs.init("fT45pkLA3fHPOXkH5");
      }
    } catch (e) {
      console.error("EmailJS init err", e)
    }
  }, []);

  const sendEmailAndStore = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    data.phone = phone; // Include phone from state

    try {
      // 1. Submit to Supabase API
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Database submission failed");

      // 2. Submit to EmailJS for notification
      await emailjs.sendForm(
        "service_gmdixqb",
        "template_rzh0o1p",
        form.current,
        "fT45pkLA3fHPOXkH5"
      );

      setSuccess(true);
      form.current.reset();
      setPhone("");
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Failed to send partnership request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partner-form-section" className="bg-white py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto flex flex-col xl:flex-row items-start gap-16 relative z-10">
        
        {/* Left: Info & Trust */}
        <div className="w-full xl:w-5/12 space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Why Partner <br />
              <span className="text-brand-primary">With LSOE?</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
              We provide the infrastructure and institutional relationships you need to successfully place international students into premium UK universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 space-y-4 group hover:bg-white hover:shadow-xl transition-all duration-500">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <ShieldCheck className="w-7 h-7" />
               </div>
               <h4 className="font-extrabold text-gray-900 text-lg">Verified Lead Process</h4>
               <p className="text-sm text-gray-400 font-medium leading-relaxed">Our CRM ensures transparency and timely updates for all referrals.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 space-y-4 group hover:bg-white hover:shadow-xl transition-all duration-500">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Globe2 className="w-7 h-7" />
               </div>
               <h4 className="font-bold text-gray-900 text-lg">Global Intake Support</h4>
               <p className="text-sm text-gray-400 font-medium leading-relaxed">Access support for multiple intakes across Jan, May, and Sep.</p>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-lg">
             <div className="p-4 bg-brand-primary/5 rounded-2xl">
                <Sparkles className="w-10 h-10 text-brand-primary" />
             </div>
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Authorized Agency</p>
                <p className="text-xs text-gray-400 font-medium mt-1">LSOE is regulated under UK education recruitment standards.</p>
             </div>
          </div>
        </div>

        {/* Right: Premium Form Card */}
        <div className="w-full xl:w-7/12">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />

            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Partnership Application</h3>
                <p className="text-gray-500 font-medium">Please provide your organization's professional details below.</p>
              </div>
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-brand-primary/5 items-center justify-center text-brand-primary">
                 <Briefcase className="w-8 h-8" />
              </div>
            </div>

            <form ref={form} onSubmit={sendEmailAndStore} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                   <input name="first_name" required placeholder="John" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                   <input name="last_name" required placeholder="Doe" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                   <input name="email" type="email" required placeholder="john@company.com" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                   <PhoneInput
                    country={"gb"}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{ name: "phone", required: true }}
                    inputClass="!w-full !px-5 !py-6.5 !bg-gray-50 !border !border-gray-200 !rounded-xl !text-gray-900 !font-medium focus:!bg-white focus:!ring-2 focus:!ring-brand-primary/20 focus:!border-brand-primary transition-all !pl-[55px]"
                    buttonClass="!bg-gray-50 !border-gray-200 !rounded-l-xl hover:!bg-gray-100"
                    containerClass="!w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Organization</label>
                  <input name="organization" required placeholder="Company Name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Country</label>
                  <select name="country" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium appearance-none" defaultValue="">
                    <option value="" disabled>Select Country</option>
                    <option>United Kingdom</option>
                    <option>Nigeria</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Partnership Type</label>
                  <select name="partnership_type" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium appearance-none" defaultValue="">
                    <option value="" disabled>Select Type</option>
                    <option>Referral Partner (Individual)</option>
                    <option>Sub-Agent</option>
                    <option>Institution</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Exp. Yearly Referrals</label>
                  <select name="expected_students" required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium appearance-none" defaultValue="">
                    <option value="" disabled>Expected Count</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>50+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Additional Information</label>
                <textarea name="message" rows="3" placeholder="Briefly describe your recruitment background..." className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium" />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg mt-4"
              >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Submit Partnership Request"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>

              {success && (
                <div className="bg-green-50 border border-green-100 p-5 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-green-900 leading-tight">Request Transmitted Successfully!</p>
                    <p className="text-green-700 text-sm font-medium mt-1">Our partnership team will review your profile and contact you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerForm;
