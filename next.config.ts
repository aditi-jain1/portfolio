/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',       // 👈 replace with actual repo name
  assetPrefix: '/portfolio/',   // 👈 include trailing slash
}

module.exports = nextConfig
