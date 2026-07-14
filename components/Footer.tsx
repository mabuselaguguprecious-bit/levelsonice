import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-50/90 border-t border-gray-200/60 pt-10 md:pt-14 pb-6 md:pb-8 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 pb-10 md:pb-12">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={52}
              height={52}
              className="rounded-full ring-1 ring-gray-200"
            />
            <h2 className="text-2xl font-bold text-gray-900 mt-4 tracking-tight">
              Levels On Ice
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mt-2 max-w-xs">
              Hair, Braids, Nails and Beauty services in Mowbray, Cape Town.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[1px] mb-4 md:mb-5">
              Quick Links
            </h3>
            <div className = "h-1" />
            <ul className="space-y-2.5 md:space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-lime-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-800 hover:text-lime-600 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-800 hover:text-lime-600 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-lime-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[1px] mb-4 md:mb-5">
              Get In Touch
            </h3>
            <div className = "h-1" />
            <ul className="space-y-3 md:space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-lime-500 text-xs w-4 shrink-0" />
                <a
                  href="tel:0813906634"
                  className="text-gray-900 font-medium hover:text-lime-600 transition-colors"
                >
                  081 390 6634
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="text-lime-500 text-xs w-4 shrink-0 mt-0.5" />
                <a
                  href="mailto:levelsonicegroup@gmail.com"
                  className="text-gray-900 font-medium hover:text-lime-600 transition-colors break-all"
                >
                  levelsonicegroup@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lime-500 text-xs w-4 shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  102 Main Road
                  <br />
                  Mowbray, Cape Town
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[1px] mb-4 md:mb-5">
              Connect With Us
            </h3>
<div className = "h-2" />
            <div className="flex items-center gap-4 md:gap-5 text-2xl text-gray-600 mb-5 md:mb-6">
              <a
                href="#"
                className="hover:text-lime-600 transition-colors"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/levelsonicesalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@levelsonicesalon1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition-colors"
              >
                <SiTiktok />
              </a>
            </div>
<div className = "h-2.5" />
            <a
              href="https://wa.me/27813906634"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-lime-700 bg-lime-50 border border-lime-300 hover:bg-lime-100 hover:border-lime-400 px-4 md:px-5 py-2.5 md:py-3 rounded-full transition-all duration-200"
            >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <hr className="border-gray-200/80 my-5 md:my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-gray-500">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center text-center md:text-left">
            <p>© 2026 Levels On Ice. All rights reserved.</p>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Terms of Use
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Legal
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Site Map
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <span className="text-gray-500">South Africa</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              
              <span className="text-gray-800 font-medium hover:text-lime-600 transition-colors">
                
              </span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}