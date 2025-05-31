export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/']
    },
    sitemap: 'https://nyaticemet.com/sitemap.xml',
  };
}