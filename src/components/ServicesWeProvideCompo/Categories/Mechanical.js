import React from "react";
import Link from "next/link";

const Mechanical = () => {
  return (
    <div className="bg-base-100 py-10 w-[40rem] mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl px-20 rounded-xl">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1675791949/images/Mechanical_gep1jp.png"
          alt=""
          className="max-w-md w-[100%] rounded shadow-1xl"
        />
        <div className="lg:pr-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            Mechanical
          </h1>
          <ul className="py-10">
            <li className="list-disc list-inside">
              Automobile (Diesel & Petrol)
            </li>
            <li className="list-disc list-inside">Auto Electrician</li>
            <li className="list-disc list-inside">Medical Officer</li>
            <li className="list-disc list-inside">Machinist (Turner)</li>
            <li className="list-disc list-inside">Industrial Pipe Fitting</li>
            <li className="list-disc list-inside">Steel Fabrication</li>
            <li className="list-disc list-inside">Scaffolders</li>
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

export default Mechanical;
