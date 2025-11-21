import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LSOE - London Source of Education',
  description: 'Your Gateway to UK Education and Employment - University Admissions, Student Services, and Career Opportunities',
  keywords: 'UK education, university admission, student visa, employment, career hub, LSOE',
  authors: [{ name: 'LSOE Team' }],
  icons: {
    icon: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    shortcut: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
    apple: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/favicon.jpg',
  },
  openGraph: {
    title: 'LSOE - London Source of Education',
    description: 'Your Gateway to UK Education and Employment',
    type: 'website',
    locale: 'en_GB',
    siteName: 'LSOE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSOE - London Source of Education',
    description: 'Your Gateway to UK Education and Employment',
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
      </body>
    </html>
  );
}
