import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let other devices on the network (phone, other PC) use `npm run dev`.
  // Add the IP you open the site from; scheme and port are ignored.
  allowedDevOrigins: ["192.168.1.71"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
