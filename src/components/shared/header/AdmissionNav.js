"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";

const AdmissionNav = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Career Hub", href: "/career-hub" },
    { name: "Partner With Us", href: "/partner-with-us" },
  ];

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
            : "bg-white py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <img
                src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png"
                alt="LSOE Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "w-40" : "w-48 lg:w-56"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      pathname === link.href 
                        ? "text-pink-600 font-bold" 
                        : "text-gray-600 group-hover:text-pink-500"
                    }`}>
                      {link.name}
                    </span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform origin-left transition-transform duration-300 ${
                      pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                ))}
              </nav>

              <Link
                href="/book-appointment"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-pink-50 text-pink-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-5 h-5 ${pathname === link.href ? "text-pink-600" : "text-gray-400"}`} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/book-appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdmissionNav;
