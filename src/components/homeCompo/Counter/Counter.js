'use client';

import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50 to-rose-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { number: 2013, label: "Active Since" },
          {
            number: 99,
            suffix: "%",
            label:
              "of successful international students progress to their chosen university",
          },
          {
            number: 90,
            suffix: "+",
            label:
              "Universities and Schools in Europe, UK, USA, Canada, Australia and New Zealand",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-10 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h2 className="text-pink-600 text-5xl font-extrabold mb-2">
              <CountUp end={item.number} duration={2.5} />
              {item.suffix || ""}
            </h2>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
