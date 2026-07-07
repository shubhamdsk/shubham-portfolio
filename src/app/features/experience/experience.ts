import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ExperienceHighlight, ExperienceItem, ExperiencePageContent, } from '@models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experienceContent = signal<ExperiencePageContent>({
    eyebrow: 'Experience',
    title: 'Hands-on experience building Angular-based enterprise frontend applications.',
    description:
      'My professional work is focused on Angular, TypeScript, SCSS, reusable UI components, REST API integration, dashboard screens, table flows, and frontend architecture for enterprise applications.',
  });

  protected readonly experienceHighlights = signal<readonly ExperienceHighlight[]>([
    {
      value: '2+',
      label: 'Years',
      description: 'Practical frontend development experience with Angular and TypeScript.',
    },
    {
      value: '2',
      label: 'Major Projects',
      description: 'Worked on AI Assisted SW and Model Based Design frontend workflows.',
    },
    {
      value: 'Angular',
      label: 'Primary Stack',
      description: 'Focused on modern Angular, Signals, RxJS, SCSS, and reusable architecture.',
    },
  ]);

  protected readonly experiences = signal<readonly ExperienceItem[]>([
    {
      role: 'Frontend Developer',
      company: 'HNT / Client: Schaeffler',
      duration: '2024 - Present',
      location: 'Bangalore / Pune, India',
      summary:
        'Working on enterprise frontend applications using Angular, TypeScript, SCSS, REST APIs, and reusable UI architecture. Contributing to AI-assisted software build workflows and Model Based Design-related frontend modules.',
      responsibilities: [
        'Developed responsive Angular screens using standalone components, TypeScript, SCSS, and reusable component patterns.',
        'Integrated REST APIs with typed interfaces, services, loading states, error handling, and clean data mapping.',
        'Built dashboard-style UI flows with filters, tables, pagination, reusable dropdowns, and user interaction states.',
        'Worked with AG Grid and Angular Material for enterprise-grade data presentation and UI controls.',
        'Contributed to AI-assisted software build workflows connected with build error analysis and developer productivity features.',
        'Worked on Model Based Design frontend flows involving requirement-driven data, engineering workflows, and structured UI screens.',
        'Improved UI maintainability using BEM-based SCSS, shared models, services, and clean folder structure.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'SCSS',
        'RxJS',
        'Signals',
        'REST APIs',
        'AG Grid',
        'Angular Material',
        'Git',
      ],
    },
  ]);
}