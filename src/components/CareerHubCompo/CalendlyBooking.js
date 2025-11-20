'use client';

import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const CalendlyBooking = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) {
    return null; // or a loading spinner
  }

  return (
    <div className="drop-shadow-md">
      <div className="hero bg-base-100 py-10">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="">
            <div className="flex flex-col w-full gap-4">
              <PopupButton
                url="https://calendly.com/lsoe-career-hub/15-min-free-consultation-session"
                rootElement={rootElement}
                text="15 Min Free Consultation Session!"
                className="btn text-white btn-secondary"
              />
              <div className="divider"></div>
              <PopupButton
                url="https://calendly.com/lsoe-career-hub/15-min-free-consultation-session"
                rootElement={rootElement}
                text="1 Hour Paid Consultation Session!"
                className="btn text-white btn-secondary"
              />
            </div>
          </div>

          <div className="lg:pl-10">
            <img
              src="https://res.cloudinary.com/lsoe/image/upload/v1678912516/Booking_r2p33g.png"
              className="max-w-lg w-[80%] rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyBooking;
