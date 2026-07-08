"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 sm:bottom-6 right-6 sm:right-3 z-1 flex items-center gap-5 bg-white text-black px-35 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-xl hover:bg-lime-400 transition-all duration-300 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-base sm:text-lg" />
      <span className="font-medium text-sm sm:text-base">Back to top</span>
    </button>
  );
}