import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { PROJECTS_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';
import { ProjectGroup, ProjectPageContent } from '@models/project.model';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projectsContent = signal<ProjectPageContent>(PROJECTS_CONTENT.content);
  protected readonly projectGroups = signal<readonly ProjectGroup[]>(PROJECTS_CONTENT.groups);
}
