/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,

  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'twemoji.maxcdn.com'],
  },
}
