import { PORTFOLIO_ICONS } from '@core/constants/icon.constant';
import { PORTFOLIO_LINKS, SOCIAL_LINKS } from '@core/constants/portfolio.constant';
import { AboutContent, AboutHighlight, AboutProjectExposure, AboutWorkflowStep } from '@models/about.model';
import { ContactAvailability, ContactLink, ContactPageContent } from '@models/contact.model';
import { ExperienceHighlight, ExperienceItem, ExperiencePageContent } from '@models/experience.model';
import { HeroAction, HeroCodeLine, HeroContent, HeroStat } from '@models/hero.model';
import { ProjectItem, ProjectPageContent } from '@models/project.model';
import { SkillGroup, SkillHighlight, SkillPageContent } from '@models/skill.model';
import { SocialLink } from '@models/social-link.model';
import { TechBadge } from '@models/tech-badge.model';

export const HOME_CONTENT = {
  hero: {
    eyebrow: 'Frontend Developer | Angular | TypeScript',
    title: 'Building Angular apps for AI and engineering workflows.',
    description:
      'Hi, I\'m Shubham Deshmukh. I work with Angular, TypeScript, RxJS, Signals, SCSS, REST APIs, and SignalR to build production-ready frontend applications for global client teams.',
  } satisfies HeroContent,
  actions: [
    {
      label: 'View Projects',
      path: '/projects',
      variant: 'primary',
    },
  ] satisfies readonly HeroAction[],
  socialLinks: SOCIAL_LINKS satisfies readonly SocialLink[],
  techBadges: [
    { label: 'Angular' },
    { label: 'TypeScript' },
    { label: 'SignalR' },
    { label: 'Signals' },
    { label: 'RxJS' },
    { label: 'REST APIs' },
  ] satisfies readonly TechBadge[],
  codeLines: [
    { prefix: 'const', content: ' developer = {' },
    { content: "  name: 'Shubham Deshmukh'," },
    { content: "  role: 'Frontend Developer'," },
    { content: "  focus: ['Angular', 'AI Workflows', 'MBD']," },
    { content: "  mindset: 'Clean, scalable code'" },
    { content: '};' },
  ] satisfies readonly HeroCodeLine[],
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: 'Angular', label: 'Primary Stack' },
    { value: '3', label: 'Client Projects' },
  ] satisfies readonly HeroStat[],
} as const;

export const ABOUT_CONTENT = {
  content: {
    eyebrow: 'About Me',
    title: 'Frontend developer focused on Angular, AI workflows, and engineering platforms.',
    description:
      'I am a frontend developer with hands-on experience in Angular, TypeScript, JavaScript, SCSS, RxJS, Signals, SignalR, REST API integration, and enterprise UI development.',
    additionalDescription:
      'I enjoy building clean, maintainable, and user-friendly applications with a strong focus on reusable components, performance, accessibility, and practical frontend architecture. My recent work includes Angular web UIs for Studioforce, AI-assisted Gradle error analysis, and Model-Based Design, with additional VS Code extension contribution in the AI-Assisted SW project.',
  } satisfies AboutContent,
  highlights: [
    {
      value: '2+',
      label: 'Years Experience',
      description: 'Building and shipping enterprise Angular applications for global client teams.',
    },
    {
      value: 'Angular',
      label: 'Primary Expertise',
      description:
        'Strong practical experience with standalone components, Signals, RxJS, forms, routing, services, and reusable architecture.',
    },
    {
      value: 'Enterprise UI',
      label: 'Project Experience',
      description:
        'Worked on complex frontend flows involving dashboards, workflow canvases, API integration, AG Grid, reusable components, and responsive layouts.',
    },
    {
      value: 'AI + MBD',
      label: 'Modern Development',
      description:
        'Experience with AI agent workflows, real-time monitoring, developer tooling, and automotive Model-Based Design platforms.',
    },
  ] satisfies readonly AboutHighlight[],
  projectExposure: [
    {
      title: 'Studioforce',
      description: 'Created Angular web UI features for an AI-powered workflow platform used by Amdocs client teams.',
      points: [
        'Implemented interactive drag-and-drop workflow canvas behavior for agent-based workflows.',
        'Built agent, blueprint, prediction, and generated workflow dashboard screens.',
        'Integrated REST APIs and SignalR for execution controls, live status updates, and monitoring flows.',
        'Handled reusable UI patterns for agent skill configuration and workflow execution states.',
      ],
    },
    {
      title: 'AI-Assisted SW',
      description:
        'Created Angular web UI screens for AI-assisted Gradle error analysis and also contributed to VS Code extension features.',
      points: [
        'Designed project-wise, individual project, and admin configuration dashboards.',
        'Integrated APIs to send build-error and changed-file context to backend services.',
        'Displayed AI-assisted solution recommendations with loading, filtering, pagination, and error states.',
        'Contributed to VS Code extension flows using webviews, commands, and file watching concepts.',
      ],
    },
    {
      title: 'MBD - Model-Based Design',
      description:
        'Created Angular web UI modules for requirement-to-Simulink-model generation in an automotive embedded software pipeline.',
      points: [
        'Built Excel and Polarion import workflows for requirement datasets.',
        'Rendered large requirement data tables using AG Grid with pagination and filtering.',
        'Implemented Level 3-4 requirement selection and agent dispatch flows.',
        'Managed UI state with Angular Signals and reusable Angular Material components.',
      ],
    },
  ] satisfies readonly AboutProjectExposure[],
  workflowSteps: [
    {
      step: '01',
      title: 'Understand Requirement',
      description: 'I first understand the feature goal, user flow, data requirement, and edge cases before writing code.',
    },
    {
      step: '02',
      title: 'Plan UI Structure',
      description:
        'I break the UI into sections, reusable components, models, services, and routing structure where needed.',
    },
    {
      step: '03',
      title: 'Build Clean Implementation',
      description: 'I prefer readable TypeScript, Signals for state, BEM-based SCSS, and clear HTML structure.',
    },
    {
      step: '04',
      title: 'Polish & Improve',
      description: 'I check responsiveness, accessibility, loading states, error cases, and performance improvements.',
    },
  ] satisfies readonly AboutWorkflowStep[],
} as const;

