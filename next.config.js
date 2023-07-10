/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nnnnzs.cn",
        port: "",
        pathname: "/bing/*",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/api-remote/:path*",
      destination: "http://www.nnnnzs.cn/api-remote/:path*",
    },
  ],
};

module.exports = nextConfig;
