'use client';

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "Nigeria",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=E91E63&color=fff&size=200",
    review: "LSOE made my dream of studying in the UK a reality. Their expert guidance through the application process was invaluable. I'm now pursuing my Master's degree at a top-tier institution!",
    course: "MSc Business Analytics",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    country: "Bangladesh",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=2196F3&color=fff&size=200",
    review: "The team at LSOE was incredibly supportive throughout my visa application. They helped me secure admission to a prestigious campus and guided me every step of the way. Highly recommended!",
    course: "BSc Computer Science",
  },
  {
    id: 3,
    name: "Priya Sharma",
    country: "India",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=9C27B0&color=fff&size=200",
    review: "From course selection to accommodation, LSOE handled everything professionally. Their free consultancy service is exceptional. I couldn't have done this without their expertise!",
    course: "MA International Relations",
  },
  {
    id: 4,
    name: "David Okonkwo",
    country: "Nigeria",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=David+Okonkwo&background=FF9800&color=fff&size=200",
    review: "LSOE's career guidance helped me choose the right path. Now I'm studying in the UK and already have internship opportunities lined up. Thank you LSOE for the professional support!",
    course: "MEng Mechanical Engineering",
  },
  {
    id: 5,
    name: "Maria Santos",
    country: "Philippines",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Maria+Santos&background=4CAF50&color=fff&size=200",
    review: "The scholarship information and financial guidance from LSOE was a game-changer. They helped me secure funding and made my UK education affordable. I am forever grateful!",
    course: "MSc Public Health",
  },
  {
    id: 6,
    name: "Zahid Khan",
    country: "Pakistan",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Zahid+Khan&background=00BCD4&color=fff&size=200",
    review: "LSOE's expertise in UK university admissions is unmatched. They helped me navigate the complex application process and I got accepted into my top choice subject area!",
    course: "MSc Artificial Intelligence",
  },
  {
    id: 7,
    name: "Isabelle Dubois",
    country: "France",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Isabelle+Dubois&background=673AB7&color=fff&size=200",
    review: "Moving from Europe was a big step, but LSOE made the transition seamless. Their deep knowledge of the UK higher education system is impressive.",
    course: "MA Digital Marketing",
  },
  {
    id: 8,
    name: "Tariq Mahmood",
    country: "UAE",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Tariq+Mahmood&background=3F51B5&color=fff&size=200",
    review: "The level of personalization LSOE provides is rare. They didn't just find me a course; they found me the right environment to thrive in my professional career.",
    course: "MBA Global Management",
  },
  {
    id: 9,
    name: "Linda Mbugua",
    country: "Kenya",
    university: "UK University",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Linda+Mbugua&background=009688&color=fff&size=200",
    review: "LSOE's team is always available to answer even the smallest questions. Their patience and dedication to student success are truly commendable.",
    course: "LLB Law & Finance",
  },
];

export default function ReviewsSection() {
  const swiperRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[2rem]" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <span className="text-sm font-bold tracking-wide text-brand-primary uppercase">Student Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4">
            Hear from our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Global Alumni
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Real stories from ambitious international students who achieved their dreams with LSOE's dedicated application support.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-2 pb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="reviews-swiper pb-16 pt-8 px-4"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                {/* Review Card */}
                <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 h-full min-h-[400px] flex flex-col group mt-6">
                  
                  {/* Floating Avatar overlaps top edge */}
                  <div className="absolute -top-10 left-8">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaQuoteLeft className="text-brand-primary text-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex-grow">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FFC107] text-sm" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-[17px] leading-relaxed italic mb-8 font-medium">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-auto">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-brand-secondary mt-1 tracking-wide">
                      {item.course}
                    </p>
                </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Minimalist Navigation Arrows Outset */}
          <div className="absolute top-[45%] -translate-y-1/2 -left-4 lg:-left-12 hidden md:flex z-10 w-12 pt-8">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 hover:border-brand-primary hover:text-brand-primary flex items-center justify-center text-gray-400 transition-all focus:outline-none"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-lg -ml-0.5" />
            </button>
          </div>
          <div className="absolute top-[45%] -translate-y-1/2 -right-4 lg:-right-12 hidden md:flex z-10 w-12 pt-8">
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 hover:border-brand-primary hover:text-brand-primary flex items-center justify-center text-gray-400 transition-all focus:outline-none"
              aria-label="Next Slide"
            >
              <FaChevronRight className="text-lg ml-0.5" />
            </button>
          </div>

        </div>
      </div>
      
      {/* Scoped Swiper Pagination & Layout Overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .reviews-swiper {
          padding-bottom: 60px !important;
        }
        .reviews-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .reviews-swiper .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          background-image: linear-gradient(to right, var(--brand-primary), var(--brand-secondary));
          width: 24px;
          border-radius: 8px;
        }
      `}} />
    </section>
  );
}
