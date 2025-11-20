import React from "react";
import Link from "next/link";

const CareerHubCompoBanner = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/lsoe/video/upload/v1753438495/videos/video_3_yj5hqm.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 sm:px-10 lg:px-24 text-center text-white">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            LSOE Career Hub
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Unlock your future in the UK job market. Book a free appointment and
            get certified with industry-recognised training.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/book-appointment"
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
            >
              Book Appointment
            </Link>
            <a
              href="https://courses.londonschoolofexcellence.com/"
              className="px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHubCompoBanner;
