"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, Sparkles } from "lucide-react";

const galleryImages = [
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/8_vlbnq9.jpg", title: "Global Summit 2023", location: "London, UK" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/12_ojx6hf.jpg", title: "Partner Alliance", location: "Global" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/16_kcj6tv.jpg", title: "Student Success", location: "Cambridge" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/20_itr77f.jpg", title: "Innovation Lab", location: "LSOE HQ" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/15_dfqjd1.jpg", title: "Cultural Exchange", location: "Oxford" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/7_zlrodv.jpg", title: "Alumni Meet", location: "Manchester" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/10_wrfawl.jpg", title: "Future Leaders", location: "London" },
  { url: "https://media.londonschoolofexcellence.com/lsoe-website-images/about-gallery/1_nzhco8.jpg", title: "Excellence Awards", location: "Global" },
];

export default function AboutGallary() {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-slate-50 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold tracking-wide uppercase"
          >
            <Camera className="w-4 h-4" />
            Global Footprint
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight"
          >
            Where Global Dreams <br/>
            Take <span className="text-brand-primary">Shape</span>.
          </motion.h2>
          <p className="text-slate-500 text-lg font-medium">
            A visual journey through the moments that define our commitment to student success and world-class partnerships.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 break-inside-avoid border border-white"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                  <div className="flex items-center gap-2 text-brand-secondary">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{img.location}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{img.title}</h4>
                </div>
              </div>

              {/* Decorative Location Pin (Visible on Mobile/Non-hover) */}
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex flex-col items-center space-y-4"
        >
          <div className="w-px h-20 bg-gradient-to-b from-brand-primary to-transparent" />
          <p className="text-slate-400 font-bold tracking-widest uppercase text-xs italic">ESTABLISHED 2013</p>
        </motion.div>
      </div>
    </section>
  );
}

