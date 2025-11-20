import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="w-full py-16 px-4 bg-slate-50 relative">
      {/* Bottom shadow divider */}
      <div className="absolute bottom-0 left-0 w-full h-2 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.1)] z-10"></div>

      <div className="max-w-3xl mx-auto text-center relative z-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Stay Updated with LSOE
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Join our newsletter for the latest updates, insights, and special
          offers. Don’t miss out on any of our exciting news!
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your Email ID"
            className="input input-bordered w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-shadow shadow-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
