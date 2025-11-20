'use client';

import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const AppointmentTypesCompo = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) {
    return null;
  }

  return (
    <section
      id="appointments"
      className="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-6 sm:px-10 lg:px-24"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Choose Your Consultation
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Get expert career advice tailored to your needs — quick questions or a
          full strategy session.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Free Consultation */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🆓</span>
              <h3 className="text-2xl font-semibold text-gray-800">
                15-Min Free Consultation
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              A quick session to get instant feedback or ask career questions.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✅ CV & Cover Letter Check</li>
              <li>✅ Career Questions Answered</li>
              <li>✅ 1-to-1 Zoom or Google Meet</li>
            </ul>
          </div>
          <div className="mt-6">
            <PopupButton
              url="https://calendly.com/lsoe-career-hub/15-min-free-consultation-session"
              rootElement={rootElement}
              text="Book Free Now"
              className="inline-block w-full text-center px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
            />
          </div>
        </div>

        {/* Paid Consultation */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-pink-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💳</span>
              <h3 className="text-2xl font-semibold text-gray-800">
                1-Hour Paid Consultation
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              In-depth career support including strategy, UK visa guidance, and
              documents review.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>🧠 Full Career Strategy Plan</li>
              <li>📝 CV & Cover Letter Review</li>
              <li>🇬🇧 UK Visa & Sponsorship Advice</li>
            </ul>
            <p className="mt-4 text-xl font-bold text-gray-800">Only £29</p>
          </div>
          <div className="mt-6">
            <PopupButton
              url="https://calendly.com/lsoe-career-hub/1-hour-career-consultation"
              rootElement={rootElement}
              text="Book 1-Hour Now"
              className="inline-block w-full text-center px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentTypesCompo;
