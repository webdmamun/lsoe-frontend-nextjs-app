import React from "react";
import Link from "next/link";

const TrendingJobsCompo = () => {
  return (
    <div className="bg-base-100 py-16 container mx-auto">
      <p className="text-center text-accent uppercase font-bold py-5 text-2xl">
        Explore LSOE Employment HUB
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 place-items-center">
        <div></div>
        <div></div>
        <div>
          <Link href="/find-a-job">
            <button className="btn btn-accent m-3 px-5">Find A Job</button>
          </Link>
        </div>
        <div>
          <Link href="/find-a-talent">
            <button className="btn btn-accent m-3 px-5">Find A Talent</button>
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 place-items-center">
        <div></div>
        <div>
          <Link href="/about-employment-hub">
            <button className="btn btn-outline btn-accent m-3 px-5">
              About Leeds Source of Employment
            </button>
          </Link>
        </div>
        <div>
          <Link href="/services-we-provide">
            <button className="btn btn-outline btn-accent m-3 px-5">
              Empolyment Field We Cover
            </button>
          </Link>
        </div>
        <div>
          <Link href="/recruitment-process">
            <button className="btn btn-outline btn-accent m-3 px-5">
              Recruitment Process
            </button>
          </Link>
        </div>
        <div>
          <Link href="/contact-london-source-of-employment">
            <button className="btn btn-outline btn-accent m-3 px-5">
              Contact Leeds Source of Employment
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TrendingJobsCompo;
