import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-brand-wave',
  template: `
    <svg class="block h-full w-[200%] animate-[wave-drift_28s_linear_infinite]" viewBox="0 0 2400 240"
      preserveAspectRatio="none" focusable="false">
      <defs>
        <linearGradient [attr.id]="gradientId()" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style="stop-color: var(--wave-a)" />
          <stop offset="0.18" style="stop-color: var(--wave-b)" />
          <stop offset="0.32" style="stop-color: var(--wave-c)" />
          <stop offset="0.5" style="stop-color: var(--wave-d)" />
          <stop offset="0.68" style="stop-color: var(--wave-b)" />
          <stop offset="0.84" style="stop-color: var(--wave-c)" />
          <stop offset="1" style="stop-color: var(--wave-a)" />
        </linearGradient>
      </defs>

      <path [attr.fill]="gradientFill()" opacity="0.22"
        d="M0 150 C200 90 400 210 600 150 S1000 90 1200 150 S1600 210 1800 150 S2200 90 2400 150 V240 H0 Z" />
      <path [attr.fill]="gradientFill()" opacity="0.4"
        d="M0 185 C240 140 360 230 600 190 S960 140 1200 185 S1560 230 1800 190 S2160 140 2400 185 V240 H0 Z" />
      <path [attr.stroke]="gradientFill()" fill="none" stroke-width="1.5" opacity="0.7"
        d="M0 120 C220 70 380 180 600 125 S980 70 1200 120 S1580 180 1800 125 S2180 70 2400 120" />
      <path [attr.stroke]="gradientFill()" fill="none" stroke-width="1" opacity="0.45"
        d="M0 100 C200 150 420 60 600 105 S1000 150 1200 100 S1620 60 1800 105 S2200 150 2400 100" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pointer-events-none block overflow-hidden',
    'aria-hidden': 'true',
  },
})
export class BrandWave {
  readonly gradientId = input('brand-wave-gradient');

  protected readonly gradientFill = computed(() => `url(#${this.gradientId()})`);
}
