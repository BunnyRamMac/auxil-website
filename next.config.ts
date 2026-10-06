import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.auxilitsolutions.com" }],
        destination: "https://auxilitsolutions.com/:path*",
        permanent: true,
      },
      // Phase 1 IA: merge legacy service pages into the new Services hubs.
      // Note: Next.js 16 serves `permanent: true` as 308 (not 301); both are
      // treated as permanent redirects by search engines.
      {
        source: "/consulting",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/enterprise-services",
        destination: "/services/talent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
