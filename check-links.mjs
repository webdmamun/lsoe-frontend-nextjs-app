import fs from 'fs/promises';
import path from 'path';

const COMPONENTS_TO_CHECK = [
  'src/components/shared/header/AdmissionNav.js',
  'src/components/homeCompo/GlobalBanner/GlobalBanner.js',
  'src/components/homeCompo/bannerBottom/BannerBottom.js',
  'src/components/homeCompo/studyDestinations/StudyDestinations.js',
  'src/components/homeCompo/Counter/Counter.js',
  'src/components/homeCompo/Reviews/ReviewsSection.js',
  'src/components/homeCompo/enquiryForm/EnquiryForm.js',
  'src/components/WorldUniversityAdmissionCompo/AssessmentWUA.js',
  'src/components/WorldUniversityAdmissionCompo/StudentVisaAdviceWUA.js',
  'src/components/WorldUniversityAdmissionCompo/FinanceWUA.js',
  'src/components/WorldUniversityAdmissionCompo/AccommodationWUA.js',
  'src/components/homeCompo/ReferralProgram/ReferralProgram.js',
  'src/components/homeCompo/Awards/AwardsSection.js',
  'src/components/AdmissionAboutCompo/OurPartners.js',
  'src/components/homeCompo/faqCompo/FAQSection.js',
  'src/components/homeCompo/newsletterSignup/NewsletterSignup.js',
  'src/components/shared/Footer/AdmissionFooter.js',
  'src/lib/utils/constants.js'
];

async function getValidRoutes(dir, basePath = '') {
  let routes = new Set();
  const dirents = await fs.readdir(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      let folderName = dirent.name;
      let newBasePath = basePath;

      if (folderName.startsWith('.')) continue;

      if (folderName.startsWith('(') && folderName.endsWith(')')) {
        let subRoutes = await getValidRoutes(path.join(dir, folderName), newBasePath);
        subRoutes.forEach(r => routes.add(r));
      } 
      else if (folderName.startsWith('[') && folderName.endsWith(']')) {
        // dynamic route like [slug], we just record it as a dynamic marker layer
        newBasePath = basePath + '/:dynamic';
        let subRoutes = await getValidRoutes(path.join(dir, folderName), newBasePath);
        subRoutes.forEach(r => routes.add(r));
      }
      else {
        newBasePath = basePath + '/' + folderName;
        let subRoutes = await getValidRoutes(path.join(dir, folderName), newBasePath);
        subRoutes.forEach(r => routes.add(r));
      }
    } else if (dirent.name === 'page.js' || dirent.name === 'page.jsx' || dirent.name === 'page.tsx') {
        let finalRoute = basePath === '' ? '/' : basePath;
        routes.add(finalRoute);
    }
  }
  return routes;
}

async function checkLinks() {
  const allHrefs = new Set();
  const fileHrefs = {};

  for (const file of COMPONENTS_TO_CHECK) {
    try {
      const content = await fs.readFile(path.join(process.cwd(), file), 'utf8');
      
      // matches href="/path" or href='/path' or href={"/path"}
      const regex = /href\s*=\s*(?:["'](\/[^"']*)["']|\{\s*["'](\/[^"']*)["']\s*\})/g;
      
      let match;
      while ((match = regex.exec(content)) !== null) {
        let link = match[1] || match[2];
        if (link.includes('#')) link = link.split('#')[0]; // strip hash
        
        if (link && link !== '/') {
            allHrefs.add(link);
            if (!fileHrefs[file]) fileHrefs[file] = [];
            if (!fileHrefs[file].includes(link)) fileHrefs[file].push(link);
        }
      }
    } catch (e) {
      // console.log(`Could not read ${file}`);
    }
  }

  const appDir = path.join(process.cwd(), 'src/app');
  const validRoutes = await getValidRoutes(appDir);
  // Also add some known static routes if any
  
  const brokenLinks = [];

  for (const href of allHrefs) {
    // If it's literally among the routes exactly
    if (validRoutes.has(href)) continue;
    
    // If not exact match, check if it matches a dynamic route
    let matchedDynamic = false;
    for (const valid of validRoutes) {
      if (valid.includes('/:dynamic')) {
        const regexPattern = '^' + valid.replace(/:dynamic/g, '[^/]+') + '$';
        if (new RegExp(regexPattern).test(href)) {
          matchedDynamic = true;
          break;
        }
      }
    }
    
    if (!matchedDynamic) {
        brokenLinks.push(href);
    }
  }

  console.log(JSON.stringify({ 
    totalLinks: allHrefs.size,
    validRoutes: Array.from(validRoutes),
    brokenLinks: brokenLinks.map(bl => ({
        url: bl,
        foundIn: Object.entries(fileHrefs).filter(([f, links]) => links.includes(bl)).map(([f]) => f)
    }))
  }, null, 2));
}

checkLinks();
