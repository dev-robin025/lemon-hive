/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ENDPOINT: "https://api.react-finland.fi/graphql",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.react-finland.fi",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
