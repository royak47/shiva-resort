import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — Cloudflare Pages / any static host ready
  output: "export",
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
  // trailingSlash optional — keep clean URLs
  // trailingSlash: true,
};

export default nextConfig;
