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

      <div className="relative z-20 w-full mx-auto px-6 sm:px-10 lg:px-24 py-20 sm:py-32 md:py-40 flex items-center min-h-[28rem]">
        <div className="w-full lg:w-2/3 text-left space-y-6 text-gray-900">
          <p className="text-sm sm:text-base font-medium border-l-4 border-red-500 pl-3 text-gray-700">
            As official delegate of a top-ranking UK university, we can help you
            pursue any course you choose.
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            An official delegate of <br className="hidden sm:inline" /> a
            top-ranking UK university
          </h1>

          <div className="flex flex-wrap gap-8 font-semibold text-base text-gray-800">
            {[
              { stat: "10,000+", label: "Student’s Career" },
              { stat: "10+", label: "Recruitment Awards" },
              { stat: "140+", label: "University Partners" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-red-600 text-2xl sm:text-3xl font-bold">
                  {item.stat}
                </p>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div>
            <Link
              href="/apply-now"
              className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 uppercase mt-4"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBanner;
