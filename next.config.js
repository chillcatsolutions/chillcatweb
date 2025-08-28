/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/mission': { page: '/mission' },
      '/projects': { page: '/projects' },
      '/services': { page: '/' },
      '/contact': { page: '/contact' },
    };
  },
}
