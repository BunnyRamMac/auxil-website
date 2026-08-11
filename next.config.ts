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
    ];
  },
};

export default nextConfig;
