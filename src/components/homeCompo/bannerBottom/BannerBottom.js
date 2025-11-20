import React from "react";
import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaUniversity,
  FaChalkboardTeacher,
} from "react-icons/fa";

const BannerBottom = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#E5F3FF] via-white to-[#FFF5F7] py-20 px-6">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 text-[#003f5c] space-y-5">
          <h4 className="uppercase text-sm font-bold text-[#006699]">
            About London School of Excellence
          </h4>
          <h2 className="text-4xl font-extrabold">
            Your Trusted Partner in Global Education
          </h2>
          <p>
            Since 2013, <strong>London School of Excellence (LSOE)</strong> has
            helped students from over 15 countries worldwide pursue education in the UK and globally. 
            We welcome international applicants from Nigeria, Bangladesh, India, Pakistan, Sri Lanka, 
            Philippines, China, and many more countries.
          </p>
          <p>
            Our partnerships with 140+ prestigious UK universities offer deep insights into
            applications, visas, tuition, and accommodation. Our digital-first platform allows 
            you to explore programs, complete applications, and upload documents — all online, 
            from anywhere in the world.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#e8f5fd] p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition flex items-start gap-4">
            <FaMapMarkerAlt className="text-sky-500 text-2xl" />
            <div>
              <h4 className="font-bold text-[#003f5c]">Global Reach</h4>
              <p className="text-sm text-gray-600">15+ Countries Served</p>
            </div>
          </div>
          <div className="bg-[#e7fbee] p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition flex items-start gap-4">
            <FaExchangeAlt className="text-green-500 text-2xl" />
            <div>
              <h4 className="font-bold text-[#003f5c]">Complete Guidance</h4>
              <p className="text-sm text-gray-600">Application to Arrival</p>
            </div>
          </div>
          <div className="bg-[#edf3fe] p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition flex items-start gap-4">
            <FaUniversity className="text-sky-500 text-2xl" />
            <div>
              <h4 className="font-bold text-[#003f5c]">140+ Institutions</h4>
              <p className="text-sm text-gray-600">Prestigious & Affordable</p>
            </div>
          </div>
          <div className="bg-[#f4f3fd] p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition flex items-start gap-4">
            <FaChalkboardTeacher className="text-green-600 text-2xl" />
            <div>
              <h4 className="font-bold text-[#003f5c]">Expert Support</h4>
              <p className="text-sm text-gray-600">
                100+ Certified Counsellors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
