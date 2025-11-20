import React from "react";

const BookAppointmentHero = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      >
        <source
          src="https://res.cloudinary.com/lsoe/video/upload/v1754318581/videos/free_consultaton_eiayw3.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/70 to-white/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-md animate-fade-in">
          Your Career Starts with a Conversation
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl animate-fade-in delay-200">
          Book a 1-to-1 appointment with UK career experts — get help with CVs,
          sponsorship advice, and interview preparation.
        </p>

        <p className="mt-4 text-base text-gray-500 animate-fade-in delay-300">
          All sessions are delivered online via Zoom or Google Meet.
        </p>
      </div>
    </section>
  );
};

export default BookAppointmentHero;
