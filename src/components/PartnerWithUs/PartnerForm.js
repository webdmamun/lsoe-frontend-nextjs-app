'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PartnerForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("fT45pkLA3fHPOXkH5");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_gmdixqb",
        "template_rzh0o1p",
        form.current,
        "fT45pkLA3fHPOXkH5"
      )
      .then((response) => {
        console.log("Partner form sent successfully!", response);
        setSuccess(true);
        form.current.reset();
        setPhone("");
        setTimeout(() => setSuccess(false), 5000);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Partner form send failed:", err);
        alert("Failed to send partnership request. Please try again.\n\nError: " + (err.text || err.message || "Unknown error"));
        setIsSubmitting(false);
      });
  };

  return (
    <section id="partner-form" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Become a <span className="text-blue-600">Partner</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our network and earn incentives by referring students. Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form ref={form} onSubmit={sendEmail} className="grid gap-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  name="first_name"
                  required
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  name="last_name"
                  required
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  country={"gb"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputClass="!w-full !h-[3rem] !pl-[50px] !border !border-gray-300 !rounded-md"
                  buttonClass="!border !border-gray-300 !rounded-l-md"
                  containerClass="!w-full"
                />
              </div>
            </div>

            {/* Organization Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization/Company Name
                </label>
                <input
                  name="organization"
                  placeholder="Your organization name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  required
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option value="" disabled>Select your country</option>
                  <option>United Kingdom</option>
                  <option>Nigeria</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>Sri Lanka</option>
                  <option>Philippines</option>
                  <option>China</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Partnership Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Partnership Type *
              </label>
              <select
                name="partnership_type"
                required
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>Select partnership type</option>
                <option>Referral Partner (Individual)</option>
                <option>Sub-Agent</option>
                <option>Educational Institution</option>
                <option>Corporate Partnership</option>
                <option>Other</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience in Education/Recruitment
              </label>
              <select
                name="experience"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>Select your experience level</option>
                <option>No experience</option>
                <option>Less than 1 year</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>

            {/* Expected Students */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Number of Student Referrals per Year
              </label>
              <select
                name="expected_students"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>Select expected referrals</option>
                <option>1-5 students</option>
                <option>6-10 students</option>
                <option>11-25 students</option>
                <option>26-50 students</option>
                <option>50+ students</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information / Questions
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us more about yourself and why you want to partner with LSOE..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                required 
                className="checkbox checkbox-primary mt-1" 
              />
              <span className="text-sm text-gray-700">
                I agree to the terms and conditions and understand that LSOE will contact me regarding partnership opportunities. *
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full md:w-auto px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-400 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
            </button>

            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-semibold flex items-center gap-2">
                  ✅ Thank you! Your partnership request has been submitted successfully. We'll contact you within 24 hours.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">Earn Incentives</h3>
            <p className="text-gray-600 text-sm">Competitive commission for every successful student referral</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-lg mb-2">Full Support</h3>
            <p className="text-gray-600 text-sm">Dedicated partner support team to help you succeed</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="font-bold text-lg mb-2">Grow Together</h3>
            <p className="text-gray-600 text-sm">Access to marketing materials and training resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
