import React from "react";
import Link from "next/link";

const EmploymentAboutBanner = () => {
  return (
    <div
      className="hero border-b-4 border-indigo-500"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center text-neutral-content p-10 lg:py-20">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-200 sm:text-5xl sm:leading-none md:text-6xl">
          About Leeds Source of Employment
        </h2>
        {/* Banner Navigation start */}
        <div className="text-md text-white mt-3 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/employment">Employment HUB</Link>
            </li>
            <li>About Leeds Source of Employment</li>
          </ul>
        </div>
        {/* Banner Navigation End*/}
      </div>
    </div>
  );
};

export default EmploymentAboutBanner;
