/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adding output: 'standalone' to optimize for production deployment
  output: 'standalone',
  
  // Adding proper image domains configuration if you're using external images
  images: {
    domains: ['lakecement.co.tz', 'nyaticement.vercel.app'],
    // Allow all domain images through remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Optimize image formats - use AVIF and WebP for better compression
    formats: ['image/avif', 'image/webp'],
    // Configure image size limits - increase from default 4MB to support larger files
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
  
  // Compression settings
  compress: true,
  
  // Add prefetching support
  experimental: {
    optimizeCss: true, // Optimize CSS for production
    scrollRestoration: true, // Better scroll behavior
  },
  
  // Environmental settings
  env: {
    // Add any public environment variables here
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://nyaticement.vercel.app',
  },
  
  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode
};

export default nextConfig;