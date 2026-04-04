/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/homestay-buddy',
        destination: 'https://home-stay-buddy.vercel.app/',
      },
      {
        source: '/homestay-buddy/:path*',
        destination: 'https://home-stay-buddy.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig
