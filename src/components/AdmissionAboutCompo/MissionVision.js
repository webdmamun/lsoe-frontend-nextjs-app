import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-left">
          {/* Icon or image */}
          <div className="bg-blue-100 p-6 rounded-full shadow-lg">
            <FaBullseye size={40} className="text-blue-600" />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Our <span className="text-blue-500">Mission</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission is to inspire and empower students by providing access
              to world-class educational opportunities. We are committed to
              guiding individuals through every step of their academic journey —
              from career discovery and application advice to university
              placement and visa support — with care, clarity, and integrity.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-right">
          {/* Icon or image */}
          <div className="bg-purple-100 p-6 rounded-full shadow-lg">
            <FaLightbulb size={40} className="text-purple-600" />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Our <span className="text-purple-500">Vision</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our vision is to become the most trusted and innovative global
              educational consultancy. We aim to shape futures by building a
              world where every student has the opportunity to reach their full
              potential through accessible, personalized, and future-forward
              academic pathways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
