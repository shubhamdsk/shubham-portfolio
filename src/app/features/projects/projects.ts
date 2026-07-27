import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';

import { PROJECTS_CONTENT } from '@core/constants/section-content.constant';
import { ProjectItem, ProjectPageContent } from '@models/project.model';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projectsContent = signal<ProjectPageContent>(PROJECTS_CONTENT.content);
  protected readonly projects = signal<readonly ProjectItem[]>(PROJECTS_CONTENT.items);
}
