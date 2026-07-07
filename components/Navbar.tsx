"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5 lg:px-8">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={52}
              height={52}
              className="rounded-full"
            />

            <span
              className={`hidden sm:block text-2xl font-bold tracking-widest transition ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
              LEVELS ON ICE
            </span>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a
              href="#hero"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              About
            </a>

            <a
              href="#services"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Services
            </a>

            <a
              href="#experience"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Experience
            </a>

            <a
              href="#prices"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Pricing
            </a>

            <a
              href="#gallery"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Gallery
            </a>

            <a
              href="#contact"
              className={`text-base font-semibold transition ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Contact
            </a>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Desktop Book Button */}
            <a
              href="#booking"
              className="hidden lg:flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Now
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden text-3xl transition ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85%] bg-white shadow-2xl z-[60] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">

          <div className="flex items-center gap-3">

            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={42}
              height={42}
              className="rounded-full"
            />

            <span className="font-bold text-black tracking-wide">
              LEVELS ON ICE
            </span>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-black hover:text-gray-600 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-8 py-6">

          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Services
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Experience
          </a>

          <a
            href="#prices"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Pricing
          </a>

          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Gallery
          </a>

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black border-b border-gray-100 hover:text-gray-600 transition"
          >
            Book Appointment
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-lg font-semibold text-black hover:text-gray-600 transition"
          >
            Contact
          </a>

          {/* Book Button */}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-black text-white text-center font-bold py-4 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </a>

        </nav>

      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-white/80 z-50 lg:hidden"
        />
      )}

    </>
  );
}