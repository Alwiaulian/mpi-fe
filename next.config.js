/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/management",
        destination: "/management/commissioner",
        permanent: true,
      },
      {
        source: "/esg",
        destination: "/esg/gms",
        permanent: true,
      },
      {
        source: "/esg/gms",
        destination: "/esg/gms/announcement",
        permanent: true,
      },
      {
        source: "/esg/reporting",
        destination: "/esg/reporting/annual",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
