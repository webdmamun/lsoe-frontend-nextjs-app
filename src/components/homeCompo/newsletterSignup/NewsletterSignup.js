'use client';

import React from "react";
import { motion } from "framer-motion";
import { Send, Bell, Sparkles, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gray-900 rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
          
          {/* Decorative Glossy Background Overlay */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary">
               <Bell className="w-4 h-4 animate-bounce" />
               <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Stay Ahead of the Curve</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Unlock Exclusive <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                   Education Insights
                </span>
              </h2>
              <p className="text-gray-400 font-medium text-lg leading-relaxed">
                Join our elite circle of international students. Receive the latest university updates, scholarship alerts, and visa policy changes directly in your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-md mx-auto h-auto">
              <div className="relative flex-grow group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email"
                  className="w-full h-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-medium placeholder:text-gray-500 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary/40 transition-all font-bold"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-xl active:scale-95 shrink-0"
              >
                Subscribe <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-brand-secondary font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Success! You're on the list.
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-6 pt-4">
               <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-brand-secondary" />
                  No Spam, Just Value
               </div>
               <div className="w-1 h-1 rounded-full bg-gray-700" />
               <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-brand-secondary" />
                  1-Click Unsubscribe
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}