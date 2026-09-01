// EN strings — ADR-0002. Never hardcode copy in components; every user-facing string lives here.
export const t = {
  site: { name: 'Nava Creative', tagline: 'Crafting Moments, Creating Impact.' },
  about: {
    blurb: '"Nava Creative" is a symbol of a creative entity that brings new, fresh, and solution-oriented ideas to answer today\'s visual and communication needs.',
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
    makers: 'Makers',
    instagramLabel: 'Instagram',
    phoneLabel: 'Phone',
  },
  portfolio: {
    indexHeading: 'Portfolio',
    filterAll: 'All',
    detailHeading: 'Portfolio Item',
    next: 'Next',
    prev: 'Previous',
    metaDate: 'Date',
    metaClient: 'Client',
    metaLocation: 'Location',
    imagePlaceholder: 'Visual placeholder - real assets land later.',
  },
  team: { heading: 'Meet the Makers', experienceLabel: 'Experience' },
  service: { heading: 'Our Service' },
} as const;
