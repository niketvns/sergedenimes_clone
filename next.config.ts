import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://www.sergedenimes.com/cdn/shop/files/**')],
  }
};

export default nextConfig;
