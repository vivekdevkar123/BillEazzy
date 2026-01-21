/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BillEazzy',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
