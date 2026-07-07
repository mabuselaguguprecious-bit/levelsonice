"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden w-full"
    >
      {/* Background Image */}
      <Image
        src="/images/HF.jpg"
        fill
        priority
        alt="Levels On Ice"
        className="object-cover object-[center_30%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-5xl px-6 text-center mx-auto"
      >
        {/* Subtitle */}
        <p className="mt-20 md:mt-10 uppercase tracking-[4px] md:tracking-[8px] text-lime-400 text-sm md:text-lg">
          Luxury Hair • Nails • Beauty
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-white">
          LEVELS
          <br />
          ON ICE
        </h1>

        {/* Description */}
        <p className="mt-8 mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-8">
          Experience premium hair, nails and beauty services in Mowbray.
          From intricate braids to flawless nail artistry, our team is
          dedicated to helping you look and feel your absolute best.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#booking"
            className="w-full sm:w-auto max-w-xs inline-flex items-center justify-center px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg md:text-xl hover:bg-lime-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/40"
          >
            Book Appointment
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto max-w-xs inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg md:text-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </motion.div>
    </section>
  );
}