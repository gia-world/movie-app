/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.themoviedb.org", port: "", pathname: "/t/p/**" }],
  },
};

module.exports = nextConfig;
