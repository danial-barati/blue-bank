/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blubank.sb24.ir",
        port: "",
        pathname: "/static/**",
      },
    ],
  },
};

export default nextConfig;
