import React from "react";
import Link from "next/link";

const AdmissionHubHomeCompo = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1677662781/images/Admission_muu3fo.png"
          alt=""
          className="max-w-lg w-[100%] rounded"
        />
        <div className="lg:pr-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            London School of Excellence
          </h1>
          <p className="text-sm font-normal text-gray-600">
            London School of Excellence is a prominent career guide recruitment
            agency in the UK that has been operating since 2013. Their goal is
            to develop a highly competent community, and they have achieved this
            through collaborations with various educational and cultural
            institutions.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            At London School of Excellence, we provide students and
            professionals with the best resources for exploring their study
            options both within the UK and internationally. Our team ensures
            that the information provided on our website is comprehensive and
            up-to-date, including details on application processes, visa
            requirements, accommodation options, and associated costs.
          </p>
          <br />
          <Link href="/university-admission">
            <button className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-pink-700 border-0">
              Explore LSOE Admission Hub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHubHomeCompo;
