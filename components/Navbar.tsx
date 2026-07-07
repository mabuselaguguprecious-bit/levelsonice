"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Levels On Ice"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="hidden sm:block text-xl lg:text-2xl font-bold tracking-wider text-white">
            LEVELS ON ICE
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          <a href="#hero" className="hover:text-lime-400 transition">Home</a>
          <a href="#about" className="hover:text-lime-400 transition">About</a>
          <a href="#experience" className="hover:text-lime-400 transition">Experience</a>
          <a href="#prices" className="hover:text-lime-400 transition">Pricing</a>
          <a href="#gallery" className="hover:text-lime-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-lime-400 transition">Contact</a>
        </nav>

        {/* Book Button */}
        <a
          href="#booking"
          className="hidden lg:flex items-center justify-center bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105"
        >
          Book Now
        </a>

      </div>
    </header>
  );
}