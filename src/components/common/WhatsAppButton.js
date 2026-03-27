"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Format the number for the WhatsApp API
  const whatsappNumber = "447546795387";
  const message = encodeURIComponent("Hello! I would like to know more about the London School of Excellence.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-[90] flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow group"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-1.5 bg-white text-gray-800 text-sm font-bold rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 flex flex-row-reverse items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
        Chat with us
        {/* Little triangle arrow pointing right */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
