'use client';

import React, { useState } from "react";
const faqs = [
  {
    question: "What if I need to reschedule?",
    answer:
      "No problem! You can reschedule your session using the reschedule link in your confirmation email — up to 24 hours before the session.",
  },
  {
    question: "Can international students book?",
    answer:
      "Yes, absolutely! Our team works with students and professionals from all over the world who are interested in UK opportunities.",
  },
  {
    question: "What platform do you use for sessions?",
    answer:
      "We use Zoom or Google Meet depending on your preference. A meeting link will be sent automatically after booking.",
  },
  {
    question: "Can I get a refund for paid appointments?",
    answer:
      "Refunds are available with 24-hour notice. Please contact us via email if you need to cancel your paid session.",
  },
  {
    question: "Will I receive follow-up support after the session?",
    answer:
      "Yes, you’ll receive a short session summary via email and may be offered additional resources or follow-up calls if needed.",
  },
  {
    question: "Can I book more than one session?",
    answer:
      "Definitely! Many clients book multiple sessions for CV revision, interview prep, or work visa planning.",
  },
];

const AppointmentFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Everything you need to know before booking a consultation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppointmentFAQ;
