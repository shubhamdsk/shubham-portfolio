import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  AboutContent,
  AboutFocusArea,
  AboutHighlight,
  AboutProjectExposure,
  AboutWorkflowStep,
} from '@models/about.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly aboutContent = signal<AboutContent>({
    eyebrow: 'About Me',
    title: 'Frontend developer focused on Angular, scalable UI, and clean frontend architecture.',
    description:
      'I am a frontend developer with hands-on experience in Angular, TypeScript, JavaScript, SCSS, RxJS, REST API integration, and enterprise UI development.',
    additionalDescription:
      'I enjoy building clean, maintainable, and user-friendly applications with a strong focus on reusable components, performance, accessibility, and practical frontend architecture. My recent work includes Angular-based enterprise applications, AI-assisted software build workflows, VS Code extension-related frontend flows, and Model Based Design interfaces connected with complex engineering processes.',
  });

  protected readonly aboutHighlights = signal<readonly AboutHighlight[]>([
    {
      value: '2+',
      label: 'Years Experience',
      description:
        'Working on enterprise-level frontend applications using Angular, TypeScript, SCSS, and modern UI practices.',
    },
    {
      value: 'Angular',
      label: 'Primary Expertise',
      description:
        'Strong practical experience with standalone components, Signals, RxJS, Reactive Forms, routing, and reusable architecture.',
    },
    {
      value: 'Enterprise UI',
      label: 'Project Experience',
      description:
        'Worked on complex frontend flows involving dashboards, API integration, AG Grid, reusable components, and responsive layouts.',
    },
    {
      value: 'AI Workflow',
      label: 'Modern Development',
      description:
        'Experience with AI-assisted software build flows, developer productivity tooling, and modern Angular development practices.',
    },
  ]);

  protected readonly focusAreas = signal<readonly AboutFocusArea[]>([
    {
      title: 'Frontend Engineering',
      description:
        'I focus on building clean and scalable UI layers that are easy to understand, maintain, and extend.',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'Responsive UI'],
    },
    {
      title: 'Angular Architecture',
      description:
        'I prefer structured Angular development with reusable components, services, models, routing, and clear separation of concerns.',
      items: ['Standalone Components', 'Signals', 'RxJS', 'Reactive Forms', 'Lazy Loading', 'Services'],
    },
    {
      title: 'UI Development',
      description:
        'I build user interfaces with attention to layout, spacing, responsiveness, accessibility, and consistent styling patterns.',
      items: ['BEM SCSS', 'Design Systems', 'Accessibility', 'AG Grid', 'Angular Material', 'Reusable UI'],
    },
    {
      title: 'Development Workflow',
      description:
        'I work with practical development tools for version control, debugging, API testing, and code quality improvement.',
      items: ['Git', 'GitHub', 'VS Code', 'REST APIs', 'Postman', 'Chrome DevTools'],
    },
  ]);

  protected readonly projectExposure = signal<readonly AboutProjectExposure[]>([
    {
      title: 'AI Assisted SW',
      description:
        'Worked on Angular-based frontend flows related to AI-assisted software build analysis and developer productivity.',
      points: [
        'Built and maintained enterprise UI screens using Angular and SCSS.',
        'Worked with API integration, loading states, error handling, and reusable services.',
        'Handled dashboard-style layouts, tables, filters, and user interaction flows.',
        'Contributed to frontend workflows connected with VS Code extension and build error analysis.',
      ],
    },
    {
      title: 'Model Based Design',
      description:
        'Worked on frontend flows connected with requirement handling, engineering workflows, and model generation processes.',
      points: [
        'Developed Angular UI for requirement-driven workflows.',
        'Worked with structured data presentation using tables and reusable components.',
        'Integrated frontend flows with backend APIs and engineering process data.',
        'Focused on clean UI architecture for complex enterprise use cases.',
      ],
    },
  ]);

  protected readonly workflowSteps = signal<readonly AboutWorkflowStep[]>([
    {
      step: '01',
      title: 'Understand Requirement',
      description:
        'I first try to understand the feature goal, user flow, data requirement, and edge cases before writing code.',
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
      description:
        'I prefer readable TypeScript, Signals for state, BEM-based SCSS, and clear HTML structure.',
    },
    {
      step: '04',
      title: 'Polish & Improve',
      description:
        'I check responsiveness, accessibility, loading states, error cases, and performance improvements.',
    },
  ]);
}