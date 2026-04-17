'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

const originalColumnVideos = [
  [
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/9_foyoaa.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/7_cgroas.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/8_g17ctr.mp4",
  ],
  [
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_3_yj5hqm.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_1_apdmms.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/6_hrubya.mp4",
  ],
  [
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/3_z1zoun.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/2_dht7kl.mp4",
    "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-videos/video_2_llaykh.mp4",
  ],
];

const shuffleArray = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const VideoSlider = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
        setVisible(true);
      }, 1000); // Duration of fade
    }, 6000); // Change every 6s
    return () => clearInterval(interval);
  }, [videos.length]);

  const nextIndex = (activeIndex + 1) % videos.length;

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        key={`video-${activeIndex}`}
        src={videos[activeIndex]}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <video
        key={`video-${nextIndex}`}
        src={videos[nextIndex]}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          visible ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

const GlobalBanner = () => {
  // Initialize with original videos to match SSR
  const [shuffledVideos, setShuffledVideos] = useState(originalColumnVideos);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only shuffle on client side after mount
    setIsClient(true);
    const shuffled = originalColumnVideos.map((col) => shuffleArray(col));
    setShuffledVideos(shuffled);
  }, []);

  const getVisibleColumns = () => {
    if (typeof window === 'undefined') return 3; // Default for SSR
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleColumns, setVisibleColumns] = useState(3); // Default value for SSR

  useEffect(() => {
    // Set initial value on client
    setVisibleColumns(getVisibleColumns());
    
    const handleResize = () => setVisibleColumns(getVisibleColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedVideos = shuffledVideos.slice(0, visibleColumns);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={`absolute inset-0 z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0`}
      >
        {displayedVideos.map((videos, i) => (
          <div
            key={i}
            className="relative h-screen sm:h-[60vh] md:h-screen overflow-hidden"
          >
            <VideoSlider videos={videos} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white via-white/80 to-transparent"></div>

      <div className="relative z-20 w-full mx-auto px-6 sm:px-10 lg:px-24 pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-32 flex items-center min-h-[32rem]">
        <div className="w-full lg:w-2/3 text-left space-y-6 text-gray-900">
          <p className="text-sm sm:text-base font-medium border-l-4 border-brand-secondary pl-3 text-gray-700">
            Free UK university admissions support for Home and international students — expert guidance since 2013.
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Start Your UK University Journey
            <br className="hidden sm:inline" />
            <span className="text-brand-secondary">with Expert Support — 100% Free</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl leading-relaxed">
            Get admitted to top UK universities with step-by-step guidance on courses,{" "}
            <Link href="/ucas-guide" className="text-brand-primary underline underline-offset-2 hover:text-brand-secondary transition-colors">UCAS applications</Link>,{" "}
            <Link href="/student-finance-uk" className="text-brand-primary underline underline-offset-2 hover:text-brand-secondary transition-colors">Student Finance England</Link>, and visa support — for both UK/EU and international students.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-7 py-3.5 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary bg-white/80 backdrop-blur-sm px-7 py-3.5 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {[
              "100% Free Admission Support",
              "140+ UK University Partners",
              "Student Finance England Guidance",
              "10,000+ Students Supported",
            ].map((bullet) => (
              <span key={bullet} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 text-brand-secondary shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBanner;
