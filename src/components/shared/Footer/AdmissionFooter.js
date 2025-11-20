'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram, // TikTok not in Lucide by default, might need to use generic or text
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { FaTiktok, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"; // Using react-icons for brands for better accuracy

const AdmissionFooter = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/Londonschoolofexcellence/", color: "hover:text-blue-500" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/london-school-of-excellence/", color: "hover:text-blue-700" },
    { icon: FaTwitter, href: "https://twitter.com/LsoeLtd", color: "hover:text-sky-400" },
    { icon: FaYoutube, href: "https://www.youtube.com/@lsoeteam", color: "hover:text-red-600" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@lsoe_team", color: "hover:text-pink-500" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Modern Slavery Policy", href: "/modern-slavery-policy" },
    { name: "AQF Guideline", href: "/aqf-guide" },
    { name: "Partner With Us", href: "/partner-with-us" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Brand & About */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="block">
              <img
                src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE_Logo_White.png"
                alt="LSOE Logo"
                className="w-56 brightness-110"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              London School of Excellence is your trusted partner in studying abroad. 
              We guide students through the process with expert advice and support, 
              opening doors to global opportunities.
            </p>
            
            {/* Certifications */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Certified By</p>
              <div className="bg-white/5 p-3 rounded-lg inline-block backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                <img
                  src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/british%20council.png"
                  alt="British Council Logo"
                  className="w-32 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="mt-1 p-2 bg-slate-800 rounded-lg group-hover:bg-pink-500/20 group-hover:text-pink-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  5 Station Parade, Hornchurch, Elm Park, London, RM12 5AB, UK
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-pink-500/20 group-hover:text-pink-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+447901024151" className="text-slate-400 hover:text-white text-sm transition-colors">+44 (0)1708784763</a>
                  <a href="tel:+4407574091716" className="text-slate-400 hover:text-white text-sm transition-colors">+44 (0)7574091716</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-pink-500/20 group-hover:text-pink-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <a href="tel:+2347049748665" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +234 704 974 8665 (Intl)
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-pink-500/20 group-hover:text-pink-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <a href="mailto:info.office@londonschoolofexcellence.com" className="text-slate-400 hover:text-white text-sm break-all transition-colors">
                  info.office@londonschoolofexcellence.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter & Socials */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500 rounded-full" />
            </h3>
            <p className="text-slate-400 text-sm">
              Follow us on social media for the latest updates, success stories, and educational news.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Company Registration: <span className="text-slate-300 font-mono">08487750</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} London School of Excellence. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-pink-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-pink-400 transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-pink-400 transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AdmissionFooter;
