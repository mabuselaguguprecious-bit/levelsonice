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
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-5 lg:px-8 flex items-center justify-between">

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

            <span className="hidden sm:block text-xl lg:text-2xl font-bold tracking-widest text-white">
              LEVELS ON ICE
            </span>
          </a>
                    {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

            <a
              href="#hero"
              className="transition hover:text-lime-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-lime-400"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-lime-400"
            >
              Experience
            </a>

            <a
              href="#prices"
              className="transition hover:text-lime-400"
            >
              Pricing
            </a>

            <a
              href="#gallery"
              className="transition hover:text-lime-400"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="transition hover:text-lime-400"
            >
              Contact
            </a>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Desktop Book Button */}
            <a
              href="#booking"
              className="hidden lg:flex items-center justify-center bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/30"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-3xl transition"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </header>
            {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85%] bg-slate-900 shadow-2xl z-[60] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h2 className="text-white text-xl font-bold">
            MENU
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl hover:text-lime-400 transition"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col p-8 space-y-6 text-lg">

          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Services
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Experience
          </a>

          <a
            href="#prices"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Pricing
          </a>

          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Gallery
          </a>

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Book Appointment
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-lime-400 transition"
          >
            Contact
          </a>

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-lime-400 text-black font-bold py-4 rounded-full text-center hover:bg-lime-300 transition"
          >
            Book Now
          </a>

        </nav>
      </div>

      {/* Dark Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
        />
      )}
          </>
  );
}