/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'shaniya.pro', 
          },
        ],
        destination: 'https://www.shaniya.pro/:path*', 
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.shaniya.pro', 
          },
        ],
        destination: 'https://www.shaniya.pro/:path*', 
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
