# LSOE Next.js Migration Guide

## 🎉 Project Created Successfully!

Your Next.js project is set up at: `/Users/mamun/Development/LSOE/WebProject/lsoe-nextjs`

---

## ✅ What's Already Done

### 1. **Project Structure Created**
```
lsoe-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          ✅ Root layout with ToastContainer
│   │   └── globals.css        ✅ Global styles with Tailwind
│   ├── components/
│   │   └── common/
│   │       └── ScrollToTopButton.js  ✅ Scroll to top component
│   ├── lib/
│   │   └── utils/             ✅ Copied from old project
│   │       ├── constants.js
│   │       ├── helpers.js
│   │       ├── validation.js
│   │       └── index.js
│   └── assets/                ✅ Copied from old project
├── public/                    ✅ Ready for static files
├── package.json               ✅ All dependencies configured
├── next.config.js             ✅ Configured for Cloudinary images
├── tailwind.config.js         ✅ Your custom theme + DaisyUI
└── postcss.config.js          ✅ PostCSS configuration
```

### 2. **Dependencies Configured**
All your current dependencies are in package.json:
- ✅ Next.js 14.2.15
- ✅ React 18.3.1
- ✅ TailwindCSS + DaisyUI
- ✅ All form libraries (EmailJS, React Hook Form, etc.)
- ✅ All UI libraries (React Icons, Lucide, etc.)
- ✅ All integrations (Calendly, Google Maps, etc.)

### 3. **Configuration Complete**
- ✅ TailwindCSS with your custom theme
- ✅ DaisyUI with your color scheme
- ✅ Next.js optimized for images
- ✅ Global styles applied
- ✅ Toast notifications configured
- ✅ Scroll to top button ready

---

## 📋 Next Steps - Install Dependencies

### Step 1: Install Dependencies
```bash
cd /Users/mamun/Development/LSOE/WebProject/lsoe-nextjs
npm install
```

This will install all dependencies (~2-3 minutes).

---

## 🚀 Migration Process

### Phase 1: Copy Shared Components (Do This First)

#### 1.1 Copy Navigation Components
```bash
# From your terminal in lsoe-nextjs directory:
mkdir -p src/components/layout/header
mkdir -p src/components/layout/footer

# Copy header components
cp ../lsoe-frontend/src/components/shared/header/*.js src/components/layout/header/

# Copy footer components
cp ../lsoe-frontend/src/components/shared/Footer/*.js src/components/layout/footer/
```

#### 1.2 Convert Navigation to Next.js
You'll need to update these files:
- `src/components/layout/header/AdmissionNav.js`
- `src/components/layout/header/GlobalNav.js`
- `src/components/layout/header/EmploymentNav.js`

**Changes needed:**
1. Add `'use client';` at the top
2. Change imports:
   ```javascript
   // Old
   import { Link, NavLink } from 'react-router-dom';
   
   // New
   import Link from 'next/link';
   import { usePathname } from 'next/navigation';
   ```
3. Update active state detection:
   ```javascript
   // Old
   <NavLink to="/about" style={({ isActive }) => ...}>
   
   // New
   const pathname = usePathname();
   const isActive = pathname === '/about';
   <Link href="/about" style={isActive ? activeStyle : undefined}>
   ```

---

### Phase 2: Copy All Other Components

```bash
# Copy all feature components
cp -r ../lsoe-frontend/src/components/* src/components/

# This copies:
# - AdmissionAboutCompo
# - AdmissionContactCompo
# - ApplyNowLeadCompo
# - CareerHubCompo
# - EmploymentAboutCompo
# - homeCompo
# - And all others...
```

**Then add `'use client';` to interactive components:**
- Any component using `useState`
- Any component using `useEffect`
- Any component with `onClick` handlers
- Any form components

---

### Phase 3: Create Pages

#### 3.1 Home Page
```bash
# Create home page
touch src/app/page.js
```

```javascript
// src/app/page.js
import AdmissionNav from '@/components/layout/header/AdmissionNav';
import GlobalBanner from '@/components/homeCompo/GlobalBanner/GlobalBanner';
import BannerBottom from '@/components/homeCompo/bannerBottom/BannerBottom';
import StudyDestinations from '@/components/homeCompo/studyDestinations/StudyDestinations';
import Counter from '@/components/homeCompo/Counter/Counter';
import EnquiryForm from '@/components/homeCompo/enquiryForm/EnquiryForm';
import AssessmentWUA from '@/components/WorldUniversityAdmissionCompo/AssessmentWUA';
import StudentVisaAdviceWUA from '@/components/WorldUniversityAdmissionCompo/StudentVisaAdviceWUA';
import FinanceWUA from '@/components/WorldUniversityAdmissionCompo/FinanceWUA';
import AccommodationWUA from '@/components/WorldUniversityAdmissionCompo/AccommodationWUA';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import FAQSection from '@/components/homeCompo/faqCompo/FAQSection';
import NewsletterSignup from '@/components/homeCompo/newsletterSignup/NewsletterSignup';
import AdmissionFooter from '@/components/layout/footer/AdmissionFooter';

export const metadata = {
  title: 'LSOE - Home',
  description: 'London Source of Education - Your Gateway to UK Education and Employment',
};

export default function HomePage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav />
      <GlobalBanner />
      <BannerBottom />
      <StudyDestinations />
      <Counter />
      <EnquiryForm />
      <AssessmentWUA />
      <StudentVisaAdviceWUA />
      <FinanceWUA />
      <AccommodationWUA />
      <OurPartners />
      <FAQSection />
      <NewsletterSignup />
      <AdmissionFooter />
    </div>
  );
}
```

