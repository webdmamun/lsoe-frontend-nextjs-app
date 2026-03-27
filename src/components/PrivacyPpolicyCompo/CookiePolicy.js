"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cookie,
  Settings,
  LayoutList,
  Activity,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What are Cookies?",
    icon: Cookie,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information and personalized experiences.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          At <strong className="text-brand-primary">London School of Excellence</strong>, we use cookies to understand how you interact with our website and to improve your browsing experience.
        </p>
      </div>
    ),
  },
  {
    id: "how-we-use-cookies",
    title: "2. How We Use Cookies",
    icon: LayoutList,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            "To enable essential website functionality.",
            "To analyze user engagement and site performance.",
            "To remember your preferences and settings.",
            "To provide relevant educational content and updates."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2 shrink-0"></div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    icon: Activity,
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Our website uses the following categories of cookies:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Strictly Necessary Cookies
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site (like the application form).
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Performance & Analytics Cookies
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized. We use Google Analytics for this purpose.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Functionality Cookies
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies allow our website to remember choices you make while browsing based on your region or previous interactions.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "managing-cookies",
    title: "4. Managing Your Cookies",
    icon: Settings,
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-indigo-100">
          <Settings className="w-10 h-10 text-indigo-500 mb-4" />
          <p className="text-sm text-indigo-900 leading-relaxed mb-6">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
          <div className="bg-white p-5 rounded-xl shadow-sm text-sm text-gray-800 space-y-2 border border-indigo-50">
            <p className="font-bold text-gray-900 text-base">How to adjust your browser settings:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Prevent cross-site tracking</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection</li>
              <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Smooth scroll logic and intersection observer for active link
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-slate-50 pt-32 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Info */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm mb-6 border border-brand-primary/20 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            Last Updated: March 2026
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Policy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Learn about how we use cookies and similar tracking technologies to improve your experience on our website.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-80 shrink-0 sticky top-36">
            <div className="bg-white rounded-3xl shadow-xl shadow-brand-primary/5 p-6 border border-gray-100">
              <h3 className="text-gray-900 font-bold mb-6 text-lg flex items-center gap-2">
                <MenuIcon />
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white font-medium shadow-md shadow-brand-primary/20 scale-[1.02]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-brand-secondary" : "text-gray-400"}`} />
                      <span className="text-sm font-medium">{section.title}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="flex-1 max-w-4xl">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-8 sm:mb-12 bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-gray-200/40 border border-gray-100/60 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <Icon className="w-32 h-32 text-brand-primary" />
                  </div>
                  
                  <div className="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shrink-0 shadow-lg shadow-brand-secondary/30">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="max-w-none relative z-10">
                    {section.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

// Small helper component for the Menu icon
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default CookiePolicy;
