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
  // Important pour le mode standalone en prod
  output: 'standalone',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
};

export default nextConfig;
