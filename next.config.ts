import type { NextConfig } from "next";

// Get the repository name from environment variable or default to empty string
// If using GitHub Pages with a custom domain, set basePath to empty string
// If using GitHub Pages default URL (username.github.io/repo-name), set basePath to repo name
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: false,
  },
  trailingSlash: true,
};

export default nextConfig;

