'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

const partnerLogos = [
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/10_plcwhha.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/11_lt73z7.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/12_zuieyl.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/13_qts8mw.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/14_utzdt4.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/15_xf8xzf.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/16_tbjcrz.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/17_apimmj.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/18_omltug.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/19_ortvl1.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/1_dz9zql.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/20_fo4bax.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/21_xdomgs.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/22_qdyt8j.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/23_zi3dy6.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/24_ywyhbe.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/25_tnqbm6.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/26_do1ude.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/27_wvmvzg.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/28_o4skde.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/29_nzzduf.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/2_f8brtl.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/30_dzedgd.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/3_hylah4.jpg",
  "https://media.londonschoolofexcellence.com/lsoe-website-images/partners-logo/4_tahc7i.jpg",
];

const OurPartners = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const row1 = partnerLogos.slice(0, 18);
  const row2 = partnerLogos.slice(18);

  const swiperOptions = (reverse = false) => ({
    modules: [Autoplay, FreeMode],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      reverseDirection: reverse
    },
    loop: true,
    speed: 6000,
    freeMode: true,
    grabCursor: false,
    slidesPerView: 2,
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
    },
    className: "w-full flex-marquee"
  });

  if (!mounted) return (
    <div className="bg-white py-24 h-[400px] flex items-center justify-center">
       <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
    </div>
  );

  return (
    <section className="bg-white py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Premium Header */}
        <div className="text-center space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <p className="px-2 text-slate-400 font-black text-[10px] tracking-[0.3em] uppercase">
                 Our Global Institutional Network
              </p>
           </div>
           <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Direct Priority Partnerships with <br className="hidden md:block" />
              <span className="text-brand-primary">140+ Elite Institutions</span>
           </h2>
        </div>

        <div className="space-y-8">
          {/* Row 1: Moving Right (Standard) */}
          <div className="relative">
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
             
             <Swiper {...swiperOptions(false)}>
               {row1.map((logo, index) => (
                 <SwiperSlide key={`r1-${index}`}>
                   <div className="flex items-center justify-center py-4 px-3">
                     <div className="w-full aspect-[2/1] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3 group hover:shadow-xl hover:border-brand-primary/20 transition-all duration-500 backdrop-blur-sm">
                        <img
                          src={logo}
                          alt={`Partner ${index + 1}`}
                          className="h-full w-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                     </div>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
          </div>

          {/* Row 2: Moving Left (Reverse) */}
          <div className="relative">
             <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
             <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
             
             <Swiper {...swiperOptions(true)}>
               {row2.map((logo, index) => (
                 <SwiperSlide key={`r2-${index}`}>
                   <div className="flex items-center justify-center py-4 px-3">
                     <div className="w-full aspect-[2/1] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3 group hover:shadow-xl hover:border-brand-primary/20 transition-all duration-500 backdrop-blur-sm">
                        <img
                          src={logo}
                          alt={`Partner ${index + 1}`}
                          className="h-full w-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                     </div>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <style dangerouslySetInnerHTML={{__html: `
        .flex-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};


export default OurPartners;
