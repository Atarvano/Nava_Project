// One-off Canva scrape: pull rendered images from the live Canva publish.
// ADR-0003: not a build-time dep. Run when you want to refresh assets:
//   node scripts/scrape-canva.mjs
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'src', 'images', 'portfolio');
const TARGET = 'https://navacreative.my.canva.site/homee';

// Slug order = intended assignment order for the real Canva photos
const SLUGS = [
  'ihsan-ochi', 'tittari', 'banda-neira', 'reels-video', 'waii-merch', 'double-g',
  'tsenja', 'santunan', 'rissau', 'amsakar-cup-ii', 'milad-pwkt-15', 'photon-prewedding',
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
console.log('opening', TARGET);
await page.goto(TARGET, { waitUntil: 'networkidle', timeout: 60000 });

// Force lazy-load: slow deep scroll so cards render real imgs
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 300)); }
  await new Promise((r) => setTimeout(r, 5000));
});
await page.waitForTimeout(2000);

// Real photos = _assets/media/*.jpg (not placeholder .png / svg / logo); fallback to any large
const hrefs = await page.evaluate(() =>
  Array.from(document.querySelectorAll('img')).map((img) => {
    const r = img.getBoundingClientRect();
    return { src: img.currentSrc || img.src || '', alt: img.alt || '', w: Math.round(r.width), h: Math.round(r.height) };
  })
);
const real = hrefs.filter((i) => /\.(jpg|jpeg|webp)/.test(i.src) && !/svg$/.test(i.src));
console.log('found', hrefs.length, 'imgs;', real.length, 'real photos');

let saved = 0;
// assign real photos round-robin to slugs in order
for (let i = 0; i < SLUGS.length; i++) {
  const slug = SLUGS[i];
  const dir = join(OUT, slug);
  await mkdir(dir, { recursive: true });
  const src = real.length > 0 ? real[i % real.length]?.src : null;
  if (!src) { console.log('HOLD', slug, '- no image, placeholder later'); continue; }
  try {
    const resp = await page.request.get(src);
    if (resp.ok()) {
      await writeFile(join(dir, 'cover.jpg'), await resp.body());
      saved++;
      console.log('OK', slug, '<-', src.slice(-40), `(${real[i % real.length].w}x${real[i % real.length].h})`);
    } else console.log('FAIL', slug, 'http', resp.status());
  } catch (e) { console.log('FAIL', slug, e.message); }
}
await browser.close();
console.log('saved', saved, 'of', SLUGS.length, '. Remaining slugs get art placeholders at build.');
