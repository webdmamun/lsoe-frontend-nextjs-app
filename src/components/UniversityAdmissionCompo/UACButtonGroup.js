import React from "react";
import Link from "next/link";

const UACButtonGroup = () => {
  return (
    <section className="w-full bg-gradient-to-r from-sky-50 via-white to-rose-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-pink-600 uppercase mb-10">
          Explore LSOE Admission Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              label: "Apply Now for Assessment",
              to: "/apply-now-for-assessment",
            },
            { label: "Student Visa Advice", to: "/student-visa-advice" },
            {
              label: "Student Financial Information",
              to: "/student-financial-information",
            },
            { label: "Student Accommodation", to: "/student-accommodation" },
            { label: "LSOE Agents Hub", to: "/become-an-agent" },
          ].map((item, idx) => (
            <Link href={item.to} key={idx}>
              <div className="text-center bg-white border-2 border-pink-500 text-pink-600 font-semibold py-5 px-4 rounded-lg hover:bg-pink-50 shadow transition-all">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UACButtonGroup;
