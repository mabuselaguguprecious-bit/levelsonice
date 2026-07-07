"use client";

import Image from "next/image";
import { useEffect } from "react";

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({
  image,
  onClose,
}: LightboxProps) {

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") {

        onClose();

      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [onClose]);

  if (!image) return null;

  return (

    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-8"
    >

      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white text-5xl hover:text-lime-400 transition"
      >
        ×
      </button>

      <div
        onClick={(e)=>e.stopPropagation()}
        className="relative max-w-6xl w-full"
      >

        <Image
          src={image}
          alt=""
          width={1800}
          height={1800}
          className="rounded-3xl object-contain max-h-[90vh] w-full"
        />

      </div>

    </div>

  );

}