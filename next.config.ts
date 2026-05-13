import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, "../../.."),
  },
  async redirects() {
    return [
      { source: "/frp-panels-vaughan",   destination: "/frp-installation-vaughan",   permanent: true },
      { source: "/frp-panels-etobicoke", destination: "/frp-installation-etobicoke", permanent: true },
    ];
  },
};

export default nextConfig;
