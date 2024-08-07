/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.asariweb.pl",
        port: "",
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "*/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "*/**",
      },
    ],
  },
};

export default nextConfig;
