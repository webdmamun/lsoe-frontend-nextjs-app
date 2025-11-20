import React from "react";
import Link from "next/link";

const EmAboutDetails = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://www.londonschoolofexcellence.com/wp-content/uploads/2021/06/immigration-lawyers-600x400.jpg"
          className="max-w-lg w-[100%] rounded shadow-xl"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            Leeds Source of Employment
          </h1>
          <p className="text-sm font-normal text-gray-600">
            The Leeds Source of Employment Services is a fast-growing manpower
            recruiting agency registered with the UK Company house with our head
            office in Leeds.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            At The Leeds Source Of Employment (LSOE), we pride ourselves in our
            ability to quickly respond to the needs of our clients. Our team is
            driven by a sincere passion for what we do, which is reflected in
            the consistent choice of LSOE as a reliable recruitment partner. As
            leaders in our industry, Our team of experts works cohesively to
            create a fantastic management team that establishes us as a
            trustworthy supplier. To ensure fast and efficient communication, we
            have implemented a computerized office system and virtual data bank,
            streamlining the service delivery process. Furthermore, we handpick
            the best candidates through our competence in skills training,
            ensuring that our clients receive top-notch services. Overall, LSOE
            is dedicated to delivering superior recruitment services with
            passion, expertise, and a focus on corporate responsibility.{" "}
          </p>
          <br />
          <Link href="/contact-london-source-of-employment">
            <button className="bg-accent hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
              Contact LSOE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmAboutDetails;
