"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("lsoe_cookie_consent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lsoe_cookie_consent", "true");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700">
              <span className="font-semibold text-brand-primary text-base">We value your privacy 🍪</span>
              <br className="sm:hidden" />{" "}
              We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies according to our{" "}
              <Link href="/privacy-policy" className="text-brand-secondary font-semibold hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookie-policy" className="text-brand-secondary font-semibold hover:underline">
                Cookie Policy
              </Link>.
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
