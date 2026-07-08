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
     className={`fixed bottom-4 right-6 z-30 flex items-center gap-4 bg-white text-black px-10 py-6 rounded-2xl shadow-xl hover:bg-lime-400 transition-all duration-300`}
    >
      <FaArrowUp className="text-base sm:text-lg" />
      <span className="font-medium text-sm sm:text-base">Back to top</span>
    </button>
  );
}