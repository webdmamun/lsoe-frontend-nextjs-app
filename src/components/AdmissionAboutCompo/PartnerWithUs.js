'use client';

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaGift, FaHandshake } from "react-icons/fa";

const PartnerWithUs = () => {
  const scrollToPartnerForm = () => {
    const formElement = document.getElementById('partner-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Partner <span className="text-blue-500">With Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Join our team today and earn incentives by referring students to our
          partner program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Refer & Earn Card */}
          <div className="bg-blue-500 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Give & Get</h3>
              <p className="text-sm mb-6">Refer a Friend & Get Rewarded!</p>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> +44 (0)1708784763
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> +44 (0)7574091716
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope /> partner@londonschoolofexcellence.com
                </div>
              </div>
            </div>

            <Link href="/refer-and-earn">
              <button className="mt-6 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-100 transition w-full">
                <FaGift /> Refer & Earn
              </button>
            </Link>
          </div>

          {/* Sub Agents Card */}
          <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Sub-Agents</h3>
              <p className="text-sm mb-6">
                Speak to us about our Sub-Agent Programs
              </p>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> +44 (0)1708784763
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> +44 (0)7574091716
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope /> info.office@londonschoolofexcellence.com
                </div>
              </div>
            </div>

            <button 
              onClick={scrollToPartnerForm}
              className="mt-6 bg-white text-slate-900 font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition"
            >
              <FaHandshake /> Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
