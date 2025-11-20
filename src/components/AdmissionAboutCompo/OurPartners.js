'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const partnerLogos = [
  "https://res.cloudinary.com/lsoe/image/upload/v1753692522/images/OurPartners/23_zi3dy6.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692523/images/OurPartners/27_wvmvzg.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692523/images/OurPartners/26_do1ude.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692523/images/OurPartners/25_tnqbm6.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692522/images/OurPartners/24_ywyhbe.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692522/images/OurPartners/22_qdyt8j.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692522/images/OurPartners/20_fo4bax.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/19_ortvl1.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/15_xf8xzf.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/17_apimmj.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/16_tbjcrz.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/18_omltug.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/14_utzdt4.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692521/images/OurPartners/13_qts8mw.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/8_umy1k8.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/1_dz9zql.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/3_hylah4.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/11_lt73z7.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/7_hgwz4b.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/4_tahc7i.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692520/images/OurPartners/12_zuieyl.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692519/images/OurPartners/9_gymg5v.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692519/images/OurPartners/10_plcwha.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692519/images/OurPartners/6_lhcb3v.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1753692519/images/OurPartners/2_f8brtl.jpg", // fixed the hhttps typo
  "https://res.cloudinary.com/lsoe/image/upload/v1753692519/images/OurPartners/5_sja9az.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1754063876/images/OurPartners/30_dzedgd.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1754063877/images/OurPartners/29_nzzduf.jpg",
  "https://res.cloudinary.com/lsoe/image/upload/v1754063877/images/OurPartners/28_o4skde.jpg",
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
