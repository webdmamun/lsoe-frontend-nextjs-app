'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { 
  Users, Gift, CheckCircle2, 
  Send, Globe2, GraduationCap, 
  UserPlus, Mail, Phone, MessageSquare,
  ShieldCheck, ArrowRight, Loader2
} from "lucide-react";

const ReferEarnForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    referrerFirstName: "",
    referrerLastName: "",
    referrerEmail: "",
    referrerPhone: "",
    studentFirstName: "",
    studentLastName: "",
    studentEmail: "",
    studentPhone: "",
    studyDestination: "",
    studyLevel: "",
    relationship: "",
    additionalInfo: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Referral error:', error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <section className="py-32 px-6 flex items-center justify-center bg-slate-50 min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white rounded-[3rem] p-12 shadow-2xl shadow-emerald-200/50 border border-emerald-100 text-center"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Referral Submitted!</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Thank you for helping a friend achieve their dreams. Our expert team will reach out to them shortly. We'll update you as soon as they enroll!
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Submit Another Referral <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <div className="relative overflow-hidden">
      
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-secondary font-bold text-sm tracking-widest uppercase mb-8"
          >
            <Gift className="w-4 h-4" />
            LSOE Rewards Program
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            Refer a Friend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Earn Rewards</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-slate-400 font-medium leading-relaxed"
          >
            Know someone aiming for top-tier international universities? Refer them to LSOE and gain exclusive rewards when they successfully enroll.
          </motion.p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[4rem] z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: How it works & Rewards */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-primary rounded-full" />
                  How It Works
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: UserPlus, title: "1. Share Details", desc: "Fill out the quick referral form with student details." },
                    { icon: Send, title: "2. We Connect", desc: "Our expert consultants guide the student through the process." },
                    { icon: CheckCircle2, title: "3. Enrollment", desc: "Once the student completes their enrollment process." },
                    { icon: Gift, title: "4. Get Rewarded", desc: "Receive your exclusive reward as a thank you!" }
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Reward Card */}
              <div className="p-8 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[2.5rem] text-white shadow-2xl shadow-brand-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Gift className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-black mb-4">Unlimited Potential</h3>
                <p className="font-medium text-white/90 mb-6 leading-relaxed">
                  There's no limit to how many students you can refer. The more you help, the more you earn!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/30">
                  <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                  Official Program
                </div>
              </div>
            </div>

            {/* Right: Glassmorphic Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden"
              >
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  
                  {/* Your Information Section */}
                  <div>
                    <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wide">
                      <span className="text-brand-primary">01.</span> Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">First Name</label>
                        <input 
                          name="referrerFirstName" required value={formData.referrerFirstName} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Last Name</label>
                        <input 
                          name="referrerLastName" required value={formData.referrerLastName} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2 col-span-full">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            name="referrerEmail" type="email" required value={formData.referrerEmail} onChange={handleInputChange}
                            className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all font-semibold"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-full">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Phone Number</label>
                        <PhoneInput
                          country={"gb"} value={formData.referrerPhone}
                          onChange={(val) => setFormData(prev => ({ ...prev, referrerPhone: val }))}
                          inputClass="!w-full !h-[3.8rem] !pl-[50px] !border !border-slate-100 !bg-slate-50 !rounded-2xl !font-semibold"
                          containerClass="!w-full"
                          buttonClass="!bg-slate-50 !border-0 !rounded-l-2xl !pl-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Student Information Section */}
                  <div>
                    <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-wide border-t border-slate-100 pt-10">
                      <span className="text-brand-secondary">02.</span> Student Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">First Name</label>
                        <input 
                          name="studentFirstName" required value={formData.studentFirstName} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-secondary/10 transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Last Name</label>
                        <input 
                          name="studentLastName" required value={formData.studentLastName} onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-secondary/10 transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-2 col-span-full">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Student's Email</label>
                        <div className="relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            name="studentEmail" type="email" required value={formData.studentEmail} onChange={handleInputChange}
                            className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-secondary/10 transition-all font-semibold"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-full">
                        <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider">Preferred Destination</label>
                        <div className="relative">
                          <Globe2 className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <select 
                            name="studyDestination" required value={formData.studyDestination} onChange={handleInputChange}
                            className="w-full pl-16 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-secondary/10 transition-all font-semibold appearance-none"
                          >
                            <option value="">Select Destination</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Canada</option>
                            <option>USA</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-4 uppercase tracking-wider border-t border-slate-100 pt-10 flex w-full">Additional Notes</label>
                    <textarea 
                      name="additionalInfo" rows="4" value={formData.additionalInfo} onChange={handleInputChange}
                      placeholder="Any specific courses or universities they are interested in?"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-slate-200 transition-all font-semibold"
                    />
                  </div>

                  {/* Submission */}
                  <div className="pt-6">
                    <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-slate-300 hover:bg-brand-primary transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:bg-slate-400"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-6 h-6" /> Submit Referral</>}
                    </button>
                    <p className="text-center text-slate-400 text-sm mt-6 font-medium">
                      By submitting, you confirm that you have the student's permission to share their data.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferEarnForm;
