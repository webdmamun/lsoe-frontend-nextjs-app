'use client';

import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const AdmissionFooter = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center sm:items-start mb-6 lg:mb-0">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/lsoe/image/upload/v1752864939/images/LSOE_Logo_White_elpuxp.png"
                alt="LSOE Logo"
                className="w-60 mb-6"
              />
            </Link>
            <p className="text-gray-300 text-sm text-center sm:text-left">
              London School of Excellence is your trusted partner in studying
              abroad. We guide students through the process with expert advice
              and support.
            </p>
          </div>

          {/* Certified By */}
          <div className="flex flex-col items-center sm:items-start mb-6 lg:mb-0">
            <span className="text-lg font-semibold mb-2">Certified by:</span>
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/lsoe/image/upload/v1752864693/images/276-2764420_home-british-council-logo-white_h2nsh9.png"
                alt="British Council Logo"
                className="w-40"
              />
            </div>
            {/* <div className="mb-4">
              <img
                src="https://res.cloudinary.com/lsoe/image/upload/v1753101768/cpd-certified_pazrbe.svg"
                alt="CPD Certified Logo"
                className="w-40"
              />
            </div> */}
            <p className="text-sm text-gray-400 text-center sm:text-left">
              Our certifications ensure we provide high-quality services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start mb-6 lg:mb-0">
            <span className="text-lg font-semibold mb-4">Quick Links</span>
            <Link
              href="/about-us"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/modern-slavery-policy"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              Modern Slavery Policy
            </Link>
            <Link
              href="/aqf-guide"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              AQF Guideline
            </Link>
            <Link
              href="/partner-with-us"
              className="text-gray-300 mb-2 hover:text-blue-400"
            >
              Partner With Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-lg font-semibold mb-4">
              Contact Information
            </span>
            <div className="text-gray-300 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> 5 Station Parade,
              Hornchurch, Elm Park, London, RM12 5AB, UK
            </div>
            <div className="text-gray-300 mb-2">
              <i className="fas fa-phone-volume mr-2"></i>{" "}
              <a href="tel:+447901024151" className="hover:text-blue-400">
                +44 (0)1708784763
              </a>
            </div>
            <div className="text-gray-300 mb-2">
              <i className="fas fa-fax mr-2"></i>{" "}
              <a href="tel:+44(0)1708397393" className="hover:text-blue-400">
                +44 (0)7574091716
              </a>
            </div>
            <div className="text-gray-300 mb-2">
              <i className="fas fa-phone mr-2"></i>{" "}
              <a href="tel:+2347049748665" className="hover:text-blue-400">
                +234 704 974 8665 (International)
              </a>
            </div>
            <div className="text-gray-300 mb-2">
              <i className="fas fa-envelope mr-2"></i>{" "}
              <a
                href="mailto:info.office@londonschoolofexcellence.com"
                className="hover:text-blue-400"
              >
                info.office@londonschoolofexcellence.com
              </a>
            </div>
            <span className="footer-title text-gray-400 mt-4">
              Company Registration 08487750
            </span>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © 2025 London School of Excellence. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/Londonschoolofexcellence/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-xl hover:text-blue-500"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/london-school-of-excellence/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in text-xl hover:text-blue-700"></i>
            </a>
            <a
              href="https://twitter.com/LsoeLtd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
            </a>
            <a
              href="https://www.youtube.com/@lsoeteam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-xl hover:text-red-500"></i>
            </a>
            <a
              href="https://www.tiktok.com/@lsoe_team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok text-xl hover:text-black"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AdmissionFooter;
