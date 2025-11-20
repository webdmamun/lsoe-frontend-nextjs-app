'use client';

import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Nigeria",
      university: "University of Manchester",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=E91E63&color=fff&size=200",
      review: "LSOE made my dream of studying in the UK a reality. Their expert guidance through the application process was invaluable. I'm now pursuing my Master's degree at the University of Manchester!",
      course: "MSc Business Analytics",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      country: "Bangladesh",
      university: "University of Leeds",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=2196F3&color=fff&size=200",
      review: "The team at LSOE was incredibly supportive throughout my visa application. They helped me secure admission to my dream university and guided me every step of the way. Highly recommended!",
      course: "BSc Computer Science",
    },
    {
      id: 3,
      name: "Priya Sharma",
      country: "India",
      university: "University of Birmingham",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=9C27B0&color=fff&size=200",
      review: "From course selection to accommodation, LSOE handled everything professionally. Their free consultancy service is exceptional. I couldn't have done this without their support!",
      course: "MA International Relations",
    },
    {
      id: 4,
      name: "David Okonkwo",
      country: "Nigeria",
      university: "University of Sheffield",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=David+Okonkwo&background=FF9800&color=fff&size=200",
      review: "LSOE's career guidance helped me choose the right path. Now I'm studying at Sheffield and already have internship opportunities lined up. Thank you LSOE!",
      course: "MEng Mechanical Engineering",
    },
    {
      id: 5,
      name: "Maria Santos",
      country: "Philippines",
      university: "University of Nottingham",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Maria+Santos&background=4CAF50&color=fff&size=200",
      review: "The scholarship information and financial guidance from LSOE was a game-changer. They helped me secure funding and made my UK education affordable. Forever grateful!",
      course: "MSc Public Health",
    },
    {
      id: 6,
      name: "Chen Wei",
      country: "China",
      university: "University of Bristol",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Chen+Wei&background=00BCD4&color=fff&size=200",
      review: "LSOE's expertise in UK university admissions is unmatched. They helped me navigate the complex application process and I got accepted to my top choice university!",
      course: "PhD Engineering",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            What Our <span className="text-pink-600">Students Say</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories from students who achieved their dreams with LSOE
          </p>
        </div>

        {/* Main Review Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-8 left-8 text-6xl text-pink-100" />

            <div className="relative z-10">
              {/* Student Info */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-24 h-24 rounded-full border-4 border-pink-500 shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentReview.name}
                  </h3>
                  <p className="text-gray-600">{currentReview.course}</p>
                  <p className="text-sm text-gray-500">
                    {currentReview.university} • {currentReview.country}
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-2 justify-center md:justify-start">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                "{currentReview.review}"
              </p>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-pink-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white rounded-full p-4 shadow-lg hover:bg-pink-600 hover:text-white transition-all"
            aria-label="Previous review"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white rounded-full p-4 shadow-lg hover:bg-pink-600 hover:text-white transition-all"
            aria-label="Next review"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">140+</div>
            <div className="text-gray-600">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
