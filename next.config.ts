import { NextConfig } from 'next';
import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';
import withImages from 'next-images';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default withPlugins(
  [
    withTM(['lucide-react']),
    withImages,
  ],
  nextConfig
);