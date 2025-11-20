"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactSVG } from "react-svg";
import applynowbtnstyle from "../../ApplyNowLeadCompo/ApplynowLead.module.css";

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
          className="font-medium justify-between"
          href="/about-us"
          style={pathname === "/about-us" ? activeStyle : undefined}
        >
          About US
        </Link>
      </li>

      <div className="divider lg:divider-horizontal"></div>
      <li>
        <Link
          className="font-medium justify-between"
          href="/contact-us"
          style={pathname === "/contact-us" ? activeStyle : undefined}
        >
          Contact US
        </Link>
      </li>
      <div className="divider lg:divider-horizontal"></div>
      {/* <li>
        <Link
          className="font-medium justify-between"
          href="/university-admission"
          style={pathname === "/university-admission" ? activeStyle : undefined}
        >
          Admission HUB
        </Link>
      </li> */}
      {/* <div className="divider lg:divider-horizontal"></div>
      <li>
        <Link className="font-medium justify-between  " href="/employment">
          Employment HUB
        </Link>
      </li> */}

      <div className="divider lg:divider-horizontal"></div>
      <li>
        <Link
          className="font-medium justify-between"
          href="/career-hub"
          style={pathname === "/career-hub" ? activeStyle : undefined}
        >
          Career HUB
        </Link>
      </li>

      <div className="divider lg:divider-horizontal"></div>
      <li>
        <Link
          className="font-medium justify-between"
          href="/partner-with-us"
          style={pathname === "/partner-with-us" ? activeStyle : undefined}
        >
          Partner With Us
        </Link>
      </li>

      <div className="divider lg:divider-horizontal"></div>

      <li>
        <Link className={applynowbtnstyle.applynowleadbtn} href="/apply-now">
          Apply Now
        </Link>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar bg-base-100 drop-shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link href="/" className="w-[16rem] lg:ml-12">
            <ReactSVG src="https://res.cloudinary.com/lsoe/image/upload/v1751887108/images/LSOE_Logo_White_SVG_sc2qmw.svg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/book-appointment" className="btn btn-secondary">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdmissionNav;
