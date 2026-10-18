import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { SKILLS_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';
import { SkillGroup, SkillPageContent } from '@models/skill.model';
import { IconBadge } from '@shared/components/icon-badge/icon-badge';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll, IconBadge],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillsContent = signal<SkillPageContent>(SKILLS_CONTENT.content);
  protected readonly skillGroups = signal<readonly SkillGroup[]>(SKILLS_CONTENT.groups);
}
