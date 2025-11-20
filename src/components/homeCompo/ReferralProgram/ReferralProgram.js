'use client';

import React from "react";
import Link from "next/link";
import { FaGift, FaUsers, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const ReferralProgram = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Refer & <span className="text-pink-600">Earn Rewards</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Know someone who wants to study abroad? Refer them to LSOE and earn exciting rewards when they successfully enroll!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGift className="text-3xl text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Earn Rewards</h3>
            <p className="text-gray-600">
              Get attractive incentives for every successful student referral who enrolls with LSOE
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-3xl text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Help Friends</h3>
            <p className="text-gray-600">
              Help your friends achieve their study abroad dreams with expert guidance from LSOE
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMoneyBillWave className="text-3xl text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Process</h3>
            <p className="text-gray-600">
              Simple referral process - just fill the form and we'll take care of the rest
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Refer a Friend</h4>
              <p className="text-sm text-gray-600">Share your friend's details through our referral form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">We Contact Them</h4>
              <p className="text-sm text-gray-600">Our expert team reaches out to guide them</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Student Enrolls</h4>
              <p className="text-sm text-gray-600">They successfully enroll in their chosen program</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2">You Get Rewarded</h4>
              <p className="text-sm text-gray-600">Receive your referral reward!</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/refer-and-earn">
            <button className="btn btn-lg px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
              <FaGift className="mr-2" />
              Start Referring Now
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            No limits on referrals - the more you refer, the more you earn!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
