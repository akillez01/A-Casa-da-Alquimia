/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/A-Casa-da-Alquimia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/A-Casa-da-Alquimia/' : '',
};

module.exports = nextConfig;