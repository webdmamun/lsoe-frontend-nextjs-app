import React from "react";
import Link from "next/link";

const FinanceWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-rose-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-slate-800 uppercase mb-2">
            Finance
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>

          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Living in a new country can be financially difficult. LSOE’s guides
            can help you understand the cost of living in the country you are
            moving to.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            You can explore our financial guide or speak with an expert for
            better planning and insights tailored to your destination.
          </p>

          <Link href="/student-financial-information">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
              Finance Information
            </button>
          </Link>
        </div>

        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Gradient Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-70 animate-pulse"></div>
            
            {/* Main Card */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300 border border-green-50">
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-green-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-lg">Financial Planning</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceWUA;
