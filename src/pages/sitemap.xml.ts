import type { APIRoute } from 'astro';
import { portfolio } from '../data/portfolio';

const pages = ['', 'about', 'team', 'service', 'portfolio', 'contact'];

export const GET: APIRoute = ({ site }) => {
  const urls = [
    ...pages.map((p) => new URL(`${p}`, site)),
    ...portfolio.map((item) => new URL(`portfolio/${item.slug}/`, site)),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.href}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
