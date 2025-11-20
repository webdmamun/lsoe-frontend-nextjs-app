import React from "react";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                LSOE Pvt. Ltd.
              </h2>
              <h3 className="text-xl md:text-3xl mt-10">
                The page is under maintenance
              </h3>
              <p className="text-md md:text-xl mt-10">
                LSOE helps you submit your application with no errors and
                highest chance of acceptance for higher study.
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <Link href="/">
                  <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
                    back to homepage
                  </button>
                </Link>
              </div>

              <div className="m-3">
                <a
                  href="https://www.facebook.com/Londonschoolofexcellence"
                  title="LSOE On Facebook"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Facebook</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://www.linkedin.com/company/london-school-of-excellence/"
                  title="LSOE On LinkedIn"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
