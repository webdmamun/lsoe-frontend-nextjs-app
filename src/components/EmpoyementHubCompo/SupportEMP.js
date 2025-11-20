import React from "react";
import Link from "next/link";

const SupportEMP = () => {
  return (
    <>
      <div className="hero bg-slate-100 drop-shadow-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://res.cloudinary.com/lsoe/image/upload/v1678714321/images/support_dvqtjy.png"
            alt=""
            className="max-w-lg w-[100%]"
          />
          <div className="lg:pr-10">
            <h1 className="text-2xl font-bold uppercase text-accent text-start pb-1">
              LSOE Career hub
            </h1>
            <p className="text-sm font-normal text-gray-600">
              Book an appointment with a career advisor to discuss job
              opportunities, resume building, and career development. They can
              provide guidance and support to help you achieve your career
              goals. Contact them today to schedule a meeting.{" "}
            </p>
            <br />
            <Link href="/career-hub">
              <button className="bg-accent hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportEMP;
