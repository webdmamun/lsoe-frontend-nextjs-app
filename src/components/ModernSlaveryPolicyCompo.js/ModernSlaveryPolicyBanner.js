import React from "react";
import Link from "next/link";

const ModernSlaveryPolicyBanner = () => {
  return (
    <div
      className="hero border-b-4 border-indigo-500 relative overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="hero-content flex-col text-center text-neutral-content p-10 lg:py-20">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-600 sm:text-5xl sm:leading-none md:text-6xl">
          Modern Slavery Policy
        </h2>
        {/* Banner Navigation start */}
        <div className="text-md text-gray-600 mt-3 breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Admission HUB</Link>
            </li>

            <li>Modern Slavery Policy</li>
          </ul>
        </div>
        {/* Banner Navigation End*/}
      </div>
    </div>
  );
};

export default ModernSlaveryPolicyBanner;