export const SKILLS_CONTENT = {
  content: {
    eyebrow: 'Skills & Tools',
    title: 'Technologies I use to build reliable frontend applications.',
    description:
      'My skill set is centered around Angular development, TypeScript, UI engineering, real-time integration, VS Code extension flows, and clean frontend architecture.',
  } satisfies SkillPageContent,
  groups: [
    {
      title: 'Frontend Core',
      description: 'Strong fundamentals for building modern, responsive, and user-friendly web interfaces.',
      icon: PORTFOLIO_ICONS.skills.frontendCore,
      skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'Responsive Design'],
    },
    {
      title: 'Angular Ecosystem',
      description: 'Practical Angular experience with modern patterns used in real-world enterprise projects.',
      icon: PORTFOLIO_ICONS.skills.angularEcosystem,
      skills: ['Angular 19', 'Standalone Components', 'Signals', 'RxJS', 'Routing', 'Forms', 'Dependency Injection'],
    },
    {
      title: 'UI Development',
      description: 'Clean UI implementation with reusable components, accessibility, and scalable styling practices.',
      icon: PORTFOLIO_ICONS.skills.uiDevelopment,
      skills: ['BEM', 'Angular Material', 'AG Grid', 'Accessibility', 'Reusable Components', 'Design Systems'],
    },
    {
      title: 'API & Data Handling',
      description:
        'Experience building API-driven and real-time screens with proper loading, error handling, and typed data models.',
      icon: PORTFOLIO_ICONS.skills.apiData,
      skills: ['REST APIs', 'SignalR', 'Typed Interfaces', 'Services', 'Loading States', 'Error Handling'],
    },
    {
      title: 'Extension Development',
      description: 'Hands-on exposure to VS Code extension flows for developer productivity tooling.',
      icon: PORTFOLIO_ICONS.skills.extensionDevelopment,
      skills: ['VS Code Extension API', 'Chokidar', 'Webviews', 'Commands', 'Gradle Error Analysis'],
    },
    {
      title: 'Tools & Workflow',
      description: 'Development workflow tools used for coding, debugging, collaboration, and API testing.',
      icon: PORTFOLIO_ICONS.skills.toolsWorkflow,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Agile/Scrum'],
    },
    {
      title: 'Currently Exploring',
      description: 'Technologies and practices I am learning to improve frontend architecture and development speed.',
      icon: PORTFOLIO_ICONS.skills.exploring,
      skills: ['Angular MCP', 'AI-assisted Development', 'React TypeScript', 'Performance Optimization'],
    },
  ] satisfies readonly SkillGroup[],
  highlights: [
    {
      title: 'Angular-first development',
      description:
        'I prefer Angular standalone components, Signals, services, models, and lazy routes for scalable app structure.',
    },
    {
      title: 'Maintainable UI architecture',
      description: 'I focus on reusable components, clear SCSS structure, BEM naming, and predictable data flow.',
    },
    {
      title: 'Practical problem solving',
      description:
        'I work on real-world frontend problems like API integration, SignalR updates, table flows, dashboards, filters, and state handling.',
    },
  ] satisfies readonly SkillHighlight[],
} as const;