#### 3.2 Create Other Pages
For each route, create a folder with `page.js`:

```bash
# About pages
mkdir -p src/app/about-us && touch src/app/about-us/page.js
mkdir -p src/app/about-admission-hub && touch src/app/about-admission-hub/page.js
mkdir -p src/app/about-employment-hub && touch src/app/about-employment-hub/page.js

# Student services
mkdir -p src/app/university-admission && touch src/app/university-admission/page.js
mkdir -p src/app/student-visa-advice && touch src/app/student-visa-advice/page.js
mkdir -p src/app/student-financial-information && touch src/app/student-financial-information/page.js
mkdir -p src/app/student-accommodation && touch src/app/student-accommodation/page.js
mkdir -p src/app/english-school && touch src/app/english-school/page.js
mkdir -p src/app/start-learning && touch src/app/start-learning/page.js
mkdir -p src/app/aqf-guide && touch src/app/aqf-guide/page.js

# Employment
mkdir -p src/app/employment && touch src/app/employment/page.js
mkdir -p src/app/find-a-job && touch src/app/find-a-job/page.js
mkdir -p src/app/find-a-talent && touch src/app/find-a-talent/page.js
mkdir -p src/app/career-hub && touch src/app/career-hub/page.js
mkdir -p src/app/became-a-teacher && touch src/app/became-a-teacher/page.js
mkdir -p src/app/recruitment-process && touch src/app/recruitment-process/page.js

# Applications
mkdir -p src/app/apply-now && touch src/app/apply-now/page.js
mkdir -p src/app/apply-now-international && touch src/app/apply-now-international/page.js
mkdir -p src/app/apply-now-uk-eu && touch src/app/apply-now-uk-eu/page.js
mkdir -p src/app/book-appointment && touch src/app/book-appointment/page.js

# Contact
mkdir -p src/app/contact-us && touch src/app/contact-us/page.js
mkdir -p src/app/contact-admission-hub && touch src/app/contact-admission-hub/page.js
mkdir -p src/app/contact-employment-hub && touch src/app/contact-employment-hub/page.js

# Legal
mkdir -p src/app/privacy-policy && touch src/app/privacy-policy/page.js
mkdir -p src/app/modern-slavery-policy && touch src/app/modern-slavery-policy/page.js
mkdir -p src/app/services-we-provide && touch src/app/services-we-provide/page.js
mkdir -p src/app/social-links && touch src/app/social-links/page.js

# Blog
mkdir -p src/app/ukba-approved-banks-financial-institutions-in-bangladesh && touch src/app/ukba-approved-banks-financial-institutions-in-bangladesh/page.js
mkdir -p src/app/guide-to-ukba-approved-banks-and-financial-institutions-in-nigeria && touch src/app/guide-to-ukba-approved-banks-and-financial-institutions-in-nigeria/page.js
mkdir -p src/app/ukba-approved-banks-financial-institutions-in-sri-lanka-a-complete-guide && touch src/app/ukba-approved-banks-financial-institutions-in-sri-lanka-a-complete-guide/page.js
```

---

### Phase 4: Page Template

Each page follows this pattern:

```javascript
// src/app/[route-name]/page.js
import YourNav from '@/components/layout/header/AdmissionNav';
import YourComponent from '@/components/YourFeature/YourComponent';
import YourFooter from '@/components/layout/footer/AdmissionFooter';

export const metadata = {
  title: 'Page Title - LSOE',
  description: 'Page description for SEO',
};

export default function YourPage() {
  return (
    <div>
      <YourNav />
      <YourComponent />
      <YourFooter />
    </div>
  );
}
```

---

## 🧪 Testing

### Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### Test Checklist
- [ ] Home page loads
- [ ] Navigation works
- [ ] All links navigate correctly
- [ ] Forms submit properly
- [ ] Styles look identical
- [ ] Mobile responsive
- [ ] All integrations work (EmailJS, Calendly, etc.)

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

---

## 📝 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

---

## 🆘 Common Issues & Fixes

### Issue 1: "Module not found"
**Fix:** Check import paths use `@/` alias
```javascript
// ✅ Correct
import Component from '@/components/Feature/Component';

// ❌ Wrong
import Component from '../../components/Feature/Component';
```

### Issue 2: "useState is not defined"
**Fix:** Add `'use client';` at top of file

### Issue 3: "useRouter is not a function"
**Fix:** Use Next.js router
```javascript
// ✅ Correct
import { useRouter } from 'next/navigation';

// ❌ Wrong
import { useRouter } from 'next/router';
```

### Issue 4: Styles not applying
**Fix:** Ensure globals.css is imported in layout.js

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Migration from CRA](https://nextjs.org/docs/migrating/from-create-react-app)

---

## ✅ Quick Start Commands

```bash
# Navigate to project
cd /Users/mamun/Development/LSOE/WebProject/lsoe-nextjs

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

**Your Next.js project is ready! Start by installing dependencies, then we'll migrate the components together.** 🚀
