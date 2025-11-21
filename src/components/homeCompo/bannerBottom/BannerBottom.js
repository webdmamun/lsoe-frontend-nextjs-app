"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Globe,
  Users,
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react";

const BannerBottom = () => {
  const stats = [
    {
      icon: Globe,
      count: 15,
      suffix: "+",
      label: "Countries Served",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      count: 140,
      suffix: "+",
      label: "Partner Universities",
      color: "from-brand-primary to-brand-secondary",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      count: 100,
      suffix: "+",
      label: "Expert Counsellors",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      count: 10,
      suffix: "+",
      label: "Years of Excellence",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: "100% Free Service",
      description: "No hidden charges, completely transparent process",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "British Council certified education consultancy",
    },
    {
      icon: TrendingUp,
      title: "Digital-First Platform",
      description: "Apply online from anywhere in the world",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-brand-secondary/30">
              <Sparkles className="w-4 h-4 text-brand-secondary" />
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                About London School of Excellence
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Global Education
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Since <strong className="text-brand-primary">2013</strong>, London School of Excellence (LSOE) has
                helped students from over <strong>15 countries worldwide</strong> pursue education in the UK and globally.
                We welcome international applicants from Nigeria, Bangladesh, India, Pakistan, Sri Lanka,
                Philippines, China, and many more countries.
              </p>
              <p>
                Our partnerships with <strong className="text-brand-secondary">140+ prestigious UK universities</strong> offer deep insights into
                applications, visas, tuition, and accommodation. Our digital-first platform allows
                you to explore programs, complete applications, and upload documents — all online,
                from anywhere in the world.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-0.5 p-2 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${stat.bgColor} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-3">
                  {/* Icon */}
                  <div className={`inline-flex p-2.5 bg-gradient-to-br ${stat.color} rounded-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Count */}
                  <div className="space-y-1">
                    <div className={`text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      <CountUp
                        end={stat.count}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {stat.suffix}
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;
