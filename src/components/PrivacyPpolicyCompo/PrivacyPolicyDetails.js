"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  ListChecks,
  Share2,
  Globe2,
  Lock,
  Clock,
  UserCheck,
  Cookie,
  RefreshCw,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction & Controller Identity",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Welcome to the privacy policy of <strong className="text-brand-primary">London School of Excellence Ltd</strong> (trading as London School of Excellence). We respect your privacy and are committed to protecting your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-inner">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Data Controller Contact Details</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> <strong>Full Legal Name:</strong> London School Of Excellence Ltd</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> <strong>Postal Address:</strong> 5 Station Parade, Hornchurch, RM12 5AB, United Kingdom</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> <strong>Data Protection Officer:</strong> Charley Chappell</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> <strong>Email:</strong> <a href="mailto:info.office@londonschoolofexcellence.com" className="text-brand-secondary font-semibold hover:underline">info.office@londonschoolofexcellence.com</a></li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-secondary"></div> <strong>Telephone:</strong> +44 7546 795387</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    icon: Database,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { tag: "Identity Data", desc: "First name, last name, title, date of birth." },
            { tag: "Contact Data", desc: "Billing/delivery address, email, telephone numbers." },
            { tag: "Educational Data", desc: "Qualifications, transcripts, preferences." },
            { tag: "Financial Data", desc: "Bank account and payment details." },
            { tag: "Technical Data", desc: "IP address, browser type, usage behavior." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <strong className="text-brand-primary block mb-1">{item.tag}</strong>
              <span className="text-sm text-gray-600">{item.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 italic mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
          We collect this data directly when you apply or correspond with us, and indirectly via third parties like university partners.
        </p>
      </div>
    ),
  },
  {
    id: "lawful-bases",
    title: "3. Purposes and Lawful Bases",
    icon: ListChecks,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Under the UK GDPR, we must have a lawful basis for processing your data. We rely on the following bases:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mt-4">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-800">Purpose / Activity</th>
                <th className="px-6 py-4 font-semibold text-gray-800">Type of Data</th>
                <th className="px-6 py-4 font-semibold text-gray-800">Lawful Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-700">Register new student</td>
                <td className="px-6 py-4 text-gray-500">Identity, Contact, Educational</td>
                <td className="px-6 py-4 text-brand-primary font-medium">Performance of a contract</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-700">Manage payments/fees</td>
                <td className="px-6 py-4 text-gray-500">Identity, Financial</td>
                <td className="px-6 py-4 text-brand-primary font-medium">Contract & Legitimate interests</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-700">HMRC / Legal Duties</td>
                <td className="px-6 py-4 text-gray-500">Identity, Financial</td>
                <td className="px-6 py-4 text-brand-primary font-medium">Legal obligation</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-700">Analytics & Improvements</td>
                <td className="px-6 py-4 text-gray-500">Technical, Usage</td>
                <td className="px-6 py-4 text-brand-primary font-medium">Legitimate interests</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-700">Marketing Communications</td>
                <td className="px-6 py-4 text-gray-500">Identity, Contact</td>
                <td className="px-6 py-4 text-brand-primary font-medium">Consent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "disclosures",
    title: "4. Disclosures of Your Data",
    icon: Share2,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We do not sell your personal data. We may share your data with the following categories of third parties:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["University Partners", "IT Service Providers", "Professional Advisers", "HMRC and Regulators"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4 text-brand-primary" />
              </div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "international-transfers",
    title: "5. International Data Transfers",
    icon: Globe2,
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-100">
          <Globe2 className="w-8 h-8 text-teal-600 mb-3" />
          <p className="text-sm text-teal-900 leading-relaxed">
            We process your personal data primarily within the UK. If we need to transfer your data outside the UK (e.g., to a university partner or IT service provider), we ensure a similar degree of protection is afforded by implementing strict safeguards like Standard Contractual Clauses.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "data-security",
    title: "6. Data Security",
    icon: Lock,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access is strictly limited to employees and agents who have a business need to know, subject to a duty of confidentiality.
        </p>
      </div>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    icon: Clock,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed mb-4">
          We will only retain your personal data for as long as necessary. Our standard retention periods are:
        </p>
        <div className="space-y-3">
          {[
            { title: "Student records", time: "3 years after last interaction" },
            { title: "Financial records", time: "6 years (HMRC compliance)" },
            { title: "Marketing data", time: "2 years if inactive" },
            { title: "General inquiries", time: "6 months" },
            { title: "Employment records", time: "3 years after employment ends" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="font-semibold text-gray-700">{item.title}</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-gray-100 rounded-lg text-gray-600">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "legal-rights",
    title: "8. Your Legal Rights",
    icon: UserCheck,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Under data protection laws, you have powerful rights in relation to your personal data:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          {["Request access", "Request correction", "Request erasure", "Object to processing", "Request restriction", "Request data portability", "Withdraw consent"].map((right, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50 hover:bg-indigo-50 transition-colors">
              <UserCheck className="w-5 h-5 text-indigo-500 shrink-0" />
              <span className="text-sm font-medium text-gray-700">{right}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 italic bg-gray-50 p-4 rounded-xl border border-gray-100">
          To exercise any of these rights, please contact our DPO at <a href="mailto:info.office@londonschoolofexcellence.com" className="text-brand-primary font-bold hover:underline">info.office@londonschoolofexcellence.com</a>.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies",
    icon: Cookie,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Our website uses cookies and similar tracking technologies to distinguish you from other users and improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
        </p>
      </div>
    ),
  },
  {
    id: "changes-to-policy",
    title: "10. Changes to the Policy",
    icon: RefreshCw,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          We keep our privacy policy under regular review. Any material changes will be posted on this page and, where appropriate, notified to you by email.
        </p>
      </div>
    ),
  },
  {
    id: "complaints",
    title: "11. Complaints (ICO)",
    icon: AlertCircle,
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 sm:p-8 rounded-2xl border border-red-100">
          <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
          <p className="text-sm text-red-900 leading-relaxed mb-6">
            You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority. We would appreciate the chance to deal with your concerns before you approach the ICO.
          </p>
          <div className="bg-white p-5 rounded-xl shadow-sm text-sm text-gray-800 space-y-2 border border-red-50">
            <p className="font-bold text-gray-900 text-base">Information Commissioner's Office (ICO)</p>
            <p className="text-gray-600">Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
            <p><strong className="text-gray-700">Telephone:</strong> <span className="text-brand-primary font-medium">0303 123 1113</span></p>
            <p><strong className="text-gray-700">Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-red-600 font-semibold hover:underline">ico.org.uk</a></p>
          </div>
        </div>
      </div>
    ),
  },
];

const PrivacyPolicyDetails = () => {
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
            How we protect <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">your data</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            We adhere strictly to the UK GDPR and ICO standards to ensure your personal information is kept secure, private, and solely used for the advancement of your education.
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

export default PrivacyPolicyDetails;
