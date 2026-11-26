
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z3ezl9tibblsszld.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
