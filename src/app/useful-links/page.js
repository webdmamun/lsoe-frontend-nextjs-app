import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  Wallet, CheckCircle2, HelpCircle, Building2, BookOpen, Gift,
  ArrowRight, GraduationCap, Handshake, Globe2, MapPin, FileText, Landmark,
  MessageCircle, Briefcase, Users,
} from 'lucide-react';

export const metadata = {
  title: 'Useful Links & Resources — Student Guides, Funding & Opportunities',
  description:
    'Everything in one place — Student Finance England, UCAS guide, eligibility checker, UK course browser, FAQ, agent opportunities, referral programme, and more from London School of Excellence.',
  openGraph: {
    title: 'Useful Links — London School of Excellence',
    description:
      'Student Finance, UCAS, eligibility, courses, and opportunities — all the key resources for UK university applicants and education agents in one place.',
    url: '/useful-links',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Useful Links — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Useful Links — London School of Excellence',
    description: 'Student Finance, UCAS guide, eligibility, courses, and agent opportunities — all in one place from LSOE.',
    images: ['/og-image.png'],
  },
};

// ── Resource groups ────────────────────────────────────────────────────────────

const studentGuidance = [
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: 'Am I Eligible?',
    desc: 'Check academic qualification requirements, English language standards, and which programmes match your current qualifications.',
    href: '/am-i-eligible',
    cta: 'Check eligibility',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/10 hover:border-brand-primary/30',
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: 'Student Finance UK',
    desc: 'Tuition fee loans, maintenance loans, and grant eligibility through Student Finance England — clearly explained.',
    href: '/student-finance-uk',
    cta: 'Learn about funding',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
  },
  {
    icon: <Landmark className="w-7 h-7" />,
    title: 'UK Student Finance Courses',
    desc: 'Explore high-intent UK course routes connected to Student Finance England support and funded study planning.',
    href: '/uk-student-finance-courses',
    cta: 'Explore funded routes',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/10 hover:border-brand-primary/30',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'UCAS Guide',
    desc: 'A plain-English walkthrough of the UCAS application system — from creating your account to accepting your offer.',
    href: '/ucas-guide',
    cta: 'Read the guide',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
  },
  {
    icon: <HelpCircle className="w-7 h-7" />,
    title: 'FAQ',
    desc: 'Answers to the most common questions about LSOE services, admissions, visa requirements, and student life in the UK.',
    href: '/faq',
    cta: 'Read the FAQ',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
  },
];

const studyPaths = [
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'UK & EU Students',
    desc: 'Home and EU students: free UCAS support, Student Finance guidance, and flexible part-time study options at UK universities.',
    href: '/uk-eu-students',
    cta: 'Explore your pathway',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/10 hover:border-brand-primary/30',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Study in the UK for Local Students',
    desc: 'Already in the UK? Discover flexible study modes, local guidance, and practical pathways into university.',
    href: '/study-in-uk-local-students',
    cta: 'See local pathways',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: 'International Students',
    desc: 'Overseas students: UK admissions support, Student Route visa guidance, accommodation help, and pre-arrival advice.',
    href: '/international-students',
    cta: 'Explore your pathway',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Browse UK Courses',
    desc: 'Undergraduate courses in Business, Computing, Health, Law, Engineering, Foundation Year, and more through our partner universities.',
    href: '/courses',
    cta: 'Explore courses',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Apply Now',
    desc: 'Ready to start? Submit your application details and an LSOE adviser will contact you within one working day.',
    href: '/apply-now',
    cta: 'Start your application',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
  },
  {
    icon: <Gift className="w-7 h-7" />,
    title: 'Free Admission Support UK',
    desc: 'Understand how LSOE admissions support remains free for students with no hidden fees since 2013.',
    href: '/free-admission-support-uk',
    cta: 'See free support details',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
  },
];

const opportunitiesAndSupport = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Become an Agent',
    desc: 'Education consultants and agencies: join our agent network and earn commission placing students into UK universities.',
    href: '/become-an-agent',
    cta: 'Learn about the programme',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/20 hover:border-brand-primary/50',
    featured: true,
  },
  {
    icon: <Gift className="w-7 h-7" />,
    title: 'Refer & Earn',
    desc: 'Know someone who could benefit from LSOE support? Refer them and earn a reward when they successfully enrol.',
    href: '/refer-and-earn',
    cta: 'Refer a student',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100 hover:border-pink-300',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Partner Institutions',
    desc: 'Browse the universities and colleges in our trusted admissions network across London and the wider UK.',
    href: '/partner-institutions',
    cta: 'View institutions',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Contact Us',
    desc: 'Speak directly to an LSOE adviser. In-person, phone, or online — we are here to answer your questions.',
    href: '/contact-us',
    cta: 'Get in touch',
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    border: 'border-slate-100 hover:border-slate-300',
  },
];

// ── Shared card component ──────────────────────────────────────────────────────
function ResourceCard({ r }) {
  return (
    <Link
      href={r.href}
      className={`group flex flex-col bg-white rounded-3xl p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-300 ${r.border} ${r.featured ? 'ring-1 ring-brand-primary/20' : ''}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${r.bg} ${r.color}`}>
        {r.icon}
      </div>
      <h3 className={`text-lg font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors flex items-center gap-2`}>
        {r.title}
        {r.featured && (
          <span className="text-[10px] font-black uppercase tracking-wider bg-brand-primary text-white px-2 py-0.5 rounded-full">
            Agents
          </span>
        )}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{r.desc}</p>
      <div className="flex items-center gap-1.5 text-sm font-bold text-brand-primary mt-auto">
        {r.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function UsefulLinksPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Useful Links', href: '/useful-links' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.12),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <GraduationCap className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Resources Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Useful Links & Resources
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
            Guides, funding information, course discovery, and opportunities — everything you need
            to plan your UK university journey or grow your education recruitment business, all in one place.
          </p>
        </div>
      </section>

      {/* ── Section 1: Student Guidance ── */}
      <section className="bg-slate-50 pt-20 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Section 1</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Student Guidance</h2>
            <p className="text-slate-500 text-sm mt-2">Eligibility, funding, and application resources for prospective UK university students.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentGuidance.map((r) => <ResourceCard key={r.href} r={r} />)}
          </div>
        </div>
      </section>

      {/* ── Section 2: Study Paths ── */}
      <section className="bg-slate-50 pt-10 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Section 2</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Study Paths</h2>
            <p className="text-slate-500 text-sm mt-2">Find the right route for your background — Home student, international student, or returning learner.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studyPaths.map((r) => <ResourceCard key={r.href} r={r} />)}
          </div>
        </div>
      </section>

      {/* ── Section 3: Opportunities & Support ── */}
      <section className="bg-slate-50 pt-10 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Section 3</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Opportunities & Support</h2>
            <p className="text-slate-500 text-sm mt-2">For agents, referrers, and anyone who wants to get in touch or learn more about LSOE partnerships.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {opportunitiesAndSupport.map((r) => <ResourceCard key={r.href} r={r} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Ready to start your application?
          </h2>
          <p className="text-slate-500 mb-8">
            Our London-based advisors guide you through every step — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
