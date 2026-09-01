// Portfolio Item — CONTEXT glossary. #5: real Canva-scraped cover via astro:assets Image.
import type { ImageMetadata } from 'astro';
import ihsanOchi from '../images/portfolio/ihsan-ochi.jpg';
import tittari from '../images/portfolio/tittari.jpg';
import bandaneira from '../images/portfolio/banda-neira.jpg';
import reelsvideo from '../images/portfolio/reels-video.jpg';
import waiimerch from '../images/portfolio/waii-merch.jpg';
import doubleg from '../images/portfolio/double-g.jpg';
import tsenja from '../images/portfolio/tsenja.jpg';
import santunan from '../images/portfolio/santunan.jpg';
import rissau from '../images/portfolio/rissau.jpg';
import amsakarcupii from '../images/portfolio/amsakar-cup-ii.jpg';
import miladpwkt15 from '../images/portfolio/milad-pwkt-15.jpg';
import photonprewedding from '../images/portfolio/photon-prewedding.jpg';

export interface PortfolioItem {
  slug: string;
  title: string;
  category: 'photo' | 'prewedding' | 'stage' | 'event' | 'product' | 'reels' | 'graphic' | 'live' | 'social';
  tags: string[];
  cover: ImageMetadata;
  meta?: { date?: string; client?: string; location?: string };
}

export const portfolio: PortfolioItem[] = [
  { slug: 'ihsan-ochi', title: 'Ihsan & Ochi', category: 'prewedding', tags: ['photo prewedding'], cover: ihsanOchi },
  { slug: 'tittari', title: 'Tittari', category: 'prewedding', tags: ['photo prewedding'], cover: tittari },
  { slug: 'banda-neira', title: 'Banda Neira', category: 'stage', tags: ['stage photography'], cover: bandaneira },
  { slug: 'reels-video', title: 'Reels Video', category: 'reels', tags: ['Reels Video'], cover: reelsvideo },
  { slug: 'waii-merch', title: 'WAII Merch', category: 'product', tags: ['photo product'], cover: waiimerch },
  { slug: 'double-g', title: 'Double G', category: 'product', tags: ['photo product'], cover: doubleg },
  { slug: 'tsenja', title: 'Tsenja', category: 'product', tags: ['photo product'], cover: tsenja },
  {
    slug: 'santunan',
    title: 'Santunan',
    category: 'social',
    tags: ['social media handling'],
    cover: santunan,
    meta: { date: '2025-07-05', client: 'SRIKANDI & FORKOM SE-JATENG', location: 'Batam' },
  },
  {
    slug: 'rissau',
    title: 'RISSAU',
    category: 'event',
    tags: ['event photography'],
    cover: rissau,
  },
  {
    slug: 'amsakar-cup-ii',
    title: 'AMSAKAR CUP II SABA KARATE',
    category: 'event',
    tags: ['event photography'],
    cover: amsakarcupii,
  },
  {
    slug: 'milad-pwkt-15',
    title: 'Milad PWKT Kota Batam Ke-15',
    category: 'event',
    tags: ['event photography'],
    cover: miladpwkt15,
    meta: { location: 'Batam' },
  },
  {
    slug: 'photon-prewedding',
    title: 'Ihsan & Pipit',
    category: 'prewedding',
    tags: ['photo prewedding'],
    cover: photonprewedding,
  },
];
