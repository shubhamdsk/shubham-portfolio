import { afterNextRender, Directive, ElementRef, OnDestroy, inject, input, signal } from '@angular/core';

@Directive({
    selector: '[appRevealOnScroll]',
    host: {
        class: 'reveal',
        '[class.reveal--visible]': 'isVisible()',
        '[style.--reveal-delay.ms]': 'delay()',
    },
})
export class RevealOnScroll implements OnDestroy {
    readonly delay = input(0);

    protected readonly isVisible = signal(false);

    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private observer: IntersectionObserver | null = null;

    constructor() {
        afterNextRender(() => {
            this.observeElement();
        });
    }

    private observeElement(): void {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) {
                    return;
                }

                this.isVisible.set(true);
                this.observer?.disconnect();
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -80px 0px',
            }
        );

        this.observer.observe(this.elementRef.nativeElement);
    }
    
    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}