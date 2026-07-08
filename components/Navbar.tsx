"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#prices" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
      
  className="fixed top-0 left-0 w-full z-50 bg-[#F3F5F7]/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
>
      
        <div className="max-w-7xl mx-auto h-18 pl-122 pr-18 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#hero"
            className="justify-self-start  flex items-center gap-2"
          >
            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />

            <span
              className="hidden sm:block text-3xl font-bold tracking-[4px] transition-colors duration-300 ${
              "
            >
              LEVELS ON ICE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-normal tracking-wide transition-all duration-300 ${
                  "
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <Link
  href="#booking"
  className="hidden lg:flex items-center justify-center
             min-w-[100px]
             h-7
             px-100
             rounded-full
             bg-lime-400
             text-black
             text-base
             font-semibold
             tracking-wide
             shadow-lg
             hover:bg-lime-300
             hover:scale-105
             transition-all
             duration-300"
>
  Book Now
</Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl transition-colors duration-300 ${
                "
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85%] bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-24 px-6 border-b">

          <div className="flex items-center gap-3">

            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={42}
              height={42}
              className="rounded-full"
            />

            <span className="font-bold tracking-wide text-slate-900">
              LEVELS ON ICE
            </span>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-slate-800"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col px-8 py-6">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-lg text-slate-700 border-b border-gray-100 hover:text-lime-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-lime-400 text-black text-center py-4 rounded-full font-semibold hover:bg-lime-300 transition"
          >
            Book Appointment
          </Link>

        </nav>
      </aside>
    </>
  );
}