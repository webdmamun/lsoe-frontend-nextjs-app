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

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1678983899/Finance_b3wpjq.png"
            alt="Finance"
            className="max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FinanceWUA;
