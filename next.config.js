/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sites/greenvista-service",
        destination: "/sites/greenvista-service/index.html"
      },
      {
        source: "/sites/greenvista-service/",
        destination: "/sites/greenvista-service/index.html"
      }
    ];
  }
};

module.exports = nextConfig;
