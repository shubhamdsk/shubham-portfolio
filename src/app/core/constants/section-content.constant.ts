import { PORTFOLIO_LINKS, SOCIAL_LINKS } from '@core/constants/portfolio.constant';
import { AboutContent, AboutHighlight } from '@models/about.model';
import { ContactLink, ContactPageContent } from '@models/contact.model';
import { ExperienceItem, ExperiencePageContent } from '@models/experience.model';
import { HeroAction, HeroContent, HeroProfileRow, HeroStat } from '@models/hero.model';
import { ProjectGroup, ProjectPageContent } from '@models/project.model';
import { SkillGroup, SkillPageContent } from '@models/skill.model';
import { SocialLink } from '@models/social-link.model';
import { TechBadge } from '@models/tech-badge.model';

export const HOME_CONTENT = {
  hero: {
    status: 'Software Engineer at Hare and Turtle AI Solutions',
    title: 'I build web products',
    titleHighlight: 'from interface to database.',
    description:
      "I'm Shubham Deshmukh, a software engineer in Pune. I've spent two years shipping enterprise Angular platforms for Amdocs and Schaeffler teams, and I build products for small businesses through Nexora Studio.",
  } satisfies HeroContent,
  actions: [
    {
      label: 'View my work',
      path: '/projects',
      variant: 'primary',
    },
  ] satisfies readonly HeroAction[],
  socialLinks: SOCIAL_LINKS satisfies readonly SocialLink[],
  profileRows: [
    {
      icon: 'briefcase',
      tone: 'teal',
      label: 'Now',
      value: 'Hare and Turtle AI Solutions',
      detail: 'Software Engineer',
    },
    {
      icon: 'history',
      tone: 'violet',
      label: 'Before',
      value: 'Rabbit and Tortoise Technology Solutions',
      detail: 'Amdocs and Schaeffler platforms',
    },
    {
      icon: 'globe',
      tone: 'orange',
      label: 'Studio',
      value: 'Nexora Studio',
      detail: 'Software for small businesses',
    },
    {
      icon: 'pin',
      tone: 'cyan',
      label: 'Based',
      value: 'Pune, India',
      detail: 'Remote | Pan India | Global',
    },
  ] satisfies readonly HeroProfileRow[],
  techBadges: [
    { label: 'Angular' },
    { label: 'React' },
    { label: 'Next.js' },
    { label: 'TypeScript' },
    { label: '.NET' },
    { label: 'PostgreSQL' },
  ] satisfies readonly TechBadge[],
  stats: [
    { value: '2+', label: 'Years shipping production software' },
    { value: '3', label: 'Enterprise platforms delivered' },
    { value: '2', label: 'Client products shipped independently' },
  ] satisfies readonly HeroStat[],
} as const;

export const ABOUT_CONTENT = {
  content: {
    eyebrow: 'About',
    title: 'An engineer who owns the whole product, not just the screen.',
    description:
      'I started as an Angular specialist on data-heavy enterprise UIs: workflow canvases, AG Grid screens and real-time dashboards. Today I work across the stack, pairing Angular and React front ends with ASP.NET Core and Next.js APIs on PostgreSQL.',
    additionalDescription:
      'At Hare and Turtle AI Solutions I build AI-driven web products. Outside work I run Nexora Studio, where small businesses get billing, catalogue and quotation software that is fast, tested and theirs to run.',
  } satisfies AboutContent,
  highlights: [
    {
      icon: 'monitor',
      tone: 'cyan',
      title: 'Interfaces that hold up under data',
      description: 'Dashboards, large grids, workflow canvases and multi-step forms in Angular and React.',
    },
    {
      icon: 'server',
      tone: 'violet',
      title: 'The whole system',
      description: 'APIs in ASP.NET Core and Next.js on PostgreSQL and Redis, with clean boundaries between them.',
    },
    {
      icon: 'bolt',
      tone: 'orange',
      title: 'Live by default',
      description: 'SignalR and Server-Sent Events keep monitoring screens and scoreboards current without a refresh.',
    },
    {
      icon: 'shield',
      tone: 'teal',
      title: 'Quality you can ship',
      description: 'Strict TypeScript, tests, CI on every push and accessible markup from the first commit.',
    },
  ] satisfies readonly AboutHighlight[],
} as const;

