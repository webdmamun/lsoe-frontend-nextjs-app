import React from "react";

const MissionVissionEmpHub = () => {
  return (
    <div className="hero bg-base-100 py-10 drop-shadow-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="max-w-lg w-[100%] rounded shadow-xl"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            Our Mission Vision Guarantee
          </h1>
          <p className="text-sm font-normal text-gray-600">
            "DELIVERING EXCELLENCE TO INDIVIDUALS, BUSINESSES AND COMMUNITIES."{" "}
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            <strong className="text-primary">OUR MISSION</strong>
            <br />
            Our commitment to providing the highest quality service to our
            clients, candidates, and all other stakeholders with whom we
            interact is reflected in our mission statement. We also pledge to
            implementing our corporate social responsibility program to benefit
            the larger community. It exemplifies our ongoing commitment to going
            above and beyond to deliver top-notch service.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            <strong className="text-primary">Our Guarantee</strong>
            <br />
            If any candidate deployed by The Leeds Source Of Employment (LSOE)
            Services is found to be professionally or medically unfit or refuses
            to work as stated by the company within a probationary term of 90
            days from the date of his deployment, we agree to repatriate at our
            own expense.{" "}
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            <strong className="text-primary">Our Vision</strong>
            <br />" TO PROVIDE EMPLOYERS & JOB SEEKERS IN EVERY AREA OF
            DISCIPLINE WITH WORLD-CLASS PROFESSIONAL REQUIREMENT SOLUTIONS "{" "}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default MissionVissionEmpHub;
