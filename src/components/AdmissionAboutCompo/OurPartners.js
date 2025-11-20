'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const partnerLogos = [
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/10_plcwhha.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/11_lt73z7.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/12_zuieyl.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/13_qts8mw.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/14_utzdt4.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/15_xf8xzf.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/16_tbjcrz.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/17_apimmj.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/18_omltug.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/19_ortvl1.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/1_dz9zql.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/20_fo4bax.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/21_xdomgs.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/22_qdyt8j.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/23_zi3dy6.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/24_ywyhbe.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/25_tnqbm6.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/26_do1ude.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/27_wvmvzg.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/28_o4skde.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/29_nzzduf.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/2_f8brtl.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/30_dzedgd.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/3_hylah4.jpg",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/partners-logo/4_tahc7i.jpg",
];

const OurPartners = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4">
          Our Global Partners
        </h2>
        <p className="text-sky-600 font-medium mb-10">
          Collaborating with renowned universities and institutions worldwide
        </p>

        {isClient && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            speed={3500}
            grabCursor={true}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
              1280: { slidesPerView: 8 },
            }}
            className="w-full"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-20 px-4">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-full object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default OurPartners;
