'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    type: "video",
    src: "https://res.cloudinary.com/lsoe/video/upload/v1752842264/videos/bg_video_xgkkux.mp4",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/lsoe/image/upload/v1752842267/videos/2_yo5spw.jpg",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/lsoe/image/upload/v1752842269/videos/1_c0zgrp.jpg",
  },
];

const GlobalBannerTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Slide */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {current.type === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={current.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={current.src}
            alt="slide background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Sky Blue to Transparent Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-200 via-white/80 to-white/0"></div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-[5.7rem] py-16 sm:py-24 md:py-32 flex items-center min-h-[32rem]">
        <div className="w-full lg:w-2/3 text-left space-y-6 text-gray-900">
          <p className="text-sm font-semibold border-l-4 border-red-500 pl-3 text-gray-700">
            As official delegate of a top-ranking UK university, we can help you
            pursue any course you choose.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            An official delegate of <br /> a top-ranking UK university
          </h1>

          <div className="flex flex-wrap gap-6 font-semibold text-base text-gray-800">
            <div>
              <p className="text-red-600 text-2xl font-bold">10,000+</p>
              <p>Student’s Career</p>
            </div>
            <div>
              <p className="text-red-600 text-2xl font-bold">10+</p>
              <p>Recruitment Awards</p>
            </div>
            <div>
              <p className="text-red-600 text-2xl font-bold">140+</p>
              <p>University Partners</p>
            </div>
          </div>

          <div>
            <Link
              href="/apply-now"
              className="bg-gradient-to-r from-pink-600 to-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition uppercase inline-block mt-2"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBannerTwo;
