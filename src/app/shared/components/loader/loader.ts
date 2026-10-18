import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative inline-flex shrink-0 items-center justify-center align-middle',
    'aria-hidden': 'true',
    '[class.size-4]': "size() === 'sm'",
    '[class.size-5]': "size() === 'md'",
  },
})
export class AppLoader {
  readonly size = input<'sm' | 'md'>('sm');
}
