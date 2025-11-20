import React from "react";
import Link from "next/link";

const AssessmentWUA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white via-sky-50 to-rose-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-slate-800 uppercase mb-2">
            Assessments
          </h2>
          <div className="w-10 h-1 bg-pink-600 mb-4 rounded"></div>

          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Applying for universities can be difficult and tricky. Missing one
            little piece of document or information can cost you months — or the
            chance altogether.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
            Our specialists at the <strong>London School Of Excellence</strong>{" "}
            ensure that this never happens to you. We review your application
            thoroughly and maintain close contact with your university of choice
            to ensure a valid application submission.
          </p>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            LSOE’s team of visa experts will advise you on getting your visa,
            finding accommodation, and making a smooth transition to your
            destination country.
          </p>

          <Link href="/apply-now-for-assessment">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition uppercase">
              Apply For Assessment
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1678983907/Artboard_1_xvdcoc.png"
            alt="Assessment"
            className="max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AssessmentWUA;
