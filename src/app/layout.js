import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';
import CookieConsent from '@/components/common/CookieConsent';
import WhatsAppButton from '@/components/common/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.londonschoolofexcellence.com'),
  title: 'London School of Excellence | UK University Admissions for Local & International Students',
  description: 'London School of Excellence provides expert UK university admission services for both local (Home) and international students. Free consultancy, UCAS support, scholarships, and professional guidance for your academic success.',
  keywords: 'UK education, local student admission, international student consultancy, London School of Excellence, UCAS help, study in UK, university placement, LSOE admissions',
  authors: [{ name: 'London School of Excellence Admissions Team' }],
  icons: {
    icon: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    shortcut: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    apple: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
  },
  openGraph: {
    title: 'London School of Excellence | UK University Admissions for Local & International Students',
    description: 'Elite UK university admission support for local and international students. Start your academic journey with professional guidance, scholarships, and career consultancy.',
    url: 'https://www.londonschoolofexcellence.com',
    siteName: 'London School of Excellence',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'London School of Excellence - Best UK University Admission Consultant',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London School of Excellence | UK University Admissions for Local & International Students',
    description: 'Expert UK university admission support for both local and international students. Join the London School of Excellence today.',
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
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "London School of Excellence",
              "url": "https://www.londonschoolofexcellence.com",
              "logo": "https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png",
              "sameAs": [
                "https://www.facebook.com/londonschoolofexcellence/",
                "https://www.linkedin.com/company/london-school-of-excellence/",
                "https://www.instagram.com/lsoe.ltd/",
                "https://www.tiktok.com/@londonschoolofexcellence"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5 Station Parade, Hornchurch, Elm Park",
                "addressLocality": "London",
                "postalCode": "RM12 5AB",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-1708-784763",
                "contactType": "admissions",
                "email": "info.office@londonschoolofexcellence.com"
              }
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
