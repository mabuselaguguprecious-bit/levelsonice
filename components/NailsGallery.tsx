"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NailsGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ORG_ID = process.env.NEXT_PUBLIC_AURALINK_ORG_ID;
    const API_URL = process.env.NEXT_PUBLIC_AURALINK_API_URL;

    async function fetchImages() {
      if (!ORG_ID || !API_URL) return;
      try {
        const res = await fetch(`${API_URL}/api/gallery?orgId=${ORG_ID}&folder=nails`);
        const data = await res.json();
        if (Array.isArray(data)) setImages(data);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <section id="nails-gallery" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[7px] text-lime-500 font-semibold text-sm">
            NAIL COLLECTION
          </p>
          <h2 className="mt-5 text-5xl lg:text-7xl font-bold text-slate-900">
            Elegant Nail Designs
          </h2>
          <div className="h-6" />
          <p className="mt-8 text-lg leading-9 text-slate-600 max-w-3xl mx-auto">
            Browse our latest nail creations.
            Click any image to view it in full screen
            or download it for inspiration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={`Nail Design ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="rounded-full bg-white/90 px-6 py-3 font-semibold text-slate-900">
                    View Full Screen
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Full Screen Viewer */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white text-5xl hover:text-lime-400 transition"
            >
              ×
            </button>
            <div className="relative w-full max-w-6xl h-[85vh]">
              <Image
                src={selectedImage}
                alt="Nail Design"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
            <a
              href={selectedImage}
              download
              className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-8 py-3 font-semibold"
            >
              Download Image
            </a>
          </div>
        )}

        <div className="h-5" />

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Ready For Your Next Nail Set?
          </h3>
          <div className="h-4" />
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Whether you're looking for everyday elegance or a bold statement
            design, our nail technicians are ready to create the perfect set
            just for you.
          </p>
          <div className="h-3" />
          <a
            href="https://wa.me/27813906634"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-10 rounded-full bg-lime-400 text-slate-900 px-8 py-4 font-bold hover:bg-lime-500 transition"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}