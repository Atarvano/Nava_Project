// ID default — ADR-0002. #6 wires toggle; #3 keeps strings data-driven.
export const t = {
  site: { name: 'Nava Creative', tagline: 'Crafting Moments, Creating Impact.' },
  about: {
    blurb:
      '"Nava Creative" adalah simbol entitas kreatif yang membawa ide baru, segar, dan solutif untuk menjawab kebutuhan visual dan komunikasi hari ini.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    team: 'Team',
    service: 'Service',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  contact: {
    heading: 'ready to work with US?',
    whatsapp: 'WhatsApp',
    email: 'Email',
    instagram: 'Instagram',
  },
  portfolio: {
    indexHeading: 'Portfolio',
    filterAll: 'All',
    detailHeading: 'Portfolio Item',
    next: 'Selanjutnya',
    prev: 'Sebelumnya',
    metaDate: 'Tanggal',
    metaClient: 'Klien',
    metaLocation: 'Lokasi',
  },
  team: { heading: 'Meet the Makers', experienceLabel: 'Experience' },
  service: { heading: 'Our service' },
} as const;
