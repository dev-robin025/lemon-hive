/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ENDPOINT: "https://api.react-finland.fi/graphql",
  },
};

module.exports = nextConfig;
