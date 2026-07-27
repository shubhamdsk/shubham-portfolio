import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ExperienceHighlight, ExperienceItem, ExperiencePageContent, } from '@models/experience.model';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";

@Component({
  selector: 'app-experience',
  imports: [RevealOnScroll],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experienceContent = signal<ExperiencePageContent>({
    eyebrow: 'Experience',
    title: 'Building enterprise Angular applications for global client teams.',
    description:
      'My professional work is focused on Angular, TypeScript, RxJS, Signals, SCSS, REST API integration, SignalR, dashboards, AG Grid screens, workflow UIs, and frontend architecture for enterprise applications.',
  });

  protected readonly experienceHighlights = signal<readonly ExperienceHighlight[]>([
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
  ]);

  protected readonly experiences = signal<readonly ExperienceItem[]>([
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
  ]);
}
