/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'images.pexels.com' },
      { hostname: 'me7aitdbxq.ufs.sh' },
    ],
  },
}

export default nextConfig
