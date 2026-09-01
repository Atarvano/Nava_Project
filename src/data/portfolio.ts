// Portfolio Item — CONTEXT glossary. #5 fills real images; placeholders keep grid honest.
export interface PortfolioItem {
  slug: string;
  title: string;
  category: 'photo' | 'prewedding' | 'stage' | 'event' | 'product' | 'reels' | 'graphic' | 'live' | 'social';
  tags: string[];
  images: string[];
  meta?: { date?: string; client?: string; location?: string };
}

export const portfolio: PortfolioItem[] = [
  { slug: 'ihsan-ochi', title: 'Ihsan & Ochi', category: 'prewedding', tags: ['photo prewedding'], images: [] },
  { slug: 'tittari', title: 'Tittari', category: 'prewedding', tags: ['photo prewedding'], images: [] },
  { slug: 'banda-neira', title: 'Banda Neira', category: 'stage', tags: ['stage photography'], images: [] },
  { slug: 'reels-video', title: 'Reels Video', category: 'reels', tags: ['Reels Video'], images: [] },
  { slug: 'waii-merch', title: 'WAII Merch', category: 'product', tags: ['photo product'], images: [] },
  { slug: 'double-g', title: 'Double G', category: 'product', tags: ['photo product'], images: [] },
  { slug: 'tsenja', title: 'Tsenja', category: 'product', tags: ['photo product'], images: [] },
  {
    slug: 'santunan',
    title: 'Santunan',
    category: 'social',
    tags: ['social media handling'],
    images: [],
    meta: { date: '2025-07-05', client: 'SRIKANDI & FORKOM SE-JATENG', location: 'Batam' },
  },
  {
    slug: 'rissau',
    title: 'RISSAU',
    category: 'event',
    tags: ['event photography'],
    images: [],
  },
  {
    slug: 'amsakar-cup-ii',
    title: 'AMSAKAR CUP II SABA KARATE',
    category: 'event',
    tags: ['event photography'],
    images: [],
  },
  {
    slug: 'milad-pwkt-15',
    title: 'Milad PWKT Kota Batam Ke-15',
    category: 'event',
    tags: ['event photography'],
    images: [],
    meta: { location: 'Batam' },
  },
  {
    slug: 'photon-prewedding',
    title: 'Ihsan & Pipit',
    category: 'prewedding',
    tags: ['photo prewedding'],
    images: [],
  },
];
