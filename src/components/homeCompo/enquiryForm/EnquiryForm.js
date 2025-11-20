'use client';

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LSOEEnquiryForm = () => {
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

    // Log form data for debugging
    const formData = new FormData(form.current);
    console.log("Form data being sent:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs
      .sendForm(
        "service_gmdixqb",
        "template_07iz6z6",
        form.current,
        "fT45pkLA3fHPOXkH5"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSuccess(true);
        form.current.reset();
        setPhone("");
        setTimeout(() => setSuccess(false), 5000);
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        console.error("Error type:", typeof err);
        console.error("Error keys:", Object.keys(err));
        console.error("Error details:", {
          text: err.text,
          status: err.status,
          message: err.message,
          name: err.name
        });
        
        let errorMessage = "Unknown error occurred";
        if (err.text) errorMessage = err.text;
        else if (err.message) errorMessage = err.message;
        else if (err.status) errorMessage = `Error status: ${err.status}`;
        
        alert("Failed to send enquiry. Please try again.\n\nError: " + errorMessage);
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-[#e9f9fd] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Form Area */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            LSOE can help you
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>
          <p className="text-gray-600 mb-6">
            Enter your details and one of our expert counsellors will reach out
            to you with course, country, university – and scholarship info!
          </p>

          <form ref={form} onSubmit={sendEmail} className="grid gap-4">
            <div className="flex gap-4">
              <input
                name="first_name"
                required
                placeholder="First name*"
                className="input input-bordered w-full"
              />
              <input
                name="last_name"
                required
                placeholder="Last name*"
                className="input input-bordered w-full"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email address*"
              className="input input-bordered w-full"
            />

            <div>
              <PhoneInput
                country={"bd"}
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

            <div className="flex gap-4">
              <select
                name="study_destination"
                required
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred Study Destination*
                </option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>USA</option>
                <option>New Zealand</option>
                <option>Ireland</option>
              </select>
              <select
                name="start_time"
                required
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  When would you like to start?*
                </option>
                <option>January 2025</option>
                <option>September 2025</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex gap-4">
              <select
                name="counselling_mode"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred mode of counselling*
                </option>
                <option>Online</option>
                <option>In-person</option>
              </select>
              <select name="funding" className="select select-bordered w-full" defaultValue="">
                <option value="" disabled>
                  How would you fund your education?*
                </option>
                <option>Self-Funded</option>
                <option>Scholarship</option>
                <option>Loan</option>
              </select>
            </div>

            <div className="flex gap-4">
              <select
                name="study_level"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred Study Level*
                </option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>Diploma</option>
              </select>
              <select name="office" className="select select-bordered w-full" defaultValue="">
                <option value="" disabled>
                  Nearest LSOE Office*
                </option>
                <option>Dhaka</option>
                <option>London</option>
                <option>Online Only</option>
              </select>
            </div>

            <div className="form-control space-y-3 mt-4">
              <label className="flex items-start gap-x-3">
                <input
                  type="checkbox"
                  required
                  className="checkbox checkbox-primary mt-1"
                />
                <span className="text-sm text-gray-700">
                  I agree to the LSOE{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    className="text-blue-600 font-semibold underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-blue-600 font-semibold underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              <label className="flex items-start gap-x-3">
                <input type="checkbox" className="checkbox mt-1" />
                <span className="text-sm text-gray-700">
                  Please contact me by phone, email or SMS to assist with my
                  enquiry
                </span>
              </label>

              <label className="flex items-start gap-x-3">
                <input type="checkbox" className="checkbox mt-1" />
                <span className="text-sm text-gray-700">
                  I would like to receive updates and offers from LSOE
                </span>
              </label>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-fit px-6 rounded-full text-white font-bold bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Enquire now"}
            </button>
            {success && (
              <p className="text-green-600 font-semibold pt-2">
                ✅ Thanks! Your message was sent successfully.
              </p>
            )}
          </form>
        </div>

        {/* Animated Icon Composition */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Main Card */}
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300 border border-gray-100">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-pink-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">Expert Support</p>
                  <p className="text-sm text-gray-500">We're here to help</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="absolute bottom-1/4 -left-4 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LSOEEnquiryForm;
