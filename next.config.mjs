/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 🔴 Clé pour la version statique
  output: 'export',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
};

export default nextConfig;
