'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className={`max-w-4xl w-full text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 leading-none animate-pulse">
            404
          </h1>
          
          {/* Floating elements */}
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off. 
            Don't worry, even the best explorers get lost sometimes!
          </p>
        </div>

        {/* Animated Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <svg 
              className="w-48 h-48 md:w-64 md:h-64" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Magnifying Glass */}
              <circle 
                cx="80" 
                cy="80" 
                r="50" 
                stroke="#E91E63" 
                strokeWidth="8" 
                fill="none"
                className="animate-pulse"
              />
              <line 
                x1="120" 
                y1="120" 
                x2="160" 
                y2="160" 
                stroke="#E91E63" 
                strokeWidth="8" 
                strokeLinecap="round"
                className="origin-center animate-spin"
                style={{ animationDuration: '3s' }}
              />
              {/* Question Mark */}
              <text 
                x="80" 
                y="95" 
                fontSize="50" 
                fill="#0FCFEC" 
                textAnchor="middle" 
                fontWeight="bold"
                className="animate-bounce"
              >
                ?
              </text>
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg 
              className="w-5 h-5 mr-2 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="relative z-10">Go Home</span>
          </Link>

          <button
            onClick={goBack}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pink-600 bg-white border-2 border-pink-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg 
              className="w-5 h-5 mr-2 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="relative z-10">Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 font-medium">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/about-us" className="text-pink-600 hover:text-pink-700 hover:underline transition-colors">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact-us" className="text-pink-600 hover:text-pink-700 hover:underline transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/career-hub" className="text-pink-600 hover:text-pink-700 hover:underline transition-colors">
              Career Hub
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/partner-with-us" className="text-pink-600 hover:text-pink-700 hover:underline transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
