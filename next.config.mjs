/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nftpricefloor.com",
      },
    ],
  },
};

export default nextConfig;
