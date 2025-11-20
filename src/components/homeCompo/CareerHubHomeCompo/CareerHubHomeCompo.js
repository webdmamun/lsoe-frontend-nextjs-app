import React from "react";
import Link from "next/link";

const CareerHubHomeCompo = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1677679648/images/carrer-hub_mphefy.png"
          alt=""
          className="max-w-lg w-[100%] rounded"
        />
        <div className="lg:pr-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            LSOE Career Hub
          </h1>
          <p className="text-sm font-normal text-gray-600 py-5">
            Book an appointment with a career advisor to discuss University
            admission and Employment. They can provide guidance on selecting the
            right university and major, help you with the application process,
            and give you tips on how to increase your chances of getting
            accepted. They can also help you with employment opportunities,
            resume building, and job search strategies. Contact them today to
            schedule a meeting and get the support you need to achieve your
            career goals. Don't miss the chance of getting expert advice and
            make the most of your future.
          </p>

          <Link href="/career-hub">
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 border-0">
              Book an Appointment with a Career Advisor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerHubHomeCompo;
