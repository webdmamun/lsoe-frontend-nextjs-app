/**
 * courseHelpers.js
 *
 * Pure utility functions for the LSOE course system.
 * No external dependencies — safe to use in server components,
 * API routes, and generateStaticParams.
 */

// ── Category registry ──────────────────────────────────────────────────────────
export const CATEGORY_MAP = {
  'business':          { label: 'Business & Management', path: '/courses/business' },
  'computing':         { label: 'IT & Computing',         path: '/courses/computing' },
  'health':            { label: 'Health & Social Care',   path: '/courses/health' },
  'law':               { label: 'Law',                    path: '/courses/law' },
  'engineering':       { label: 'Engineering',            path: '/courses/engineering' },
  'foundation':        { label: 'Foundation Year',        path: '/courses/foundation' },
  'business-top-up':   { label: 'Business Top-Up',       path: '/courses/business-top-up' },
  'postgraduate':      { label: 'Postgraduate',           path: '/courses/postgraduate' },
};

export const VALID_CATEGORIES = Object.keys(CATEGORY_MAP);

// ── Slug helpers ───────────────────────────────────────────────────────────────

/**
 * Convert a course title to a URL-safe slug.
 * e.g. "Business Administration (BA Hons)" → "business-administration-ba-hons"
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Return the human-readable category label for a given slug.
 * e.g. "business" → "Business & Management"
 */
export function getCategoryLabel(categorySlug) {
  return CATEGORY_MAP[categorySlug]?.label ?? categorySlug;
}

/**
 * Return the canonical category path.
 * e.g. "business" → "/courses/business"
 */
export function getCategoryPath(categorySlug) {
  return CATEGORY_MAP[categorySlug]?.path ?? `/courses/${categorySlug}`;
}

// ── Breadcrumb helpers ─────────────────────────────────────────────────────────

/**
 * Build breadcrumb items for a course category page.
 * Returns an array ready for BreadcrumbSchema.
 */
export function getCategoryBreadcrumbs(categorySlug) {
  return [
    { name: 'Home',                          href: '/' },
    { name: 'Courses',                       href: '/courses' },
    { name: getCategoryLabel(categorySlug),  href: null },
  ];
}

/**
 * Build breadcrumb items for a course detail page.
 */
export function getCourseBreadcrumbs(categorySlug, courseTitle) {
  return [
    { name: 'Home',                          href: '/' },
    { name: 'Courses',                       href: '/courses' },
    { name: getCategoryLabel(categorySlug),  href: getCategoryPath(categorySlug) },
    { name: courseTitle,                     href: null },
  ];
}

// ── Metadata generator ─────────────────────────────────────────────────────────

const BASE_URL = 'https://www.londonschoolofexcellence.com';

/**
 * Generate Next.js `metadata` export for a course detail page.
 * Uses course.seoTitle / course.seoDescription if present; falls back to
 * computed values from core course fields.
 */
