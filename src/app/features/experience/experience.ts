import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { EXPERIENCE_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";
import { ExperienceHighlight, ExperienceItem, ExperiencePageContent } from '@models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScroll],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experienceContent = signal<ExperiencePageContent>(EXPERIENCE_CONTENT.content);
  protected readonly experienceHighlights = signal<readonly ExperienceHighlight[]>(EXPERIENCE_CONTENT.highlights);
  protected readonly experiences = signal<readonly ExperienceItem[]>(EXPERIENCE_CONTENT.items);
}
