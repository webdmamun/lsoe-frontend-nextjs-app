'use client';

import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      smooth
      top={300}
      component={<FaArrowUp className="text-white text-xl" />}
      className="!flex items-center justify-center !bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
      style={{
        width: "3.2rem",
        height: "3.2rem",
        borderRadius: "9999px",
        left: "1.5rem",
        bottom: "1.5rem",
        zIndex: 1000,
      }}
    />
  );
}
