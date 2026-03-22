/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [40, 80, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
