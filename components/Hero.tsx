"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/HF.jpg"
        alt="Levels On Ice"
        fill
        priority
        className="object-cover object-center md:object-[center_30%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl px-6 sm:px-8 text-center"
      >
        {/* Subtitle */}
        <p className="uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[8px] text-lime-400 text-xs sm:text-sm md:text-lg font-semibold mt-16">
          Luxury Hair • Nails • Beauty
        </p>

        {/* Heading */}
        <h1 className="mt-6 font-black text-white leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          LEVELS
          <br />
          ON ICE
        </h1>

        {/* Description */}
        <p className="mt-8 mx-auto max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl leading-7 md:leading-8 px-2">
          Experience premium hair, nails and beauty services in Mowbray.
          <br className="hidden sm:block" />
          From intricate braids to flawless nail artistry,
          <br className="hidden sm:block" />
          we're here to help you look and feel your absolute best.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto sm:min-w-[220px] px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-400/40"
          >
            Book Appointment
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto sm:min-w-[220px] px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            View Gallery
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/70 flex justify-center">
          <div className="w-1.5 h-3 rounded-full bg-lime-400 mt-2" />
        </div>
      </motion.div>
    </section>
  );
}