import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";
import { AboutContent, AboutHighlight, AboutProjectExposure, AboutWorkflowStep, } from '@models/about.model';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly aboutContent = signal<AboutContent>({
    eyebrow: 'About Me',
    title: 'Frontend developer focused on Angular, AI workflows, and engineering platforms.',
    description:
      'I am a frontend developer with hands-on experience in Angular, TypeScript, JavaScript, SCSS, RxJS, Signals, SignalR, REST API integration, and enterprise UI development.',
    additionalDescription:
      'I enjoy building clean, maintainable, and user-friendly applications with a strong focus on reusable components, performance, accessibility, and practical frontend architecture. My recent work includes Studioforce AI workflow screens, AI-assisted Gradle error analysis with VS Code extension flows, and Model-Based Design interfaces connected with automotive engineering processes.',
  });

  protected readonly aboutHighlights = signal<readonly AboutHighlight[]>([
    {
      value: '2+',
      label: 'Years Experience',
      description:
        'Building and shipping enterprise Angular applications for global client teams.',
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
  ]);

  protected readonly projectExposure = signal<readonly AboutProjectExposure[]>([
    {
      title: 'Studioforce',
      description:
        'Built Angular frontend features for an AI-powered workflow platform used by Amdocs client teams.',
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
        'Worked on Angular web UI and VS Code extension features for AI-assisted Gradle error analysis and resolution.',
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
        'Worked on Angular modules for requirement-to-Simulink-model generation in an automotive embedded software pipeline.',
      points: [
        'Built Excel and Polarion import workflows for requirement datasets.',
        'Rendered large requirement data tables using AG Grid with pagination and filtering.',
        'Implemented Level 3-4 requirement selection and agent dispatch flows.',
        'Managed UI state with Angular Signals and reusable Angular Material components.',
      ],
    },
  ]);

  protected readonly workflowSteps = signal<readonly AboutWorkflowStep[]>([
    {
      step: '01',
      title: 'Understand Requirement',
      description:
        'I first understand the feature goal, user flow, data requirement, and edge cases before writing code.',
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
