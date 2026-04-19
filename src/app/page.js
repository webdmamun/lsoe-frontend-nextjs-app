import AdmissionNav from '@/components/shared/header/AdmissionNav';
import GlobalBanner from '@/components/homeCompo/GlobalBanner/GlobalBanner';
import BannerBottom from '@/components/homeCompo/bannerBottom/BannerBottom';
import ServicesGrid from '@/components/homeCompo/ServicesGrid/ServicesGrid';
import AudienceSplit from '@/components/homeCompo/AudienceSplit/AudienceSplit';
import StudyDestinations from '@/components/homeCompo/studyDestinations/StudyDestinations';
import ComprehensiveSupportWUA from '@/components/WorldUniversityAdmissionCompo/ComprehensiveSupportWUA';
import ReviewsSection from '@/components/homeCompo/Reviews/ReviewsSection';
import BookCTA from '@/components/homeCompo/BookCTA/BookCTA';
import UsefulLinksPreview from '@/components/homeCompo/UsefulLinksPreview/UsefulLinksPreview';
import ReferralProgram from '@/components/homeCompo/ReferralProgram/ReferralProgram';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import FAQSection from '@/components/homeCompo/faqCompo/FAQSection';
import NewsletterSignup from '@/components/homeCompo/newsletterSignup/NewsletterSignup';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import Link from 'next/link';
import {
  Search, ClipboardCheck, UserCheck, GraduationCap, ArrowRight,
  Briefcase, HeartPulse, Monitor, Scale, Cpu, ShieldCheck, Gift,
} from 'lucide-react';

const HOMEPAGE_FAQS = [
  {
    question: 'Is the LSOE admissions service really free?',
    answer:
      'Yes — 100% free. LSOE charges students nothing for its admissions support. Our service is funded by our partner universities, who pay us a referral fee only when a student successfully enrols. You receive full, expert support at absolutely no cost — no hidden fees, no consultancy charges.',
  },
  {
    question: 'Who is eligible for Student Finance England?',
    answer:
      "UK Home students (UK nationals and those with settled status) studying at an approved UK university are typically eligible for a Tuition Fee Loan of up to £9,535 per year and a Maintenance Loan based on household income. Some postgraduate students can also access a Master's Loan of up to £12,167. Our advisors can confirm your exact entitlement during a free consultation.",
  },
  {
    question: 'Can international students apply through LSOE?',
    answer:
      'Absolutely. LSOE supports students from over 15 countries applying to UK universities. We assist with course selection, university shortlisting, application preparation, and the UK Student Route visa process — all at no charge. English language requirements (typically IELTS 6.0) and equivalent academic qualifications are required.',
  },
  {
    question: 'How long does the UK university application process take?',
    answer:
      'The timeline varies by intake. For September entry, most UCAS applications close in January. We recommend starting 3–6 months before your target intake to allow time for document preparation, university offers, and visa processing. Our team will walk you through every step and keep your application on track from start to offer.',
  },
];

