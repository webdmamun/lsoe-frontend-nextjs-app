'use client';

import React, { useState } from "react";

const faqs = [
  {
    question: "What types of universities are available through LSOE?",
    answer:
      "We offer quick and streamlined admission support to a wide range of UK universities. Our experienced advisors are here to guide you every step of the way. You can schedule a session to explore your options with us directly.",
  },
  {
    question: "How many students has LSOE supported so far?",
    answer:
      "LSOE has assisted nearly 10,000 students with their UK study journey, helping them secure admissions and offering guidance throughout the process.",
  },
  {
    question: "Is the UK education system reliable?",
    answer:
      "Yes, the UK education system is globally respected. With options across public, private, and international universities, students can access accredited institutions known for their academic excellence and rigorous quality standards.",
  },
  {
    question: "Are there any consulting fees at LSOE?",
    answer:
      "No, LSOE provides free consultancy services to international students. From choosing a course to submitting applications, our expert support is offered at no cost.",
  },
  {
    question: "What kind of help do educational consultants offer?",
    answer:
      "Educational consultants guide students in choosing suitable academic paths, preparing university applications, identifying scholarship opportunities, and offering career advice. They also assist with admission strategy, visa planning, and more.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Circles */}
            <div className="absolute inset-0 bg-blue-50 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute w-3/4 h-3/4 bg-blue-100 rounded-full opacity-50 animate-bounce delay-700"></div>
            
            {/* Main Icon */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-blue-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-1000">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center lg:text-left text-slate-800 mb-6">
            Frequently Asked Questions{" "}
            <span className="text-blue-500">(FAQs)</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
                >
                  {faq.question}
                  <span className="text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
