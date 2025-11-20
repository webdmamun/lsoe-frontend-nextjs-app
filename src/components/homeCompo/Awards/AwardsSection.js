import React from "react";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Excellence in Education Award",
      year: "2024",
      organization: "UK Education Council",
      icon: <FaTrophy className="text-5xl text-yellow-500" />,
      description: "Recognized for outstanding contribution to international education",
    },
    {
      id: 2,
      title: "Best Student Support Services",
      year: "2023",
      organization: "International Education Awards",
      icon: <FaMedal className="text-5xl text-blue-500" />,
      description: "Awarded for exceptional student guidance and support",
    },
    {
      id: 3,
      title: "Top Recruitment Agency",
      year: "2023",
      organization: "UK Recruitment Excellence",
      icon: <FaStar className="text-5xl text-purple-500" />,
      description: "Leading recruitment services in the education sector",
    },
    {
      id: 4,
      title: "Innovation in Education",
      year: "2022",
      organization: "Global Education Forum",
      icon: <FaAward className="text-5xl text-green-500" />,
      description: "Innovative approach to student placement and career guidance",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-blue-600">Awards & Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Celebrating excellence and achievements in education and student services
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{award.icon}</div>
              <div className="text-center">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {award.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  {award.organization}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            These achievements reflect our commitment to providing world-class education services
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
