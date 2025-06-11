/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Garante que os assets funcionem no GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Evita problemas com roteamento no GitHub Pages
  distDir: 'out',
};

export default nextConfig;
