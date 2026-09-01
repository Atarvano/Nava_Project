// Service — CONTEXT glossary. Numbered 01-07 in IA.
export interface Service {
  id: string;
  number: string;
  title: string;
}

export const services: Service[] = [
  { id: 'photoshoot', number: '01', title: 'photoshoot' },
  { id: 'video-editing', number: '02', title: 'video editing' },
  { id: 'live-streaming', number: '03', title: 'live streaming' },
  { id: 'graphic-design', number: '04', title: 'graphic design' },
  { id: 'photo-product', number: '05', title: 'photo product' },
  { id: 'social-media-handling', number: '06', title: 'social media handling' },
  { id: 'video-photo-documentation', number: '07', title: 'Video/photo documentation' },
];
