import React from "react";
import Administration from "./Categories/Administration";
import CleaningHousekeeping from "./Categories/CleaningHousekeeping";
import HealthCare from "./Categories/HealthCare";
import HotelHospitality from "./Categories/HotelHospitality";
import Security from "./Categories/Security";

const ServiceWeProvideDetails = () => {
  return (
    <div className="container bg-base-100">
      <h2 className="capitalize text-center font-bold text-slate-700 pt-10 text-3xl">
        Categories of Empolyment Field We Cover
      </h2>
      <Administration />
      <HealthCare />
      <HotelHospitality />
      <Security />
      <CleaningHousekeeping />
    </div>
  );
};

export default ServiceWeProvideDetails;
