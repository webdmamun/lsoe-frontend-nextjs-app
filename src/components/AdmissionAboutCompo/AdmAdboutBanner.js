import React from "react";
import Link from "next/link";

const AdmAdboutBanner = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-[60vh] bg-slate-950 text-white flex items-center">
      {/* Background Image Layer */}
      <img
        src="https://www.thestatesman.com/wp-content/uploads/2020/09/QT-Indian-students-1.jpg"
        alt="Students"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-[#1e293b]/90 mix-blend-multiply"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <nav className="text-sm text-gray-300 breadcrumbs">
            <ul className="flex justify-center lg:justify-start gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <span>/</span>
              <li className="text-white">About Us</li>
            </ul>
          </nav>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Who We Are
          </h1>
          <p className="text-lg text-gray-300">
            LSOE is redefining global education. We help aspiring students find
            their path to success in the UK through expert guidance, free
            consultancy, and trusted partnerships.
          </p>

          <Link
            href="/contact-us"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition-all font-medium text-white shadow-lg backdrop-blur-md"
          >
            Get in Touch
          </Link>
        </div>

        {/* Right Image/Visual Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md p-1 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl shadow-2xl hover:scale-105 transition-transform">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2020/09/QT-Indian-students-1.jpg"
              alt="LSOE Students"
              className="rounded-xl object-cover w-full h-full"
            />
            <div className="absolute -top-5 -right-5 bg-sky-600 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
              +10,000 Students Guided
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmAdboutBanner;
