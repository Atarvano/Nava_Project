// Team Member — CONTEXT glossary. Strings live here, not in components.
export interface TeamMember {
  id: string;
  name: string;
  roles: string[];
  instagram: string;
  phones: string[];
  experience: string[];
}

export const team: TeamMember[] = [
  {
    id: 'hangga',
    name: 'hangga',
    roles: ['Operator', 'Graphic design', 'Editor'],
    instagram: 'hngga_',
    phones: ['085121915504'],
    experience: ['Freelance'],
  },
  {
    id: 'zidny',
    name: 'ZIdny',
    roles: ['Operator', 'Photographer', 'Videographer', 'Editor', 'Graphic design'],
    instagram: 'zidnylmn_',
    phones: [],
    experience: ['Freelance 3 Years', '6 Month Internship in PT Simple Kreasi Mandiri'],
  },
  {
    id: 'luthfi',
    name: 'Luthfi',
    roles: ['Editor', 'Photographer', 'Videographer'],
    instagram: 'luthfiahmadzidan',
    phones: ['085767985276', '085569000267'],
    experience: ['Freelance 3 Years', '6 Month Internship in PT TACITA EVENT ORGANIZER'],
  },
  {
    id: 'alfajrin',
    name: 'M.Alfajrin',
    roles: ['Videographer', 'Editor'],
    instagram: '_pajaarvz',
    phones: ['081261248587'],
    experience: ['Freelance 2 Years'],
  },
];
