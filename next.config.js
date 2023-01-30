/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://emma-aledwassell.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
