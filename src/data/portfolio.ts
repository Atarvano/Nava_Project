// Portfolio data — #3 fills real content from research; #2 needs a stub for getStaticPaths.
export interface PortfolioItem {
  slug: string;
  title: string;
  category: 'photo' | 'prewedding' | 'stage' | 'event' | 'product' | 'reels' | 'graphic' | 'live' | 'social';
  tags: string[];
  images: string[];
  meta?: { date?: string; client?: string; location?: string };
}

export const portfolio: PortfolioItem[] = [
  { slug: 'ihsan-ochi', title: 'Ihsan & Ochi', category: 'prewedding', tags: [], images: [] },
  { slug: 'banda-neira', title: 'Banda Neira', category: 'stage', tags: [], images: [] },
  { slug: 'waii-merch', title: 'WAII Merch', category: 'product', tags: [], images: [] },
  { slug: 'ams-akar-cup-ii', title: 'AMS AKAR CUP II', category: 'event', tags: [], images: [] },
  { slug: 'milad-pwkt-kota-batam-ke-15', title: 'Milad PWKT Kota Batam Ke-15', category: 'event', tags: [], images: [] },
  { slug: 'santunan', title: 'Santunan', category: 'social', tags: [], images: [] },
];
