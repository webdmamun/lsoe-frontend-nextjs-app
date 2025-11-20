import React from "react";
import { ShieldCheck, HardHat, Stethoscope } from "lucide-react";

const CertificateCourses = () => {
  const courses = [
    {
      icon: <HardHat className="w-10 h-10 text-yellow-500" />,
      badge: "Level-2 Training Certificate",
      title: "Construction Site Safety Fundamentals",
      level: "Level 2 – Intermediate",
      desc: "Gain practical skills to operate safely and effectively on UK construction sites.",
      btnText: "Enroll Now",
      link: "https://courses.londonschoolofexcellence.com/courses/construction-site-safety-fundamentals/",
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-pink-600" />,
      badge: "Level-2 Training Certificate",
      title: "Safeguarding in Healthcare: Intermediate Practice",
      level: "Level 2 – Intermediate",
      desc: "Learn to identify, prevent, and manage safeguarding concerns in healthcare.",
      btnText: "Enroll Now",
      link: "https://courses.londonschoolofexcellence.com/courses/safeguarding-in-healthcare-intermediate-practice/",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-sky-50 via-white to-pink-50 py-24 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Boost Your CV with Certified Training
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Stand out in the competitive UK job market with accredited,
          career-focused training.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-start hover:shadow-2xl hover:border-blue-400 transition duration-300 group"
          >
            <div className="mb-4 flex items-center gap-3">
              {course.icon}
              <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {course.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
              {course.title}
            </h3>

            <p className="text-sm text-pink-600 mt-1 font-semibold">
              {course.level}
            </p>

            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              {course.desc}
            </p>

            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              {course.btnText}
            </a>

            <div className="absolute top-4 right-4">
              <ShieldCheck className="w-6 h-6 text-green-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateCourses;
