import React from "react";
import Link from "next/link";

const StudentVisaAdviceWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-pink-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Circles */}
            <div className="absolute inset-0 bg-pink-50 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute w-3/4 h-3/4 bg-pink-100 rounded-full opacity-60 animate-bounce delay-700"></div>
            
            {/* Main Visa Card */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300 border border-pink-50">
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-pink-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <circle cx="9" cy="10" r="2"></circle>
                    <line x1="15" y1="8" x2="17" y2="8"></line>
                    <line x1="15" y1="12" x2="17" y2="12"></line>
                    <line x1="7" y1="16" x2="17" y2="16"></line>
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-lg">Visa Assistance</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M2 12h20"></path>
                <path d="M13 2a9 9 0 0 1 9 9H2a9 9 0 0 1 9-9Z"></path>
                <path d="M13 22a9 9 0 0 0 9-9H2a9 9 0 0 0 9 9Z"></path>
                <path d="M12 2v20"></path>
              </svg>
            </div>
            <div className="absolute bottom-10 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-1000">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
            STUDENT VISA ADVICE
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Getting your visa at the right time is as important as getting your
            admission. Not being able to attend your classes or enrollment dates
            can set you back.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            LSOE’s visa experts can help you get your visa in time and prepare
            you for your journey.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            You can use our WhatsApp contact at the bottom of this page to get
            advice on your student visa.
          </p>
          <Link href="/student-visa-advice">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-5 rounded-full shadow transition">
              STUDENT VISA ADVICE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentVisaAdviceWUA;
