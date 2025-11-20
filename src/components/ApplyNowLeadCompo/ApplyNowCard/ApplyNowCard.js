import React from "react";
import Link from "next/link";
import applynowbtnstyle from "../ApplynowLead.module.css";

const ApplyNowCard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5 justify-center py-10">
        <div className="card w-100 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://res.cloudinary.com/lsoe/image/upload/v1698402877/images/uklocal_b0slmk.jpg"
              alt="Apply Now from Inside UK"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">For UK and EU Student (Inside UK) </h2>
            <p>Our Admission Support Team will reach you</p>
            <div className="card-actions">
              <button className="bg-secondary hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
                <Link href="/apply-now-uk-eu">Apply Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-100 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://res.cloudinary.com/lsoe/image/upload/v1698402877/images/international_azvayd.jpg"
              alt="Apply Now from Outside UK"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              For International Student (Outside UK){" "}
            </h2>
            <p>Our Admission Support Team will reach you</p>
            <div className="card-actions">
              <button className="bg-secondary hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
                <Link href="/apply-now-int">Apply Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowCard;