export const EXPERIENCE_CONTENT = {
  content: {
    eyebrow: 'Experience',
    title: 'Two years of software in front of real users.',
    description: 'Enterprise teams first, then AI products. Every role has meant owning features end to end.',
  } satisfies ExperiencePageContent,
  items: [
    {
      role: 'Software Engineer',
      company: 'Hare and Turtle AI Solutions',
      duration: 'Sep 2026 - Present',
      location: 'Pune, India',
      summary: 'Building AI-driven web products end to end, from the interface to the services behind it.',
      isCurrent: true,
      responsibilities: [],
      technologies: [],
    },
    {
      role: 'Software Engineer',
      company: 'Rabbit and Tortoise Technology Solutions',
      duration: 'Jul 2024 - Aug 2026',
      location: 'Pune / Bengaluru, India',
      summary:
        'Built enterprise Angular applications for Amdocs and Schaeffler across AI workflow, developer tooling and automotive engineering platforms.',
      isCurrent: false,
      responsibilities: [
        'Shipped an interactive agent-workflow canvas with live execution monitoring over SignalR.',
        'Built AG Grid data screens, dashboards and validation flows with clear loading, empty and error states.',
        'Contributed VS Code extension features for AI-assisted Gradle build-error analysis.',
        'Delivered production features in Agile sprints alongside backend engineers.',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'SignalR', 'AG Grid', 'Angular Material', 'VS Code API'],
    },
  ] satisfies readonly ExperienceItem[],
} as const;

export const PROJECTS_CONTENT = {
  content: {
    eyebrow: 'Selected work',
    title: 'Platforms for enterprise teams, products for real businesses.',
    description: 'A short list of the work I am proudest of, from client platforms to products I ship independently.',
  } satisfies ProjectPageContent,
  groups: [
    {
      title: 'Enterprise platforms',
      note: 'Client work, source under NDA',
      items: [
        {
          title: 'Studioforce',
          category: 'AI workflow platform',
          description:
            'Angular web UI for an AI platform where Amdocs teams build and run agent workflows on a drag-and-drop canvas.',
          points: [
            'Workflow canvas with node connections, panning and agent skill configuration',
            'Dashboards for agents, blueprints, predictions and generated workflows',
            'Execution controls and live status updates over SignalR',
          ],
          technologies: ['Angular', 'TypeScript', 'SignalR', 'REST APIs'],
          links: [],
        },
        {
          title: 'AI-Assisted SW',
          category: 'Developer tooling',
          description:
            'Angular dashboards and VS Code extension features for AI-assisted analysis of Gradle build errors.',
          points: [
            'Project-wise, per-project and admin configuration dashboards',
            'Sends build errors and changed-file context to backend services',
            'AI recommendations with loading, filtering and pagination',
          ],
          technologies: ['Angular 19', 'TypeScript', 'VS Code API', 'REST APIs'],
          links: [],
        },
        {
          title: 'MBD, Model-Based Design',
          category: 'Automotive engineering',
          description:
            'Angular modules that turn requirements into Simulink models for an automotive embedded software pipeline.',
          points: [
            'Excel and Polarion requirement import workflows',
            'Large requirement datasets in AG Grid with filtering and pagination',
            'Level 3-4 requirement selection and agent dispatch',
          ],
          technologies: ['Angular 19', 'Signals', 'AG Grid', 'Angular Material'],
          links: [],
        },
      ],
    },
    {
      title: 'Independent work',
      note: 'Nexora Studio and open source',
      items: [
        {
          title: 'Nexora Studio',
          category: 'Studio, live',
          description: 'Studio site and admin portal with case studies and tracked enquiries.',
          points: [],
          technologies: ['Next.js', 'Neon', 'Drizzle', 'Cloudflare Workers'],
          links: [{ label: 'Visit site', url: PORTFOLIO_LINKS.nexoraStudio }],
        },
        {
          title: 'Cattle Feed Billing',
          category: 'Client product',
          description: 'Counter billing, live stock, customer dues and Marathi bills shared on WhatsApp for a feed shop.',
          points: [],
          technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
          links: [{ label: 'Case study', url: 'https://github.com/shubhamdsk/cattle-feed-showcase' }],
        },
        {
          title: 'Shree Balaji Paints',
          category: 'Client product, live',
          description: 'Phone-first catalogue with WhatsApp quotations and a paint calculator.',
          points: [],
          technologies: ['Next.js', 'Drizzle', 'Neon', 'Cloudflare Workers'],
          links: [
            { label: 'Live site', url: 'https://shree-balaji.shreebalajipaints.workers.dev/' },
            { label: 'Case study', url: 'https://github.com/shubhamdsk/shree-balaji-showcase' },
          ],
        },
        {
          title: 'Cricket Live',
          category: 'Open source, live',
          description: 'Real-time scores and commentary streamed over Server-Sent Events.',
          points: [],
          technologies: ['React', 'ASP.NET Core', 'Redis'],
          links: [
            { label: 'Live site', url: 'https://cricket-live-shubhamdsk1.vercel.app/' },
            { label: 'Source', url: 'https://github.com/shubhamdsk/cricket-live' },
          ],
        },
        {
          title: 'SQL Automation Next',
          category: 'Open source',
          description: 'Multi-database workspace for schema design and safe SQL execution.',
          points: [],
          technologies: ['React', '.NET', 'YARP', 'Docker'],
          links: [{ label: 'Source', url: 'https://github.com/shubhamdsk/SQL-Automation-Next' }],
        },
      ],
    },
  ] satisfies readonly ProjectGroup[],
} as const;

