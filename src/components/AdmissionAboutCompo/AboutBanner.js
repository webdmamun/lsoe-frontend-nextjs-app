'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const videoSlides = [
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_1_apdmms.mp4",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_3_yj5hqm.mp4",
  "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_2_llaykh.mp4",
];

const AboutBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSlides.length);
        setFade(true);
      }, 500);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[32rem] overflow-hidden">
      {/* Background Video Slide */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          key={currentIndex}
          src={videoSlides[currentIndex]}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sky Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-white/80 to-white/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-[5.7rem] py-16 sm:py-24 md:py-32 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>About Us</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Who We Are</h1>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          LSOE is redefining global education. We help aspiring students find
          their path to success in the UK through expert guidance, free
          consultancy, and trusted partnerships.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default AboutBannerSlider;
