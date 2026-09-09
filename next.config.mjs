/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Railpack / Nixpacks ready */
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.32.1", "localhost:3000", "192.168.32.1:3000"],
};

export default nextConfig;
