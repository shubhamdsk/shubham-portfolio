import { filter, fromEvent, map, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid h-screen w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden',
  },
})
export class Shell implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private readonly mainContent = viewChild<ElementRef<HTMLElement>>('mainContent');
  private readonly header = viewChild<Header>('appHeader');

  protected readonly isScrollTopVisible = signal(false);

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationStart => event instanceof NavigationStart),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.scrollMainContentToTop('auto');
    });
  }

  ngAfterViewInit(): void {
    const mainContentElement = this.mainContent()?.nativeElement;

    if (!mainContentElement) {
      return;
    }

    fromEvent(mainContentElement, 'scroll').pipe(throttleTime(120),
      map(() => mainContentElement.scrollTop),
      takeUntilDestroyed(this.destroyRef)).subscribe((scrollTop) => {
        this.isScrollTopVisible.set(scrollTop > 500);
        this.updateActiveSection(mainContentElement);
      });

    this.updateActiveSection(mainContentElement);

    fromEvent<PointerEvent>(mainContentElement, 'pointermove').pipe(
      filter((event) => event.pointerType === 'mouse'),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event) => this.updateCardSpotlight(event));
  }

  protected onSectionNavigation(sectionId: string): void {
    this.scrollToSection(sectionId);
  }

  protected onScrollTop(): void {
    this.scrollMainContentToTop('smooth');
  }

  private scrollMainContentToTop(behavior: ScrollBehavior): void {
    this.mainContent()?.nativeElement.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }

  private scrollToSection(sectionId: string): void {
    const mainContentElement = this.mainContent()?.nativeElement;
    const targetElement = document.getElementById(sectionId);

    if (!mainContentElement || !targetElement) {
      return;
    }

    const mainContentRect = mainContentElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const targetTop =
      targetRect.top - mainContentRect.top + mainContentElement.scrollTop;

    mainContentElement.scrollTo({
      top: targetTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  private updateCardSpotlight(event: PointerEvent): void {
    const card = (event.target as Element | null)?.closest<HTMLElement>('.card-hover');

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }

  private updateActiveSection(mainContentElement: HTMLElement): void {
    if (this.router.url !== '/') {
      return;
    }

    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

    let activeSectionId = 'home';

    for (let index = sectionIds.length - 1; index >= 0; index--) {
      const sectionId = sectionIds[index];
      const sectionElement = document.getElementById(sectionId);

      if (!sectionElement) {
        continue;
      }

      const sectionTop =
        sectionElement.getBoundingClientRect().top -
        mainContentElement.getBoundingClientRect().top;

      if (sectionTop <= 180) {
        activeSectionId = sectionId;
        break;
      }
    }

    this.header()?.setActiveSection(activeSectionId);
  }
}
