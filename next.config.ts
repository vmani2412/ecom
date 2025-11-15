import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  //basePath: "/ecom", // your repo name these 2 lines are for github pages for other hosting remove it
  //assetPrefix: "/ecom/",

  images: {
    unoptimized: true,
  },
  /* config options here */
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://127.0.0.1:8000/:path*',
          },
        ]
      },
  
};

export default nextConfig;
