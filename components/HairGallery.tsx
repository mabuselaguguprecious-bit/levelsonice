"use client";
import { useState, useEffect } from "react";
// If you have an Image from "next/image" or Lightbox imported, keep those imports!

export default function HairGallery() {
  // 1. Set up state for the images
  const [images, setImages] = useState<string[]>([]);
  
  // Keep your selectedImage state if you use a lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 2. Fetch from AuraLink
  useEffect(() => {
    const ORG_ID = process.env.NEXT_PUBLIC_AURALINK_ORG_ID;
    const API_URL = process.env.NEXT_PUBLIC_AURALINK_API_URL;

    async function fetchImages() {
      if (!ORG_ID || !API_URL) return;
      try {
        const res = await fetch(`${API_URL}/api/gallery?orgId=${ORG_ID}&folder=hair`);
        const data = await res.json();
        if (Array.isArray(data)) setImages(data);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1700px] mx-auto px-4">
        {/* Keep your existing Heading code here */}
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Hair image ${index + 1}`} 
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedImage(url)} // Keep your lightbox click
            />
          ))}
        </div>
        
        {/* Keep your existing Lightbox component here if you have one */}
      </div>
    </section>
  );
}