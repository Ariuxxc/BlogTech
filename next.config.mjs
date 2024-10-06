/*
/**  @type {import('next').NextConfig} */
/*
const nextConfig = {};

export default nextConfig;
module.exports = {
    async middleware() {
      return [
        {
          source: '/api/hello',
          middleware: 'middleware.js',
        },
      ];
    },
  };
  */
 /** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/',
        },
      ];
    },
  };
  
  export default nextConfig;
  