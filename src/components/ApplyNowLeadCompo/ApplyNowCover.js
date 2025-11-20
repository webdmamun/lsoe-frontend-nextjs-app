import React from "react";
import Link from "next/link";

const ApplyNowCover = () => {
  return (
    <div
      className="hero border-b-4 border-indigo-500"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1680897970/images/4_osi8py.jpg")`,
      }}
    >
      <div className="hero bg-opacity-60"></div>
      <div className="hero-content flex-col text-center text-neutral-content p-10 lg:py-20">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-200 sm:text-5xl sm:leading-none md:text-6xl">
          Submit an Application for Assessment
        </h2>
        {/* Banner Navigation start */}
        <div className="text-md text-white mt-3 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/university-admission">Admission HUB</Link>
            </li>
            <li>Apply Now</li>
          </ul>
        </div>
        {/* Banner Navigation End*/}
      </div>
    </div>
  );
};

export default ApplyNowCover;
