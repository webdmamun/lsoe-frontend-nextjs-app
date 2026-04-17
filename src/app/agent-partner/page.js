import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight,
  Handshake,
  CheckCircle2,
  Wallet,
  Users,
  Zap,
  LifeBuoy,
  Globe2,
  ShieldCheck,
  ClipboardList,
  UserCheck,
  Send,
  BadgeCheck,
  Building2,
  Clock,
  Star,
} from 'lucide-react';

const CRM_URL = 'https://app.londonschoolofexcellence.com/apply-for-agent';

export const metadata = {
  title: 'Become an Agent Partner — LSOE Recruitment Partnership Programme',
  description:
    'Join the London School of Excellence agent partner network. Earn commission placing students into UK universities. Fast approval, dedicated support, and access to 30+ UK partner institutions.',
  openGraph: {
    title: 'Become an Agent Partner — London School of Excellence',
    description:
      'Earn commission by placing Home and international students into UK universities through LSOE. Apply online — fast processing and dedicated relationship manager.',
    url: '/agent-partner',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agent Partner — London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become an Agent Partner — London School of Excellence',
    description:
      'Join the LSOE agent partner network. Commission on every enrolment, fast processing, and 30+ UK university partnerships.',
    images: ['/og-image.png'],
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { icon: <Star className="w-5 h-5" />,     value: 'Since 2013',   label: 'Established in London' },
  { icon: <Building2 className="w-5 h-5" />, value: '30+',          label: 'UK Partner Universities' },
  { icon: <Clock className="w-5 h-5" />,     value: '48 hours',     label: 'Application Processing' },
  { icon: <Globe2 className="w-5 h-5" />,    value: 'Global',       label: 'Agent Network' },
];

const whoCanApply = [
  { icon: <Globe2 className="w-5 h-5" />,    label: 'Independent education consultants and counsellors' },
  { icon: <Users className="w-5 h-5" />,     label: 'Student recruitment agencies (domestic and international)' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Schools and colleges with outbound student placement programmes' },
  { icon: <Handshake className="w-5 h-5" />, label: 'International education agencies and counselling organisations' },
  { icon: <BadgeCheck className="w-5 h-5" />, label: 'Career advisors and guidance professionals working with university applicants' },
];

const benefits = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Competitive Commission',
    desc: 'Earn a competitive commission for every student you successfully place into a UK university through LSOE. Commission is paid on confirmed enrolment.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: 'Dedicated Relationship Manager',
    desc: 'Every approved agent partner is assigned a dedicated LSOE relationship manager — a single point of contact for all student submissions and queries.',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    highlight: true,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Application Processing',
    desc: 'Student applications submitted through the agent portal are reviewed within 48 hours. We keep both you and your student updated at every stage.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: '30+ UK Partner Institutions',
    desc: "Access LSOE's established network of UK universities and colleges. We place students across London and the wider UK in a broad range of undergraduate programmes.",
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Marketing Support',
    desc: 'Approved agent partners receive promotional materials, branded resources, and guidance on how to present LSOE services to prospective students in your region.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Real-Time Student Tracking',
    desc: 'Track every student application you submit through the LSOE CRM portal. See offer status, conditions, and next steps in real time.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const requirements = [
  'Proven experience in student recruitment, education counselling, or a related field',
  'Active student pipeline or an established network of prospective university applicants',
  'Ability to source, prepare, and submit complete student application documents',
  'Commitment to compliance with UK immigration, UCAS, and university requirements',
  'Professional communication standards and responsiveness to LSOE correspondence',
  'Willingness to operate transparently within the agreed commission and referral framework',
];

const steps = [
  {
    step: '1',
    title: 'Submit Your Agent Application',
    desc: 'Complete the LSOE agent application form in the CRM. Provide details about your experience, the regions you operate in, and the types of students you work with.',
    icon: <Send className="w-5 h-5" />,
  },
  {
    step: '2',
    title: 'Profile Review by Our Partnerships Team',
    desc: 'Our partnerships team reviews your application within 2–3 working days. We may contact you with follow-up questions to understand your student pipeline better.',
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    step: '3',
    title: 'Approval and Agent Agreement',
    desc: 'If approved, you receive a formal agent agreement outlining commission rates, submission processes, and conduct expectations. You also receive your CRM access credentials.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    step: '4',
    title: 'Submit Student Applications',
    desc: 'Use the LSOE CRM portal to submit student applications on behalf of your clients. Our team processes each submission and keeps you updated throughout.',
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    step: '5',
    title: 'Earn Commission on Enrolments',
    desc: 'Once your referred student is confirmed enrolled at a UK university through LSOE, your commission is calculated and paid according to the agreed schedule.',
    icon: <Wallet className="w-5 h-5" />,
  },
];

const faqs = [
  {
    q: 'How much commission do LSOE agent partners earn?',
    a: 'Commission rates are discussed and agreed during the agent approval process. Rates are competitive and based on the volume and type of student placements. Contact our partnerships team for full details after submitting your application.',
  },
  {
    q: 'Can agents outside the UK apply to the programme?',
    a: 'Yes. Our agent partner programme is open to education professionals and agencies globally. We work with agents across Asia, Africa, the Middle East, Europe, and beyond who place students into UK universities.',
  },
  {
    q: 'How long does the approval process take?',
    a: 'Our partnerships team reviews all agent applications within 2–3 working days. If your profile meets our requirements, you will receive an agent agreement and CRM access credentials promptly.',
  },
  {
    q: 'What types of students can I submit through LSOE?',
    a: 'LSOE supports both Home (UK/EU) and international students applying for undergraduate programmes at UK universities and colleges. Students applying through the Student Route visa are also welcomed.',
  },
  {
    q: 'Is there a minimum number of students I must submit?',
    a: 'There is no strict minimum to maintain your agent status, but we do expect active engagement. Agents who consistently submit qualified students receive priority support and enhanced commission structures.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AgentPartnerPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Agent Partner', href: '/agent-partner' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.18),transparent_60%)]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-7">
            <Handshake className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Agent Partnership Programme</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Become an Agent Partner with<br className="hidden sm:block" />
            London School of Excellence
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            LSOE works with a global network of education agents, sub-agents, and recruitment
            partners who place Home and international students into UK universities.
            If you recruit students, we want to work with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-bold text-base shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Apply as Agent Partner
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/partner-institutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/20 transition-all duration-300"
            >
              Our Partner Universities
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center gap-1.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 text-brand-secondary flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-white font-black text-xl leading-none">{s.value}</span>
              <span className="text-slate-400 text-xs leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who Can Apply ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Who Can Apply?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Our agent partner programme is open to professionals and organisations who actively
              recruit or counsel students applying to UK higher education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoCanApply.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 bg-white rounded-2xl px-6 py-5 border border-slate-100 shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commission Highlight ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 mb-4">
                <Wallet className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-bold">Commission Structure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                Earn on every confirmed enrolment
              </h2>
              <p className="text-white/75 text-base leading-relaxed max-w-md">
                Competitive commission rates are agreed per agent during the approval process.
                Commission is paid on confirmed student enrolment — no upfront fees, no hidden charges.
                Rates vary based on programme type and placement volume.
              </p>
            </div>
            <div className="relative z-10 shrink-0 flex flex-col items-center gap-3 text-center">
              <div className="bg-white/15 border border-white/20 rounded-2xl px-8 py-6">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Commission paid</p>
                <p className="text-white font-black text-2xl">Per Enrolment</p>
                <p className="text-white/60 text-xs mt-1">Transparent, agreed in advance</p>
              </div>
              <a
                href={CRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-primary rounded-full font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
              >
                Apply to Learn Rates
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Why Partner with LSOE?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              We make it straightforward for agents to submit students, track progress,
              and earn commission — with real support at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`rounded-3xl p-7 border ${
                  b.highlight
                    ? 'bg-white border-brand-primary/20 shadow-lg shadow-brand-primary/5 ring-1 ring-brand-primary/10 relative'
                    : 'bg-white border-slate-100'
                }`}
              >
                {b.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      Most Valued
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${b.bg} ${b.color}`}>
                  {b.icon}
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              What We Look For in Agent Partners
            </h2>
            <p className="text-slate-500 text-base">
              We approve agent partners who demonstrate professionalism, experience, and genuine
              capacity to place students into UK higher education.
            </p>
          </div>

          <ul className="space-y-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3 bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium text-sm leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              How the Agent Partnership Works
            </h2>
            <p className="text-slate-500 text-base">
              From application to commission — here is what to expect when you join the LSOE network.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-lg shadow-md">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-2 min-h-[2.5rem]" />
                  )}
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-primary">{s.icon}</span>
                    <h3 className="font-black text-slate-900 text-base">{s.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent FAQ ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Agent Partner FAQ
            </h2>
            <p className="text-slate-500 text-base">
              Common questions from agents considering the LSOE partnership programme.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-slate-900 text-sm hover:text-brand-primary transition-colors">
                  {faq.q}
                  <span className="shrink-0 w-6 h-6 rounded-full bg-slate-200 group-open:bg-brand-primary/10 flex items-center justify-center transition-colors">
                    <svg
                      className="w-3 h-3 text-slate-500 group-open:text-brand-primary transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-4">Have a different question?</p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:underline"
            >
              Contact our partnerships team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-brand-primary py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Handshake className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Ready to Join?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
            Apply as an Agent Partner Today
          </h2>
          <p className="text-white/70 text-lg mb-4 leading-relaxed">
            Our partnerships team reviews applications within 2–3 working days.
            Complete the form in our CRM and start placing students into UK universities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-white/60 text-xs">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-white/50" /> No upfront fees</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-white/50" /> Commission on enrolment</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-white/50" /> 2–3 day review</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-brand-primary rounded-full font-bold text-base shadow-xl hover:bg-slate-100 transition-colors"
            >
              Apply as Agent Partner
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/20 transition-all"
            >
              Contact Our Partnerships Team
            </Link>
          </div>
          <p className="mt-8 text-white/40 text-sm">
            Already a partner?{' '}
            <a
              href="https://app.londonschoolofexcellence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline transition-colors"
            >
              Log in to the CRM
            </a>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
