
import { TechBadge } from '@models/tech-badge.model';
import { SocialLink } from '@models/social-link.model';

export const PORTFOLIO_LINKS = {
  resume: {
    fileName: 'Shubham_Deshmukh_Resume.docx',
    path: '/assets/documents/Shubham_Deshmukh_Resume.docx',
  },
  github: 'https://github.com/shubhamdsk',
  gitfut:'https://gitfut.com/shubhamdsk',
  linkedin: 'https://www.linkedin.com/in/shubham-deshmukh1720',
} as const;

export const HERO_TECH_BADGES: readonly TechBadge[] = [
  { label: 'Angular' },
  { label: 'TypeScript' },
  { label: 'Signals' },
  { label: 'RxJS' },
  { label: 'SCSS' },
  { label: 'REST APIs' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    url: PORTFOLIO_LINKS.github,
    ariaLabel: 'Visit Shubham Deshmukh GitHub profile',
  },
  {
    label: 'LinkedIn',
    url: PORTFOLIO_LINKS.linkedin,
    ariaLabel: 'Visit Shubham Deshmukh LinkedIn profile',
  },
  {
    label: 'GitFut',
    url: PORTFOLIO_LINKS.gitfut,
    ariaLabel: 'Visit Shubham Deshmukh GitFut profile',
  },
] as const;