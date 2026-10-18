import { SocialLink } from '@models/social-link.model';

export const PORTFOLIO_LINKS = {
  resume: {
    fileName: 'Shubham_Deshmukh_Resume.pdf',
    path: 'assets/documents/Shubham_Deshmukh_Resume.pdf',
  },
  email: 'shubhamdeshm37@gmail.com',
  github: 'https://github.com/shubhamdsk',
  linkedin: 'https://www.linkedin.com/in/shubham-deshmukh1720',
  x: 'https://x.com/shubhamdsk',
  nexoraStudio: 'https://software-studio.nexoralab.workers.dev/',
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    url: PORTFOLIO_LINKS.github,
    ariaLabel: 'Visit Shubham Deshmukh on GitHub',
  },
  {
    label: 'LinkedIn',
    url: PORTFOLIO_LINKS.linkedin,
    ariaLabel: 'Visit Shubham Deshmukh on LinkedIn',
  },
  {
    label: 'X',
    url: PORTFOLIO_LINKS.x,
    ariaLabel: 'Visit Shubham Deshmukh on X',
  },
  {
    label: 'Nexora Studio',
    url: PORTFOLIO_LINKS.nexoraStudio,
    ariaLabel: 'Visit Nexora Studio, the studio run by Shubham Deshmukh',
  },
] as const;
