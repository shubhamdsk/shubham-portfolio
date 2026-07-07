import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
  protected readonly isMenuOpen = signal(false);

  protected readonly resume = PORTFOLIO_LINKS.resume;

  protected readonly navigationItems: readonly NavigationItem[] = [
    {
      label: 'Home',
      path: '/',
      exact: true,
      ariaLabel: 'Go to home section',
    },
    {
      label: 'About',
      path: '/about',
      ariaLabel: 'Go to about page',
    },
    {
      label: 'Skills',
      path: '/skills',
      ariaLabel: 'Go to skills page',
    },
    {
      label: 'Experience',
      path: '/experience',
      ariaLabel: 'Go to experience page',
    },
    {
      label: 'Projects',
      path: '/projects',
      ariaLabel: 'Go to projects page',
    },
    {
      label: 'Contact',
      path: '/contact',
      ariaLabel: 'Go to contact page',
    },
  ];

  protected onMenuToggle(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected onNavigationClick(): void {
    this.isMenuOpen.set(false);
  }
}