import Link from "next/link";
import { FileCheck, Plane, Wallet, Home, ArrowRight } from "lucide-react";

const ALL_SERVICES = [
  {
    icon: FileCheck,
    title: "Application Assessment",
    desc: "Personal statement review, academic profiling, and end-to-end submission support.",
    href: "/application-assessment",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: Plane,
    title: "Student Visa Advice",
    desc: "Student Route visa guidance, CAS support, document audit, and biometric scheduling.",
    href: "/student-visa-advice",
    accent: "text-sky-600 bg-sky-50 border-sky-100",
  },
  {
    icon: Wallet,
    title: "Financial Planning & Scholarships",
    desc: "Student Finance England, merit scholarships, proof-of-funds, and living cost planning.",
    href: "/financial-planning-scholarships",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Home,
    title: "Secure Accommodation",
    desc: "Priority access to university halls, PBSAs, and vetted private rentals across the UK.",
    href: "/secure-accommodation",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
];

export default function RelatedServices({ current }) {
  const related = ALL_SERVICES.filter((s) => s.href !== current);

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">
            Related <span className="text-brand-primary">Services</span>
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Everything you need for a successful UK university journey — all free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${service.accent}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all duration-200">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