export const SKILLS_CONTENT = {
  content: {
    eyebrow: 'Toolkit',
    title: 'The tools I reach for.',
    description: 'Angular-first on the front end, comfortable everywhere behind it.',
  } satisfies SkillPageContent,
  groups: [
    {
      icon: 'layers',
      tone: 'cyan',
      title: 'Frontend',
      description: 'Typed, component-driven interfaces that stay fast with real data.',
      skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'RxJS', 'Signals', 'SCSS', 'Tailwind CSS', 'AG Grid', 'Angular Material'],
    },
    {
      icon: 'server',
      tone: 'violet',
      title: 'Backend and data',
      description: 'APIs, real-time channels and the databases behind them.',
      skills: ['ASP.NET Core', 'C#', 'Node.js', 'REST APIs', 'SignalR', 'Server-Sent Events', 'PostgreSQL', 'SQL Server', 'Redis', 'Drizzle ORM'],
    },
    {
      icon: 'cloud',
      tone: 'orange',
      title: 'Cloud and delivery',
      description: 'Edge-first hosting that is quick to ship and inexpensive to run.',
      skills: ['Cloudflare Workers', 'Vercel', 'Neon', 'Docker', 'GitHub Actions', 'Git'],
    },
    {
      icon: 'shield',
      tone: 'teal',
      title: 'Quality and tooling',
      description: 'The checks and tools that keep releases boring.',
      skills: ['Vitest', 'Playwright', 'Accessibility (WCAG)', 'VS Code Extension API', 'Postman', 'Agile / Scrum'],
    },
  ] satisfies readonly SkillGroup[],
} as const;

export const CONTACT_CONTENT = {
  content: {
    eyebrow: 'Contact',
    title: "Let's build something worth using.",
    description:
      'Have a product in mind, a collaboration, or just want to talk engineering? Email is the fastest way to reach me.',
    email: PORTFOLIO_LINKS.email,
    location: 'Based in Pune, India. Working with teams across time zones.',
  } satisfies ContactPageContent,
  links: [
    {
      icon: 'linkedin',
      tone: 'blue',
      label: 'LinkedIn',
      value: 'shubham-deshmukh1720',
      href: PORTFOLIO_LINKS.linkedin,
      ariaLabel: 'Visit Shubham Deshmukh on LinkedIn',
      isExternal: true,
    },
    {
      icon: 'github',
      tone: 'violet',
      label: 'GitHub',
      value: 'shubhamdsk',
      href: PORTFOLIO_LINKS.github,
      ariaLabel: 'Visit Shubham Deshmukh on GitHub',
      isExternal: true,
    },
    {
      icon: 'globe',
      tone: 'orange',
      label: 'Nexora Studio',
      value: 'Start a project',
      href: PORTFOLIO_LINKS.nexoraStudio,
      ariaLabel: 'Start a project with Nexora Studio',
      isExternal: true,
    },
  ] satisfies readonly ContactLink[],
} as const;