export const EXPERIENCE_CONTENT = {
  content: {
    eyebrow: 'Experience',
    title: 'Building enterprise Angular applications for global client teams.',
    description:
      'My professional work is focused on Angular, TypeScript, RxJS, Signals, SCSS, REST API integration, SignalR, dashboards, AG Grid screens, workflow UIs, and frontend architecture for enterprise applications.',
  } satisfies ExperiencePageContent,
  highlights: [
    {
      value: '2+',
      label: 'Years',
      description: 'Practical frontend development experience with Angular and TypeScript.',
    },
    {
      value: '2',
      label: 'Client Teams',
      description: 'Worked with Amdocs and Schaeffler client teams through Rabbit and Tortoise Technology Solutions.',
    },
    {
      value: '3',
      label: 'Major Projects',
      description: 'Worked on Studioforce, AI-Assisted SW, and MBD frontend workflows.',
    },
    {
      value: 'Angular',
      label: 'Primary Stack',
      description: 'Focused on modern Angular, Signals, RxJS, SCSS, and reusable architecture.',
    },
  ] satisfies readonly ExperienceHighlight[],
  items: [
    {
      role: 'Software Engineer',
      company: 'Rabbit and Tortoise Technology Solutions',
      duration: 'Jul 2024 - Present',
      location: 'Pune / Bengaluru, India',
      summary:
        'Developing enterprise Angular applications for Amdocs and Schaeffler across AI workflow, developer tooling, and automotive engineering platforms.',
      responsibilities: [
        'Develop and maintain enterprise-grade Angular applications using TypeScript, RxJS, Signals, SCSS, and REST APIs.',
        'Build reusable UI components, interactive dashboards, validation flows, and AG Grid-powered data screens.',
        'Integrate API flows with clear loading, empty, and error states for production user journeys.',
        'Implement real-time execution updates using SignalR for workflow monitoring screens.',
        'Contribute to VS Code extension features for automated Gradle error analysis using webviews, commands, and file watching flows.',
        'Partner with backend engineers to deliver production-ready features within Agile sprints.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'SCSS',
        'RxJS',
        'Signals',
        'SignalR',
        'REST APIs',
        'AG Grid',
        'Angular Material',
        'VS Code Extension API',
        'Chokidar',
        'Git',
      ],
    },
  ] satisfies readonly ExperienceItem[],
} as const;

