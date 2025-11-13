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

  // IMPORTANT : on veut un bundle standalone pour le serveur
  output: 'standalone',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
};

export default nextConfig;
