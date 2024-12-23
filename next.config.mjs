/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true, // This allows using images from the public folder without optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fjib1-2.fna.fbcdn.net/v/t1.6435-9/118274259_1681018442087076_7673754617329415483_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O3y_Kk-mUk0Q7kNvgHJVSuG&_nc_zt=23&_nc_ht=scontent.fjib1-2.fna&_nc_gid=AY6F-P-eYxUqXgLwrcLohIB&oh=00_AYCgCoolrUokGhwPTkqK-CbF3NdxMkt4R7Hdj8R65PpppA&oe=67909B28',
      },
      {
        protocol: 'https',
        hostname: 'mbkstadium.vercel.app',
      }
    ]
  },
};

export default nextConfig;
