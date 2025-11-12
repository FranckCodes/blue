/** @type {import('next').NextConfig} */
const nextConfig = {
  // ce que tu avais déjà
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // clé pour réduire la conso mémoire en prod
  output: 'standalone',

  experimental: {
    serverActions: { bodySizeLimit: '10mb' } // ajuste si besoin
  }
};

export default nextConfig;
