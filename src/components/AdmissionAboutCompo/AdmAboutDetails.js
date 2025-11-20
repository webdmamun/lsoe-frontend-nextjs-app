import React from "react";
import { LuGraduationCap } from "react-icons/lu";

const AdmAboutDetails = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Centered Icon with Hover Animation */}
        <div className="mb-6 flex justify-center">
          <div className="text-blue-600 text-6xl transition-transform transform hover:scale-110 hover:text-blue-700 hover:drop-shadow-lg duration-300 ease-in-out">
            <LuGraduationCap />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">
          About{" "}
          <span className="text-blue-600">London School of Excellence</span>
        </h2>

        {/* Divider */}
        <div className="h-[4px] w-28 mx-auto mb-10 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 rounded-full shadow-sm"></div>

        {/* Content */}
        <div className="text-gray-700 text-lg sm:text-[17px] leading-relaxed space-y-6 text-justify">
          <p>
            <strong className="text-slate-800">
              London School of Excellence (LSOE)
            </strong>{" "}
            is a pioneering career guidance and recruitment organization founded
            in 2013. Our mission is to develop empowered learners through
            strategic alliances with world-class educational and cultural
            institutions.
          </p>
          <p>
            We offer accurate, up-to-date support on global study pathways —
            including admission advice, visa assistance, budgeting, and
            accommodation — helping students confidently pursue their dreams
            abroad.
          </p>
          <p>
            Our advanced digital platform allows students to explore courses,
            upload documents, and submit applications all online, simplifying
            the international study journey from start to finish.
          </p>
          <p>
            In a rapidly evolving educational landscape, we champion hybrid
            learning and digital transformation — equipping students worldwide
            to thrive in future-ready learning environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmAboutDetails;
