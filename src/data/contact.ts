// Contact Channel — CONTEXT glossary. Links only, no form (ADR-0005).
export interface ContactChannel {
  id: string;
  label: string;
  href: string;
}

const waNumber = '6285817999140';
const waGreeting = encodeURIComponent("Halo Nava Creative! Saya tertarik untuk berdiskusi tentang project.");

export const contactChannels: ContactChannel[] = [
  { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${waNumber}?text=${waGreeting}` },
  { id: 'email', label: 'Email', href: 'mailto:navaproduction9@gmail.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/navacreative.btm' },
];

export const contact = {
  instagramHandle: '@navacreative.btm',
  email: 'navaproduction9@gmail.com',
  phoneDisplay: '0858-1799-9140',
};