export const PROJECTS_CONTENT = {
  content: {
    eyebrow: 'Projects',
    title: 'Selected work across AI workflows, developer tooling, and engineering platforms.',
    description:
      'These projects highlight my practical experience creating Angular web UIs with TypeScript, SCSS, REST API integration, SignalR, reusable components, dashboards, AG Grid, and AI-assisted development platforms.',
  } satisfies ProjectPageContent,
  items: [
    {
      title: 'Studioforce',
      category: 'AI Workflow Platform',
      description:
        'Created the Angular web UI for an AI-powered workflow platform where users build and execute agent-based workflows through an interactive drag-and-drop canvas.',
      icon: PORTFOLIO_ICONS.projects.studioforce,
      responsibilities: [
        'Developed Angular web UI features for an AI-powered workflow platform using TypeScript and SCSS.',
        'Implemented node connections, drag-and-drop behavior, panning, and agent skill configuration flows.',
        'Integrated frontend workflow screens with backend services through REST APIs.',
        'Built dashboards for agents, blueprints, predictions, and generated workflows.',
        'Added execution controls, live status monitoring, and real-time updates using SignalR.',
      ],
      technologies: ['Angular', 'TypeScript', 'SignalR', 'SCSS', 'REST APIs', 'HTML', 'CSS', 'Git'],
      highlights: ['Interactive workflow canvas', 'Real-time execution monitoring', 'AI agent workflow dashboards'],
    },
    {
      title: 'AI-Assisted SW',
      category: 'Enterprise Angular Application',
      description:
        'Created the Angular web UI for AI-assisted Gradle error analysis and also contributed to VS Code extension features for developer productivity workflows.',
      icon: PORTFOLIO_ICONS.projects.aiAssistedSw,
      responsibilities: [
        'Developed Angular web UI screens for AI-assisted Gradle error analysis and solution recommendation flows.',
        'Designed project-wise error dashboards, individual project dashboards, and admin configuration dashboards.',
        'Integrated REST APIs to send build-error and changed-file context to backend services.',
        'Displayed AI-assisted solution recommendations with clear loading and error handling states.',
        'Contributed to VS Code extension features for collecting changed-file context and supporting developer-side analysis flows.',
      ],
      technologies: ['Angular 19', 'TypeScript', 'SCSS', 'REST APIs', 'VS Code Extension API', 'Chokidar'],
      highlights: ['Gradle error analysis', 'VS Code extension flows', 'AI solution recommendations'],
    },
    {
      title: 'MBD - Model-Based Design',
      category: 'Automotive Engineering Platform',
      description:
        'Created the Angular web UI for a requirement-to-Simulink-model generation platform supporting an automotive embedded software pipeline.',
      icon: PORTFOLIO_ICONS.projects.mbd,
      responsibilities: [
        'Developed Angular web UI modules for requirement-to-Simulink-model generation workflows.',
        'Built Excel and Polarion import workflows for requirement data ingestion.',
        'Rendered large requirement datasets using AG Grid with pagination and filtering.',
        'Implemented Level 3-4 requirement selection and agent dispatch through RIA, LLRGA, and FLA.',
        'Managed UI state with Angular Signals and reusable Angular Material components.',
      ],
      technologies: ['Angular 19', 'TypeScript', 'SCSS', 'AG Grid', 'Angular Material', 'REST APIs', 'Signals'],
      highlights: ['Requirement import workflows', 'Large AG Grid datasets', 'Simulink generation flow'],
    },
    {
      title: 'Angular Portfolio',
      category: 'Personal Portfolio',
      description:
        'A modern Angular portfolio built with Angular 21, standalone components, Signals, routing, reusable sections, and scalable SCSS architecture.',
      icon: PORTFOLIO_ICONS.projects.angularPortfolio,
      responsibilities: [
        'Designed a route-based portfolio structure with reusable sections for Home and individual pages.',
        'Used Angular standalone components, Signals, OnPush change detection, and modern template control flow.',
        'Created a clean folder structure with layout, features, models, shared styles, and SCSS architecture.',
        'Implemented responsive UI using BEM naming, CSS variables, and reusable global style utilities.',
        'Maintained feature-based Git workflow with separate branches and clean commits.',
      ],
      technologies: ['Angular 21', 'TypeScript', 'Signals', 'SCSS', 'Routing', 'Standalone Components', 'GitHub'],
      highlights: ['Modern Angular 21 setup', 'Reusable page sections', 'Clean portfolio architecture'],
    },
  ] satisfies readonly ProjectItem[],
} as const;

export const CONTACT_CONTENT = {
  content: {
    eyebrow: 'Contact',
    title: 'Let\'s connect and discuss frontend opportunities.',
    description:
      'I am open to frontend development opportunities where I can work with Angular, TypeScript, scalable UI architecture, and enterprise web applications.',
  } satisfies ContactPageContent,
  links: [
    {
      label: 'Email',
      value: 'shubhamdeshm37@gmail.com',
      href: 'mailto:shubhamdeshm37@gmail.com',
      ariaLabel: 'Send email to Shubham Deshmukh',
      icon: PORTFOLIO_ICONS.contact.email,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shubham-deshmukh1720',
      href: PORTFOLIO_LINKS.linkedin,
      ariaLabel: 'Visit Shubham Deshmukh LinkedIn profile',
      icon: PORTFOLIO_ICONS.contact.linkedin,
      isExternal: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/shubhamdsk',
      href: PORTFOLIO_LINKS.github,
      ariaLabel: 'Visit Shubham Deshmukh GitHub profile',
      icon: PORTFOLIO_ICONS.contact.github,
      isExternal: true,
    },
    {
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: 'https://www.google.com/maps/place/Pune,+Maharashtra',
      ariaLabel: 'View Pune Maharashtra location on Google Maps',
      icon: PORTFOLIO_ICONS.contact.location,
      isExternal: true,
    },
  ] satisfies readonly ContactLink[],
  availability: {
    title: 'Currently open to frontend roles',
    description:
      'I am interested in frontend developer roles where I can contribute to Angular applications, UI development, API integration, and clean frontend architecture.',
    points: [
      'Frontend Developer roles',
      'Angular / TypeScript projects',
      'Enterprise UI development',
      'Remote, hybrid, or Pune/Bangalore-based opportunities',
    ],
  } satisfies ContactAvailability,
} as const;
