'use client';

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, Sparkles } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Excellence in Education",
    year: "2024",
    organization: "UK Education Council",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    description: "Highly commended for outstanding contribution to the international student placement sector.",
    delay: 0.1
  },
  {
    id: 2,
    title: "Best Support Services",
    year: "2023",
    organization: "International Education Awards",
    icon: <Medal className="w-8 h-8 text-blue-500" />,
    description: "Winner of the 'Exceptional Student Guidance' category for our innovative digital-first approach.",
    delay: 0.2
  },
  {
    id: 3,
    title: "Top Recruitment Partner",
    year: "2023",
    organization: "UK Recruitment Excellence",
    icon: <Star className="w-8 h-8 text-brand-secondary" />,
    description: "Officially recognized as a Platinum Tier partner by top 10 UK academic institutions.",
    delay: 0.3
  },
  {
    id: 4,
    title: "Global Industry Innovation",
    year: "2022",
    organization: "Global Education Forum",
    icon: <Award className="w-8 h-8 text-emerald-500" />,
    description: "Awarded for integrating cutting-edge technology into the student visa compliance process.",
    delay: 0.4
  },
];

const AwardsSection = () => {
  return (
    <section className="w-full py-24 bg-white px-6 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-bold text-brand-primary uppercase tracking-wider">World-Class Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
            Honored with Global <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Awards & Recognition
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg font-medium">
            Our relentless dedication to student success has been consistently celebrated by the most prestigious councils in higher education.
          </p>
        </div>

        {/* Awards Grid: Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: award.delay }}
              className="relative group bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Glossy Overlay */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-8 flex flex-col items-center text-center h-full">
                
                {/* Year Badge */}
                <div className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-black text-gray-400 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 group-hover:text-brand-primary transition-all duration-300">
                  {award.year}
                </div>

                {/* Hexagon-style Icon container */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gray-50 rounded-[1.5rem] rotate-45 group-hover:rotate-90 group-hover:bg-white transition-all duration-700 shadow-sm border border-gray-100" />
                   <div className="relative z-10 bg-white p-5 rounded-2xl shadow-md border border-gray-50 group-hover:scale-110 transition-transform duration-500">
                      {award.icon}
                   </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-sm font-bold text-brand-secondary/80 tracking-wide uppercase">
                    {award.organization}
                  </p>
                  <p className="text-gray-500 text-sm font-medium leading-[1.6]">
                    {award.description}
                  </p>
                </div>

              </div>
              
              {/* Decorative Corner Flare */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-primary/5 rounded-full blur-[30px] group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Reputable Footer text */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-full bg-gray-50/50 border border-gray-100">
             <p className="px-8 py-3 text-gray-400 font-bold text-sm tracking-widest uppercase">
                A Decade of Integrity & Innovation in Global Recruitment
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
