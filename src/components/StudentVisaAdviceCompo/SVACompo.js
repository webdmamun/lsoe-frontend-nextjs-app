import React from "react";
import Link from "next/link";

const SVACompo = () => {
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://www.londonschoolofexcellence.com/wp-content/uploads/2021/06/immigration-lawyers-600x400.jpg"
          className="max-w-lg w-[100%] rounded shadow-xl"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            STUDENT VISA ADVICE
          </h1>
          <p className="text-sm font-normal text-gray-600">
            Getting a visa at the right time is as important as getting your
            admission. The LSOE visa advice team is working with several
            Immigration Lawyers (visa experts). The LSOE arranges an appointment
            with a lawyer upon request for visa application or other immigration
            matters.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            You can use our WhatsApp contact at the bottom of this page to get
            advice on your student visa.
          </p>
          <br />
          <Link href="/contact-us">
            <button className="bg-secondary hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
              Contact LSOE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SVACompo;
