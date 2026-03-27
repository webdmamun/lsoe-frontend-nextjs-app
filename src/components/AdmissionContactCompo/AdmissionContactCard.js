'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, User, Facebook, ExternalLink, Globe, ArrowRight } from "lucide-react";

const contactData = [
  {
    region: "UK",
    city: "London",
    office: "LSOE LONDON OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "5 Station Parade, Hornchurch, Elm Park, London, RM12 5AB",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "N Haque",
    gmap: "https://maps.google.com/?q=5+Station+Parade,Hornchurch,RM12+5AB"
  },
  {
    region: "UK",
    city: "Leeds",
    office: "LSOE LEEDS OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "5th - 18th Floors, 67 Albion Street Pinnacle, Leeds, LS1 5AA",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Ms. David Joshep",
    gmap: "https://maps.google.com/?q=67+Albion+Street+Pinnacle,Leeds,LS1+5AA"
  },
  {
    region: "UK",
    city: "Birmingham",
    office: "LSOE Birmingham OFFICE",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    address: "588 Warwick Road Tyseley, Birmingham, B11 2HR",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Mr. A Tanim",
    gmap: "https://maps.google.com/?q=588+Warwick+Road+Tyseley,Birmingham,B11+2HR"
  },
  {
    region: "International",
    city: "Sylhet",
    office: "LSOE BANGLADESH",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    address: "70, Point View Shopping Centre (1st Floor) Amborkhana, Sylhet",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Mr. Tahmid Hasan",
    gmap: "https://maps.google.com/?q=Amborkhana,Sylhet,Bangladesh"
  },
  {
    region: "International",
    city: "Lagos",
    office: "LSOE NIGERIA",
    flag: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    address: "Bankole street, Magodo, Lagos, Nigeria",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "KASHIMAWO Olalekan",
    gmap: "https://maps.google.com/?q=Magodo,Lagos,Nigeria"
  },
  {
    region: "International",
    city: "Galewela",
    office: "LSOE Sri Lanka",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    address: "214/1, Opposite the Temple , Puwakpitiya, Galewela , Matale District, Sri lanka",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "M Rifthy",
    gmap: "https://maps.google.com/?q=Galewela,Sri+Lanka"
  },
  {
    region: "International",
    city: "Ariana",
    office: "LSOE TUNISIA",
    flag: "https://cdn.britannica.com/41/3041-004-F1D6DEFC/Flag-Tunisia.jpg",
    address: "28 rue Mohaled Mhiri, Naser 1, 2037 Ariana",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Mr. Ghassen Jabali",
    gmap: "https://maps.google.com/?q=Ariana,Tunisia"
  },
  {
    region: "International",
    city: "Accra",
    office: "LSOE GHANA",
    flag: "https://cdn.britannica.com/54/5054-004-A09ABCDF/Flag-Ghana.jpg",
    address: "GA – 204 – 3830, Achimota – Abofu, Accra",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Mr. Washington Cobi",
    gmap: "https://maps.google.com/?q=Accra,Ghana"
  },
  {
    region: "International",
    city: "Conakry",
    office: "LSOE GUINEA",
    flag: "https://cdn.britannica.com/56/5056-004-0E251CE7/Flag-Guinea.jpg",
    address: "Immeuble Barry et fils, route le prince, Bambeto, Conakry",
    facebook: "https://www.facebook.com/londonschoolofexcellence/",
    contact: "Miss. Jalloh Saliu Jan",
    gmap: "https://maps.google.com/?q=Conakry,Guinea"
  },
];

export default function AdmissionContactCard() {
  const [activeRegion, setActiveRegion] = useState("UK");
  const filteredOffices = contactData.filter(office => office.region === activeRegion);

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Our <span className="text-brand-primary">Global Footprint</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl">
              Spanning across 3 continents and 7 countries, LSOE provides local expertise with a global perspective for every student.
            </p>
          </div>

          <div className="flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            {["UK", "International"].map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeRegion === region 
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                    : "text-slate-500 hover:text-brand-primary hover:bg-slate-50"
                }`}
              >
                {region === "UK" ? "UK Offices" : "International Hubs"}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredOffices.map((office, idx) => (
              <motion.div
                key={office.office}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-inner border border-slate-100">
                      <img src={office.flag} alt={office.region} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 leading-none">{office.city}</h3>
                      <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mt-1.5">{office.region} Center</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <p className="text-[15px] font-bold text-slate-600 leading-relaxed">{office.address}</p>
                  </div>

                  <div className="flex gap-4">
                    <User className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-tight">Main Contact</p>
                      <p className="text-sm font-black text-slate-800">{office.contact}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href={office.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-400 hover:text-brand-primary transition-colors group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-brand-primary/10 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider">Social Feed</span>
                  </a>

                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                    <ExternalLink className="w-4 h-4 opacity-50" />
                  </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

