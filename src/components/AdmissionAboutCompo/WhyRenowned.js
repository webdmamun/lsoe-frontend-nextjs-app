import React from "react";
import {
  FaRegLightbulb,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaBullseye,
  FaHeadphones,
  FaHandshake,
  FaCheckCircle,
  FaClipboardList,
  FaChalkboardTeacher,
  FaGlobe,
  FaLaptopCode,
  FaCogs,
  FaRocket,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";

const qualities = [
  {
    icon: <FaRegLightbulb size={26} />,
    text: "Stay updated on trends and developments in study abroad education.",
  },
  {
    icon: <FaTasks size={26} />,
    text: "Keep a keen eye on global study dynamics.",
  },
  {
    icon: <FaCheckCircle size={26} />,
    text: "Possess deep understanding of student life and academic needs.",
  },
  {
    icon: <FaBullseye size={26} />,
    text: "Sharply identify and support academic goals.",
  },
  {
    icon: <FaHeadphones size={26} />,
    text: "Actively listen to student concerns and aspirations.",
  },
  {
    icon: <FaUsers size={26} />,
    text: "Understand student needs to deliver personalized guidance.",
  },
  {
    icon: <FaClipboardList size={26} />,
    text: "Deliver exceptional support tailored to student requirements.",
  },
  {
    icon: <FaHandshake size={26} />,
    text: "Build strong connections with students and institutions.",
  },
  {
    icon: <FaRegLightbulb size={26} />,
    text: "Foster creativity and flexibility in our approach.",
  },
  {
    icon: <FaCalendarAlt size={26} />,
    text: "Efficiently organize timelines to meet deadlines.",
  },
  {
    icon: <FaClipboardList size={26} />,
    text: "Adapt quickly to the changing educational landscape.",
  },
  {
    icon: <FaUsers size={26} />,
    text: "Collaborate as a team to create synergy and trust.",
  },
  {
    icon: <FaCheckCircle size={26} />,
    text: "Take responsibility for all actions and promises.",
  },
  {
    icon: <FaChalkboardTeacher size={26} />,
    text: "Train team members and support continuous growth.",
  },
  {
    icon: <FaLaptopCode size={26} />,
    text: "Leverage technology to streamline processes and access.",
  },
  {
    icon: <FaRocket size={26} />,
    text: "Continuously strive for excellence and student success.",
  },
];

const WhyRenowned = () => {
  return (
    <section className="bg-gradient-to-tr from-slate-50 via-blue-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
          Why We Are Renowned For <br /> Educational Consultancy Services
        </h2>
        <p className="text-blue-600 font-semibold mb-12">
          We evolve with educational trends, listen deeply, and guide with care
          & precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {qualities.map((q, idx) => (
            <div
              key={idx}
              className="relative group bg-white/10 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="bg-gradient-to-r from-sky-400 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:rotate-[8deg]">
                {q.icon}
              </div>
              <p className="text-sm text-slate-800 font-medium leading-snug">
                {q.text}
              </p>
              <div className="absolute inset-0 rounded-xl z-[-1] group-hover:shadow-[0_0_20px_rgba(0,132,255,0.3)] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRenowned;
