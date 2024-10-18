/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
  headers: () => [
    {
      // Create glob to target specific pages you want
      source: '/:path*',
      headers: [

        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.drive9.ru',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
