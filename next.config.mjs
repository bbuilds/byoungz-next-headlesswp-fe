/** @type {import('next').NextConfig} */
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        port: "",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/(.*)sitemap.xml",
        destination: "/api/sitemap-proxy",
      },
      {
        source: "/sitemap(.*).xml",
        destination: "/api/sitemap-proxy",
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
