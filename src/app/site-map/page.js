import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | London School of Excellence",
  description: "A complete overview of all pages and sections on the London School of Excellence portal.",
};

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Partner With Us", href: "/partner-with-us" },
      { name: "Apply Now", href: "/apply-now" },
    ],
  },
  {
    category: "Student Services",
    links: [
      { name: "Student Visa Advice", href: "/student-visa-advice" },
      { name: "Application Assessment", href: "/application-assessment" },
      { name: "Financial Planning & Scholarships", href: "/financial-planning-scholarships" },
      { name: "Secure Accommodation", href: "/secure-accommodation" },
      { name: "AQF Guideline", href: "/aqf-guide" },
    ],
  },
  {
    category: "Legal & Policy",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Modern Slavery Policy", href: "/modern-slavery-policy" },
      { name: "Refer & Earn", href: "/refer-and-earn" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <AdmissionNav isDark={false} />
      <main className="bg-slate-50 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">
            Site <span className="text-brand-primary">Map</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapData.map((section, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-brand-primary rounded-full" />
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        className="flex items-center justify-between group hover:text-brand-primary transition-colors font-medium text-slate-600"
                      >
                        {link.name}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <AdmissionFooter />
    </>
  );
}
