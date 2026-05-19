import type { APIRoute } from 'astro';

// Dynamically generated robots.txt.
// - Sitemap URL is computed from the configured site origin
// - /style is the internal style guide; pair with <meta name="robots" noindex>
//   on the page itself and the sitemap filter in astro.config.mjs.

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

# Internal pages — not for public listing
Disallow: /style
Disallow: /style/

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};
