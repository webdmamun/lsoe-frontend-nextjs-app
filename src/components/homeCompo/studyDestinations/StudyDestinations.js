import React from "react";

const StudyDestinations = () => {
  const destinations = [
    {
      name: "United Kingdom",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851917/images/United_Kingdom_rgqqjn.jpg", // Replace with actual
    },
    {
      name: "United States",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851918/images/United_States_c5lzwj.jpg",
    },
    {
      name: "Canada",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851917/images/Canada_jpinbr.jpg",
    },
    {
      name: "Australia",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851917/images/Australia_fjeayl.jpg",
    },
    {
      name: "New Zealand",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851916/images/New_Zealand_tr2byw.jpg",
    },
    {
      name: "Ireland",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1752851917/images/Ireland_ms5l4d.jpg",
    },
  ];
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
            Your dream study destination awaits
          </h2>
          <div className="w-10 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Start your inspiring academic journey in these vibrant and welcoming
            study destinations!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group transition hover:shadow-lg"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
