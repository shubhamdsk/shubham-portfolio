import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { HeroTechItem } from '@models/hero.model';

@Component({
  selector: 'app-tech-orbit',
  template: `
    <div class="tech-orbit__stage">
      <ul class="tech-orbit__ring" [attr.aria-label]="label()">
        <li class="tech-orbit__slot tech-orbit__slot--center" aria-hidden="true">
          <div class="tech-orbit__face tech-orbit__core">
            <span class="text-brand font-mono text-2xl font-bold">&lt;/&gt;</span>
          </div>
        </li>

        @for (item of placedItems(); track item.name) {
        <li class="tech-orbit__slot" [style.--angle.deg]="item.angle">
          <div class="tech-orbit__face tech-orbit__chip">
            <img [src]="item.icon" alt="" width="36" height="36" loading="lazy" decoding="async" />
            <span>{{ item.name }}</span>
          </div>
        </li>
        }
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'tech-orbit block',
  },
})
export class TechOrbit {
  readonly items = input.required<readonly HeroTechItem[]>();
  readonly label = input('Tech stack');

  protected readonly placedItems = computed(() => {
    const items = this.items();
    const step = 360 / items.length;

    return items.map((item, index) => ({ ...item, angle: index * step }));
  });
}
