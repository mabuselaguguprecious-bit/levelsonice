"use client";
import { useState, useEffect } from "react";

export default function HairVideos() {
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const ORG_ID = process.env.NEXT_PUBLIC_AURALINK_ORG_ID;
    const API_URL = process.env.NEXT_PUBLIC_AURALINK_API_URL;

    async function fetchVideos() {
      if (!ORG_ID || !API_URL) return;
      try {
        // Look here: folder=videos
        const res = await fetch(`${API_URL}/api/gallery?orgId=${ORG_ID}&folder=videos`);
        const data = await res.json();
        if (Array.isArray(data)) setVideos(data);
      } catch (error) {
        console.error("Failed to load videos", error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section id="videos" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1700px] mx-auto px-4">
        {/* Keep your existing Heading code here */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((url, index) => (
            <video 
              key={index} 
              src={url} 
              controls 
              className="w-full h-auto rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedVideo(url)}
            />
          ))}
        </div>
        
        {/* Keep your existing Lightbox/Modal component here if you have one */}
      </div>
    </section>
  );
}