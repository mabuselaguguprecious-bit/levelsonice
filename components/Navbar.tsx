"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 bg-transparent" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-4">

          <Image
            src="/images/logo.jpg"
            alt="Levels On Ice"
            width={55}
            height={55}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold tracking-widest text-white">
            LEVELS ON ICE
          </h1>

        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">

          <a
            href="#hero"
            className="hover:text-lime-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-lime-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#experience"
            className="hover:text-lime-400 transition duration-300"
          >
            Experience
          </a>

          <a
            href="#prices"
            className="hover:text-lime-400 transition duration-300"
          >
            Pricing
          </a>

          <a
            href="#gallery"
            className="hover:text-lime-400 transition duration-300"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-lime-400 transition duration-300"
          >
            Contact
          </a>

        </nav>

        {/* Book Now Button */}
        <a
          href="#booking"
          className="hidden md:flex items-center justify-center bg-lime-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-lime-300 hover:scale-105 transition-all duration-300"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}