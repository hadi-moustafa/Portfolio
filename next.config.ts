import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Never ship browser source maps to production.
  productionBrowserSourceMaps: false,
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "three"],
  },
};

export default nextConfig;
