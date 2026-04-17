import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight, ExternalLink, CheckCircle2, ChevronRight,
  Briefcase, Globe2, Users, Zap, Shield, Clock, Star,
  BadgeCheck, TrendingUp, MessageCircle,
} from 'lucide-react';

const CRM_URL = 'https://app.londonschoolofexcellence.com/apply-for-agent';

export const metadata = {
  title: 'Become an Agent — Join the LSOE UK University Admissions Network',
  description:
    'Apply to become a registered agent with London School of Excellence. Earn commission placing students into UK universities. Education consultants, agencies, and freelance recruiters welcome.',
  alternates: { canonical: 'https://www.londonschoolofexcellence.com/become-an-agent' },
  openGraph: {
    title: 'Become an Agent with London School of Excellence',
    description:
      'Join our UK university admissions agent network. Earn commission, access 30+ partner universities, and receive dedicated support. Apply online today.',
    url: '/become-an-agent',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Become an Agent — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become an Agent — London School of Excellence',
    description: 'Join the LSOE agent network. Earn commission placing students into UK universities. Apply as an education agent today.',
    images: ['/og-image.png'],
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const whyJoin = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Commission on Every Enrolment',
    desc: 'Earn a competitive commission for every student you successfully place into a UK university through our network.',
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: '30+ UK Partner Universities',
    desc: 'Access a broad network of UK universities and colleges across London and nationally — giving students more choice.',
    bg: 'bg-sky-50',
    color: 'text-sky-600',
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: 'Dedicated Support & Training',
    desc: 'Your dedicated relationship manager helps you place students correctly, understand entry requirements, and manage the process.',
    bg: 'bg-brand-primary/10',
    color: 'text-brand-primary',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Application Processing',
    desc: 'Verified agent applications are typically reviewed and responded to within 48 hours. Approved agents are onboarded quickly.',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'No Upfront Fees',
    desc: 'There are no sign-up costs or annual fees. You earn when your students successfully enrol — a genuine performance model.',
    bg: 'bg-purple-50',
    color: 'text-purple-600',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Long-Term Partnership',
    desc: 'We build lasting relationships with agents who consistently deliver well-matched, quality students — with recognition and rewards for top performers.',
    bg: 'bg-rose-50',
    color: 'text-rose-500',
  },
];

const whoCanApply = [
  { label: 'Education consultants and advisers', icon: <Briefcase className="w-5 h-5" /> },
  { label: 'Established recruitment agencies', icon: <Users className="w-5 h-5" /> },
  { label: 'Freelance student recruiters', icon: <Globe2 className="w-5 h-5" /> },
  { label: 'Training centres and counselling organisations', icon: <BadgeCheck className="w-5 h-5" /> },
  { label: 'International education recruitment partners', icon: <TrendingUp className="w-5 h-5" /> },
];

const requirements = [
  'Experience in student recruitment, education counselling, or a related field',
  'An active student network or ability to reach prospective UK university applicants',
  'Good communication skills in English (additional languages are an advantage)',
  'Familiarity with the UK higher education system or willingness to learn',
  'Commitment to placing students in genuinely suitable programmes',
];

const steps = [
  {
    step: '01',
    title: 'Submit Your Application',
    desc: 'Complete the online application form via our CRM. Tell us about your background, location, and the types of students you work with.',
  },
  {
    step: '02',
    title: 'Team Review',
    desc: 'Our partnerships team reviews your application within 48 hours. We may reach out with a few questions to understand your network better.',
  },
  {
    step: '03',
    title: 'Approval & Onboarding',
    desc: 'Approved agents receive a welcome pack, access to our agent portal, and an introduction to your dedicated relationship manager.',
  },
  {
    step: '04',
    title: 'Start Placing Students',
    desc: 'Submit student applications, track progress in real time, and earn commission on every confirmed enrolment — no cap.',
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────
export default function BecomeAnAgentPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Opportunities', href: '/useful-links' },
        { name: 'Become an Agent', href: '/become-an-agent' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary overflow-hidden pt-40 pb-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/useful-links" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Become an Agent</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Briefcase className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Agent Programme</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-5">
            Become an Agent with<br className="hidden sm:block" /> London School of Excellence
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
            Join our trusted UK university admissions agent network. Earn commission on every confirmed
            student enrolment, access 30+ partner universities, and receive dedicated support throughout —
            with no upfront fees.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-bold text-base shadow-lg hover:brightness-110 transition-all"
            >
              Apply as an Agent
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-white border-b border-gray-100 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: 'Since 2013', label: 'UK admissions experience' },
            { stat: '30+',        label: 'Partner universities' },
            { stat: '48 hrs',     label: 'Average review time' },
            { stat: '£0',         label: 'Upfront fees' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">{item.stat}</p>
              <p className="text-slate-500 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why join us ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Why Join the LSOE Agent Network?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build long-term, performance-based partnerships with agents who share our commitment
              to genuine student outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${benefit.bg} ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who can apply ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 text-center">
            Who Can Apply?
          </h2>
          <p className="text-slate-500 text-center mb-10 text-sm">
            We welcome applications from a range of education and recruitment professionals.
          </p>
          <div className="space-y-3">
            {whoCanApply.map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-slate-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs text-center mt-6">
            Not sure if you qualify? <Link href="/contact-us" className="text-brand-primary font-bold hover:underline">Contact us</Link> and we'll advise you.
          </p>
        </div>
      </section>

      {/* ── What you need ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 text-center">
            What We Look For
          </h2>
          <p className="text-slate-500 text-center mb-10 text-sm">
            We do not expect perfection — but we do look for agents who are genuinely committed to helping students.
          </p>
          <ul className="space-y-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              How the Agent Application Works
            </h2>
            <p className="text-slate-500 text-sm">Simple, fast, and transparent — from application to your first referral.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-black text-brand-primary/10 mb-3 leading-none">{s.step}</div>
                <h3 className="text-base font-black text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ teaser ── */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-slate-900 mb-6 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Is there a fee to join the agent programme?',
                a: 'No. There are no sign-up fees, annual subscription costs, or retainer fees. You earn commission only when a student you refer successfully enrols.',
              },
              {
                q: 'How is commission calculated and paid?',
                a: 'Commission is calculated per confirmed enrolment. Rates and payment terms are provided during the onboarding process after your application is approved.',
              },
              {
                q: 'Can I apply from outside the UK?',
                a: 'Yes. We work with international agents in many countries. You do not need to be based in the UK to join the network.',
              },
              {
                q: 'How long does the approval process take?',
                a: 'We aim to review all agent applications within 48 hours. Complex cases may take slightly longer. You will receive a response by email.',
              },
            ].map((item) => (
              <details key={item.q} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-slate-800 text-sm list-none">
                  {item.q}
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-3" />
                </summary>
                <div className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-primary py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Join the LSOE Agent Network?
          </h2>
          <p className="text-white/70 mb-3 text-lg leading-relaxed">
            Submit your agent application through our secure online form. Our team will review
            and respond within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm text-white/60">
            {['No upfront fees', 'Commission on enrolment', '48-hour review', 'Dedicated support'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply as an Agent
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask a Question First
            </Link>
          </div>
          <p className="mt-8 text-white/50 text-sm">
            Also see:{' '}
            <Link href="/refer-and-earn" className="text-white/70 hover:text-white underline">Refer &amp; Earn</Link>
            {' · '}
            <Link href="/partner-institutions" className="text-white/70 hover:text-white underline">Partner Institutions</Link>
            {' · '}
            <Link href="/useful-links" className="text-white/70 hover:text-white underline">All Resources</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
