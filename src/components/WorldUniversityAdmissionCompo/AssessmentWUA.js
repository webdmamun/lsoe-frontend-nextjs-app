import React from "react";
import Link from "next/link";

const AssessmentWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-rose-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-slate-800 uppercase mb-2">
            Assessments
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>

          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Applying for universities can be difficult and tricky. Missing one
            little piece of document or information can cost you months — or the
            chance altogether.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Our specialists at the <strong>London School Of Excellence</strong>{" "}
            ensure that this never happens to you. We review your application
            thoroughly and maintain close contact with your university of choice
            to ensure a valid application submission.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            LSOE’s team of visa experts will advise you on getting your visa,
            finding accommodation, and making a smooth transition to your
            destination country.
          </p>

          <Link href="/apply-now-for-assessment">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition uppercase">
              Apply For Assessment
            </button>
          </Link>
        </div>

        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Shapes */}
            <div className="absolute inset-0 bg-indigo-50 rotate-12 rounded-3xl opacity-70"></div>
            <div className="absolute inset-0 bg-blue-50 -rotate-6 rounded-3xl opacity-70"></div>
            
            {/* Main Checklist Card */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300 border border-indigo-50">
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 bg-indigo-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="m9 15 2 2 4-4"></path>
                  </svg>
                </div>
                <p className="font-bold text-gray-800 text-lg">Application Review</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="absolute bottom-10 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-1000">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                <path d="M22 10v6M2 10v6"></path>
                <path d="M20 16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8Z"></path>
                <path d="M10 12h4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentWUA;
