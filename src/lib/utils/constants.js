// Application Constants

// Site Information
export const SITE_NAME = "London Source of Education";
export const SITE_ACRONYM = "LSOE";
export const SITE_TAGLINE = "Your Gateway to UK Education and Employment";

// Contact Information
export const CONTACT_EMAIL = "info@lsoe.com";
export const CONTACT_PHONE = "+44 (0) 20 1234 5678";

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/lsoe",
  twitter: "https://twitter.com/lsoe",
  linkedin: "https://linkedin.com/company/lsoe",
  instagram: "https://instagram.com/lsoe",
  youtube: "https://youtube.com/lsoe",
};

// Navigation Menu Items
export const MAIN_MENU = {
  admission: {
    title: "Admission Hub",
    path: "/about-admission-hub",
    submenu: [
      { title: "University Admission", path: "/university-admission" },
      { title: "Student Visa Advice", path: "/student-visa-advice" },
      { title: "Financial Information", path: "/student-financial-information" },
      { title: "Student Accommodation", path: "/student-accommodation" },
      { title: "English School", path: "/english-school" },
      { title: "AQF Guide", path: "/aqf-guide" },
    ],
  },
  employment: {
    title: "Employment Hub",
    path: "/about-employment-hub",
    submenu: [
      { title: "Find a Job", path: "/find-a-job" },
      { title: "Find Talent", path: "/find-a-talent" },
      { title: "Career Hub", path: "/career-hub" },
      { title: "Become a Teacher", path: "/became-a-teacher" },
      { title: "Recruitment Process", path: "/recruitment-process" },
    ],
  },
};

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number",
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
};

// Toast Notification Settings
export const TOAST_CONFIG = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Application Status
export const APPLICATION_STATUS = {
  DRAFT: "draft",
  SUBMITTED: "submitted",
  UNDER_REVIEW: "under_review",
  APPROVED: "approved",
  REJECTED: "rejected",
};

// Countries List (for forms)
export const COUNTRIES = [
  "United Kingdom",
  "Bangladesh",
  "India",
  "Pakistan",
  "Nigeria",
  "Sri Lanka",
  "Nepal",
  "Ghana",
  "Kenya",
  "Other",
];

// Education Levels
export const EDUCATION_LEVELS = [
  "High School",
  "Foundation",
  "Undergraduate",
  "Postgraduate",
  "PhD",
  "Professional Course",
];

// API Endpoints (if needed for future backend integration)
export const API_ENDPOINTS = {
  contact: "/api/contact",
  application: "/api/application",
  appointment: "/api/appointment",
};
