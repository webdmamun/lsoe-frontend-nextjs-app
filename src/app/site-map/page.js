import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Site Map",
  description:
    "Browse all pages on the London School of Excellence website — admissions services, courses, student support, legal policies, and more.",
  openGraph: {
    title: "Site Map — London School of Excellence",
    description: "A full index of all pages on the London School of Excellence website.",
    url: "/site-map",
    images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: "London School of Excellence Site Map" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map — London School of Excellence",
    description: "A full index of all pages on the London School of Excellence website.",
    images: ["/og-image.png"],
  },
};

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    category: "Courses & Programs",
    links: [
      { name: "Browse All Courses", href: "/courses" },
      { name: "Business & Management", href: "/courses/business" },
      { name: "IT & Computing", href: "/courses/computing" },
      { name: "Health & Social Care", href: "/courses/health" },
      { name: "Law", href: "/courses/law" },
      { name: "Engineering", href: "/courses/engineering" },
      { name: "Foundation Year", href: "/courses/foundation" },
      { name: "Business Top-Up", href: "/courses/business-top-up" },
      { name: "Postgraduate", href: "/courses/postgraduate" },
    ],
  },
  {
    category: "Admissions & Students",
    links: [
      { name: "UK / EU Students", href: "/uk-eu-students" },
      { name: "International Students", href: "/international-students" },
      { name: "Apply Now", href: "/apply-now" },
      { name: "Am I Eligible?", href: "/am-i-eligible" },
      { name: "Student Visa Advice", href: "/student-visa-advice" },
      { name: "Secure Accommodation", href: "/secure-accommodation" },
      { name: "Application Assessment", href: "/application-assessment" },
    ],
  },
  {
    category: "Resources & Guides",
    links: [
      { name: "All Useful Resources", href: "/useful-links" },
      { name: "Student Finance UK", href: "/student-finance-uk" },
      { name: "Financial Planning & Scholarships", href: "/financial-planning-scholarships" },
      { name: "UCAS Guide", href: "/ucas-guide" },
      { name: "AQF Guideline", href: "/aqf-guide" },
    ],
  },
  {
    category: "Partnerships",
    links: [
      { name: "Partner Institutions", href: "/partner-institutions" },
      { name: "Become an Agent", href: "/become-an-agent" },
      { name: "Partner With Us", href: "/partner-with-us" },
      { name: "Refer a Student & Earn", href: "/refer-and-earn" },
      { name: "Agent Portal", href: "/agent-partner" },
    ],
  },
  {
    category: "Legal & Policy",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Modern Slavery Policy", href: "/modern-slavery-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <AdmissionNav isDark={false} />
      <main className="bg-slate-50 pt-32 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Site <span className="text-brand-primary">Map</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl">
              A complete index of all pages, resources, and services available on the London School of Excellence website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {sitemapData.map((section, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/40 border border-slate-100 h-full">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-brand-primary rounded-full" />
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        className="flex items-center justify-between group hover:text-brand-primary transition-colors font-medium text-slate-600 text-sm sm:text-base"
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
