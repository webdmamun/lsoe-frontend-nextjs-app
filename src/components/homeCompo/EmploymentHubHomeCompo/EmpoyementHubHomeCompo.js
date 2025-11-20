import React from "react";
import Link from "next/link";

const EmploymentHubHomeCompo = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1677675445/images/employment_d7nyyb.png"
          className="max-w-lg w-[100%] rounded"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            London Source of Employment
          </h1>
          <p className="text-sm font-normal text-gray-600">
            The London Source of Employment Services is a fast-growing manpower
            recruiting agency registered with the UK Company house with our head
            office in London.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            Our ability to respond quickly to clients' requests, together with
            our sincere enthusiasm and love for what we do, ensures that our
            clients keep choosing The London Source Of Employment (LSOE) as
            their reliable recruitment partner. In addition to our passion for
            recruitment, we are leaders in our industry and have received
            recognition for our corporate social responsibility approach.
          </p>

          <br />
          <Link href="/employment">
            <button className="btn btn-accent text-white font-bold bg-gradient-to-r from-accent to-primary border-0">
              Explore LSOE Empoyement Hub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmploymentHubHomeCompo;
