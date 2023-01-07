/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.themoviedb.org", port: "", pathname: "/t/p/w220_and_h330_face/**" }],
  },
};

module.exports = nextConfig;
