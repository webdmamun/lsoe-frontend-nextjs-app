import Link from "next/link";
import { FileCheck, Plane, Wallet, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Application Assessment",
    desc: "We evaluate your profile and recommend the best universities and programmes for your goals.",
    href: "/application-assessment",
    accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    cta: "Get assessed",
  },
  {
    icon: Plane,
    title: "Student Visa Advice",
    desc: "Step-by-step support for your UK Student visa application — CAS letters, biometric appointments, and document checks.",
    href: "/student-visa-advice",
    accent: "bg-sky-50 text-sky-600 border-sky-100",
    cta: "Get visa help",
  },
  {
    icon: Wallet,
    title: "Financial Planning & Scholarships",
    desc: "Guidance on Student Finance England, tuition fees, scholarships, and all available funding options for UK study.",
    href: "/financial-planning-scholarships",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    cta: "Explore funding",
  },
  {
    icon: Home,
    title: "Secure Accommodation",
    desc: "Help finding safe and affordable student housing in the UK — university halls, private rentals, and PBSAs.",
    href: "/secure-accommodation",
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    cta: "Find housing",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore Our <span className="text-brand-primary">Services</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Free end-to-end support at every stage of your UK university journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${service.accent}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all duration-200">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
