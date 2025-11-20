import React from "react";
import Link from "next/link";

const Vsection = () => {
  return (
    <div className="bg-base-200 mx-10 pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        <div className="grid content-center">
          <h2 className="text-2xl font-bold text-start text-gray-700">
            LSOE ENGLISH SCHOOL
          </h2>
          <p className="font-normal">English Proficiency Preparation</p>
          <p className="py-2 font-normal">
            LSOE English School helps you prepare for your English proficiency
            test through courses and private classes.
          </p>
          <p className="py-2 font-normal">
            Our experts teach you techniques for scoring better on IELTS, GRE
            and CELPIP.
          </p>
          <Link href="/english-school">
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary w-fit">
              more about English School
            </button>
          </Link>
        </div>
        <div>
          <iframe
            className="w-[100%] h-[355px] rounded-sm shadow-xl"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/FkwM8pO_d-4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Vsection;
