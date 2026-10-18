import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ICON_PATHS, ICON_TONE_CLASSES } from '@core/constants/icon.constant';
import { IconName, IconTone } from '@models/icon.model';

@Component({
  selector: 'app-icon-badge',
  template: `
    <svg class="size-[45%]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" focusable="false">
      @for (path of paths(); track path) {
        <path [attr.d]="path" />
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClasses()',
    'aria-hidden': 'true',
  },
})
export class IconBadge {
  readonly icon = input.required<IconName>();
  readonly tone = input<IconTone>('cyan');
  readonly size = input<'sm' | 'md'>('md');

  protected readonly paths = computed(() => ICON_PATHS[this.icon()]);
  protected readonly hostClasses = computed(
    () =>
      `inline-flex shrink-0 items-center justify-center rounded-full ring-1 ring-inset ${
        this.size() === 'sm' ? 'size-9' : 'size-11'
      } ${ICON_TONE_CLASSES[this.tone()]}`
  );
}
