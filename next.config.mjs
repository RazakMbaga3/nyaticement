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
  },
  
  // Environmental settings
  env: {
    // Add any public environment variables here
  }
};

export default nextConfig;