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
    <footer className="bg-white border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={60}
              height={60}
              className="rounded-full"
            />

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Levels On Ice
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              Premium hair, braids, nails and beauty services
              in Mowbray, Cape Town.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              <a href="#about" className="block hover:text-lime-500">
                About
              </a>
              <a href="#services" className="block hover:text-lime-500">
                Services
              </a>
              <a href="#gallery" className="block hover:text-lime-500">
                Gallery
              </a>
              <a href="#contact" className="block hover:text-lime-500">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-lime-500 mt-1" />
                <a href="tel:0813906634">
                  081 390 6634
                </a>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-lime-500 mt-1" />
                <a href="mailto:levelsonicegroup@gmail.com">
                  levelsonicegroup@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-lime-500 mt-1" />
                <p>
                  102 Main Road
                  <br />
                  Mowbray, Cape Town
                </p>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <a href="#">
                <FaFacebook className="hover:text-lime-500 transition" />
              </a>

              <a
                href="https://www.instagram.com/levelsonicesalon/"
                target="_blank"
              >
                <FaInstagram className="hover:text-lime-500 transition" />
              </a>

              <a
                href="https://www.tiktok.com/@levelsonicesalon"
                target="_blank"
              >
                <SiTiktok className="hover:text-lime-500 transition" />
              </a>

            </div>

            <a
              href="https://wa.me/27813906634"
              target="_blank"
              className="inline-flex mt-8 bg-lime-400 text-black rounded-full px-6 py-3 font-semibold hover:bg-lime-300 transition"
            >
              <FaWhatsapp className="mr-2 mt-1" />
              WhatsApp Us
            </a>

          </div>

        </div>

        {/* Mobile */}
        <div className="md:hidden">

          <div className="flex flex-col items-center text-center">

            <Image
              src="/images/logo.jpg"
              alt="Levels On Ice"
              width={70}
              height={70}
              className="rounded-full"
            />

            <h2 className="mt-4 text-2xl font-bold">
              Levels On Ice
            </h2>

            <p className="mt-3 text-slate-600 max-w-sm">
              Premium hair, braids, nails and beauty services in
              Mowbray, Cape Town.
            </p>

          </div>

          <div className="mt-10 space-y-2">

            <details className="border-b py-4">
              <summary className="font-semibold cursor-pointer">
                Quick Links
              </summary>

              <div className="mt-4 space-y-3">
                <a href="#about" className="block">About</a>
                <a href="#services" className="block">Services</a>
                <a href="#gallery" className="block">Gallery</a>
                <a href="#contact" className="block">Contact</a>
              </div>
            </details>

            <details className="border-b py-4">
              <summary className="font-semibold cursor-pointer">
                Contact
              </summary>

              <div className="mt-4 space-y-3">
                <p>081 390 6634</p>
                <p>levelsonicegroup@gmail.com</p>
                <p>102 Main Road, Mowbray</p>
              </div>
            </details>

            <details className="border-b py-4">
              <summary className="font-semibold cursor-pointer">
                Follow Us
              </summary>

              <div className="flex gap-5 text-2xl mt-4">

                <FaFacebook />

                <a
                  href="https://www.instagram.com/levelsonicesalon/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@levelsonicesalon"
                  target="_blank"
                >
                  <SiTiktok />
                </a>

              </div>

            </details>

          </div>

          <a
            href="https://wa.me/27813906634"
            target="_blank"
            className="mt-10 w-full flex justify-center items-center bg-lime-400 text-black rounded-full py-4 font-semibold hover:bg-lime-300 transition"
          >
            <FaWhatsapp className="mr-2" />
            Chat on WhatsApp
          </a>

        </div>

        {/* Bottom */}
        <div className="border-t mt-16 pt-8 text-center text-sm text-slate-500">
          © 2026 Levels On Ice • Designed by <strong>Gugu Mabusela</strong>
        </div>

      </div>
    </footer>
  );
}