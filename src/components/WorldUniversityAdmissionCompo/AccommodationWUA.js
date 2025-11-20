import React from "react";
import Link from "next/link";

const AccommodationWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-rose-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1678983919/Mesa_de_trabajo_1_iivpai.png"
            alt="Accommodation"
            className="w-full max-w-md mx-auto"
          />
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
