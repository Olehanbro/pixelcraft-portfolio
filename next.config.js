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
      },
      {
        source: "/sites/baseframe",
        destination: "/sites/baseframe/index.html"
      },
      {
        source: "/sites/baseframe/",
        destination: "/sites/baseframe/index.html"
      },
      {
        source: "/sites/stravorex",
        destination: "/sites/stravorex/index.html"
      },
      {
        source: "/sites/stravorex/",
        destination: "/sites/stravorex/index.html"
      },
      {
        source: "/sites/mercket",
        destination: "/sites/mercket/index.html"
      },
      {
        source: "/sites/mercket/",
        destination: "/sites/mercket/index.html"
      },
      {
        source: "/sites/casho",
        destination: "/sites/casho/index.html"
      },
      {
        source: "/sites/casho/",
        destination: "/sites/casho/index.html"
      },
      {
        source: "/sites/vinsor",
        destination: "/sites/vinsor/index.html"
      },
      {
        source: "/sites/vinsor/",
        destination: "/sites/vinsor/index.html"
      }
    ];
  }
};

module.exports = nextConfig;
