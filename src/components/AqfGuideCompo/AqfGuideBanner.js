import React from "react";
import Link from "next/link";

const AqfGuideBanner = () => {
  return (
    <div
      className="hero border-b-4 border-indigo-500"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1751885652/images/Banner_qd5fgn.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center text-neutral-content p-10 lg:py-20">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-600 sm:text-5xl sm:leading-none md:text-6xl">
          UK Agent Quality Framework (AQF) Guide
        </h2>
        {/* Banner Navigation start */}
        <div className="text-md text-gray-600 mt-3 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>UK Agent Quality Framework (AQF) Guide</li>
          </ul>
        </div>
        {/* Banner Navigation End*/}
      </div>
    </div>
  );
};

export default AqfGuideBanner;
