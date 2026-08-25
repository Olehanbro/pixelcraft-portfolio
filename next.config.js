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
      },
      {
        source: "/sites/lifecycle",
        destination: "/sites/lifecycle/index.html"
      },
      {
        source: "/sites/lifecycle/",
        destination: "/sites/lifecycle/index.html"
      },
      {
        source: "/sites/optimo-studio",
        destination: "/sites/optimo-studio/index.html"
      },
      {
        source: "/sites/optimo-studio/",
        destination: "/sites/optimo-studio/index.html"
      }
    ];
  }
};

module.exports = nextConfig;
