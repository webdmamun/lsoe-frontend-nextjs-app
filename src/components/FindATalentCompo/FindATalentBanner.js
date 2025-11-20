import React from "react";
import Link from "next/link";

const FindATalentBanner = () => {
  return (
    <div
      className="hero border-b-4 border-indigo-500"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1674581667/images/contact-lsoe_bovn4q.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center text-neutral-content p-10 lg:py-20">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-200 sm:text-5xl sm:leading-none md:text-6xl">
          Hire A Talent
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
            <li>Hire A Talent</li>
          </ul>
        </div>
        {/* Banner Navigation End*/}
      </div>
    </div>
  );
};

export default FindATalentBanner;
