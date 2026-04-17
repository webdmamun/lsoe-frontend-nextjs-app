import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, Briefcase, Monitor, HeartPulse, Scale, Cpu,
  GraduationCap, CheckCircle2, Wallet, Users, Trophy, FlaskConical,
} from 'lucide-react';

export const metadata = {
  title: 'Browse UK University Courses — Business, Computing, Health, Law & More',
  description:
    'Explore undergraduate and postgraduate courses at UK universities. Business, Computing, Health, Law, Engineering, Foundation Year, and Top-Up degrees. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'UK University Courses — London School of Excellence',
    description:
      'Browse 8 subject areas at UK universities. Business, Computing, Health, Law, Engineering, Foundation, Top-Up, and Postgraduate. Free admissions support from LSOE.',
    url: '/courses',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UK University Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Courses — London School of Excellence',
    description:
      'Browse UK university courses by subject area. Free admissions support for Home and international students from LSOE.',
    images: ['/og-image.png'],
  },
};

const BASE = 'https://www.londonschoolofexcellence.com';

const courseListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'UK University Course Categories — London School of Excellence',
  description: 'Undergraduate and postgraduate course categories available through London School of Excellence admissions support.',
  numberOfItems: 8,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Business & Management Courses',    url: `${BASE}/courses/business` },
    { '@type': 'ListItem', position: 2, name: 'IT & Computing Courses',           url: `${BASE}/courses/computing` },
    { '@type': 'ListItem', position: 3, name: 'Health & Social Care Courses',     url: `${BASE}/courses/health` },
    { '@type': 'ListItem', position: 4, name: 'Law Courses',                      url: `${BASE}/courses/law` },
    { '@type': 'ListItem', position: 5, name: 'Engineering Courses',              url: `${BASE}/courses/engineering` },
    { '@type': 'ListItem', position: 6, name: 'Foundation Year Programmes',       url: `${BASE}/courses/foundation` },
    { '@type': 'ListItem', position: 7, name: 'Business Top-Up Degrees',          url: `${BASE}/courses/business-top-up` },
    { '@type': 'ListItem', position: 8, name: 'Postgraduate Courses',             url: `${BASE}/courses/postgraduate` },
  ],
};

const categories = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Business & Management',
    desc: 'Business Administration, Accounting, Marketing, Finance, HRM, Entrepreneurship, and International Business programmes across UK universities.',
    count: '60+ programmes',
    href: '/courses/business',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/20 hover:border-brand-primary/50',
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: 'IT & Computing',
    desc: 'Computer Science, Software Engineering, Cybersecurity, Data Science, Artificial Intelligence, and Network Engineering.',
    count: '40+ programmes',
    href: '/courses/computing',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    title: 'Health & Social Care',
    desc: 'Nursing, Health Management, Public Health, Social Work, Mental Health, and Healthcare Sciences at partner institutions.',
    count: '35+ programmes',
    href: '/courses/health',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: 'Law',
    desc: 'LLB Law, Law with Business, Law with Criminology, International Law, Criminal Justice, and Legal Practice courses.',
    count: '20+ programmes',
    href: '/courses/law',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: 'Engineering',
    desc: 'Civil, Mechanical, Electrical, Computer Systems, Construction, and Aerospace Engineering at accredited UK universities.',
    count: '25+ programmes',
    href: '/courses/engineering',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Foundation Year',
    desc: 'One-year foundation programmes preparing students without standard qualifications for undergraduate study. Available for UK and international applicants.',
    count: '15+ programmes',
    href: '/courses/foundation',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: 'Business Top-Up Degrees',
    desc: 'One-year Level 6 top-up degrees for students with an HND, Foundation degree, or equivalent. Fast route to a full UK Honours degree.',
    count: '20+ programmes',
    href: '/courses/business-top-up',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100 hover:border-orange-300',
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Postgraduate',
    desc: 'MSc, MBA, MA, and LLM programmes for graduates seeking advanced study in Business, Computing, Law, and Health at UK universities.',
    count: '30+ programmes',
    href: '/courses/postgraduate',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100 hover:border-pink-300',
  },
];

const stats = [
  { label: 'Subject Areas', value: '8+' },
  { label: 'Partner Universities', value: '30+' },
  { label: 'Programmes Listed', value: '250+' },
  { label: 'Free to Apply', value: '100%' },
];

const preparationLinks = [
  {
    icon: CheckCircle2,
    title: 'Am I Eligible?',
    desc: 'Check qualifications against typical entry requirements.',
    href: '/am-i-eligible',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    icon: Wallet,
    title: 'Student Finance UK',
    desc: 'Tuition fee loans and maintenance grants for Home students.',
    href: '/student-finance-uk',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: BookOpen,
    title: 'UCAS Guide',
    desc: 'How the UK university application process works, step by step.',
    href: '/ucas-guide',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function CoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <GraduationCap className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">UK University Courses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Explore UK University Courses
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            Browse undergraduate and postgraduate courses across 8 subject areas at our UK partner
            universities. LSOE advisors match you to the right programme and manage your application
            from start to finish — completely free.
          </p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-10">
            Not sure where to start? Speak to an advisor — we assess your qualifications, suggest
            suitable courses, and support your UCAS or direct application.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/15 rounded-2xl px-4 py-4 text-center">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-brand-secondary hover:text-white transition-all shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Course categories */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Browse by Subject Area
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Select a subject area to see representative programmes and how LSOE can support your application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group flex flex-col bg-white rounded-3xl p-7 border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${cat.border}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${cat.bg} ${cat.color}`}>
                  {cat.icon}
                </div>
                <h2 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-brand-primary transition-colors leading-tight">
                  {cat.title}
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className={`text-xs font-bold ${cat.color}`}>{cat.count}</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-primary">
                    Browse
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audience split — quick links */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Who is this for?</h2>
          <p className="text-slate-500 text-sm mb-8">
            LSOE supports both UK/EU Home students and international students. Your route to university
            may differ depending on your residency status.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/uk-eu-students"
              className="group flex items-start gap-4 p-6 rounded-2xl border-2 border-brand-primary/10 hover:border-brand-primary/40 hover:shadow-md transition-all bg-brand-primary/5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm group-hover:text-brand-primary transition-colors">
                  UK / EU Students
                </p>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                  Student Finance England, flexible study modes, UCAS support — all free.
                </p>
                <span className="inline-flex items-center gap-1 text-brand-primary text-xs font-bold mt-2">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
            <Link
              href="/international-students"
              className="group flex items-start gap-4 p-6 rounded-2xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-md transition-all bg-sky-50/50"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm group-hover:text-sky-700 transition-colors">
                  International Students
                </p>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                  Admissions from abroad, Student Route visa guidance, and accommodation support.
                </p>
                <span className="inline-flex items-center gap-1 text-sky-600 text-xs font-bold mt-2">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Before you apply */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Before you apply</h2>
          <p className="text-slate-500 text-sm mb-8">
            Prepare your application by checking eligibility, understanding funding options, and
            learning how the UCAS system works.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {preparationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-md transition-all bg-slate-50/50 hover:bg-white"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-brand-primary transition-colors">{item.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Found a course you like?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Our advisors shortlist the programmes that match your qualifications and goals,
            then guide your application from start to acceptance — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
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
