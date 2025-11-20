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

          <div className="lg:pl-10 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Background Circles */}
              <div className="absolute inset-0 bg-secondary/10 rounded-full animate-pulse"></div>
              <div className="absolute w-3/4 h-3/4 bg-secondary/20 rounded-full animate-bounce delay-700"></div>
              
              {/* Main Calendar Icon */}
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl transform transition hover:scale-105 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>

              {/* Floating Clock */}
              <div className="absolute top-0 right-0 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              
              {/* Floating Check */}
              <div className="absolute bottom-0 left-0 bg-white p-3 rounded-lg shadow-lg animate-bounce delay-1000">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyBooking;
