/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.api-sports.io',
              port: '',
              pathname: '/football/**',
            },
          ],
        },
      };
export default nextConfig
