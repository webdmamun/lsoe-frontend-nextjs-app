"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, FileText } from "lucide-react";

// ── Mega-menu data ─────────────────────────────────────────────────────────────
const CRM_AGENT_URL = "https://app.londonschoolofexcellence.com/apply-for-agent";

const usefulLinksColumns = [
  {
    heading: "Student Resources",
    links: [
      { name: "Student Finance UK",   href: "/student-finance-uk",   desc: "Loans, grants & funding explained" },
      { name: "Am I Eligible?",       href: "/am-i-eligible",        desc: "Check your entry requirements" },
      { name: "UCAS Guide",           href: "/ucas-guide",           desc: "Step-by-step application help" },
      { name: "FAQ",                  href: "/faq",                  desc: "Common questions answered" },
    ],
  },
  {
    heading: "Opportunities",
    links: [
      { name: "Become an Agent",      href: CRM_AGENT_URL,           desc: "Apply to our agent partner programme", featured: true, external: true },
      { name: "Refer & Earn",         href: "/refer-and-earn",       desc: "Earn rewards for referrals" },
      { name: "Partner Institutions", href: "/partner-institutions", desc: "Our UK university network" },
    ],
  },
];

// Exclude external links from active-state tracking (they can never match a pathname)
const allUsefulLinks = usefulLinksColumns.flatMap((col) => col.links).filter((l) => !l.external);

