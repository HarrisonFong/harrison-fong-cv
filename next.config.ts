import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const githubPagesBasePath = '/harrison-fong-cv';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isGitHubPages ? githubPagesBasePath : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
