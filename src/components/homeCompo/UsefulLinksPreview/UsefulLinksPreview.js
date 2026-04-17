import Link from "next/link";
import { ArrowRight, Wallet, CheckCircle2, HelpCircle, Handshake, BookOpen, GraduationCap } from "lucide-react";

const links = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Browse UK Courses",
    desc: "Explore Business, Computing, Health, Law, Engineering and more — with free admissions support.",
    href: "/courses",
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Student Finance UK",
    desc: "Tuition fee loans, maintenance loans, and grant eligibility — understand your funding options.",
    href: "/student-finance-uk",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Am I Eligible?",
    desc: "Check your academic and language entry requirements before you apply.",
    href: "/am-i-eligible",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    title: "Frequently Asked Questions",
    desc: "Quick answers on admissions, Student Finance, visas, and UK university support.",
    href: "/faq",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "UCAS Guide",
    desc: "Step-by-step walkthrough of the UK university application process via UCAS.",
    href: "/ucas-guide",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Talk to an Adviser",
    desc: "Get free personalized guidance on your university application options.",
    href: "/contact-us",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function UsefulLinksPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              UK University Guides &amp; Resources
            </h2>
            <p className="text-slate-500 mt-2 text-base max-w-xl">
              Everything you need to plan, apply, and fund your UK university place — all in one place.
            </p>
          </div>
          <Link
            href="/useful-links"
            className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-sm hover:underline whitespace-nowrap"
          >
            View all resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 bg-slate-50/50 hover:bg-white"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${link.bg} ${link.color}`}>
                {link.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-primary transition-colors mb-1">
                  {link.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{link.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-primary shrink-0 mt-0.5 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
