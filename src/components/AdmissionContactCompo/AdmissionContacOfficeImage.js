import React from "react";
import EmploymentContactGMap from "../EmploymentContactCompo/EmploymentContactGMap";

const AdmissionContacOfficeImage = () => {
  return (
    <div className="bg-base-200 text-gray-100 px-8 py-12">
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <img
            src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/office%20image.jpg"
            className="max-w-lg w-[100%] rounded shadow-xl"
            alt=""
          />
        </div>
        <div>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.2767793733197!2d0.199393341195108!3d51.548457031888425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bad07a600469%3A0x830d1c484da33c76!2s5%20Station%20Parade%2C%20Hornchurch%20RM12%205AA%2C%20UK!5e0!3m2!1sen!2sbd!4v1713981471838!5m2!1sen!2sbd"
            width="500"
            height="295"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AdmissionContacOfficeImage;
