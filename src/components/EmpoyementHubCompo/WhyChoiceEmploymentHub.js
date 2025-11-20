import React from "react";
import Link from "next/link";

const WhyChoiceEmploymentHub = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/lsoe/image/upload/v1678714638/images/about_fcl4s3.png"
          className="max-w-lg w-[100%]"
          alt=""
        />
        <div className="lg:pl-10">
          <h1 className="text-2xl font-bold text-slate-700 text-start pb-1">
            Discover the Benefits of Choosing Leeds Source of Employment (LSOE)
            for Your Career
          </h1>
          <p className="text-sm font-normal text-gray-600">
            Leeds Source of Employment (LSOE) recognizes the significance of
            securing dependable and skilled personnel for your business. Our
            team of recruitment specialists possesses extensive experience in
            human resources and collaborates closely with clients to comprehend
            their distinct recruitment requirements. Using state-of-the-art
            technologies and methods, we source, evaluate, and present the best
            candidates for your job vacancies.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            Having demonstrated our recruitment services' efficacy to the
            Education industry since 2013, we are now extending our services to
            encompass the healthcare, security, and hospitality sectors. We take
            pride in delivering smooth and proficient recruitment experiences
            that cater to our clients' needs.
          </p>
          <br />
          <p className="text-sm font-normal text-gray-600">
            If you are a business seeking to recruit healthcare aides, security
            officers, or hospitality management personnel, LSOE is the ideal
            choice. We specialize in human resources for various industries,
            such as retail, healthcare, hospitality, and more. Our team of
            recruitment specialists works closely ...{" "}
            <label htmlFor="my-modal-6" className="link link-secondary">
              Read More
            </label>
          </p>
          {/* Modal Box Start  */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 h-2/3	 max-w-5xl">
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <h3 className="text-center font-bold text-lg">
                Discover the Benefits of Choosing Leeds Source of Employment
                (LSOE) for Your Career
              </h3>
              <p className="py-4">
                Leeds Source of Employment (LSOE) recognizes the significance of
                securing dependable and skilled personnel for your business. Our
                team of recruitment specialists possesses extensive experience
                in human resources and collaborates closely with clients to
                comprehend their distinct recruitment requirements. Using
                state-of-the-art technologies and methods, we source, evaluate,
                and present the best candidates for your job vacancies.
              </p>
              <p className="py-4">
                Having demonstrated our recruitment services' efficacy to the
                Education industry since 2013, we are now extending our services
                to encompass the healthcare, security, and hospitality sectors.
                We take pride in delivering smooth and proficient recruitment
                experiences that cater to our clients' needs.
              </p>
              <p className="py-4">
                If you are a business seeking to recruit healthcare aides,
                security officers, or hospitality management personnel, LSOE is
                the ideal choice. We specialize in human resources for various
                industries, such as retail, healthcare, hospitality, and more.
                Our team of recruitment specialists works closely with clients
                to comprehend their specific needs and identify the best
                candidates for the job.
              </p>
              <p className="py-4">
                For job seekers looking for quick employment opportunities or
                aiming to enhance their skills through short professional
                courses, LSOE Services is the ultimate solution. We offer a wide
                range of training and development programs designed to equip
                individuals with the practical skills needed to succeed in
                today’s highly competitive job market.
              </p>
              <p className="py-4">
                At LSOE Services, we acknowledge the importance of having
                dependable and skilled personnel. For this reason, we use the
                latest recruitment technologies, including the Bright HR system,
                to ensure that our staff arrives at their job punctually and at
                the appropriate location. This enables businesses to concentrate
                on their core activities while we handle the recruitment
                process.
              </p>
              <p className="py-4">
                We comply with all pertinent insurance and accreditation
                requirements, ensuring that our clients receive top-notch
                service. Contact us now to learn more about our recruitment and
                training services and allow us to assist you in finding the
                ideal staffing solution for your business. For additional
                information, please visit our LinkedIn profile or website.
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
          {/* Modal Box End  */}

          <br />
          <Link href="/about-employment-hub">
            <button className="bg-accent hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-info-700 rounded">
              About LSOE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceEmploymentHub;
