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
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1752851250/images/faq_questons_gizzhk.png"
            alt="FAQ Student"
            className="w-full max-w-sm mx-auto"
          />
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
