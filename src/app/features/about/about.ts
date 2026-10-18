import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ABOUT_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';
import { AboutContent, AboutHighlight } from '@models/about.model';
import { IconBadge } from '@shared/components/icon-badge/icon-badge';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll, IconBadge],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly aboutContent = signal<AboutContent>(ABOUT_CONTENT.content);
  protected readonly aboutHighlights = signal<readonly AboutHighlight[]>(ABOUT_CONTENT.highlights);
}
