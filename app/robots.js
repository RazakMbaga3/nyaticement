export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/']
    },
    sitemap: 'https://nyaticement.vercel.app/sitemap.xml',
  };
}