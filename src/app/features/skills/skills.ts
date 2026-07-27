import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';

import { SKILLS_CONTENT } from '@core/constants/section-content.constant';
import { SkillGroup, SkillHighlight, SkillPageContent } from '@models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillsContent = signal<SkillPageContent>(SKILLS_CONTENT.content);
  protected readonly skillGroups = signal<readonly SkillGroup[]>(SKILLS_CONTENT.groups);
  protected readonly skillHighlights = signal<readonly SkillHighlight[]>(SKILLS_CONTENT.highlights);
}
