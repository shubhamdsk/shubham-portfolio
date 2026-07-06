import { auditTime, fromEvent, map, startWith } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import { NavigationItem } from '@models/navigation.model';
import { PORTFOLIO_LINKS } from '@core/constants/portfolio.constant';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  protected readonly resume = PORTFOLIO_LINKS.resume;

  protected readonly navigationItems: readonly NavigationItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(
        startWith(null),
        auditTime(50),
        map(() => window.scrollY > 12),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((isScrolled) => {
        this.isScrolled.set(isScrolled);
      });
  }

  protected onMenuToggle(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected onNavigationClick(): void {
    this.isMenuOpen.set(false);
  }
}