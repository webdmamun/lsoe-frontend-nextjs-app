import React from "react";
import Link from "next/link";

const WhyBookAppointment = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-sky-100 to-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
      {/* Background Video (Muted for Design) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source
            src="https://res.cloudinary.com/lsoe/video/upload/v1754140372/videos/8_g17ctr.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Get Personalised Support
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Our experts are here to help you confidently pursue a career in the
          UK. From job applications to visa advice — we’ve got you covered every
          step of the way.
        </p>

        {/* Bullet Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mt-10 text-base font-medium text-gray-800">
          {[
            "CV and Cover Letter Review",
            "Job Application Strategy",
            "Interview Preparation",
            "Work Visa & Sponsorship Advice",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl px-6 py-5 shadow hover:shadow-md hover:border-blue-400 transition"
            >
              <span className="text-blue-600 font-semibold mr-2">✔</span>
              {item}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-10">
          <Link
            href="/book-appointment"
            className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Book Your 1-to-1 Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyBookAppointment;
