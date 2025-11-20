'use client';

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const UACBanner = () => {
  return (
    <div className="hero py-10 h-[70vh] drop-shadow-sm bg-[#E91E63] bg-cover bg-center bg-no-repeat">
      <div className="hero-content justify-around content-around flex-col lg:flex-row-reverse container">
        <div className="w-[10rem] sm:w-[20rem] md:w-[22rem]">
          <ReactSVG src="https://res.cloudinary.com/lsoe/image/upload/v1681439942/HeadPhone_varzyk.svg" />
        </div>
        <div className="w-[20rem] sm:w-[30rem] md:w-[35rem]">
          <ReactSVG src="https://res.cloudinary.com/lsoe/image/upload/v1683737438/images/Our_aim_is_rrh8mk.svg" />
          <button className="btn btn-md lg:btn-lg mt-5 center">
            <Link href="/apply-now">Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UACBanner;
