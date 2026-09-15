import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isGitHubPages ? "/devops-portfolio" : "",
  assetPrefix: isGitHubPages ? "/devops-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
