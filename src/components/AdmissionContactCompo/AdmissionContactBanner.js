import React from "react";
import { LuPhoneCall } from "react-icons/lu";
const AdmissionContactBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        {/* Icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="text-blue-600 text-6xl transition-transform transform hover:scale-110 hover:text-blue-700 hover:drop-shadow-md duration-300">
            <LuPhoneCall />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          Get in <span className="text-blue-600">Touch With Us</span>
        </h1>

        {/* Line under title */}
        <div className="h-[4px] w-24 mx-auto bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6"></div>

        {/* Subtext */}
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Whether you’re a student, parent, or partner institution — we’re here
          to help. Reach out to our team for expert guidance, support, or
          collaboration inquiries.
        </p>
      </div>
    </section>
  );
};

export default AdmissionContactBanner;
