"use client";

import { useState } from "react";

const videos = [
  "/videos/jess.mp4",
  "/videos/jess2.mp4",
  
];

export default function HairVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section
      id="hair-videos"
      className="bg-slate-50 py-24 lg:py-32"
    >
      <div className="max-w-[1700px] mx-auto px-5 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="max-w-4xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[7px] text-lime-500 font-semibold text-sm">
            FEATURED MOMENTS
          </p>
<div className="h-2" /> 
          <h2 className="mt-5 text-5xl lg:text-7xl font-bold text-slate-900">
            Watch Our Work
          </h2>
          <div className="flex justify-center mt-3000">
  <span className="w-70 h-1.5 rounded-full bg-gradient-to-r from-lime-100 to-emerald-400" />
</div>
<div className="h-6" />
<div className="h-4" /> 
          <p className="mt-8 text-lg leading-9 text-slate-600 max-w-3xl mx-auto">
            See our braiding techniques and finished styles in motion.
            Click any video to watch it in full screen.
          </p>

        </div>

        {/* ================= Video Grid ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                  {videos.map((video, index) => (

            <button
              key={index}
              onClick={() => setSelectedVideo(video)}
              className="group relative overflow-hidden rounded-[32px] bg-white shadow-md hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 hover:-translate-y-2"
            >

              <div className="relative aspect-[9/16] overflow-hidden">

                <video
                  src={video}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition duration-500" />

                {/* Play Button */}

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-slate-900 ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>

                  </div>

                </div>

                {/* Label */}

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-white text-xl font-bold">
                    
                  </p>

                  <p className="text-gray-200 mt-1">
                    Click to watch
                  </p>

                </div>

              </div>

            </button>

          ))}

        </div>
                {/* ================= FULL SCREEN VIDEO PLAYER ================= */}

        {selectedVideo && (

          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6">

            {/* Close Button */}

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 text-white text-3xl hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              ×
            </button>

            {/* Video */}

            <div className="w-full max-w-5xl">

              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] rounded-3xl shadow-2xl bg-black"
              />

            </div>

          </div>

        )}
        <div className="h-3" />
                {/* ================= CALL TO ACTION ================= */}

        <div className="mt-24 text-center">

          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Like What You See?
          </h3>
          <div className="h-4" />

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Ready for your next hairstyle? Book your appointment today and let
            our experienced stylists create a look that's uniquely yours.
          </p>
<div className="h-3" />
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