export function generateCourseMetadata(course) {
  const url   = `${BASE_URL}/courses/${course.category}/${course.slug}`;
  const title = course.seoTitle
    ?? `${course.title} | UK University Admissions — LSOE`;
  const description = course.seoDescription
    ?? `${course.shortDescription} Free admissions support from London School of Excellence.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: `${course.title} — LSOE` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

// ── JSON-LD schema ─────────────────────────────────────────────────────────────

/**
 * Generate JSON-LD Course schema for a course detail page.
 */
export function getCourseSchema(course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.shortDescription,
    url: `${BASE_URL}/courses/${course.category}/${course.slug}`,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: course.institutionName ?? 'UK Partner University',
    },
    educationalLevel: course.qualificationLevel,
    timeRequired: course.duration,
    courseMode: course.studyMode ?? 'blended',
    inLanguage: 'en-GB',
    ...(course.intakeMonths?.length && {
      startDate: course.intakeMonths.join(', '),
    }),
  };
}

/**
 * Generate BreadcrumbList JSON-LD for a course detail page.
 */
export function getCourseBreadcrumbSchema(categorySlug, courseTitle, courseSlug) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',                         item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Courses',                      item: `${BASE_URL}/courses` },
      { '@type': 'ListItem', position: 3, name: getCategoryLabel(categorySlug), item: `${BASE_URL}${getCategoryPath(categorySlug)}` },
      { '@type': 'ListItem', position: 4, name: courseTitle,                    item: `${BASE_URL}/courses/${categorySlug}/${courseSlug}` },
    ],
  };
}

// ── Indexing rules ─────────────────────────────────────────────────────────────

// ── Career outcomes per category ───────────────────────────────────────────────

export const CAREER_OUTCOMES = {
  'business': [
    'Business Manager / Operations Manager',
    'Marketing Executive / Brand Manager',
    'Financial Analyst / Accountant',
    'Human Resources Manager',
    'Entrepreneur / Business Owner',
    'Management Consultant',
  ],
  'computing': [
    'Software Developer / Engineer',
    'Cybersecurity Analyst',
    'Data Scientist / Data Analyst',
    'Cloud Solutions Architect',
    'IT Project Manager',
    'AI / Machine Learning Engineer',
  ],
  'health': [
    'Health & Social Care Manager',
    'NHS Team Leader / Service Manager',
    'Public Health Adviser',
    'Social Worker',
    'Care Quality Compliance Officer',
    'Community Health Coordinator',
  ],
  'law': [
    'Solicitor / Trainee Solicitor',
    'Barrister / Legal Practitioner',
    'Paralegal / Legal Executive',
    'Compliance Officer / Legal Analyst',
    'Criminal Justice Practitioner',
    'Legal Policy Adviser',
  ],
  'engineering': [
    'Civil / Structural Engineer',
    'Mechanical Design Engineer',
    'Electrical Systems Engineer',
    'Construction Project Manager',
    'Environmental Consultant',
    'Aerospace Engineering Technician',
  ],
  'foundation': [
    'Progression to full undergraduate degree',
    'Business & Management graduate',
    'Engineering & Technology graduate',
    'Health & Social Care graduate',
    'Law & Criminology graduate',
    'Computing & IT graduate',
  ],
  'business-top-up': [
    'Operations / Business Development Manager',
    'Project Manager',
    'HR / People Manager',
    'Marketing Manager',
    'Senior Administrator / Office Manager',
    'Management-level roles across sectors',
  ],
  'postgraduate': [
    'Senior Manager / Director',
    'Business Strategist / Consultant',
    'Research Analyst / Academic',
    'Data Science Lead',
    'Cybersecurity Manager',
    'HR / Organisational Development Lead',
  ],
};

// ── Progression pathways per category ─────────────────────────────────────────

export const PROGRESSION_PATHS = {
  'business': {
    intro: 'Business graduates are highly employable across all sectors. Many progress to professional qualifications or postgraduate study.',
    paths: [
      { label: 'Professional Qualification', desc: 'ACCA, CIMA, CIPD, or CIM membership after graduation' },
      { label: 'Postgraduate Study', desc: 'Progress to an MBA or MSc at a UK or international university', href: '/courses/postgraduate' },
      { label: 'Entrepreneurship', desc: 'Many graduates launch their own businesses with UK incubator and startup support' },
    ],
  },
  'computing': {
    intro: 'Computing graduates enter one of the fastest-growing job markets in the UK. Postgraduate specialisation is common and well-funded.',
    paths: [
      { label: 'MSc Cybersecurity / Data Science', desc: 'Specialist postgraduate routes at UK universities', href: '/courses/postgraduate' },
      { label: 'Professional Certification', desc: 'CompTIA, AWS, Google Cloud, or Microsoft Azure certifications after graduation' },
      { label: 'PhD / Research', desc: 'EPSRC-funded research in AI, cybersecurity, and distributed systems' },
    ],
  },
  'health': {
    intro: 'Health graduates move into NHS management, social services, or postgraduate study in health leadership and policy.',
    paths: [
      { label: 'NHS Management Pathway', desc: 'Progress to team leader or service manager roles within the NHS' },
      { label: 'MSc Health Management', desc: 'Postgraduate Health Management or Public Health study', href: '/courses/postgraduate' },
      { label: 'Professional Registration', desc: 'Some pathways lead to Social Work England or NMC registration' },
    ],
  },
  'law': {
    intro: 'Law graduates can qualify as solicitors or barristers, or move into compliance, legal advisory, and policy roles.',
    paths: [
      { label: 'Solicitor Qualifying Exam (SQE)', desc: 'The modern route to qualifying as a solicitor in England and Wales' },
      { label: 'Bar Professional Training Course', desc: 'The required route to practice as a barrister after your LLB' },
      { label: 'LLM (Master of Laws)', desc: 'Postgraduate law specialisation in commercial, criminal, or international law', href: '/courses/postgraduate' },
    ],
  },
  'engineering': {
    intro: 'Engineering graduates can progress to chartered status with ICE, IMechE, or IET, or specialise further through postgraduate study.',
    paths: [
      { label: 'Chartered Engineer (CEng)', desc: 'Accredited pathways through ICE, IMechE, or IET to Chartered status' },
      { label: 'MEng or MSc Engineering', desc: 'Postgraduate engineering programmes for advanced specialisation' },
      { label: 'Graduate Training Schemes', desc: 'Major UK engineering firms offer structured graduate schemes' },
    ],
  },
  'foundation': {
    intro: 'A Foundation Year is the structured bridge into a full undergraduate degree. On successful completion, you progress directly to Year 1.',
    paths: [
      { label: 'Business Degree', desc: 'Progress to Year 1 of a BA Business or Management programme', href: '/courses/business' },
      { label: 'Engineering Degree', desc: 'Foundation leads to Year 1 of a BEng or MEng programme', href: '/courses/engineering' },
      { label: 'Health & Social Care Degree', desc: 'Progress to a BSc in Health, Social Work, or Public Health', href: '/courses/health' },
    ],
  },
  'business-top-up': {
    intro: 'A Top-Up degree completes your Honours qualification in one focused year, unlocking management-level career pathways.',
    paths: [
      { label: 'MBA / MSc Postgraduate Study', desc: 'Many Top-Up graduates progress to an MBA or MSc with 1–2 years experience', href: '/courses/postgraduate' },
      { label: 'Senior Management Roles', desc: 'An Honours degree typically unlocks management and director-level roles' },
      { label: 'Professional Membership', desc: 'CMI, CIM, CIPD, or ACCA membership aligned to your Top-Up subject area' },
    ],
  },
  'postgraduate': {
    intro: 'A UK postgraduate qualification is globally recognised and positions you for senior, specialist, and research careers.',
    paths: [
      { label: 'Senior Leadership Roles', desc: 'MBA and MSc graduates consistently move into director and C-suite positions' },
      { label: 'PhD / Doctorate', desc: 'Research postgraduate degrees open academic and high-level consultancy pathways' },
      { label: 'International Career Mobility', desc: 'UK postgraduate qualifications are accepted and valued worldwide' },
    ],
  },
};

// ── Why study this subject per category (entity-enriched) ─────────────────────

export const WHY_STUDY = {
  'business': [
    'One of the most popular UCAS subjects in England — over 25,000 students enrol in Business degrees each year',
    'Student Finance England applies to full-time undergraduate Business degrees at qualifying UK universities',
    'Leads to ACCA, CIMA, and CIPD professional qualification pathways — globally recognised credentials',
    'Flexible part-time and blended study modes at UK partner universities — ideal for working learners',
  ],
  'computing': [
    'UK digital economy employs over 1.7 million people — one of the fastest-growing sectors in Britain',
    'Student Finance England covers tuition fees for most undergraduate Computing degrees at UKVI-licensed universities',
    'Many programmes are aligned with BCS (The Chartered Institute for IT) professional standards',
    'Strong graduate outcomes — Computing is consistently among the highest-earning undergraduate subjects in the UK',
  ],
  'health': [
    'The NHS is the UK\'s largest employer — consistently recruiting graduates from Health & Social Care programmes',
    'Many programmes are approved by Social Work England, NMC, or HCPC for professional registration pathways',
    'Student Finance England applies to undergraduate Health & Social Care degrees at qualifying UK institutions',
    'Flexible part-time study designed for people already working in the NHS or registered care settings',
  ],
  'law': [
    'A UK LLB (Bachelor of Laws) is a Qualifying Law Degree (QLD) recognised by the Solicitors Regulation Authority',
    'Law graduates earn among the highest starting salaries of any undergraduate subject area in the UK',
    'Student Finance England applies to LLB and Criminology programmes at qualifying UK universities',
    'Legal analytical and communication skills are valued by employers across finance, policy, HR, and compliance',
  ],
  'engineering': [
    'UK-accredited Engineering programmes lead to Chartered Engineer (CEng) status via ICE, IMechE, or IET',
    'Student Finance England covers tuition fees for BEng degrees at qualifying UKVI-licensed partner universities',
    'The UK Government\'s National Infrastructure Strategy is driving sustained demand for engineering graduates',
    'Engineering is consistently ranked among the highest-earning undergraduate subjects in the UK',
  ],
  'foundation': [
    'Foundation Year programmes are regulated by the Quality Assurance Agency for Higher Education (QAA)',
    'Student Finance England applies to Foundation Year programmes at qualifying UK universities',
    'Successful completion guarantees direct progression to Year 1 of the associated undergraduate degree',
    'A recognised UCAS-accepted alternative route for students who narrowly missed standard entry tariffs',
  ],
  'business-top-up': [
    'Level 6 Top-Up degrees are full Honours qualifications regulated under the UK Qualifications Framework (RQF)',
    'Student Finance England applies to eligible Level 6 Top-Up degrees at qualifying UK universities',
    'Complete your degree in 12 months — faster and more cost-effective than restarting an undergraduate programme',
    'Entry requires an HND, HNC, or Level 5 Diploma — assessed via UCAS or direct application to the institution',
  ],
  'postgraduate': [
    'UK postgraduate qualifications are recognised by the Quality Assurance Agency (QAA) and valued globally',
    'Postgraduate Master\'s Loans of up to £12,167 are available through Student Finance England for eligible UK students',
    'Many postgraduate programmes can be studied part-time alongside employment — typically 2 years',
    'LSOE provides free admissions guidance for postgraduate applicants — both domestic and international',
  ],
};

// ── Indexing rules ─────────────────────────────────────────────────────────────

/**
 * Minimum requirements for a course to be publicly indexed.
 * Apply these rules before rendering a course page to prevent thin content.
 */
export function isIndexable(course) {
  if (!course) return false;
  return (
    course.published === true &&
    typeof course.slug === 'string' && course.slug.length > 0 &&
    typeof course.title === 'string' && course.title.length > 5 &&
    typeof course.shortDescription === 'string' && course.shortDescription.length >= 120 &&
    typeof course.category === 'string' && !!CATEGORY_MAP[course.category] &&
    typeof course.institutionName === 'string' && course.institutionName.length > 0 &&
    typeof course.qualificationLevel === 'string' && course.qualificationLevel.length > 0
  );
}

// ── FAQ data per category ──────────────────────────────────────────────────────
// Q1 is intentionally the "entry requirements" question — it is overridden
// with course-specific data in buildCourseFAQ() below.

export const FAQ_BY_CATEGORY = {
  'business': [
    {
      question: 'What are the entry requirements for Business courses at UK universities?',
      answer: 'Most undergraduate Business programmes require 2 A-levels (or a BTEC Level 3 Extended Diploma at Distinction Merit Merit or above), or a completed Access to HE Diploma. Mature applicants with relevant work experience are assessed individually. International students typically need IELTS 6.0 overall. London School of Excellence will assess your qualifications free of charge.',
    },
    {
      question: 'How long does a Business degree take to complete?',
      answer: 'A standard BA or BSc Hons Business degree takes 3 years full-time. Many universities also offer a 4-year sandwich route including an industry placement year. Part-time and blended study options are widely available and typically extend completion to 4–5 years, allowing you to study alongside employment.',
    },
    {
      question: 'Can international students apply for Business courses in the UK?',
      answer: 'Yes. International students can apply for UK undergraduate Business programmes through LSOE. You will need equivalent academic qualifications and an English language certificate — typically IELTS 6.0 overall with no band below 5.5. LSOE provides free guidance on the Student Route visa and CAS letter process.',
    },
    {
      question: 'What career options are available after a Business degree?',
      answer: 'Business graduates are highly employable across every sector. Common roles include Business Manager, Marketing Executive, Financial Analyst, HR Manager, and Management Consultant. Many graduates progress to ACCA, CIMA, or CIPD professional qualifications, or to a postgraduate MBA or MSc programme.',
    },
    {
      question: 'Is a Business degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students are typically eligible for a Tuition Fee Loan of up to £9,535 per year and a Maintenance Loan based on household income. Student Finance England covers full-time and qualifying part-time undergraduate degrees at accredited UK universities. LSOE can help you understand your entitlement.',
    },
  ],

  'computing': [
    {
      question: 'What are the entry requirements for IT and Computing courses at UK universities?',
      answer: 'Most undergraduate Computing programmes require 2 A-levels — ideally including Mathematics or Computing — or an equivalent Level 3 BTEC in IT or Engineering. Some universities accept applicants without a Computing background if other maths-based subjects are present. London School of Excellence will assess your specific qualifications at no cost.',
    },
    {
      question: 'How long does a Computing degree take in the UK?',
      answer: 'A BSc Hons Computer Science or IT degree typically takes 3 years full-time. Some programmes offer a 4-year sandwich placement year with industry partners. Apprenticeship-style and blended learning routes may also be available at partner universities.',
    },
    {
      question: 'Can international students apply for Computing courses in the UK?',
      answer: 'Yes. International students can apply for UK Computing degrees through LSOE. English language requirements are typically IELTS 6.0 overall. You will also need a Student Route visa (formerly Tier 4) if studying full-time in the UK. LSOE provides free guidance throughout the visa and admissions process.',
    },
    {
      question: 'What careers are available after a Computing degree?',
      answer: 'Computing graduates enter one of the UK\'s fastest-growing job markets. Common roles include Software Developer, Cybersecurity Analyst, Data Scientist, Cloud Architect, and IT Project Manager. The average graduate salary in UK tech roles ranges from £28k–£45k, rising significantly with experience.',
    },
    {
      question: 'Is a Computing degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students can apply for a Tuition Fee Loan of up to £9,535 per year and a Maintenance Loan for eligible Computing degree programmes. The course must be offered by a UKVI-licensed institution registered with the Office for Students (OfS). LSOE can confirm eligibility as part of your free consultation.',
    },
  ],

  'health': [
    {
      question: 'What are the entry requirements for Health and Social Care courses at UK universities?',
      answer: 'Most undergraduate Health & Social Care programmes require 2 A-levels, a relevant BTEC Level 3 qualification, or an Access to HE Diploma in a health-related subject. Applicants with direct work or volunteering experience in health or care settings are often considered even without formal qualifications. A DBS check may be required.',
    },
    {
      question: 'How long does a Health and Social Care degree take?',
      answer: 'A BSc Hons in Health and Social Care, Public Health, or Social Work typically takes 3 years full-time. Many programmes are available part-time, particularly designed for people already working in the NHS or social services — extending to 4–6 years.',
    },
    {
      question: 'Can international students apply for Health and Social Care courses in the UK?',
      answer: 'Yes. International students can apply for undergraduate Health & Social Care programmes at UKVI-licensed UK universities. You will need equivalent academic qualifications and IELTS 6.0 or above. Some Social Work programmes require UK residency or existing permission to work due to placement requirements.',
    },
    {
      question: 'What careers are available after a Health and Social Care degree?',
      answer: 'Graduates find roles across the NHS, local authorities, charities, and private care providers. Common career paths include Health Manager, Social Worker, Public Health Adviser, Community Health Coordinator, and Care Quality Officer. Some pathways lead to Social Work England registration.',
    },
    {
      question: 'Is a Health and Social Care degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students can access a Tuition Fee Loan and Maintenance Loan for undergraduate Health & Social Care degrees at qualifying institutions. Some NHS-commissioned programmes may also have additional bursary support. LSOE can identify the funding options relevant to your chosen programme.',
    },
  ],

  'law': [
    {
      question: 'What are the entry requirements for Law degrees at UK universities?',
      answer: 'Most LLB programmes require 2–3 A-levels, typically at ABB to AAB grades. No specific A-level subjects are mandatory, though English, History, and Social Sciences are viewed favourably. Access to HE Diplomas with a strong Distinction profile are also accepted. LSOE will assess your qualifications during a free consultation.',
    },
    {
      question: 'How long does a Law degree (LLB) take in the UK?',
      answer: 'A standard LLB (Bachelor of Laws) takes 3 years full-time. This is a Qualifying Law Degree (QLD) recognised by the Solicitors Regulation Authority (SRA) and the Bar Standards Board. Graduate Entry programmes are available for students who already hold a non-law degree.',
    },
    {
      question: 'Can international students study Law in the UK?',
      answer: 'Yes. International students are welcome on UK Law programmes. You will need a Student Route visa, equivalent academic qualifications, and IELTS 6.5 overall (many Law schools require 6.5 or above, with no band below 6.0). LSOE provides free guidance on both the admissions and visa process.',
    },
    {
      question: 'What careers are available after a Law degree?',
      answer: 'Law graduates pursue careers as Solicitors, Barristers, Paralegals, Legal Executives, Compliance Officers, and Policy Advisers. After graduating, you can pursue the Solicitor Qualifying Exam (SQE) for solicitor qualification or the Bar Professional Training Course (BPTC) to become a barrister.',
    },
    {
      question: 'Is a Law degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students can apply for a Tuition Fee Loan and Maintenance Loan for LLB programmes at qualifying UK universities. Student Finance England covers the standard 3-year programme. LSOE can confirm the Student Finance eligibility for your chosen institution and course.',
    },
  ],

  'engineering': [
    {
      question: 'What are the entry requirements for Engineering courses at UK universities?',
      answer: 'Most BEng programmes require 2–3 A-levels including Mathematics and a science subject (typically Physics). BTEC Level 3 Engineering qualifications are also accepted at many universities. Access to HE Diplomas with a strong science/maths profile may be considered. LSOE will assess your qualifications for free.',
    },
    {
      question: 'How long does an Engineering degree take in the UK?',
      answer: 'A BEng (Bachelor of Engineering) degree takes 3 years full-time. An integrated MEng (Master of Engineering) takes 4 years and leads directly to accreditation pathways with bodies like ICE, IMechE, or IET. Some programmes include a placement year, extending to 4 years for BEng or 5 for MEng.',
    },
    {
      question: 'Can international students apply for Engineering courses in the UK?',
      answer: 'Yes. International students can study Engineering at UK universities with LSOE\'s free admissions support. Entry requirements typically include equivalent maths and science qualifications, plus IELTS 6.0 overall. A Student Route visa is required for full-time study in the UK.',
    },
    {
      question: 'What careers are available after an Engineering degree?',
      answer: 'Engineering graduates work in infrastructure, manufacturing, aerospace, energy, and defence. Common roles include Civil Engineer, Mechanical Engineer, Electrical Engineer, and Project Manager. Accredited graduates can work towards Chartered Engineer (CEng) status through ICE, IMechE, or IET.',
    },
    {
      question: 'Is an Engineering degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students can apply for a Tuition Fee Loan and Maintenance Loan for BEng and MEng programmes at qualifying institutions. The course and university must be registered with the Office for Students (OfS). LSOE can confirm your Student Finance eligibility as part of the free admissions process.',
    },
  ],

  'foundation': [
    {
      question: 'What are the entry requirements for a Foundation Year in the UK?',
      answer: 'Foundation Year programmes are designed for students who narrowly missed standard undergraduate entry requirements. Typical entry is 1 A-level or equivalent (such as a BTEC Merit profile), or a strong Access to HE Diploma. Many Foundation Years also welcome mature students with relevant work experience. LSOE will assess your profile for free.',
    },
    {
      question: 'How does a Foundation Year work?',
      answer: 'A Foundation Year is a one-year bridging programme that prepares you for Year 1 of an undergraduate degree. On successful completion (typically passing all modules), you progress automatically to Year 1 at the same institution. The Foundation Year itself is an accredited Level 3/4 qualification regulated by the QAA.',
    },
    {
      question: 'Can international students do a Foundation Year in the UK?',
      answer: 'Yes. International Foundation Year programmes are one of the most common routes for overseas students entering UK higher education. You will need a Student Route visa and equivalent academic qualifications. English language requirements are often slightly lower than for direct degree entry — typically IELTS 5.5.',
    },
    {
      question: 'What degree can I do after a Foundation Year?',
      answer: 'Depending on the Foundation Year you choose, you can progress to degrees in Business, Law, Engineering, Health & Social Care, Computing, or Education. Foundation Years are subject-specific — the pathway you choose determines which degrees are available in Year 1.',
    },
    {
      question: 'Is a Foundation Year eligible for Student Finance England?',
      answer: 'Yes. UK Home students can access Student Finance England funding for a Foundation Year if it is part of an integrated degree programme at a qualifying institution. The Foundation Year counts as part of your total funded years of study. LSOE can confirm your Student Finance eligibility during the admissions process.',
    },
  ],

  'business-top-up': [
    {
      question: 'What qualifications do I need to apply for a Business Top-Up degree?',
      answer: 'Business Top-Up degrees are Level 6 programmes designed for students who already hold a Level 5 qualification — typically an HND, HNC, or Foundation Degree in a Business-related subject. Some universities also accept equivalent overseas qualifications assessed by UK NARIC (now ENIC). LSOE will assess your qualifications free of charge.',
    },
    {
      question: 'How long does a Top-Up degree take to complete?',
      answer: 'A Business Top-Up degree takes 1 year full-time. You enter directly into Year 3 of the Honours degree programme. Part-time and blended study options may extend this to 2 years, allowing you to continue working alongside your studies.',
    },
    {
      question: 'Can international students do a Top-Up degree in the UK?',
      answer: 'Yes. International students with an equivalent Level 5 qualification can apply for a UK Business Top-Up degree. You will need a Student Route visa, an IELTS score of 6.0 or above, and a recognised Level 5 qualification assessed by ENIC. LSOE provides free guidance throughout.',
    },
    {
      question: 'What career benefits does a Top-Up degree offer?',
      answer: 'A Top-Up degree converts your existing qualification into a full BA or BSc Honours degree — the standard benchmark for graduate-level employment in the UK. It opens access to postgraduate programmes (MBA, MSc), professional membership bodies (CIPD, CIM, CMI), and management-level roles across all sectors.',
    },
    {
      question: 'Is a Top-Up degree eligible for Student Finance England?',
      answer: 'Yes. UK Home students can apply for a Tuition Fee Loan for eligible Level 6 Top-Up degrees at qualifying institutions. Eligibility depends on whether you have previously used student finance. LSOE can assess your specific eligibility as part of the free admissions consultation.',
    },
  ],

  'postgraduate': [
    {
      question: 'What are the entry requirements for postgraduate courses at UK universities?',
      answer: 'Most UK postgraduate programmes require a Bachelor\'s degree at 2:2 or above from a recognised UK or international university. Some MBA and MSc programmes also require professional work experience (typically 2+ years). English language requirements are usually IELTS 6.5 overall. LSOE will assess your eligibility for free.',
    },
    {
      question: 'How long does a postgraduate degree take in the UK?',
      answer: 'A taught Master\'s degree (MA, MSc, MBA) typically takes 1 year full-time or 2 years part-time. An MBA may be structured as a 12–18 month programme depending on the institution. Research-based programmes (MPhil, PhD) take 2–4 years. LSOE primarily supports admissions for taught postgraduate programmes.',
    },
    {
      question: 'Can international students apply for postgraduate courses in the UK?',
      answer: 'Yes. International students are a significant proportion of UK postgraduate intake. You will need a Student Route visa, equivalent undergraduate qualifications, and IELTS 6.5 or above. LSOE provides free guidance on university shortlisting, application preparation, and the Student Route visa process.',
    },
    {
      question: 'What career benefits does a postgraduate degree offer?',
      answer: 'Postgraduate qualifications consistently lead to higher salaries and more senior career trajectories. MBA and MSc graduates in the UK average significantly higher earnings than those with only an undergraduate degree. Postgraduate study also opens routes into research, academia, and senior consulting roles.',
    },
    {
      question: 'Is there financial support available for postgraduate study in the UK?',
      answer: 'UK Home students can apply for a Postgraduate Master\'s Loan of up to £12,167 through Student Finance England. Some postgraduate programmes are also eligible for employer sponsorship, Research Council grants (for PhDs), or scholarship funding. LSOE can advise on funding options relevant to your chosen course.',
    },
  ],
};

// ── Study locations per category ───────────────────────────────────────────────

export const STUDY_LOCATIONS = {
  'business': {
    cities: ['London', 'Birmingham', 'Manchester', 'Leeds', 'Bristol', 'Liverpool'],
    highlight: 'London has the highest concentration of Business schools in the UK, with flexible evening and weekend study widely available at LSOE partner universities.',
    institutionNote: 'Programmes are offered at modern universities and private higher education providers licensed by the Office for Students (OfS) and UKVI.',
  },
  'computing': {
    cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Bristol', 'Leeds'],
    highlight: 'London and Manchester are major UK tech hubs with strong industry employer links — graduates from partner universities are well-positioned for roles at UK and international technology companies.',
    institutionNote: 'Many UK Computing programmes are accredited by BCS (The Chartered Institute for IT), providing a recognised professional development pathway.',
  },
  'health': {
    cities: ['London', 'Birmingham', 'Manchester', 'Sheffield', 'Nottingham', 'Leeds'],
    highlight: 'London-based Health programmes offer proximity to major NHS Trusts and teaching hospitals — valuable for students pursuing clinical or management pathways.',
    institutionNote: 'Social Work programmes require placement hours in approved UK settings. Some programmes are also approved by Social Work England or the NMC.',
  },
  'law': {
    cities: ['London', 'Birmingham', 'Manchester', 'Leeds', 'Bristol', 'Nottingham'],
    highlight: 'London is a global legal centre — studying Law in London puts you near the Inns of Court, major law firms, and international arbitration institutions.',
    institutionNote: 'LLB programmes must be a Qualifying Law Degree (QLD) to provide the academic stage of training for solicitors (SRA) or barristers (BSB).',
  },
  'engineering': {
    cities: ['London', 'Birmingham', 'Manchester', 'Sheffield', 'Newcastle', 'Bristol'],
    highlight: 'Many UK Engineering programmes include industry liaison with infrastructure firms, defence contractors, and green energy companies — providing strong graduate employment networks.',
    institutionNote: 'Accredited programmes lead to Incorporated Engineer (IEng) or Chartered Engineer (CEng) status through bodies including ICE, IMechE, IET, and CIBSE.',
  },
  'foundation': {
    cities: ['London', 'Birmingham', 'Manchester', 'Leeds', 'Bristol', 'Coventry'],
    highlight: 'Foundation Years are typically taught on the same campus as the associated degree — ensuring a smooth transition to Year 1 and access to full university facilities from day one.',
    institutionNote: 'Foundation Year programmes are quality-assured by the Quality Assurance Agency for Higher Education (QAA) and recognised across UK higher education.',
  },
  'business-top-up': {
    cities: ['London', 'Birmingham', 'Manchester', 'Leeds', 'Coventry', 'Bristol'],
    highlight: 'Top-Up degrees are widely available in blended and online formats, making them accessible to students across the UK and internationally without the need to relocate.',
    institutionNote: 'Level 6 Top-Up degrees are UK Regulated Qualifications Framework (RQF) accredited and equivalent in standing to a full 3-year Honours degree.',
  },
  'postgraduate': {
    cities: ['London', 'Birmingham', 'Manchester', 'Edinburgh', 'Bristol', 'Leeds'],
    highlight: 'London is the UK\'s leading centre for postgraduate business education — MBA programmes in London attract students from over 100 countries each year.',
    institutionNote: 'All postgraduate programmes are quality-assured by the QAA. International students should confirm UKVI approval of the institution before applying.',
  },
};

// ── FAQ builder (course-specific substitution) ─────────────────────────────────

/**
 * Build the final FAQ array for a course page.
 * The first question uses the course's own entryRequirements field for uniqueness.
 * Questions 2–5 are drawn from the category-level FAQ bank.
 */
export function buildCourseFAQ(course, category) {
  const base = FAQ_BY_CATEGORY[category] ?? [];

  const courseSpecific = {
    question: `What are the entry requirements for ${course.title}?`,
    answer: course.entryRequirements
      ?? base[0]?.answer
      ?? 'Entry requirements vary by university and intake. London School of Excellence will assess your qualifications during a free consultation.',
  };

  // Skip base[0] (generic entry requirements) — replaced by course-specific above.
  // Take the remaining 4 category questions.
  const remaining = base.slice(1, 5);

  return [courseSpecific, ...remaining];
}

// ── FAQ JSON-LD schema ─────────────────────────────────────────────────────────

/**
 * Generate a valid FAQPage JSON-LD schema from a FAQ array.
 * @param {{ question: string, answer: string }[]} faqs
 */
export function getFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
