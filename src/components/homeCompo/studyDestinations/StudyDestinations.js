"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, ArrowRight, Sparkles } from "lucide-react";

const StudyDestinations = () => {
  const destinations = [
    {
      name: "United Kingdom",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/United_Kingdom_rgqqjn.jpg",
      universities: "160+",
      students: "500K+",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "United States",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/United_States_c5lzwj.jpg",
      universities: "200+",
      students: "1M+",
      gradient: "from-red-600 to-blue-600"
    },
    {
      name: "Canada",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/Canada_jpinbr.jpg",
      universities: "100+",
      students: "600K+",
      gradient: "from-red-600 to-red-700"
    },
    {
      name: "Australia",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/Australia_fjeayl.jpg",
      universities: "43+",
      students: "700K+",
      gradient: "from-green-600 to-yellow-600"
    },
    {
      name: "New Zealand",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/New_Zealand_tr2byw.jpg",
      universities: "8+",
      students: "100K+",
      gradient: "from-blue-600 to-black"
    },
    {
      name: "Ireland",
      image: "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/countries/Ireland_ms5l4d.jpg",
      universities: "30+",
      students: "200K+",
      gradient: "from-green-600 to-orange-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              Study Abroad
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Your Dream Study Destination
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Awaits You
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your inspiring academic journey in these vibrant and welcoming
            study destinations around the world
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4 text-white inline mr-1" />
                      <span className="text-white text-sm font-semibold">Popular</span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3 transform group-hover:translate-x-2 transition-transform duration-300">
                        {dest.name}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{dest.universities} Universities</span>
                        </div>
                        <div className="h-1 w-1 bg-white/50 rounded-full" />
                        <span>{dest.students} Students</span>
                      </div>
                    </div>

                    {/* Explore Button */}
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span>Explore Programs</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Can't find your dream destination? We work with universities worldwide!
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="flex items-center gap-2">
              Explore All Destinations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyDestinations;
