import React from "react";
import { ReactSVG } from "react-svg";

const EmpoyementHubBanner = () => {
  return (
    <div
      className="hero h-[70vh] drop-shadow-sm bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/lsoe/image/upload/v1682515110/images/PrototypeBG_uvnuk6.png")`,
      }}
    >
      <div className="hero-content justify-around content-around flex-col lg:flex-row-reverse container">
        <div className="w-[10rem] sm:w-[20rem] md:w-[25rem]">
          <ReactSVG src="https://res.cloudinary.com/lsoe/image/upload/v1684180611/head_mam63h.svg" />
        </div>
        <div className="w-[20rem] sm:w-[30rem] md:w-[35rem]">
          <ReactSVG src="https://res.cloudinary.com/lsoe/image/upload/v1683746204/images/Emp_text_h525ht.svg" />
        </div>
      </div>
    </div>
  );
};

export default EmpoyementHubBanner;
