import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';

import { ProjectItem, ProjectPageContent } from '@models/project.model';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projectsContent = signal<ProjectPageContent>({
    eyebrow: 'Projects',
    title: 'Selected work showing Angular, UI architecture, and enterprise frontend development.',
    description:
      'These projects highlight my practical experience with Angular, TypeScript, SCSS, REST API integration, reusable components, dashboards, engineering workflows, and AI-assisted development flows.',
  });

  protected readonly projects = signal<readonly ProjectItem[]>([
    {
      title: 'AI Assisted SW',
      category: 'Enterprise Angular Application',
      description:
        'An enterprise frontend application focused on AI-assisted software build workflows, build error analysis, dashboard views, and developer productivity features.',
      responsibilities: [
        'Developed Angular UI screens using standalone components, TypeScript, SCSS, and reusable component patterns.',
        'Integrated REST APIs with typed models, services, loading states, error handling, and clean data mapping.',
        'Built dashboard-style layouts with filters, custom dropdowns, tables, pagination, and user interaction states.',
        'Worked on frontend flows connected with VS Code extension data and build error tracking.',
        'Improved maintainability by using shared models, services, constants, and BEM-based SCSS.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'RxJS',
        'Signals',
        'REST APIs',
        'AG Grid',
        'Angular Material',
      ],
      highlights: [
        'Enterprise dashboard UI',
        'API-driven frontend flows',
        'Reusable Angular architecture',
      ],
    },
    {
      title: 'Model Based Design',
      category: 'Engineering Workflow Frontend',
      description:
        'A frontend application connected with requirement-driven engineering workflows, structured data presentation, and Model Based Design processes.',
      responsibilities: [
        'Built Angular screens for requirement handling and engineering workflow visualization.',
        'Worked with API-based data loading, table views, pagination, and reusable UI components.',
        'Handled structured frontend models for requirement data and user-driven workflow states.',
        'Focused on clean UI implementation for complex enterprise use cases.',
        'Collaborated on frontend flows connected with engineering process data and model generation concepts.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'RxJS',
        'REST APIs',
        'AG Grid',
        'Reactive Forms',
        'Git',
      ],
      highlights: [
        'Requirement-driven UI',
        'Complex data presentation',
        'Enterprise workflow screens',
      ],
    },
    {
      title: 'Angular Portfolio',
      category: 'Personal Portfolio',
      description:
        'A modern Angular portfolio built with Angular 21, standalone components, Signals, routing, reusable sections, and scalable SCSS architecture.',
      responsibilities: [
        'Designed a route-based portfolio structure with reusable sections for Home and individual pages.',
        'Used Angular standalone components, Signals, OnPush change detection, and modern template control flow.',
        'Created a clean folder structure with layout, features, models, shared styles, and SCSS architecture.',
        'Implemented responsive UI using BEM naming, CSS variables, and reusable global style utilities.',
        'Maintained feature-based Git workflow with separate branches and clean commits.',
      ],
      technologies: [
        'Angular 21',
        'TypeScript',
        'Signals',
        'SCSS',
        'Routing',
        'Standalone Components',
        'GitHub',
      ],
      highlights: [
        'Modern Angular 21 setup',
        'Reusable page sections',
        'Clean portfolio architecture',
      ],
    },
  ]);
}
