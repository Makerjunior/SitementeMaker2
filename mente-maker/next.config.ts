import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.mentemaker.com.br",
      },
      {
        protocol: "https",
        hostname: "www.mentemaker.com.br",
        pathname: "/images/logo/logo.png",
      },
    ],
  },
};

export default nextConfig;