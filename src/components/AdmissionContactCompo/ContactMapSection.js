'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Building2 } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: HQ Details */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>Headquarters</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Visit Our <br/>
                <span className="text-brand-primary">London Office</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our central London hub is where global strategies are born. We welcome students and partners for pre-booked consultations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Opening Hours</p>
                  <p className="text-sm font-black text-slate-800">Mon - Fri: 09:00 - 18:00</p>
                  <p className="text-xs font-bold text-slate-500">Sat/Sun: Closed</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Transit Info</p>
                  <p className="text-sm font-black text-slate-800">Elm Park Station</p>
                  <p className="text-xs font-bold text-slate-500">District Line & Overground Access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map & Image */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            
            {/* Full-width Cinematic Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] border-4 border-white bg-slate-100"
            >
              <img 
                src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/office%20image.jpg" 
                alt="LSOE London Office" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl lg:text-3xl font-black drop-shadow-md tracking-tight">London Source Of Employment HQ</p>
                <div className="w-12 h-1 bg-brand-primary mt-3 rounded-full" />
              </div>
            </motion.div>

            {/* Full-width Interactive Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 w-full h-[350px] lg:h-[450px]"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.079234800293!2d0.19680617711477717!3d51.5484446077395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bb3d38e8032d%3A0xb37053ba6410ab32!2sLondon%20School%20Of%20Excellence!5e0!3m2!1sen!2sbd!4v1743105230979!5m2!1sen!2sbd"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
