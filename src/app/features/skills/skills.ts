import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';

import { PORTFOLIO_ICONS } from '@core/constants/icon.constant';
import { SkillGroup, SkillHighlight, SkillPageContent } from '@models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillsContent = signal<SkillPageContent>({
    eyebrow: 'Skills & Tools',
    title: 'Technologies I use to build reliable frontend applications.',
    description:
      'My skill set is centered around Angular development, TypeScript, UI engineering, real-time integration, VS Code extension flows, and clean frontend architecture.',
  });

  protected readonly skillGroups = signal<readonly SkillGroup[]>([
    {
      title: 'Frontend Core',
      description:
        'Strong fundamentals for building modern, responsive, and user-friendly web interfaces.',
      icon: PORTFOLIO_ICONS.skills.frontendCore,
      skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'Responsive Design'],
    },
    {
      title: 'Angular Ecosystem',
      description:
        'Practical Angular experience with modern patterns used in real-world enterprise projects.',
      icon: PORTFOLIO_ICONS.skills.angularEcosystem,
      skills: [
        'Angular 19',
        'Standalone Components',
        'Signals',
        'RxJS',
        'Routing',
        'Forms',
        'Dependency Injection',
      ],
    },
    {
      title: 'UI Development',
      description:
        'Clean UI implementation with reusable components, accessibility, and scalable styling practices.',
      icon: PORTFOLIO_ICONS.skills.uiDevelopment,
      skills: [
        'BEM',
        'Angular Material',
        'AG Grid',
        'Accessibility',
        'Reusable Components',
        'Design Systems',
      ],
    },
    {
      title: 'API & Data Handling',
      description:
        'Experience building API-driven and real-time screens with proper loading, error handling, and typed data models.',
      icon: PORTFOLIO_ICONS.skills.apiData,
      skills: [
        'REST APIs',
        'SignalR',
        'Typed Interfaces',
        'Services',
        'Loading States',
        'Error Handling',
      ],
    },
    {
      title: 'Extension Development',
      description:
        'Hands-on exposure to VS Code extension flows for developer productivity tooling.',
      icon: PORTFOLIO_ICONS.skills.extensionDevelopment,
      skills: ['VS Code Extension API', 'Chokidar', 'Webviews', 'Commands', 'Gradle Error Analysis'],
    },
    {
      title: 'Tools & Workflow',
      description:
        'Development workflow tools used for coding, debugging, collaboration, and API testing.',
      icon: PORTFOLIO_ICONS.skills.toolsWorkflow,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Agile/Scrum'],
    },
    {
      title: 'Currently Exploring',
      description:
        'Technologies and practices I am learning to improve frontend architecture and development speed.',
      icon: PORTFOLIO_ICONS.skills.exploring,
      skills: ['Angular MCP', 'AI-assisted Development', 'React TypeScript', 'Performance Optimization'],
    },
  ]);

  protected readonly skillHighlights = signal<readonly SkillHighlight[]>([
    {
      title: 'Angular-first development',
      description:
        'I prefer Angular standalone components, Signals, services, models, and lazy routes for scalable app structure.',
    },
    {
      title: 'Maintainable UI architecture',
      description:
        'I focus on reusable components, clear SCSS structure, BEM naming, and predictable data flow.',
    },
    {
      title: 'Practical problem solving',
      description:
        'I work on real-world frontend problems like API integration, SignalR updates, table flows, dashboards, filters, and state handling.',
    },
  ]);
}
