import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { Monitor, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/courses/computing' },
  title: 'IT & Computing Courses at UK Universities',
  description:
    'Explore Computer Science, Software Engineering, Cybersecurity, Data Science, and AI undergraduate programmes at UK universities. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'IT & Computing Courses at UK Universities — LSOE',
    description:
      'Undergraduate IT and Computing courses at UK universities — Computer Science, Software Engineering, Cybersecurity, AI, and more. Free support from LSOE.',
    url: '/courses/computing',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'IT & Computing Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT & Computing Courses at UK Universities — LSOE',
    description: 'Browse IT & Computing undergraduate courses at UK universities with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Computer Science (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Algorithms, data structures, programming paradigms, and software systems. Core grounding for software development careers.',
  },
  {
    title: 'Software Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3–4 years (with placement)',
    desc: 'Software design patterns, agile development, testing, and deployment. Emphasis on engineering principles and team-based projects.',
  },
  {
    title: 'Cybersecurity (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Network security, ethical hacking, cryptography, digital forensics, and incident response. High graduate demand from public and private sectors.',
  },
  {
    title: 'Data Science and Analytics (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Statistical modelling, Python, machine learning, database management, and data visualisation. Strong quantitative focus.',
  },
  {
    title: 'Artificial Intelligence (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Machine learning, neural networks, natural language processing, and AI ethics. One of the fastest-growing UK degree subjects.',
  },
  {
    title: 'Information Technology Management (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'IT governance, project management, systems analysis, and enterprise architecture. Bridges technical and business skills.',
  },
  {
    title: 'Network Engineering (BEng Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Networking protocols, cloud infrastructure, network security, and telecommunications. Aligned with CCNA and CompTIA content.',
  },
  {
    title: 'Games Design (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Game mechanics, 3D modelling, Unity and Unreal Engine, interactive narrative, and user experience in gaming contexts.',
  },
];

const relatedCategories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'Law', href: '/courses/law' },
  { name: 'Health & Social Care', href: '/courses/health' },
];

export default function ComputingCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'IT & Computing', href: '/courses/computing' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-sky-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">IT & Computing</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Monitor className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-bold text-white">40+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            IT & Computing Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Computing and technology degrees lead to some of the best-paid graduate careers in the UK.
            From Computer Science to Cybersecurity, LSOE helps you identify the right programme and
            secure your university place — for free.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-8">
            If you are already in the UK, compare{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-sky-300">local study pathways</Link>{' '}
            and check <Link href="/uk-student-finance-courses" className="font-bold text-white underline hover:text-sky-300">Student Finance-linked course routes</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply-now" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-sky-700 rounded-full font-bold hover:bg-sky-50 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
              <MessageCircle className="w-4 h-4" /> Ask an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Available IT & Computing Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Representative selection of IT and Computing programmes at LSOE partner universities.
            Specific modules and entry requirements vary by institution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full">{c.level}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{c.duration}</span>
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
              'A-Levels: Typically BCC–ABB (Maths or Computing at A-Level is advantageous)',
              'BTEC: Merit Merit Merit (MMM) or Distinction Merit Merit (DMM) equivalent',
              'Access to HE: 60 credits, typically 30 at Distinction and 30 at Merit',
              'International: Equivalent qualifications assessed — LSOE guides you through this',
              'English language: IELTS 5.5–6.0 overall for most programmes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
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
              <Link key={cat.href} href={cat.href} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-sm transition-all group">
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{cat.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to apply for a Computing course?</h2>
          <p className="text-white/70 mb-8">Our advisors match your profile to the right IT programme and guide your UCAS application — completely free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
