import React from "react";
import Link from "next/link";

const EmploymentABT = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.londonschoolofexcellence.com/wp-content/uploads/2020/12/admission-review.jpg"
          alt=""
          className="max-w-lg w-[100%] rounded shadow-2xl"
        />
        <div className="lg:pr-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            ASSESSMENTS
          </h1>
          <p className="text-sm font-normal text-gray-600">
            Applying for universities can be difficult an tricky. Missing one
            little piece of document or information can cost you months or even
            the chance all together.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            Our specialists at London School Of Excellence make sure that this
            never happens to you. We review you application thoroughly and keep
            close contact with your university of choice to ensure a valid
            application submission.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600 pb-10">
            LSOE’s team of Visa experts give you advice on getting your visa,
            accommodation and a smooth transfer you destination country.
          </p>
          <Link href="/apply-now-for-assessment">
            <button className="bg-secondary hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
              Apply For Assessment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmploymentABT;
