"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/HF.jpg"
        fill
        priority
        alt="Hero"
        className="object-cover object-[center_30%]"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-4xl px-6"
      >
        <p className="uppercase tracking-[8px] text-lime-400 mb-4 mt-10">
          Luxury Hair • Nails • Beauty
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight text-white">
          LEVELS
          <br />
          ON ICE
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto">
          Experience premium hair, nails and beauty services in Mowbray.
          From intricate braids to flawless nail artistry, our team is
          dedicated to helping you look and feel your absolute best.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

  <a
    href="#booking"
    className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-lime-400 text-black font-bold text-xl hover:bg-lime-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/40"
  >
    Book Appointment
  </a>

  <a
    href="#gallery"
    className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-white text-white font-semibold text-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
  >
    View Gallery
  </a>

</div>
      </motion.div>

    </section>
  );
}