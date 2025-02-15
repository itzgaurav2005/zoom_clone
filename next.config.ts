{import('next').NextConfig} 
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors
  },
};

module.exports = nextConfig;
