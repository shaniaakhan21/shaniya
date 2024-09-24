/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow connections from all network interfaces
  experimental: {
    // outputFileTracing: true,
  },
  async redirects() {
      return [
          {
              source: '/:path*',
              has: [
                  {
                      type: 'host',
                      value: 'shaniya.pro', // Without www
                  },
              ],
              destination: 'https://www.shaniya.pro/:path*', // Redirect to the www version
              permanent: true,
          },
          {
              source: '/:path*',
              has: [
                  {
                      type: 'host',
                      value: 'www.shaniya.pro', // With www
                  },
              ],
              destination: 'https://www.shaniya.pro/:path*', // Ensure www also redirects to HTTPS
              permanent: true,
          },
      ];
  },
};

export default nextConfig;
