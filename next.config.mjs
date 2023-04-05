/** @type {import('next').NextConfig} */
const config = {

  // Get warnings on deprecations, etc
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  // Serve images from Sanity's image CDN
  images: {
    domains: ['cdn.sanity.io']
  }
}

export default config
