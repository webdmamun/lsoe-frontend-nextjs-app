import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const UKVIBankBlogLinksSFI = () => {
  return (
    <div className="my-10 mx-10">
      <Link
        href="/ukba-approved-banks-financial-institutions-in-bangladesh"
        className="link link-hover text-secondary hover:text-[#1F2937]"
      >
        UKBA Approved Banks & Financial Institutions in Bangladesh{" "}
        <FaExternalLinkAlt className="inline-block" />
      </Link>{" "}
      <br />
      <Link
        href="/guide-to-ukba-approved-banks-and-financial-institutions-in-nigeria"
        className="link link-hover text-secondary hover:text-[#1F2937]"
      >
        A Guide to UKBA-Approved Banks and Financial Institutions in Nigeria{" "}
        <FaExternalLinkAlt className="inline-block" />
      </Link>
      <br />
      <Link
        href="/ukba-approved-banks-financial-institutions-in-sri-lanka-a-complete-guide"
        className="link link-hover text-secondary hover:text-[#1F2937]"
      >
        UKBA Approved Banks & Financial Institutions in Sri Lanka: A Complete{" "}
        Guide <FaExternalLinkAlt className="inline-block" />
      </Link>
    </div>
  );
};

export default UKVIBankBlogLinksSFI;
