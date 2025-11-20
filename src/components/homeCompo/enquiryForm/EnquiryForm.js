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

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1752850816/images/faqsection_pe3x9f.png"
            alt="student"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default LSOEEnquiryForm;
