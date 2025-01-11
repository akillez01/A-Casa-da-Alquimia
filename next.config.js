/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;