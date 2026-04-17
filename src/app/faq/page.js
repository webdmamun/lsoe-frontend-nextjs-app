import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import Link from 'next/link';
import { ArrowRight, HelpCircle, MessageCircle, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'FAQ — Frequently Asked Questions About LSOE & UK Admissions',
  description:
    'Answers to common questions about London School of Excellence services, UCAS applications, Student Route visa, fees, and how our free admissions support works.',
  openGraph: {
    title: 'FAQ — London School of Excellence',
    description:
      'Common questions about LSOE services, UK university admissions, Student Route visa, and how our free support works.',
    url: '/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FAQ — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — London School of Excellence',
    description:
      'Answers to common questions about LSOE services, UK university admissions, visas, and free admissions support.',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    category: 'About LSOE',
    items: [
      {
        q: 'What does London School of Excellence do?',
        a: 'LSOE is a free UK university admissions consultancy based in London. We help Home (UK and EU) and international students apply to UK universities. Our services include UCAS guidance, personal statement support, Student Finance advice, Student Route visa guidance, and accommodation support.',
      },
      {
        q: 'Is LSOE free to use?',
        a: 'Yes. Our admissions support is completely free for students. We are funded through our institutional partnerships, not by charging students.',
      },
      {
        q: 'Where is LSOE based?',
        a: 'We are based in Elm Park, London (RM12 5AB). We offer both in-person consultations at our office and remote consultations via phone or video call.',
      },
      {
        q: 'How long has LSOE been operating?',
        a: 'LSOE has been providing admissions support since 2013, helping thousands of students gain places at UK universities.',
      },
    ],
  },
  {
    category: 'Admissions & Applications',
    items: [
      {
        q: 'Can you help me apply to any UK university?',
        a: 'We work with a wide network of UK universities and colleges. During your consultation, we will advise on which institutions are the best match for your qualifications and goals.',
      },
      {
        q: 'Do I need to come to your office?',
        a: 'No. We work with students remotely by email, phone, and video call. Many of our international students complete their full application journey without visiting our office.',
      },
      {
        q: 'What is the UCAS application system?',
        a: 'UCAS (Universities and Colleges Admissions Service) is the centralised online system for applying to UK undergraduate programmes. You can apply to up to 5 courses per cycle. We guide you through the entire UCAS process. See our <a href="/ucas-guide" class="text-brand-primary underline font-bold">UCAS Guide</a> for a step-by-step walkthrough.',
      },
      {
        q: 'What qualifications do I need to apply?',
        a: 'Requirements vary by course and university. As a general guide, UK applicants typically need A-Levels, BTEC, or equivalent Level 3 qualifications. International students are assessed on their home country qualifications. See our <a href="/am-i-eligible" class="text-brand-primary underline font-bold">Am I Eligible?</a> page for more detail.',
      },
    ],
  },
  {
    category: 'Student Finance & Fees',
    items: [
      {
        q: 'Who qualifies for Student Finance England?',
        a: 'UK Home students and some EU students with settled or pre-settled status may qualify. You must be starting your first undergraduate degree at an eligible institution. See our <a href="/student-finance-uk" class="text-brand-primary underline font-bold">Student Finance UK</a> page for full details.',
      },
      {
        q: 'Do international students get Student Finance?',
        a: 'International students from outside the UK and EU generally do not qualify for Student Finance England. Some universities offer international scholarships and bursaries. Our team advises on funding options during consultations.',
      },
      {
        q: 'When do student loan repayments start?',
        a: 'Repayments only start after you graduate and earn above the income threshold (currently £25,000 per year for Plan 5 loans). Repayments are 9% of income above that threshold.',
      },
    ],
  },
  {
    category: 'Visas & International Students',
    items: [
      {
        q: 'What visa do international students need?',
        a: 'Most international students need a Student Route visa (formerly Tier 4). You will need a Confirmation of Acceptance for Studies (CAS) from your university, proof of funds, and English language proof. We guide you through the full visa process.',
      },
      {
        q: 'Can I work while studying in the UK?',
        a: 'Student Route visa holders can usually work up to 20 hours per week during term time and full-time during holidays. The exact allowance depends on your course level.',
      },
      {
        q: 'How long does the visa process take?',
        a: 'Standard Student Route visa processing takes approximately 3 weeks from outside the UK, and can be faster with a priority service. We advise on timelines during your consultation.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-amber-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.12),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            FAQ — Common Questions About UK University Admissions
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Quick answers to the questions we hear most often from students and families.
            If your question is not covered here,{' '}
            <Link href="/contact-us" className="text-amber-300 underline font-bold hover:text-white">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-200">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.q} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-sm mb-2 leading-relaxed">{item.q}</h3>
                    <p
                      className="text-slate-500 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Student Finance UK', href: '/student-finance-uk' },
              { title: 'Am I Eligible?', href: '/am-i-eligible' },
              { title: 'UCAS Guide', href: '/ucas-guide' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:bg-white transition-all group"
              >
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{link.title}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/70 mb-8">
            Our advisors respond within one working day. There is no obligation and no charge.
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
