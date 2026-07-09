"use client";

import Image from "next/image";
import { useState } from "react";

const hairstyles = [
  "/images/P12.PNG",
  "/images/P6.jpg",
  "/images/P4.PNG",
  "/images/P8.PNG",
  "/images/P14.PNG",
  "/images/P15.PNG",
  "/images/p24.PNG",
  "/images/p31.PNG",
  "/images/p34.jpg",
  "/images/p36.jpg",
  "/images/P9.PNG",
  "/images/p2.jpg",
  "/images/P13.jpeg",
  "/images/39.PNG",
  "/images/P37.PNG",
  "/images/P38.PNG",
  "/images/P5.PNG",
  "/images/P11.PNG",
];

export default function HairGallery() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-[1700px] mx-auto px-5 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="max-w-4xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[7px] text-lime-500 font-semibold text-sm">
            HAIR COLLECTION
          </p>

          <h2 className="mt-5 text-5xl lg:text-7xl font-bold text-slate-900">
            Signature Braiding Styles
          </h2>
<div className="h-2" />
 <div className="flex justify-center mt-3000">
  <span className="w-70 h-1.5 rounded-full bg-gradient-to-r from-lime-100 to-emerald-400" />
</div>
<div className="h-5" />
          <p className="mt-8 text-lg leading-9 text-slate-600 max-w-3xl mx-auto">
            Browse our latest hairstyles. Click any image to
            view it in full screen or download it for inspiration.
          </p>

        </div>

        {/* ================= Gallery ================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
                    {hairstyles.map((image, index) => (

            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={image}
                  alt={`Hair Style ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                {/* View Text */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="rounded-full bg-white/90 px-6 py-3 font-semibold text-slate-900 shadow-lg">

                    View Full Screen

                  </div>

                </div>

              </div>

            </button>

          ))}

        </div>
                {/* ================= FULL SCREEN VIEWER ================= */}

        {selectedImage && (

          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6">

            {/* Close Button */}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white text-5xl hover:text-lime-400 transition"
            >
              ×
            </button>

            {/* Image */}

            <div className="relative w-full max-w-6xl h-[85vh]">

              <Image
                src={selectedImage}
                alt="Hair Style"
                fill
                className="object-contain rounded-2xl"
              />

            </div>
<div className = "h-5" />
            {/* Download */}

            <a
              href={selectedImage}
              download
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-65 py-40 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300"
            >
              Download Image
            </a>

          </div>

        )}
        <div className="h-6" />
                {/* ================= CALL TO ACTION ================= */}

        <div className="mt-24 text-center">

          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Love What You See?
          </h3>
<div className="h-5" />
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Book your next appointment with Levels On Ice and let our
            professional stylists create a hairstyle you'll love.
          </p>
<div className="h-5" />
          <a
            href="https://wa.me/27813906634"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-10 rounded-full bg-lime-400 px-10 py-5 text-lg font-bold text-black shadow-lg hover:bg-lime-300 hover:scale-105 transition-all duration-300"
          >
            Book Your Appointment
          </a>

        </div>

      </div>
    </section>
  );
}