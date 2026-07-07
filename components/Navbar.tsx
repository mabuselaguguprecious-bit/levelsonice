"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Pricing", href: "#prices" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={48}
              height={48}
              className="rounded-full"
            />

            <h1 className="hidden md:block text-xl font-bold tracking-wider text-white">
              LEVELS ON ICE
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-white">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-lime-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <a
            href="#booking"
            className="hidden lg:flex bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-28 px-8 flex flex-col">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-semibold text-black py-5 border-b border-gray-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-10 bg-black text-white rounded-full py-4 text-center font-semibold"
          >
            Book Appointment
          </a>

        </div>
      </div>
    </>
  );
}