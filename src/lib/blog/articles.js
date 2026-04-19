import { slugify, estimateReadingTimeMinutes } from './blogUtils.js';

const nowIso = new Date('2026-04-18T09:00:00.000Z').toISOString();

const seedRaw = [
  {
    title: 'How to Apply for Student Finance UK: Step-by-Step Guide',
    slug: 'how-to-apply-for-student-finance-uk',
    excerpt:
      'Applying for Student Finance can feel confusing the first time. This guide breaks down each step so you can apply correctly and avoid delays.',
    content: `## Why this matters\n\nIf you are planning UK university study as a Home student, Student Finance England can support tuition fees and living costs. Applying early keeps your offer and enrolment journey smooth.\n\n## Step 1: Prepare your documents\n\n- National Insurance number\n- Passport or valid identity evidence\n- Address history and household income details where requested\n\n## Step 2: Submit your application carefully\n\nUse accurate personal details and check your course selection before final submission. If you are still finalising your university option, you can often update details later.\n\n## Step 3: Track requests and decisions\n\nWatch your account for evidence requests. Delays usually happen when evidence is missing or submitted late.\n\n## Step 4: Align finance with admissions\n\nPlan finance and admission tasks together: [Apply Now](/apply-now), review [Student Finance UK](/student-finance-uk), and confirm [Am I Eligible?](/am-i-eligible).`,
    featuredImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
    authorName: 'LSOE Admissions Team',
    publishDate: nowIso,
    updatedAt: nowIso,
    status: 'published',
    metaTitle: 'How to Apply for Student Finance UK | London School of Excellence',
    metaDescription:
      'Learn how to apply for Student Finance England step by step, avoid delays, and align funding with your UK university application.',
    ogImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    canonicalUrl: '',
    tags: ['student finance', 'uk admissions', 'home students'],
    category: 'Student Finance',
  },
  {
    title: 'Best Courses in the UK for Local Students',
    slug: 'best-courses-in-the-uk-for-local-students',
    excerpt:
      'Already in the UK and planning university? Explore course categories with strong demand, flexible study options, and clear progression routes.',
    content: `## Courses local students choose most\n\nStudents already based in the UK often prioritise flexibility, employability, and clear progression pathways.\n\n## Business and Management\n\nBusiness courses support careers in operations, marketing, HR, and entrepreneurship.\n\n## Health and Social Care\n\nHealth-related pathways continue to grow across NHS and community settings.\n\n## Computing\n\nComputing supports strong demand roles in software, cybersecurity, and data.\n\n## Law\n\nLaw develops analytical and communication skills valued in legal and non-legal sectors.\n\n## Next steps\n\n- Explore all [Courses](/courses)\n- Compare [UK / EU student routes](/uk-eu-students)\n- Start your application on [Apply Now](/apply-now)`,
    featuredImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop',
    authorName: 'LSOE Admissions Team',
    publishDate: nowIso,
    updatedAt: nowIso,
    status: 'published',
    metaTitle: 'Best UK Courses for Local Students | London School of Excellence',
    metaDescription:
      'Discover top UK course options for local students, including business, health, computing, and law, with practical admissions guidance.',
    ogImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    canonicalUrl: '',
    tags: ['local students', 'uk courses', 'career pathways'],
    category: 'Course Guidance',
  },
  {
    title: 'Can You Study in the UK Without IELTS?',
    slug: 'can-you-study-in-the-uk-without-ielts',
    excerpt:
      'IELTS is common, but not always the only route. Here is when alternatives may be accepted and how to plan safely.',
    content: `## Is IELTS always required?\n\nNot always. Requirements depend on institution policy, programme level, and applicant background.\n\n## Alternatives some universities accept\n\n- Other English tests accepted by the university\n- Prior English-medium education evidence\n- Country-specific or institution-specific language assessments\n\n## How to avoid mistakes\n\nConfirm requirements before submitting your application shortlist. Keep a backup test plan if your target course has stricter criteria.\n\n## Useful links\n\n- [International Students](/international-students)\n- [UK / EU Students](/uk-eu-students)\n- [Apply Now](/apply-now)\n- [Courses](/courses)`,
    featuredImage:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1600&auto=format&fit=crop',
    authorName: 'LSOE Admissions Team',
    publishDate: nowIso,
    updatedAt: nowIso,
    status: 'published',
    metaTitle: 'Can You Study in the UK Without IELTS? | London School of Excellence',
    metaDescription:
      'Understand when UK universities may accept alternatives to IELTS and how to plan your application with fewer risks.',
    ogImage:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200&auto=format&fit=crop',
    canonicalUrl: '',
    tags: ['IELTS', 'international students', 'english requirements'],
    category: 'International Study',
  },
];

export const blogSeedPosts = seedRaw.map((post, idx) => ({
  id: `seed-${idx + 1}`,
  ...post,
  slug: post.slug || slugify(post.title),
  readingTime: estimateReadingTimeMinutes(post.content),
}));
