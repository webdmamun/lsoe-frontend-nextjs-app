import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina B.",
    role: "Healthcare Assistant, Manchester",
    quote:
      "LSOE’s personalised support helped me land my first job in the UK. The mock interviews gave me so much confidence!",
    country: "🇧🇩",
  },
  {
    name: "Farhan K.",
    role: "MSc Student, Coventry University",
    quote:
      "Thanks to LSOE’s guidance, I secured admission to my dream course. The visa advice was spot-on.",
    country: "🇵🇰",
  },
  {
    name: "Ngozi M.",
    role: "Care Support Worker, London",
    quote:
      "I had no idea where to start. LSOE’s team made the process simple, clear, and super encouraging.",
    country: "🇳🇬",
  },
];

const SuccessStories = () => {
  return (
    <section className="relative w-full bg-gradient-to-tr from-blue-50 via-pink-50 to-white py-24 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          Real People. Real Results.
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Discover how LSOE has transformed futures with tailored guidance and
          career-focused support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                    />
                  ))}
              </div>
              <p className="text-gray-700 italic">“{person.quote}”</p>
            </div>
            <div className="mt-6 text-left">
              <p className="text-base font-semibold text-gray-900">
                {person.name} <span className="text-lg">{person.country}</span>
              </p>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/book-appointment"
          className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 uppercase"
        >
          Get Personal Support
        </Link>
      </div>
    </section>
  );
};

export default SuccessStories;
