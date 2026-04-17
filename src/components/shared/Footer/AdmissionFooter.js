'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Mail, MapPin, Clock,
  GraduationCap, CheckCircle2, ShieldCheck, Award,
} from "lucide-react";
import {
  FaTiktok, FaFacebookF, FaLinkedinIn,
  FaTwitter, FaYoutube, FaInstagram,
} from "react-icons/fa";

// ── Animation variants ─────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

// ── Shared link list ───────────────────────────────────────────────────────────
function FooterLinkList({ links }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="group flex items-center gap-2 text-slate-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
          >
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ── Column heading ─────────────────────────────────────────────────────────────
function ColHeading({ children, color = "bg-brand-secondary" }) {
  return (
    <h3 className="text-base font-black text-white relative inline-block mb-5 pb-3">
      {children}
      <span className={`absolute bottom-0 left-0 w-10 h-0.5 ${color} rounded-full`} />
    </h3>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────
const socialLinks = [
  { icon: FaFacebookF,  href: "https://www.facebook.com/londonschoolofexcellence/",      label: "Facebook",  color: "hover:bg-blue-600" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/london-school-of-excellence/", label: "LinkedIn",  color: "hover:bg-blue-700" },
  { icon: FaInstagram,  href: "https://www.instagram.com/lsoe.ltd/",                     label: "Instagram", color: "hover:bg-pink-600" },
  { icon: FaTwitter,    href: "https://twitter.com/LsoeLtd",                             label: "Twitter",   color: "hover:bg-sky-500" },
  { icon: FaYoutube,    href: "https://www.youtube.com/@lsoeteam",                       label: "YouTube",   color: "hover:bg-red-600" },
  { icon: FaTiktok,     href: "https://www.tiktok.com/@londonschoolofexcellence",        label: "TikTok",    color: "hover:bg-slate-600" },
];

const coursesLinks = [
  { name: "Business & Management", href: "/courses/business" },
  { name: "IT & Computing",        href: "/courses/computing" },
  { name: "Health & Social Care",  href: "/courses/health" },
  { name: "Law",                   href: "/courses/law" },
  { name: "Engineering",           href: "/courses/engineering" },
  { name: "Foundation Year",       href: "/courses/foundation" },
  { name: "Business Top-Up",       href: "/courses/business-top-up" },
  { name: "Postgraduate",          href: "/courses/postgraduate" },
];

const studentsLinks = [
  { name: "UK / EU Students",       href: "/uk-eu-students" },
  { name: "International Students", href: "/international-students" },
  { name: "Apply Now",              href: "/apply-now" },
  { name: "Am I Eligible?",         href: "/am-i-eligible" },
  { name: "Student Finance UK",     href: "/student-finance-uk" },
  { name: "Student Visa Advice",    href: "/student-visa-advice" },
  { name: "Secure Accommodation",   href: "/secure-accommodation" },
];

const resourcesLinks = [
  { name: "UCAS Guide",                href: "/ucas-guide" },
  { name: "FAQ",                       href: "/faq" },
  { name: "Financial Planning",        href: "/financial-planning-scholarships" },
  { name: "Application Assessment",    href: "/application-assessment" },
  { name: "All Useful Resources",      href: "/useful-links" },
];

const companyLinks = [
  { name: "About Us",             href: "/about-us" },
  { name: "Contact Us",           href: "/contact-us" },
  { name: "Partner Institutions", href: "/partner-institutions" },
  { name: "Become an Agent",      href: "/become-an-agent" },
  { name: "Refer a Student",      href: "/refer-and-earn" },
];

const trustBadges = [
  { icon: GraduationCap, stat: "10,000+", label: "Students Supported" },
  { icon: Award,         stat: "140+",    label: "UK University Partners" },
  { icon: CheckCircle2,  stat: "99%",     label: "Application Success Rate" },
  { icon: ShieldCheck,   stat: "13+",     label: "Years of Excellence" },
];

// ── Component ──────────────────────────────────────────────────────────────────
const AdmissionFooter = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

      {/* Ambient glows */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Pre-footer CTA strip ─────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-brand-secondary font-bold text-xs uppercase tracking-widest mb-2">
                100% Free Service
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Ready to start your UK university journey?
              </h2>
              <p className="text-slate-400 mt-2 text-sm max-w-lg">
                Speak to an LSOE adviser today — free UCAS support, visa guidance, and course matching for UK/EU and international students.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 mt-8 lg:mt-0">
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-3.5 w-full sm:w-auto bg-brand-primary text-white rounded-full font-bold text-sm hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/30 hover:scale-105"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-3.5 w-full sm:w-auto border border-slate-600 text-slate-300 rounded-full font-bold text-sm hover:border-brand-secondary hover:text-brand-secondary transition-all"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust stats band ────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-slate-800 bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.stat} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-primary/20 text-brand-secondary flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-none">{b.stat}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{b.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main link grid ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* ── Brand column (2 of 6) ── */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <Link href="/" className="block">
              <img
                src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE_Logo_White.png"
                alt="London School of Excellence — UK University Admissions"
                className="w-52 brightness-110"
              />
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              London School of Excellence is a trusted UK university admissions consultancy providing
              free, expert guidance for Home and international students since 2013.
            </p>

            {/* Contact block */}
            <div className="space-y-3 pt-1">
              <a
                href="tel:+441708784763"
                className="flex items-center gap-3 text-slate-400 hover:text-brand-secondary transition-colors text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                +44 (0) 1708 784763
              </a>
              <a
                href="mailto:info.office@londonschoolofexcellence.com"
                className="flex items-center gap-3 text-slate-400 hover:text-brand-secondary transition-colors text-sm group"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                info.office@londonschoolofexcellence.com
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </span>
                Mon – Fri · 9:00 am – 6:00 pm GMT
              </div>
            </div>

            {/* British Council badge */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Certified By</p>
              <div className="bg-white/5 p-3 rounded-xl inline-block border border-white/10 hover:border-white/20 transition-colors">
                <img
                  src="https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/british%20council.png"
                  alt="British Council Certified"
                  className="w-28 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:border-transparent ${s.color}`}
                  >
                    <s.icon className="text-[14px]" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ── Courses (1 of 6) ── */}
          <motion.div variants={itemVariants} className="space-y-1">
            <ColHeading color="bg-brand-primary">Courses</ColHeading>
            <FooterLinkList links={coursesLinks} />
            <div className="pt-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-secondary hover:underline"
              >
                Browse All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          {/* ── Students (1 of 6) ── */}
          <motion.div variants={itemVariants} className="space-y-1">
            <ColHeading color="bg-blue-500">Students</ColHeading>
            <FooterLinkList links={studentsLinks} />
          </motion.div>

          {/* ── Resources (1 of 6) ── */}
          <motion.div variants={itemVariants} className="space-y-1">
            <ColHeading color="bg-emerald-500">Resources</ColHeading>
            <FooterLinkList links={resourcesLinks} />
          </motion.div>

          {/* ── Company (1 of 6) ── */}
          <motion.div variants={itemVariants} className="space-y-1">
            <ColHeading color="bg-purple-500">Company</ColHeading>
            <FooterLinkList links={companyLinks} />

            {/* Quick note on free service */}
            <div className="mt-6 p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
              <p className="text-xs font-bold text-brand-secondary mb-1">100% Free Service</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our admissions support is completely free for students. Funded by our partner universities.
              </p>
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-brand-secondary hover:underline"
              >
                Get started <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* ── Footer bottom bar ────────────────────────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} London School of Excellence Ltd. All rights reserved.
            <span className="mx-2 text-slate-700">·</span>
            Registered in England &amp; Wales · <span className="font-mono text-slate-400">08487750</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-5 text-xs text-slate-500">
            <Link href="/privacy-policy"      className="hover:text-brand-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms"               className="hover:text-brand-secondary transition-colors">Terms of Use</Link>
            <Link href="/cookie-policy"       className="hover:text-brand-secondary transition-colors">Cookies</Link>
            <Link href="/modern-slavery-policy" className="hover:text-brand-secondary transition-colors">Modern Slavery</Link>
            <Link href="/site-map"            className="hover:text-brand-secondary transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AdmissionFooter;
