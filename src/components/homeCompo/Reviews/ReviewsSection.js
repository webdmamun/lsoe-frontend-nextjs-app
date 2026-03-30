'use client';

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  { id: 1, videoId: "ESqbPyuC0iI" },
  { id: 2, videoId: "H9tMptW4UZA" },
  { id: 3, videoId: "MqE6k5h826M" },
  { id: 4, videoId: "GSGTQQgP9vc" },
  { id: 5, videoId: "kNPK7-qTQOM" },
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
            Watch Our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Student Stories
            </span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Watch real video stories from ambitious international students who achieved their dreams with LSOE's dedicated application support.
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
              <SwiperSlide key={item.id} className="h-auto flex justify-center">
                <div className="relative w-full aspect-[9/16] max-w-[320px] mx-auto rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border-4 border-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 mt-6 bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title="Student Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
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
