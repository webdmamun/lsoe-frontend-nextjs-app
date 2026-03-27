"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';
import { 
  GraduationCap, ShieldCheck, Map, 
  Wallet, Building2, Briefcase,
  ChevronLeft, ChevronRight, ArrowUpRight
} from 'lucide-react';

const swiperData = [
  {
    title: "Unrivaled University Network",
    desc: "Gain direct priority access to top-tier academic institutions scattered across the UK.",
    icon: <Building2 className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
    href: "/about-us"
  },
  {
    title: "End-to-End Admission",
    desc: "From initial application strategy to finalizing your enrollment seamlessly.",
    icon: <GraduationCap className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    href: "/application-assessment"
  },
  {
    title: "Expert Visa Guidance",
    desc: "Navigate complex immigration rules confidently with our dedicated consulting team.",
    icon: <ShieldCheck className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    href: "/student-visa-advice"
  },
  {
    title: "Scholarship & Funding",
    desc: "Identify and secure maximum financial aid for your academic journey abroad.",
    icon: <Wallet className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    href: "/financial-planning-scholarships"
  },
  {
    title: "Post-Study Pathways",
    desc: "Earn a globally revered degree that opens doors to elite international employers.",
    icon: <Briefcase className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    href: "/contact-us"
  },
  {
    title: "Secure UK Accommodation",
    desc: "Transition smoothly with comfortable, safe, and student-focused housing solutions.",
    icon: <Map className="w-7 h-7" />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    href: "/secure-accommodation"
  }
];

export default function StudyDestinations() {
  const swiperRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[3rem]" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              WHY CHOOSE LSOE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Your Pathway to <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Prestigious Education</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Experience world-class education with full-service guidance. We handle the complexities so you can focus on your academic future.
            </p>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="pb-4"
          >
            {swiperData.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-8 pt-2 px-1">
                <Link href={item.href} className="block active:scale-95 transition-transform duration-200">
                  <div className="relative w-full h-[520px] rounded-[2rem] overflow-hidden group bg-gray-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                    
                    {/* Background Image with Zoom & Darken on Hover */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-40 opacity-80"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    
                    {/* Heavy Bottom Gradient for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top Right Floating Icon */}
                    <div className="absolute top-6 right-6 w-14 h-14 rounded-[1rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-brand-primary group-hover:border-brand-primary">
                      {item.icon}
                    </div>

                    {/* Bottom Content Area with Hover Reveal */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                      <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                        <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                          {item.title}
                        </h3>
                        {/* Description sliding up */}
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                          <div className="overflow-hidden">
                            <p className="text-base text-gray-300 leading-relaxed font-medium pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        
                        {/* Animated Arrow */}
                        <div className="mt-4 flex items-center text-brand-secondary font-bold text-sm tracking-wide uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                          Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Minimalist Navigation Arrows */}
          <div className="absolute -top-24 right-0 hidden md:flex items-center gap-3">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary flex items-center justify-center text-gray-400 hover:text-white transition-all focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Arrows */}
          <div className="flex justify-center gap-4 mt-2 md:hidden">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
