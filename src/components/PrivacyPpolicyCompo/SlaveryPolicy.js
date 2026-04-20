"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  FileText,
  MessageSquareWarning,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          At <strong className="text-brand-primary">London School of Excellence Ltd.</strong>, we are committed to preventing <strong>modern slavery and human trafficking</strong> in all aspects of our operations and supply chains. We recognize our responsibility to implement effective measures ensuring that modern slavery has no place within our business activities.
        </p>
      </div>
    ),
  },
  {
    id: "scope",
    title: "2. Scope",
    icon: Users,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          This policy applies to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "All employees of London School of Excellence Ltd.",
            "Contractors, suppliers, and third parties providing goods or services to the company."
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-brand-primary" />
              </div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "policy-statement",
    title: "3. Policy Statement",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We are dedicated to ensuring that modern slavery and human trafficking do not occur within our business. To achieve this, we will:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            "Comply with all applicable laws and regulations related to modern slavery.",
            "Raise awareness among employees, contractors, and suppliers about the risks.",
            "Conduct due diligence on suppliers and contractors to assess and mitigate risks.",
            "Take immediate action to address any identified instances of modern slavery.",
            "Provide training to employees and partners on recognizing and reporting it.",
            "Regularly review and update this policy to ensure its continued effectiveness."
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2 shrink-0"></div>
              <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "reporting-concerns",
    title: "4. Reporting Modern Slavery Concerns",
    icon: MessageSquareWarning,
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 sm:p-8 rounded-2xl border border-red-100">
          <MessageSquareWarning className="w-10 h-10 text-red-500 mb-4" />
          <p className="text-sm text-red-900 leading-relaxed mb-6">
            We encourage anyone who suspects modern slavery or human trafficking within our operations or supply chains to report their concerns through our <strong>whistleblowing channel</strong>. All reports will be taken seriously, investigated, and appropriate action will be taken to address any concerns raised.
          </p>
          <div className="bg-white p-5 rounded-xl shadow-sm text-sm text-gray-800 space-y-2 border border-red-50">
            <p>For any concerns or further information, please contact us immediately at:</p>
            <p><a href="mailto:contact@londonschoolofexcellence.com" className="text-red-600 font-bold hover:underline">contact@londonschoolofexcellence.com</a></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "continuous-improvement",
    title: "5. Commitment to Continuous Improvement",
    icon: TrendingUp,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          London School of Excellence Ltd. remains dedicated to strengthening its policies and procedures to combat modern slavery. We will regularly review and assess our practices to ensure compliance and effectiveness in tackling this issue.
        </p>
      </div>
    ),
  },
];

const SlaveryPolicy = () => {
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
            Modern Slavery <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Policy</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Our absolute commitment to preventing modern slavery, human trafficking, and exploitation in all aspects of our operations and supply chains.
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

export default SlaveryPolicy;
