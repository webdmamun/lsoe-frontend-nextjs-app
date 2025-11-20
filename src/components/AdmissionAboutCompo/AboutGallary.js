'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Real gallery image links
const galleryImages = [
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/8_vlbnq9.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/12_ojx6hf.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/16_kcj6tv.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/20_itr77f.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/15_dfqjd1.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/7_zlrodv.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/10_wrfawl.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/1_nzhco8.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/17_fnfwqx.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/19_eidyih.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/6_r6trhc.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/about-gallery/5_zcxz18.jpg",
];

const AboutGallary = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 overflow-hidden">
      {/* Decorative blurred background orbs */}
      <div className="absolute w-80 h-80 bg-cyan-200 rounded-full blur-[120px] opacity-40 top-0 left-0 -z-10"></div>
      <div className="absolute w-96 h-96 bg-rose-300 rounded-full blur-[130px] opacity-30 bottom-0 right-0 -z-10"></div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">
          Where Global Dreams Take Shape
        </h2>
        <p className="text-blue-600 font-medium">
          Dive into the moments that reflect our commitment to student success
          and global partnerships
        </p>
        <div className="w-24 h-1 mt-4 mx-auto bg-sky-500 rounded-full"></div>
      </div>

      {/* Swiper Gallery */}
      <div className="max-w-7xl mx-auto relative">
        {isClient && (
          <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="pb-14"
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation */}
          <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-6 z-10 text-3xl text-sky-600 hover:text-sky-800 font-bold cursor-pointer select-none">
            ‹
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-6 z-10 text-3xl text-sky-600 hover:text-sky-800 font-bold cursor-pointer select-none">
            ›
          </div>
        </Swiper>
        )}

        {/* Pagination Bullets */}
        <div className="custom-swiper-pagination mt-6 flex justify-center" />
      </div>
    </section>
  );
};

export default AboutGallary;
