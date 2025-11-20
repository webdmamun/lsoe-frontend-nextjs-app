import React from "react";
import {
  FaBalanceScale,
  FaUserShield,
  FaComments,
  FaHandsHelping,
  FaAward,
  FaHeart,
} from "react-icons/fa";

const values = [
  {
    title: "Honesty & Objectivity",
    icon: <FaBalanceScale size={24} />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Confidentiality & Ethics",
    icon: <FaUserShield size={24} />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Open Communication",
    icon: <FaComments size={24} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Inclusiveness & Respect",
    icon: <FaHandsHelping size={24} />,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Professional Excellence",
    icon: <FaAward size={24} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Empathy & Inspiration",
    icon: <FaHeart size={24} />,
    color: "from-purple-600 to-pink-500",
  },
];

const OurGoal = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side – Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
          {values.map((val, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${val.color} text-white rounded-xl shadow-lg p-6 flex items-center gap-4 transform hover:scale-105 transition duration-300`}
            >
              <div className="bg-white text-black p-2 rounded-full shadow-md">
                {val.icon}
              </div>
              <div>
                <p className="font-semibold text-sm">{val.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side – Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Our Goal
          </h2>
          <p className="text-blue-600 font-semibold mb-4">
            To empower students by unlocking academic pathways and global
            opportunities.
          </p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            At London School of Excellence, our goal is to lead the way in
            global education consultancy by setting the standard in
            professionalism, ethics, and communication. We guide students toward
            success by offering clear academic direction and fostering
            transparent, honest relationships.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our team is committed to helping students align their academic
            aspirations with real-world possibilities by recommending tailored
            solutions that fit their future ambitions. With every step, we aim
            to deliver unmatched service and foster long-term growth and
            achievement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
