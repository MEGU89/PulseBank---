/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false, // Disable Strict Mode to prevent double-renders (fixes Leaflet "already initialized" error)
}

export default nextConfig
