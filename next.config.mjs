/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  // Enable static export for simpler Vercel deploys
  // Remove the line below if you need server-side features
  // output: "export",
};

export default nextConfig;
