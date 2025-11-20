'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ReferEarnForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [referrerPhone, setReferrerPhone] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
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
        "template_refer", // You'll need to create this template in EmailJS
        form.current,
        "fT45pkLA3fHPOXkH5"
      )
      .then((response) => {
        console.log("Refer & Earn form sent successfully!", response);
        setSuccess(true);
        form.current.reset();
        setReferrerPhone("");
        setStudentPhone("");
        setTimeout(() => setSuccess(false), 5000);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Refer & Earn form send failed:", err);
        alert("Failed to send referral. Please try again.\n\nError: " + (err.text || err.message || "Unknown error"));
        setIsSubmitting(false);
      });
  };

  return (
    <section id="refer-earn-form" className="bg-gradient-to-br from-pink-50 via-white to-orange-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Refer & <span className="text-pink-600">Earn</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Know someone who wants to study abroad? Refer them to LSOE and earn rewards when they successfully enroll!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form ref={form} onSubmit={sendEmail} className="grid gap-6">
            
            {/* Your Information Section */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-600">
                Your Information
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your First Name *
                </label>
                <input
                  name="referrer_first_name"
                  required
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Last Name *
                </label>
                <input
                  name="referrer_last_name"
                  required
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <input
                  name="referrer_email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Phone Number *
                </label>
                <PhoneInput
                  country={"gb"}
                  value={referrerPhone}
                  onChange={setReferrerPhone}
                  inputProps={{
                    name: "referrer_phone",
                    required: true,
                  }}
                  inputClass="!w-full !h-[3rem] !pl-[50px] !border !border-gray-300 !rounded-md"
                  buttonClass="!border !border-gray-300 !rounded-l-md"
                  containerClass="!w-full"
                />
              </div>
            </div>

            {/* Student Information Section */}
            <div className="mt-6 mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-600">
                Student You're Referring
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student's First Name *
                </label>
                <input
                  name="student_first_name"
                  required
                  placeholder="Student's first name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student's Last Name *
                </label>
                <input
                  name="student_last_name"
                  required
                  placeholder="Student's last name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student's Email Address *
                </label>
                <input
                  name="student_email"
                  type="email"
                  required
                  placeholder="student.email@example.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student's Phone Number *
                </label>
                <PhoneInput
                  country={"gb"}
                  value={studentPhone}
                  onChange={setStudentPhone}
                  inputProps={{
                    name: "student_phone",
                    required: true,
                  }}
                  inputClass="!w-full !h-[3rem] !pl-[50px] !border !border-gray-300 !rounded-md"
                  buttonClass="!border !border-gray-300 !rounded-l-md"
                  containerClass="!w-full"
                />
              </div>
            </div>

            {/* Student Preferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Study Destination *
                </label>
                <select
                  name="study_destination"
                  required
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option value="" disabled>Select destination</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>USA</option>
                  <option>New Zealand</option>
                  <option>Ireland</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Study Level *
                </label>
                <select
                  name="study_level"
                  required
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option value="" disabled>Select study level</option>
                  <option>Foundation</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>PhD</option>
                  <option>English Language Course</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Relationship */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Relationship to the Student
              </label>
              <select
                name="relationship"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>Select relationship</option>
                <option>Friend</option>
                <option>Family Member</option>
                <option>Colleague</option>
                <option>Teacher/Counselor</option>
                <option>Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                name="additional_info"
                rows="3"
                placeholder="Any additional information about the student or their study preferences..."
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
                I confirm that I have the student's permission to share their contact information with LSOE. *
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full md:w-auto px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 disabled:bg-gray-400 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Referral"}
            </button>

            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-semibold flex items-center gap-2">
                  ✅ Thank you for your referral! We'll contact the student soon and keep you updated on your reward.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* How It Works Section */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h4 className="font-semibold mb-2">Refer a Friend</h4>
              <p className="text-sm text-gray-600">Fill out the referral form with student details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h4 className="font-semibold mb-2">We Contact Them</h4>
              <p className="text-sm text-gray-600">Our team reaches out to the student</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h4 className="font-semibold mb-2">Student Enrolls</h4>
              <p className="text-sm text-gray-600">Student successfully enrolls in a program</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-pink-600">4</span>
              </div>
              <h4 className="font-semibold mb-2">You Get Rewarded</h4>
              <p className="text-sm text-gray-600">Receive your referral reward!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarnForm;
