import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ABOUT_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";
import { AboutContent, AboutHighlight, AboutProjectExposure, AboutWorkflowStep } from '@models/about.model';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly aboutContent = signal<AboutContent>(ABOUT_CONTENT.content);
  protected readonly aboutHighlights = signal<readonly AboutHighlight[]>(ABOUT_CONTENT.highlights);
  protected readonly projectExposure = signal<readonly AboutProjectExposure[]>(ABOUT_CONTENT.projectExposure);
  protected readonly workflowSteps = signal<readonly AboutWorkflowStep[]>(ABOUT_CONTENT.workflowSteps);
}
