"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, FileText } from "lucide-react";

export default function AdmissionNav({ isDark = false }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  // Auto-close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Partner With Us", href: "/partner-with-us" },
  ];

  // Dynamic branding assets
  const colorLogo = "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png";
  const whiteLogo = "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE_Logo_White.png";

  const useWhiteBranding = !isScrolled && isDark;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out will-change-transform ${
          isScrolled 
            ? "py-3 px-4 sm:px-6 md:px-8 mt-2" 
            : "py-6 px-4 sm:px-6 md:px-8 lg:px-12"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? "max-w-6xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] px-5 sm:px-6 py-2.5" 
            : "max-w-7xl bg-transparent px-2 sm:px-2 py-2"
        }`}>
          
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center group shrink-0">
            <img
              src={useWhiteBranding ? whiteLogo : colorLogo}
              alt="London School of Excellence Logo"
              className={`transition-all duration-500 will-change-transform group-hover:scale-105 ${
                isScrolled ? "h-9 sm:h-10 w-auto" : "h-10 sm:h-12 lg:h-14 w-auto"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-8 overflow-hidden">
            <nav className={`flex items-center gap-1 xl:gap-3 backdrop-blur-sm px-2 xl:px-3 py-1.5 rounded-full border shadow-inner transition-colors duration-300 ${
              useWhiteBranding 
                ? "bg-white/10 border-white/20" 
                : "bg-gray-50/60 border-gray-200/50"
            }`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navHeaderBackground"
                        className={`absolute inset-0 rounded-full shadow-sm border transition-colors duration-300 ${
                          useWhiteBranding ? "bg-white/20 border-white/30" : "bg-white border-gray-100"
                        }`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                      isActive 
                        ? (useWhiteBranding ? "text-white" : "text-brand-primary")
                        : (useWhiteBranding ? "text-white/60 group-hover:text-white" : "text-gray-500 group-hover:text-brand-primary")
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/apply-now"
              className={`group relative px-8 py-3.5 text-white rounded-full font-bold shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                useWhiteBranding 
                ? "bg-white/20 border border-white/30 hover:bg-white/30 shadow-white/5" 
                : "bg-brand-primary shadow-[0_8px_20px_rgba(1,39,89,0.25)] hover:shadow-[0_10px_30px_rgba(38,178,230,0.4)]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide text-[15px]">
                <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                Apply Now
              </span>
              {!useWhiteBranding && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-[110] p-3 mx-1 shadow-md border rounded-full transition-colors focus:outline-none ${
              useWhiteBranding 
                ? "bg-white/10 border-white/20 text-white" 
                : "bg-white border-gray-100 text-brand-primary hover:bg-gray-50"
            }`}
            aria-label="Toggle Menu"
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-6 sm:px-10 overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="absolute top-8 left-6 sm:left-10 z-[100]">
              <img src={colorLogo} alt="London School of Excellence" className="h-10 opacity-50 grayscale"/>
            </div>

            <nav className="flex flex-col gap-5 relative z-10 w-full max-w-sm mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between group p-6 rounded-[1.5rem] text-2xl font-black tracking-tight transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20 scale-[1.02] border border-brand-primary/20"
                        : "text-gray-800 hover:bg-white bg-white/50 shadow-sm border border-gray-100 hover:shadow-md backdrop-blur-md"
                    }`}
                  >
                    {link.name}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${pathname === link.href ? "bg-white/20" : "bg-gray-100 group-hover:bg-brand-secondary/20"}`}>
                      <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 ${pathname === link.href ? "text-white" : "text-brand-primary"}`} />
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-200/50"
              >
                <Link
                  href="/apply-now"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-[1.5rem] text-xl font-bold shadow-[0_8px_30px_rgba(38,178,230,0.3)] active:scale-95 transition-transform"
                >
                  <FileText className="w-6 h-6" />
                  Apply Now Today
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
