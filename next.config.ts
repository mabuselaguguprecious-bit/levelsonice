import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com', // Allows all Vercel Blob URLs
      },
    ],
  },
};

export default nextConfig;