"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/27813906634"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-24 right-1 sm:right-10 z-50 group"
    >
      <div
        className="
          flex items-center justify-center
          w-14 h-14
          sm:w-16 sm:h-16
          md:w-[68px] md:h-[68px]
          rounded-full
          bg-[#25D366]
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:animate-none
          hover:scale-110
          hover:shadow-[0_0_35px_rgba(37,211,102,0.45)]
        "
      >
        <FaWhatsapp className="text-[28px] sm:text-[34px]" />
      </div>

      {/* Tooltip */}
      <span
        className="
          absolute right-16 sm:right-20 top-1/2 -translate-y-1/2
          whitespace-nowrap
          bg-black text-white
          text-xs sm:text-sm
          px-2 py-1.5 sm:px-3 sm:py-2
          rounded-lg
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
        "
      >
        Chat with us
      </span>
    </a>
  );
}