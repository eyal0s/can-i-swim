export default {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/public/:path*',
      },
    ];
  },
};