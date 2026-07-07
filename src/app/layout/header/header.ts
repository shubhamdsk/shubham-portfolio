import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';

import { PORTFOLIO_LINKS } from '@core/constants/portfolio.constant';
import { NavigationItem } from '@models/navigation.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly router = inject(Router);

  readonly sectionNavigation = output<string>();

  protected readonly isMenuOpen = signal(false);
  protected readonly activeSectionId = signal('home');

  protected readonly resume = PORTFOLIO_LINKS.resume;

  protected readonly isHomeRoute = computed(() => this.router.url === '/');

  protected readonly navigationItems: readonly NavigationItem[] = [
    {
      label: 'Home',
      path: '/',
      sectionId: 'home',
      exact: true,
      ariaLabel: 'Go to home section',
    },
    {
      label: 'About',
      path: '/about',
      sectionId: 'about',
      ariaLabel: 'Go to about section',
    },
    {
      label: 'Skills',
      path: '/skills',
      sectionId: 'skills',
      ariaLabel: 'Go to skills section',
    },
    {
      label: 'Experience',
      path: '/experience',
      sectionId: 'experience',
      ariaLabel: 'Go to experience section',
    },
    {
      label: 'Projects',
      path: '/projects',
      sectionId: 'projects',
      ariaLabel: 'Go to projects section',
    },
    {
      label: 'Contact',
      path: '/contact',
      sectionId: 'contact',
      ariaLabel: 'Go to contact section',
    },
  ];

  setActiveSection(sectionId: string): void {
    this.activeSectionId.set(sectionId);
  }

  protected onMenuToggle(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected onNavigationClick(item: NavigationItem, event: MouseEvent): void {
    this.isMenuOpen.set(false);

    if (this.isHomeRoute() && item.sectionId) {
      event.preventDefault();
      this.sectionNavigation.emit(item.sectionId);
    }
  }
}