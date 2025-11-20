import React from "react";
import Link from "next/link";

const AccommodationWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-rose-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Circles */}
            <div className="absolute inset-0 bg-rose-50 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute w-3/4 h-3/4 bg-rose-100 rounded-full opacity-60 animate-bounce delay-700"></div>
            
            {/* Main House Card */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300 border border-rose-50">
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-rose-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-lg">Student Housing</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-1000">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-slate-800 uppercase mb-2">
            Accommodations
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>

          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            You will need to arrange accommodation before you arrive in the UK.
            You cannot turn up at your university and move into a room without
            having booked.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            London, the capital city of the UK, is a vibrant multicultural
            metropolis with over 8 million residents and countless
            opportunities.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            The city is home to iconic landmarks such as Buckingham Palace,
            Parliament, and Tower Bridge, as well as top-ranking universities
            like LSE, Imperial, UCL, King’s College, and more.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            London has a student population of around 400,000 and offers
            world-class facilities, diverse neighborhoods, and some of the
            world's most renowned teaching hospitals.
          </p>

          <Link href="/student-accommodation">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
              Accommodation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccommodationWUA;
