import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import CookieConsent from '@/components/common/CookieConsent';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.londonschoolofexcellence.com'),
  title: {
    default: 'London School of Excellence | UK University Admissions Consultancy',
    template: '%s | London School of Excellence',
  },
  description:
    'London School of Excellence (LSOE) is a free UK university admissions consultancy based in London. Expert guidance for Home and international students on UCAS applications, Student Route visas, scholarships, and accommodation since 2013.',
  authors: [{ name: 'London School of Excellence Admissions Team' }],
  icons: {
    icon: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    shortcut: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    apple: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
  },
  openGraph: {
    title: 'London School of Excellence | UK University Admissions Consultancy',
    description:
      'Free university admissions support for UK Home and international students. UCAS guidance, Student Route visa advice, scholarships, and accommodation — expert help since 2013.',
    url: 'https://www.londonschoolofexcellence.com',
    siteName: 'London School of Excellence',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'London School of Excellence — Free UK University Admissions Consultancy',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London School of Excellence | UK University Admissions Consultancy',
    description:
      'Free UK university admissions guidance for Home and international students. UCAS, visas, scholarships, and accommodation support from LSOE.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.londonschoolofexcellence.com/#organization",
                  "name": "London School of Excellence",
                  "alternateName": "LSOE",
                  "foundingDate": "2013",
                  "url": "https://www.londonschoolofexcellence.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png",
                    "width": 400,
                    "height": 100
                  },
                  "image": "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png",
                  "description": "London School of Excellence (LSOE) is a free UK university admissions consultancy based in London, providing expert guidance for Home and international students since 2013.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "5 Station Parade, Hornchurch, Elm Park",
                    "addressLocality": "London",
                    "postalCode": "RM12 5AB",
                    "addressCountry": "GB"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+441708784763",
                      "contactType": "admissions",
                      "email": "info.office@londonschoolofexcellence.com",
                      "areaServed": ["GB", "EU"],
                      "availableLanguage": "English"
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+441708784763",
                      "contactType": "customer service",
                      "areaServed": ["GB", "EU"],
                      "availableLanguage": "English"
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/londonschoolofexcellence/",
                    "https://www.linkedin.com/company/london-school-of-excellence/",
                    "https://www.instagram.com/lsoe.ltd/",
                    "https://twitter.com/LsoeLtd",
                    "https://www.youtube.com/@lsoeteam",
                    "https://www.tiktok.com/@londonschoolofexcellence"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.londonschoolofexcellence.com/#localbusiness",
                  "name": "London School of Excellence",
                  "url": "https://www.londonschoolofexcellence.com",
                  "telephone": "+441708784763",
                  "email": "info.office@londonschoolofexcellence.com",
                  "priceRange": "Free",
                  "currenciesAccepted": "GBP",
                  "paymentAccepted": "Free consultancy service",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "5 Station Parade, Hornchurch, Elm Park",
                    "addressLocality": "London",
                    "postalCode": "RM12 5AB",
                    "addressCountry": "GB"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.5574,
                    "longitude": 0.2109
                  },
                  "areaServed": ["GB", "EU"],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "10:00",
                      "closes": "16:00"
                    }
                  ],
                  "parentOrganization": {
                    "@id": "https://www.londonschoolofexcellence.com/#organization"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.londonschoolofexcellence.com/#website",
                  "url": "https://www.londonschoolofexcellence.com",
                  "name": "London School of Excellence",
                  "inLanguage": "en-GB",
                  "publisher": {
                    "@id": "https://www.londonschoolofexcellence.com/#organization"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.londonschoolofexcellence.com/#webpage",
                  "url": "https://www.londonschoolofexcellence.com",
                  "name": "London School of Excellence | UK University Admissions Consultancy",
                  "description": "London School of Excellence (LSOE) is a free UK university admissions consultancy based in London. Expert guidance for Home and international students on UCAS applications, Student Route visas, scholarships, and accommodation since 2013.",
                  "inLanguage": "en-GB",
                  "isPartOf": { "@id": "https://www.londonschoolofexcellence.com/#website" },
                  "about": { "@id": "https://www.londonschoolofexcellence.com/#organization" },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.londonschoolofexcellence.com" }
                    ]
                  }
                }
              ]
            })
          }}
        />
        {children}
        <ToastContainer />
        <ScrollToTopButton />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
