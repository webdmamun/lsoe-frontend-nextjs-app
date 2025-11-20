'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

import "./styles.css";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        speed={300}
        effect={"fade"}
        autoplay={true}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero lg:min-h-screen md:h-[30rem]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-one_ge4nge.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content p-10 slider-content-bg">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-slate-100">
                  STUDY ABROAD
                </h1>
                <p className="mb-5 text-slate-100">
                  London School Of Excellence helps you submit your application
                  with no errors and highest chance of acceptance.
                </p>
                <Link href="/login">
                  <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:min-h-screen md:h-[30rem]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-two_j7rkc1.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content p-10 slider-content-bg">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-slate-100">
                  LONDON SCHOOL OF EXCELLENCE
                </h1>
                <p className="mb-5 text-slate-100">Learn-Teach-Lead</p>
                <Link href="/login">
                  <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:min-h-screen md:h-[30rem]">
            <video
              src="https://res.cloudinary.com/lsoe/video/upload/v1663415333/videos/banner-video-three_qxwagd.mp4"
              muted
              autoPlay={"autoplay"}
              loop
              className="w-[100%] h-[100%] object-cover"
            />

            <div className="hero"></div>
            <div className="hero-content text-center text-neutral-content p-10 slider-content-bg">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">STUDY ABROAD</h1>
                <p className="mb-5">
                  London School Of Excellence helps you submit your application
                  with no errors and highest chance of acceptance.
                </p>
                <Link href="/login">
                  <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
