/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 1920],
    minimumCacheTTL: 60,
    qualities: [25, 50, 65, 85],
  },
  experimental: {
    // optimizePackageImports: ["posthog-js", "react-icons"],
    // optimizeCss: true,
    // nextScriptWorkers: true,
  },
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: "/posthog-assets/:path*",
        destination: "https://eu-assets.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
  // async headers() {
  //   return [
  //     {
  //       source: "/_next/static/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/images/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
