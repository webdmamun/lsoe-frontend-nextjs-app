"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactSVG } from "react-svg";
import applynowbtnstyle from "../styles/ApplyNowButton.module.css";

const AdmissionNav = () => {
  const pathname = usePathname();

  let activeStyle = {
    backgroundColor: "#E91E63",
    fontWeight: "bold",
    color: "#fff",
  };

  const menuItems = (
    <>
      <li>
        <Link
          className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 ${
            pathname === "/about-us" 
              ? "bg-pink-500 text-white font-bold hover:bg-pink-600" 
              : "text-gray-700 hover:text-pink-600"
          }`}
          href="/about-us"
        >
          About Us
        </Link>
      </li>

      <li>
        <Link
          className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 ${
            pathname === "/contact-us" 
              ? "bg-pink-500 text-white font-bold hover:bg-pink-600" 
              : "text-gray-700 hover:text-pink-600"
          }`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </li>

      <li>
        <Link
          className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 ${
            pathname === "/career-hub" 
              ? "bg-pink-500 text-white font-bold hover:bg-pink-600" 
              : "text-gray-700 hover:text-pink-600"
          }`}
          href="/career-hub"
        >
          Career Hub
        </Link>
      </li>

      <li>
        <Link
          className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-pink-50 ${
            pathname === "/partner-with-us" 
              ? "bg-pink-500 text-white font-bold hover:bg-pink-600" 
              : "text-gray-700 hover:text-pink-600"
          }`}
          href="/partner-with-us"
        >
          Partner With Us
        </Link>
      </li>

      <li>
        <Link 
          className="btn btn-sm bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold px-6"
          href="/refer-and-earn"
        >
          Refer & Earn
        </Link>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="navbar bg-white px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white rounded-lg w-64 border border-gray-100"
            >
              {menuItems}
            </ul>
          </div>
          <Link href="/" className="flex items-center">
            <ReactSVG 
              src="https://res.cloudinary.com/lsoe/image/upload/v1751887108/images/LSOE_Logo_White_SVG_sc2qmw.svg" 
              className="w-40 lg:w-48"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link 
            href="/book-appointment" 
            className="btn btn-sm lg:btn-md bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-none shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdmissionNav;
