import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Visit Us",
              icon: <FaMapMarkerAlt />,
              text: "5 Station Parade,\nHornchurch, Elm Park,\nLondon, RM12 5AB, UK",
              color: "text-blue-600",
            },
            {
              title: "WhatsApp",
              icon: <FaWhatsapp />,
              text: "+44 (0)1708784763",
              color: "text-green-600",
            },
            {
              title: "Phone",
              icon: <FaPhoneAlt />,
              text: "+44 (0)7574091716",
              color: "text-blue-500",
            },
            {
              title: "Email",
              icon: <FaEnvelope />,
              text: "info.office@londonschoolofexcellence.com",
              color: "text-red-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center space-y-4 group"
            >
              <div
                className={`text-4xl mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 group-hover:scale-110 transition ${item.color}`}
              >
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm whitespace-pre-line text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Image & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Office Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://res.cloudinary.com/lsoe/image/upload/v1713980714/images/zfxc3vwrwizanvobcrwz.jpg"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.2767793733197!2d0.199393341195108!3d51.548457031888425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bad07a600469%3A0x830d1c484da33c76!2s5%20Station%20Parade%2C%20Hornchurch%20RM12%205AA%2C%20UK!5e0!3m2!1sen!2sbd!4v1713981471838!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
