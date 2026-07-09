import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';

import { NavigationItem } from '@models/navigation.model';
import { ResumeDownload } from '@services/resume-download-service/resume-download';
import { AppLoader } from '@shared/components/loader/loader';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, AppLoader],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly router = inject(Router);
  private readonly resumeDownloadService = inject(ResumeDownload);

  readonly sectionNavigation = output<string>();

  protected readonly isMenuOpen = signal(false);
  protected readonly activeSectionId = signal('home');
  protected readonly isResumeDownloading = this.resumeDownloadService.isDownloading;

  protected readonly isHomeRoute = computed(() => this.router.url === '/');
  protected readonly resumeButtonLabel = computed(() =>
    this.isResumeDownloading() ? 'Downloading...' : 'Resume'
  );

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

  protected async onResumeDownload(): Promise<void> {
    await this.resumeDownloadService.downloadResume();
  }
}
