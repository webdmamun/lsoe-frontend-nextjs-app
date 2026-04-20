/**
 * /courses/[category]/[slug] — Course detail page (Phase 12 — SEO enrichment)
 *
 * Sections (in order):
 *   JSON-LD (Course + BreadcrumbList + FAQPage)
 *   Breadcrumb bar → Hero + info cards
 *   Body (2/3 + 1/3):
 *     Left: Why Study · About · Entry Requirements · Career Opportunities
 *           · Progression Pathways · Where Can You Study · Available Intakes
 *           · Before You Apply · Related Courses
 *     Right: Sticky Apply card
 *   FAQ section (full-width)
 *   Bottom CTA banner
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Clock, GraduationCap, MapPin,
  Building2, CalendarDays, ChevronRight, Briefcase, TrendingUp,
  Lightbulb, Globe2,
} from 'lucide-react';

import AdmissionNav    from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

import { getAllParams, getCourseBySlug, getCoursesByCategory } from '@/lib/courses/courseService';
import {
  generateCourseMetadata, getCourseSchema, getCourseBreadcrumbSchema,
  getCategoryLabel, getCategoryPath,
  CAREER_OUTCOMES, PROGRESSION_PATHS, WHY_STUDY, STUDY_LOCATIONS,
  buildCourseFAQ, getFAQSchema,
} from '@/lib/courses/courseHelpers';

// ── Static params ──────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return await getAllParams();
}
export const dynamicParams = false;

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const course = await getCourseBySlug(category, slug);
  if (!course) return { title: 'Course Not Found' };
  return generateCourseMetadata(course);
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function CourseDetailPage({ params }) {
  const { category, slug } = await params;

  const [course, allInCategory] = await Promise.all([
    getCourseBySlug(category, slug),
    getCoursesByCategory(category),
  ]);

  if (!course) notFound();

  const categoryLabel = getCategoryLabel(category);
  const categoryPath  = getCategoryPath(category);

  const isInternationalFocused = ['postgraduate', 'foundation'].includes(category);
  const applyPath  = isInternationalFocused ? '/apply/international' : '/apply/uk-eu';
  const applyLabel = isInternationalFocused ? 'Apply as International Student' : 'Apply as UK / EU Student';

  // ── Schemas ────────────────────────────────────────────────────────────────
  const courseSchema     = getCourseSchema(course);
  const breadcrumbSchema = getCourseBreadcrumbSchema(category, course.title, slug);
  const faqs             = buildCourseFAQ(course, category);
  const faqSchema        = getFAQSchema(faqs);

  // ── Info bar ───────────────────────────────────────────────────────────────
  const infoCards = [
    { icon: GraduationCap, label: 'Qualification',  value: course.qualificationLevel },
    { icon: Clock,         label: 'Duration',        value: course.duration },
    { icon: Building2,     label: 'Study Mode',      value: course.studyMode },
    { icon: MapPin,        label: 'City',            value: course.city },
    { icon: CalendarDays,  label: 'Intakes',         value: course.intakeMonths?.join(' · ') },
  ].filter((c) => c.value);

  // ── Enrichment data ────────────────────────────────────────────────────────
  const careers     = CAREER_OUTCOMES[category]   ?? [];
  const progression = PROGRESSION_PATHS[category];
  const whyStudy    = WHY_STUDY[category]         ?? [];
  const locations   = STUDY_LOCATIONS[category];
  const related     = allInCategory.filter((c) => c.slug !== slug).slice(0, 3);

  // Intake descriptions
  const intakeDescriptions = {
    September: 'Main intake — the largest cohort each year, with full programme availability.',
    January:   'Spring intake — ideal for students who miss the September deadline.',
    April:     'Late spring intake — available at select universities for specific programmes.',
    May:       'Late spring intake — available at select universities for specific programmes.',
    June:      'Summer intake — limited availability; check with your LSOE adviser.',
  };

  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AdmissionNav />

      <main>
        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
                <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
                <li><Link href="/courses" className="hover:text-slate-300 transition-colors">Courses</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
                <li><Link href={categoryPath} className="hover:text-slate-300 transition-colors">{categoryLabel}</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
                <li className="text-slate-400 font-medium truncate max-w-[220px]">{course.title}</li>
              </ol>
            </nav>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-secondary mb-4">
              {categoryLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              {course.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={applyPath}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-primary text-white rounded-full font-bold text-sm hover:bg-brand-primary/90 transition-all"
              >
                {applyLabel} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all"
              >
                Speak to an Adviser
              </Link>
            </div>
          </div>
        </section>

        {/* ── Info bar ── */}
        <section className="bg-white border-b border-gray-100 py-6 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {infoCards.map((card) => (
              <div key={card.label} className="bg-slate-50 rounded-xl p-4 text-center border border-gray-100">
                <card.icon className="w-5 h-5 mx-auto mb-2 text-brand-primary" />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{card.label}</p>
                <p className="text-slate-800 text-sm font-semibold leading-tight">{card.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Body — 2/3 + 1/3 grid ── */}
        <section className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left: main content ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Why Study This Course in the UK */}
            {whyStudy.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h2 className="text-xl font-black text-slate-800">Why Study This Course in the UK?</h2>
                </div>
                <ul className="space-y-3">
                  {whyStudy.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-sm leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* About This Programme */}
            <div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">About This Programme</h2>
              <p className="text-slate-600 leading-relaxed">{course.shortDescription}</p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                London School of Excellence provides free admissions guidance for this programme.
                We help you choose the right UK partner university, prepare your application, and
                meet all entry requirements — at no cost to you.
              </p>
            </div>

            {/* Entry Requirements */}
            {course.entryRequirements && (
              <div>
                <h2 className="text-2xl font-black text-slate-800 mb-4">Entry Requirements</h2>
                <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6">
                  <p className="text-slate-700 leading-relaxed">{course.entryRequirements}</p>
                  <p className="text-slate-500 text-sm mt-4">
                    Not sure if you qualify?{' '}
                    <Link href="/am-i-eligible" className="text-brand-primary font-semibold hover:underline">
                      Check your eligibility →
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {/* Career Opportunities */}
            {careers.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-brand-primary" />
                  <h2 className="text-xl font-black text-slate-800">Career Opportunities</h2>
                </div>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  Graduates from {categoryLabel} programmes go on to work across a wide range of industries
                  in the UK and internationally. Below are some of the most common career destinations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careers.map((role) => (
                    <div key={role} className="flex items-center gap-3 bg-slate-50 border border-gray-100 rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progression Pathways */}
            {progression && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  <h2 className="text-xl font-black text-slate-800">Progression Pathways</h2>
                </div>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{progression.intro}</p>
                <div className="space-y-3">
                  {progression.paths.map((path) => (
                    <div key={path.label} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 text-sm">{path.label}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{path.desc}</p>
                      </div>
                      {path.href && (
                        <Link href={path.href} className="shrink-0 text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                          Explore <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Where Can You Study */}
            {locations && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="w-5 h-5 text-sky-500" />
                  <h2 className="text-xl font-black text-slate-800">Where Can You Study This Course?</h2>
                </div>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  {categoryLabel} programmes are available at LSOE partner universities across multiple UK cities.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {locations.cities.map((city) => (
                    <span key={city} className="inline-flex items-center gap-1.5 bg-slate-50 border border-gray-100 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                      {city}
                    </span>
                  ))}
                </div>
                <div className="bg-brand-primary/5 border border-brand-primary/15 rounded-xl p-4 space-y-2">
                  <p className="text-slate-700 text-sm leading-relaxed">{locations.highlight}</p>
                  <p className="text-slate-500 text-xs">{locations.institutionNote}</p>
                </div>
              </div>
            )}

            {/* Available Intakes */}
            {course.intakeMonths?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-xl font-black text-slate-800">Available Intakes</h2>
                </div>
                <p className="text-slate-500 text-sm mb-5">
                  The following intake periods are available for this programme at LSOE partner universities.
                  Availability varies by institution — your adviser will confirm exact dates.
                </p>
                <div className="space-y-3">
                  {course.intakeMonths.map((month) => (
                    <div key={month} className="flex items-start gap-4 bg-slate-50 border border-gray-100 rounded-xl px-5 py-4">
                      <div className="w-24 shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-sm font-black text-slate-800">
                          <CalendarDays className="w-4 h-4 text-emerald-500" />
                          {month}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {intakeDescriptions[month] ?? 'Available at select LSOE partner universities. Contact us to confirm availability.'}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-3">
                  Intake availability is subject to change. LSOE advisers will confirm the next available start date during your free consultation.
                </p>
              </div>
            )}

            {/* Before You Apply */}
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-4">Before You Apply</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Am I Eligible?',     href: '/am-i-eligible',      desc: 'Check your entry requirements' },
                  { label: 'Student Finance UK',  href: '/student-finance-uk', desc: 'Loans, grants & funding explained' },
                  { label: 'UCAS Guide',          href: '/ucas-guide',         desc: 'Step-by-step application walkthrough' },
                  { label: 'All UK Courses',      href: '/courses',            desc: 'Browse all subject areas' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col bg-slate-50 hover:bg-brand-primary/5 border border-gray-100 hover:border-brand-primary/20 rounded-xl p-4 transition-all"
                  >
                    <span className="font-bold text-slate-800 group-hover:text-brand-primary text-sm transition-colors flex items-center gap-1">
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-slate-400 text-xs mt-0.5">{link.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Courses */}
            {related.length > 0 && (
              <div>
                <h2 className="text-xl font-black text-slate-800 mb-4">
                  Other {categoryLabel} Courses
                </h2>
                <div className="space-y-3">
                  {related.map((rc) => (
                    <Link
                      key={rc.slug}
                      href={`/courses/${rc.category}/${rc.slug}`}
                      className="group flex items-center justify-between bg-slate-50 hover:bg-white border border-gray-100 hover:border-brand-primary/20 hover:shadow-sm rounded-xl p-4 transition-all"
                    >
                      <div>
                        <p className="font-bold text-slate-800 group-hover:text-brand-primary text-sm transition-colors">
                          {rc.title}
                        </p>
                        <p className="text-slate-400 text-xs mt-0.5">
                          {rc.qualificationLevel} · {rc.duration}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
                <Link
                  href={categoryPath}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline mt-4"
                >
                  View all {categoryLabel} courses <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* ── Right: sticky Apply card ── */}
          <div className="space-y-5">
            <div className="bg-slate-900 rounded-2xl p-6 text-white sticky top-24">
              <p className="text-sm text-slate-400 mb-1">Ready to apply?</p>
              <h3 className="text-lg font-black mb-3">Start your application today</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                LSOE provides free expert admissions support — from choosing the right university to submitting your application.
              </p>
              <Link
                href={applyPath}
                className="block text-center px-5 py-3 bg-brand-primary text-white rounded-xl font-bold text-sm hover:bg-brand-primary/90 transition-all mb-3"
              >
                Apply Now — It&apos;s Free
              </Link>
              <Link
                href="/contact-us"
                className="block text-center px-5 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all"
              >
                Speak to an Adviser
              </Link>
              <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                {['Free admissions guidance', 'UK-based support team', 'Since 2013'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-slate-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={categoryPath}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to {categoryLabel}
            </Link>
          </div>
        </section>

        {/* ── FAQ section (full-width) ── */}
        <section className="bg-slate-50 border-t border-gray-100 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto">
                Common questions about {course.title} and studying {categoryLabel} at UK universities.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-bold text-slate-800 text-sm pr-4 leading-snug">{faq.question}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
            <p className="text-center text-slate-400 text-xs mt-8">
              Have a question not answered here?{' '}
              <Link href="/contact-us" className="text-brand-primary font-semibold hover:underline">
                Contact our advisers →
              </Link>
            </p>
          </div>
        </section>

        {/* ── Bottom CTA banner ── */}
        <section className="bg-brand-primary py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ready to apply for {course.title}?
            </h2>
            <p className="text-white/70 mb-8 text-base leading-relaxed">
              Tell us about your background and we&apos;ll match you to the right programme and university.
              Free, expert guidance from start to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={applyPath}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
              >
                {applyLabel} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
            <p className="mt-8 text-white/50 text-sm">
              Also explore:{' '}
              <Link href="/am-i-eligible" className="text-white/70 hover:text-white underline">Am I Eligible?</Link>
              {' · '}
              <Link href="/student-finance-uk" className="text-white/70 hover:text-white underline">Student Finance UK</Link>
              {' · '}
              <Link href="/courses" className="text-white/70 hover:text-white underline">All Courses</Link>
            </p>
          </div>
        </section>
      </main>

      <AdmissionFooter />
    </>
  );
}