export default function AdmissionNav({ isDark = false }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled]               = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen]   = useState(false);
  const [isUsefulLinksOpen, setIsUsefulLinksOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen]             = useState(false);
  const [isMobileApplyOpen, setIsMobileApplyOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (isMobileMenuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "UK / EU",       href: "/uk-eu-students" },
    { name: "International", href: "/international-students" },
    { name: "About Us",      href: "/about-us" },
    { name: "Contact Us",    href: "/contact-us" },
  ];

  const mobileNavLinks = [
    { name: "UK / EU Students",       href: "/uk-eu-students" },
    { name: "International Students", href: "/international-students" },
    { name: "About Us",               href: "/about-us" },
    { name: "Contact Us",             href: "/contact-us" },
  ];

  const colorLogo = "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png";
  const whiteLogo = "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE_Logo_White.png";
  const useWhiteBranding = !isScrolled && isDark;

  const isUsefulLinksActive =
    allUsefulLinks.some((l) => pathname === l.href) || pathname === "/useful-links";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out will-change-transform ${
          isScrolled ? "py-2 px-4 sm:px-6 md:px-8" : "py-4 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "max-w-6xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] px-5 sm:px-6 py-2"
              : "max-w-7xl bg-transparent px-2 sm:px-2 py-2"
          }`}
        >
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

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <nav
              className={`flex items-center gap-0.5 backdrop-blur-sm px-2 py-1.5 rounded-full border shadow-inner transition-colors duration-300 ${
                useWhiteBranding ? "bg-white/10 border-white/20" : "bg-gray-50/60 border-gray-200/50"
              }`}
            >
              {/* Regular nav links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300"
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
                    <span
                      className={`relative z-10 text-[14px] font-bold tracking-tight transition-colors duration-300 ${
                        isActive
                          ? useWhiteBranding ? "text-white" : "text-brand-primary"
                          : useWhiteBranding ? "text-white/60 group-hover:text-white" : "text-gray-500 group-hover:text-brand-primary"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              {/* ── Useful Links — Mega Menu ── */}
              <div
                className="relative"
                onMouseEnter={() => setIsUsefulLinksOpen(true)}
                onMouseLeave={() => setIsUsefulLinksOpen(false)}
              >
                <button className="relative group px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300 flex items-center gap-1.5">
                  {isUsefulLinksActive && (
                    <motion.div
                      layoutId="navHeaderBackground"
                      className={`absolute inset-0 rounded-full shadow-sm border transition-colors duration-300 ${
                        useWhiteBranding ? "bg-white/20 border-white/30" : "bg-white border-gray-100"
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-[14px] font-bold tracking-tight transition-colors duration-300 ${
                      isUsefulLinksActive
                        ? useWhiteBranding ? "text-white" : "text-brand-primary"
                        : useWhiteBranding ? "text-white/60 group-hover:text-white" : "text-gray-500 group-hover:text-brand-primary"
                    }`}
                  >
                    Useful Links
                  </span>
                  <ChevronDown
                    className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${isUsefulLinksOpen ? "rotate-180" : ""} ${
                      isUsefulLinksActive
                        ? useWhiteBranding ? "text-white" : "text-brand-primary"
                        : useWhiteBranding ? "text-white/60 group-hover:text-white" : "text-gray-400 group-hover:text-brand-primary"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isUsefulLinksOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 pt-4 w-[540px] z-[200]"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                        {/* Mega menu header */}
                        <div className="bg-slate-900 px-5 py-3 flex items-center justify-between">
                          <span className="text-white text-[11px] font-bold uppercase tracking-widest">
                            Resources &amp; Opportunities
                          </span>
                          <Link
                            href="/useful-links"
                            className="text-brand-secondary text-xs font-bold hover:text-white transition-colors flex items-center gap-1"
                          >
                            View all resources
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* Two-column grid */}
                        <div className="grid grid-cols-2 divide-x divide-gray-100">
                          {usefulLinksColumns.map((col) => (
                            <div key={col.heading} className="p-4">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
                                {col.heading}
                              </p>
                              <div className="space-y-0.5">
                                {col.links.map((link) => {
                                  const Tag = link.external ? "a" : Link;
                                  const extraProps = link.external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {};
                                  return (
                                    <Tag
                                      key={link.href}
                                      href={link.href}
                                      {...extraProps}
                                      className={`flex flex-col px-3 py-2.5 rounded-xl transition-colors group ${
                                        link.featured
                                          ? "bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/10"
                                          : "hover:bg-slate-50"
                                      }`}
                                    >
                                      <span
                                        className={`font-bold text-sm transition-colors ${
                                          link.featured
                                            ? "text-brand-primary group-hover:text-brand-primary"
                                            : "text-slate-800 group-hover:text-brand-primary"
                                        }`}
                                      >
                                        {link.name}
                                        {link.featured && (
                                          <span className="ml-2 text-[9px] font-black uppercase tracking-wider bg-brand-primary text-white px-1.5 py-0.5 rounded-full align-middle">
                                            Apply
                                          </span>
                                        )}
                                      </span>
                                      <span className="text-slate-400 text-xs mt-0.5">{link.desc}</span>
                                    </Tag>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Apply Now — Primary with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsApplyOpen(true)}
              onMouseLeave={() => setIsApplyOpen(false)}
            >
              <Link
                href="/apply-now"
                className={`group relative px-7 py-3.5 text-white rounded-full font-bold shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-2 whitespace-nowrap ${
                  useWhiteBranding
                    ? "bg-white/20 border border-white/30 hover:bg-white/30 shadow-white/5"
                    : "bg-brand-primary shadow-[0_8px_20px_rgba(1,39,89,0.25)] hover:shadow-[0_10px_30px_rgba(38,178,230,0.4)]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide text-[15px]">
                  <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Apply Now
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isApplyOpen ? "rotate-180" : ""}`}
                  />
                </span>
                {!useWhiteBranding && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                )}
              </Link>

              <AnimatePresence>
                {isApplyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 pt-3 w-64 z-[200]"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <Link
                        href="/apply/uk-eu"
                        className="flex flex-col px-5 py-3.5 hover:bg-slate-50 transition-colors border-b border-gray-50 group"
                      >
                        <span className="font-bold text-slate-800 text-sm group-hover:text-brand-primary transition-colors">
                          UK / EU Students
                        </span>
                        <span className="text-slate-400 text-xs mt-0.5">Living in the UK? Start here</span>
                      </Link>
                      <Link
                        href="/apply/international"
                        className="flex flex-col px-5 py-3.5 hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-bold text-slate-800 text-sm group-hover:text-brand-primary transition-colors">
                          International Students
                        </span>
                        <span className="text-slate-400 text-xs mt-0.5">Applying from abroad? Start here</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

      {/* ── Mobile Menu Fullscreen Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col px-6 sm:px-10 overflow-y-auto"
          >
            <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute top-8 left-6 sm:left-10 z-[100]">
              <img src={colorLogo} alt="London School of Excellence" className="h-10 opacity-50 grayscale" />
            </div>

            <nav className="flex flex-col gap-3 relative z-10 w-full max-w-sm mx-auto pt-28 pb-12">
              {/* Main nav links */}
              {mobileNavLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        pathname === link.href ? "bg-white/20" : "bg-gray-100 group-hover:bg-brand-secondary/20"
                      }`}
                    >
                      <ChevronRight
                        className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 ${
                          pathname === link.href ? "text-white" : "text-brand-primary"
                        }`}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Useful Links — direct link to hub on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: mobileNavLinks.length * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href="/useful-links"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between group p-6 rounded-[1.5rem] text-2xl font-black tracking-tight transition-all duration-300 ${
                    isUsefulLinksActive
                      ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20 scale-[1.02] border border-brand-primary/20"
                      : "text-gray-800 hover:bg-white bg-white/50 shadow-sm border border-gray-100 hover:shadow-md backdrop-blur-md"
                  }`}
                >
                  Useful Links
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isUsefulLinksActive ? "bg-white/20" : "bg-gray-100 group-hover:bg-brand-secondary/20"
                    }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 ${isUsefulLinksActive ? "text-white" : "text-brand-primary"}`}
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Apply Now Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: (mobileNavLinks.length + 1) * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setIsMobileApplyOpen(!isMobileApplyOpen)}
                  className="flex items-center justify-between w-full group p-6 rounded-[1.5rem] text-2xl font-black tracking-tight transition-all duration-300 text-gray-800 hover:bg-white bg-white/50 shadow-sm border border-gray-100 hover:shadow-md backdrop-blur-md"
                >
                  Apply Now
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-100 group-hover:bg-brand-secondary/20">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isMobileApplyOpen ? "rotate-180" : ""} text-brand-primary`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isMobileApplyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 pl-2 space-y-1">
                        {[
                          { name: "UK / EU Students",       href: "/apply/uk-eu" },
                          { name: "International Students", href: "/apply/international" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center justify-between group px-5 py-3.5 rounded-2xl transition-all duration-200 ${
                              pathname === item.href
                                ? "bg-brand-primary/10 text-brand-primary"
                                : "text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
                            }`}
                          >
                            <span className="font-bold text-base">{item.name}</span>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: (mobileNavLinks.length + 2) * 0.07, duration: 0.5 }}
                className="mt-6 pt-6 border-t border-gray-200/50 space-y-3"
              >
                <Link
                  href="/apply-now"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-[1.5rem] text-xl font-bold shadow-[0_8px_30px_rgba(38,178,230,0.3)] active:scale-95 transition-transform"
                >
                  <FileText className="w-6 h-6" />
                  Apply Now
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-3 w-full py-5 bg-white/80 border-2 border-brand-primary text-brand-primary rounded-[1.5rem] text-xl font-bold active:scale-95 transition-transform"
                >
                  Free Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
