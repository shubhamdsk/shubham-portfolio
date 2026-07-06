import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { SkillGroup, SkillHighlight, SkillPageContent } from '@models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillsContent = signal<SkillPageContent>({
    eyebrow: 'Skills & Tools',
    title: 'Technologies I use to build reliable frontend applications.',
    description:
      'My skill set is centered around Angular development, TypeScript, UI engineering, API integration, and clean frontend architecture.',
  });

  protected readonly skillGroups = signal<readonly SkillGroup[]>([
    {
      title: 'Frontend Core',
      description:
        'Strong fundamentals for building modern, responsive, and user-friendly web interfaces.',
      skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'Responsive Design'],
    },
    {
      title: 'Angular Ecosystem',
      description:
        'Practical Angular experience with modern patterns used in real-world enterprise projects.',
      skills: [
        'Angular 19/21',
        'Standalone Components',
        'Signals',
        'RxJS',
        'Reactive Forms',
        'Lazy Routing',
      ],
    },
    {
      title: 'UI Development',
      description:
        'Clean UI implementation with reusable components, accessibility, and scalable styling practices.',
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
        'Experience building API-driven screens with proper loading, error handling, and typed data models.',
      skills: [
        'REST APIs',
        'Typed Interfaces',
        'Services',
        'Loading States',
        'Error Handling',
        'Pagination',
      ],
    },
    {
      title: 'Tools & Workflow',
      description:
        'Development workflow tools used for coding, debugging, collaboration, and API testing.',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'GitHub Copilot'],
    },
    {
      title: 'Currently Exploring',
      description:
        'Technologies and practices I am learning to improve frontend architecture and development speed.',
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
        'I work on real-world frontend problems like API integration, table flows, dashboards, filters, and state handling.',
    },
  ]);
}