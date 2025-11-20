import React from "react";
import Link from "next/link";

const Electrical = () => {
  return (
    <div className="hero bg-base-100 py-10 w-[40rem] mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl px-20 rounded-xl">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1675791019/images/Electrical_oh1m2s.png"
          alt=""
          className="max-w-md w-[100%] rounded shadow-1xl"
        />
        <div className="lg:pr-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            Electrical
          </h1>
          <ul className="py-10">
            <li className="list-disc list-inside">
              General Electrician (House Wiring)
            </li>
            <li className="list-disc list-inside">
              Electrical Line Maintenance (Industrial)
            </li>
            <li className="list-disc list-inside">AC& Refrigeration</li>
            <li className="list-disc list-inside">Motor Welding</li>
          </ul>
          <Link href="/find-a-job">
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Submit Your Application
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Electrical;
