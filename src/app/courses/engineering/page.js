import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { Cpu, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/courses/engineering' },
  title: 'Engineering Courses at UK Universities',
  description:
    'Explore Civil, Mechanical, Electrical, Computer Systems, and Aerospace Engineering undergraduate programmes at UK universities. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'Engineering Courses at UK Universities — London School of Excellence',
    description:
      'Undergraduate Engineering programmes at UK universities — Civil, Mechanical, Electrical, and more. Free admissions support from LSOE.',
    url: '/courses/engineering',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Engineering Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Courses at UK Universities — LSOE',
    description: 'Browse Engineering undergraduate courses at UK universities with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Civil Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time',
    desc: 'Structural analysis, geotechnics, hydraulics, and construction management. Accredited by the Institution of Civil Engineers (ICE) at many UK universities.',
  },
  {
    title: 'Mechanical Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time',
    desc: 'Thermodynamics, fluid mechanics, materials science, and manufacturing processes. Strong foundation for engineering product design and manufacturing careers.',
  },
  {
    title: 'Electrical and Electronic Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time',
    desc: 'Circuit design, power systems, signal processing, and embedded systems. High demand in energy, telecommunications, and automotive sectors.',
  },
  {
    title: 'Computer Systems Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time',
    desc: 'Combines hardware and software engineering: microprocessors, embedded systems, robotics, and real-time operating systems.',
  },
  {
    title: 'Construction Engineering Management (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time / Part-time',
    desc: 'Project planning, cost management, contract law, and site supervision. Aligned with Chartered Institute of Building (CIOB) standards.',
  },
  {
    title: 'Environmental Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time',
    desc: 'Sustainable infrastructure, waste management, water treatment, and environmental impact assessment. Growing demand across public and private sectors.',
  },
  {
    title: 'Aerospace Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3–4 years (with placement)',
    mode: 'Full-time',
    desc: 'Aerodynamics, propulsion, avionics, and aircraft structures. Typically requires strong A-Level Maths and Physics grades.',
  },
  {
    title: 'Engineering Management (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    mode: 'Full-time / Part-time',
    desc: 'Technical engineering fundamentals combined with business management, operations, and project leadership skills.',
  },
];

const relatedCategories = [
  { name: 'IT & Computing',      href: '/courses/computing' },
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'Foundation Year',     href: '/courses/foundation' },
];

export default function EngineeringCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Engineering', href: '/courses/engineering' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-teal-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Engineering</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Cpu className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-bold text-white">25+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Engineering Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Engineering graduates are among the highest earners in the UK. From Civil to Aerospace,
            LSOE advisors help you identify an accredited programme that matches your qualifications
            and supports your career goals — free of charge.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-8">
            Explore <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-teal-300">local UK study routes</Link>{' '}
            and <Link href="/uk-student-finance-courses" className="font-bold text-white underline hover:text-teal-300">Student Finance course pathways</Link>{' '}
            before applying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-800 rounded-full font-bold hover:bg-teal-50 transition-all"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Ask an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Available Engineering Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Representative selection of Engineering programmes at LSOE partner universities.
            Specific modules, accreditation, and entry requirements vary by institution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">{c.level}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{c.duration}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">{c.mode}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry requirements */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Entry Requirements</h2>
          <ul className="space-y-3 mb-6">
            {[
              'A-Levels: Typically BBC–AAB; Maths and/or Physics often required or preferred',
              'BTEC: Distinction Merit Merit (DMM) in relevant subject areas',
              'Access to HE: 60 credits with a strong Science or Technology profile',
              'T-Levels: Engineering or Digital T-Level accepted at many institutions',
              'International: Equivalent qualifications assessed — LSOE guides you through this',
              'English language: IELTS 5.5–6.0 overall for most Engineering programmes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Entry requirements vary by institution and programme. LSOE advisors confirm exact requirements during your free consultation.
          </p>
          <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-4">
            <Link href="/am-i-eligible" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <CheckCircle2 className="w-3.5 h-3.5" /> Check if I&apos;m eligible
            </Link>
            <Link href="/ucas-guide" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <BookOpen className="w-3.5 h-3.5" /> UCAS application guide
            </Link>
            <Link href="/student-finance-uk" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <Wallet className="w-3.5 h-3.5" /> Student Finance UK
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Other Subject Areas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-sm transition-all group"
              >
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{cat.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to apply for an Engineering programme?
          </h2>
          <p className="text-white/70 mb-8">
            Our advisors assess your qualifications, suggest accredited programmes, and guide your application — free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply/uk-eu" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-800 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              UK / EU Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apply/international" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              International Application
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
