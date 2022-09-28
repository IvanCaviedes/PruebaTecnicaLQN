/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.seekpng.com','images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com','i.pinimg.com','vignette.wikia.nocookie.net']
  }
}

module.exports = nextConfig
