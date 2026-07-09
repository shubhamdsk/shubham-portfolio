import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'loader',
    'aria-hidden': 'true',
    '[class.loader--sm]': "size() === 'sm'",
    '[class.loader--md]': "size() === 'md'",
  },
})
export class AppLoader {
  readonly size = input<'sm' | 'md'>('sm');
}