export const metadata = {
  title: 'UK University Admissions | London School of Excellence',
  description:
    'Start your UK university journey with expert, 100% free admissions support. UCAS guidance, Student Finance England, Student Route visa advice, and course matching for UK/EU and international students. Trusted by 10,000+ students since 2013.',
  openGraph: {
    title: 'UK University Admissions | London School of Excellence',
    description:
      'Free UK university admissions support for Home and international students — UCAS, Student Route visas, Student Finance, and course matching. Expert guidance since 2013.',
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Admissions | London School of Excellence',
    description:
      'Free UK university admissions for Home and international students. UCAS, visas, Student Finance, and accommodation from LSOE.',
    images: ['/og-image.png'],
  },
};

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Choose Your Course',
      desc: 'Browse 250+ programmes across 8 subject areas and tell us your goals.',
      color: 'text-brand-primary',
      bg: 'bg-brand-primary/10',
    },
    {
      icon: ClipboardCheck,
      step: '02',
      title: 'Check Your Eligibility',
      desc: 'Our advisors assess your qualifications and match you to suitable universities.',
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      icon: UserCheck,
      step: '03',
      title: 'Apply with Our Experts',
      desc: 'We prepare your UCAS or direct application and handle all the paperwork.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: GraduationCap,
      step: '04',
      title: 'Get Your Offer & Enrol',
      desc: 'Receive your university offer and get support right through to enrolment day.',
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-3">
            Step by Step
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Your Path to a UK University —{' '}
            <span className="text-brand-primary">Simple &amp; Guided</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            From choosing your course to collecting your offer letter, LSOE guides every step — completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="relative flex flex-col bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-5xl font-black text-slate-100 select-none leading-none">
                {s.step}
              </span>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${s.bg} ${s.color}`}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Application <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/am-i-eligible"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all"
          >
            Check Your Eligibility
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Popular Courses ───────────────────────────────────────────────────────────
function PopularCourses() {
  const courses = [
    { icon: Briefcase, label: 'Business & Management', href: '/courses/business', color: 'text-brand-primary', bg: 'bg-brand-primary/10', border: 'border-brand-primary/20 hover:border-brand-primary/50' },
    { icon: HeartPulse, label: 'Health & Social Care',  href: '/courses/health',   color: 'text-rose-600',        bg: 'bg-rose-50',           border: 'border-rose-100 hover:border-rose-300' },
    { icon: Monitor,   label: 'IT & Computing',         href: '/courses/computing',color: 'text-sky-600',         bg: 'bg-sky-50',            border: 'border-sky-100 hover:border-sky-300' },
    { icon: Scale,     label: 'Law',                    href: '/courses/law',      color: 'text-amber-600',       bg: 'bg-amber-50',          border: 'border-amber-100 hover:border-amber-300' },
    { icon: Cpu,       label: 'Engineering',            href: '/courses/engineering',color: 'text-teal-600',      bg: 'bg-teal-50',           border: 'border-teal-100 hover:border-teal-300' },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-3">Course Finder</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Popular UK Courses
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            Browse our most in-demand subject areas. Free admissions support available for every programme.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {courses.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 ${c.border}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.bg} ${c.color}`}>
                <c.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-slate-800 group-hover:text-brand-primary text-center leading-tight transition-colors">
                {c.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline text-sm"
          >
            Browse All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Free Service Explanation ──────────────────────────────────────────────────
function FreeServiceExplainer() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'No Consultancy Fees — Ever',
      desc: 'LSOE never charges students for advice, applications, or ongoing support. Our service is always free.',
    },
    {
      icon: Gift,
      title: 'Funded by Partner Institutions',
      desc: 'Our 140+ UK university partners pay us when a student successfully enrols — you pay nothing.',
    },
    {
      icon: UserCheck,
      title: 'Full Support at No Cost',
      desc: 'Course selection, UCAS applications, visa guidance, and accommodation help — all included, all free.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Our Services Are{' '}
            <span className="text-brand-secondary">100% Free</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            We believe no student should have to pay to access expert admissions guidance. Here&apos;s why we can offer this service at no charge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-secondary/20 text-brand-secondary flex items-center justify-center">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-bold hover:bg-brand-secondary/90 transition-all shadow-lg"
          >
            Get Started for Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SeoPathwaysSupport() {
  const links = [
    {
      title: 'Browse UK University Courses',
      desc: 'Explore all available subject areas and progression routes.',
      href: '/courses',
    },
    {
      title: 'UK Student Finance Courses',
      desc: 'Funded UK study options for Home and eligible EU students.',
      href: '/uk-student-finance-courses',
    },
    {
      title: 'Study in the UK for Local Students',
      desc: 'Flexible routes for learners already based in the UK.',
      href: '/study-in-uk-local-students',
    },
    {
      title: 'Free Admission Support UK',
      desc: 'No hidden fees and trusted admissions guidance since 2013.',
      href: '/free-admission-support-uk',
    },
    {
      title: 'Apply for UK Courses',
      desc: 'Step-by-step application support from eligibility to submission.',
      href: '/apply-uk-courses',
    },
  ];

  const trustSignals = [
    'Supporting students since 2013',
    '10,000+ students supported',
    '140+ university partners',
    '100% free consultation',
    'No hidden fees',
  ];

  return (
    <section className="py-16 px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            UK University Admissions, Student Finance, and Free Support
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-3xl mx-auto">
            London School of Excellence supports UK and international pathways with practical admissions help,
            Student Finance guidance, and fully free consultation support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-primary/30 hover:bg-white p-5 transition-all"
            >
              <h3 className="text-sm font-black text-slate-900 group-hover:text-brand-primary transition-colors mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-base-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AdmissionNav />
      <GlobalBanner />
      <HowItWorks />
      <BannerBottom />
      <AudienceSplit />
      <ServicesGrid />
      <PopularCourses />
      <StudyDestinations />
      <FreeServiceExplainer />
      <SeoPathwaysSupport />
      <ComprehensiveSupportWUA />
      <ReviewsSection />
      <ReferralProgram />
      <OurPartners />
      <UsefulLinksPreview />
      <FAQSection />
      <BookCTA variant="pre-footer" />
      <AdmissionFooter />
    </div>
  );
}
