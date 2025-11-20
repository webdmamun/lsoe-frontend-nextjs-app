import React from "react";

const AboutLSOEHomeCompo = () => {
  return (
    <div className="hero bg-base-100 drop-shadow py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1677682187/images/about_kzut4s.png"
          className="max-w-lg w-[100%] rounded"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold uppercase text-slate-700 text-start pb-1">
            About LSOE
          </h1>
          <p className="text-sm font-normal text-gray-600">
            LSOE, an independent career hub located in Hornchurch, Romford, is a
            combination of two organizations, London School of Excellence and
            London Source of Employment. Established in 2013, LSOE aims to
            create skilled human resources and has grown to become a prominent
            career guide recruitment agency in the UK. The organization works
            with various educational and cultural institutions and has a slogan
            of "Learn, Teach and Lead."
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            The main goal of LSOE is to play a role in creating employment
            opportunities by educating human resources through formal education.
            The organization recruits students from reputed universities in the
            UK and staff from various sectors, both in the UK and
            internationally. LSOE serves as a bridge between local and foreign
            students for university admissions and employment, and conducts
            self-supervised short-term courses for job seekers to build their
            skills and prepare them for the competitive job market.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            LSOE recognizes that many local applicants are not aware of how to
            access higher education without formal education or how to access
            financial benefits offered by the British government. The
            organization is also committed to assisting international job
            seekers who may face material challenges and drop out despite having
            qualifications. To address these issues, LSOE has created a virtual
            school platform to help applicants improve their English language
            skills and communicate effectively in the workplace. The dedicated
            team members at LSOE are working tirelessly to play a greater role
            in building skilled manpower.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLSOEHomeCompo;
