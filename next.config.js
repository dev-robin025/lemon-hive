/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_CMS_ENDPOINT: "https://api.react-finland.fi",
  },
};

module.exports = nextConfig;
