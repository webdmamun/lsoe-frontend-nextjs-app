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
  title: 'LSOE - London School of Excellence',
  description: 'A leading UK education hub providing expert university admissions, student visa advice, and career consultancy. Join 10,000+ students on their journey to excellence.',
  keywords: 'UK education, university admission, student visa, career hub, London School of Excellence, LSOE, study in London, UK degrees',
  authors: [{ name: 'LSOE Admissions Team' }],
  icons: {
    icon: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    shortcut: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    apple: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
  },
  openGraph: {
    title: 'LSOE - London School of Excellence',
    description: 'Your Gateway to UK Education and Employment Worldwide.',
    url: 'https://www.londonschoolofexcellence.com',
    siteName: 'London School of Excellence',
    images: [
      {
        url: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png',
        width: 1200,
        height: 630,
        alt: 'London School of Excellence logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSOE - London School of Excellence',
    description: 'Your Gateway to UK Education and Employment Worldwide.',
    images: ['https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        {children}
        <ToastContainer />
        <ScrollToTopButton />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
