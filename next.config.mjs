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

  // 🔴 On revient en standalone (SSR côté serveur)
  output: 'standalone',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
};

export default nextConfig;
