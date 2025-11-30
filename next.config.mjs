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

  // 🔴 Clé pour générer un site 100% statique
  output: 'export',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
};

export default nextConfig;
