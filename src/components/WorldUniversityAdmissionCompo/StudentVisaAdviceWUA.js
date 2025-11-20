import React from "react";
import Link from "next/link";

const StudentVisaAdviceWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-pink-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1678985581/Visa_Advice_mdv28h.png"
            alt="Student Visa Advice"
            className="max-w-sm md:max-w-md lg:max-w-lg"
          />
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
