import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';

import { PORTFOLIO_ICONS } from '@core/constants/icon.constant';
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
    title: 'Selected work across AI workflows, developer tooling, and engineering platforms.',
    description:
      'These projects highlight my practical experience with Angular, TypeScript, SCSS, REST API integration, SignalR, reusable components, dashboards, AG Grid, VS Code extension flows, and AI-assisted development platforms.',
  });

  protected readonly projects = signal<readonly ProjectItem[]>([
    {
      title: 'Studioforce',
      category: 'AI Workflow Platform',
      description:
        'An AI-powered workflow platform for building and executing agent-based workflows through an interactive Angular drag-and-drop canvas.',
      icon: PORTFOLIO_ICONS.projects.studioforce,
      responsibilities: [
        'Developed frontend features for an AI-powered workflow platform using Angular and TypeScript.',
        'Implemented node connections, drag-and-drop behavior, panning, and agent skill configuration flows.',
        'Integrated frontend workflow screens with backend services through REST APIs.',
        'Built dashboards for agents, blueprints, predictions, and generated workflows.',
        'Added execution controls, live status monitoring, and real-time updates using SignalR.',
      ],
      technologies: ['Angular', 'TypeScript', 'SignalR', 'SCSS', 'REST APIs', 'HTML', 'CSS', 'Git'],
      highlights: [
        'Interactive workflow canvas',
        'Real-time execution monitoring',
        'AI agent workflow dashboards',
      ],
    },
    {
      title: 'AI-Assisted SW',
      category: 'Enterprise Angular Application',
      description:
        'An Angular web UI and VS Code extension platform for AI-assisted Gradle error analysis, resolution recommendations, and developer productivity workflows.',
      icon: PORTFOLIO_ICONS.projects.aiAssistedSw,
      responsibilities: [
        'Developed Angular web UI screens and VS Code extension features for AI-assisted Gradle error analysis.',
        'Designed project-wise error dashboards, individual project dashboards, and admin configuration dashboards.',
        'Integrated REST APIs to send build-error and changed-file context to backend services.',
        'Displayed AI-assisted solution recommendations with clear loading and error handling states.',
        'Built screens for error details, Gradle task information, and tracked file changes with filtering and pagination.',
      ],
      technologies: [
        'Angular 19',
        'TypeScript',
        'SCSS',
        'REST APIs',
        'VS Code Extension API',
        'Chokidar',
      ],
      highlights: [
        'Gradle error analysis',
        'VS Code extension flows',
        'AI solution recommendations',
      ],
    },
    {
      title: 'MBD - Model-Based Design',
      category: 'Automotive Engineering Platform',
      description:
        'An Angular requirement-to-Simulink-model generation platform supporting an automotive embedded software pipeline.',
      icon: PORTFOLIO_ICONS.projects.mbd,
      responsibilities: [
        'Developed Angular modules for requirement-to-Simulink-model generation workflows.',
        'Built Excel and Polarion import workflows for requirement data ingestion.',
        'Rendered large requirement datasets using AG Grid with pagination and filtering.',
        'Implemented Level 3-4 requirement selection and agent dispatch through RIA, LLRGA, and FLA.',
        'Managed UI state with Angular Signals and reusable Angular Material components.',
      ],
      technologies: [
        'Angular 19',
        'TypeScript',
        'SCSS',
        'AG Grid',
        'Angular Material',
        'REST APIs',
        'Signals',
      ],
      highlights: [
        'Requirement import workflows',
        'Large AG Grid datasets',
        'Simulink generation flow',
      ],
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
