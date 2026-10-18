import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { CONTACT_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from '@core/directives/reveal-on-scroll/reveal-on-scroll';
import { ContactLink, ContactPageContent } from '@models/contact.model';
import { BrandWave } from '@shared/components/brand-wave/brand-wave';
import { IconBadge } from '@shared/components/icon-badge/icon-badge';

@Component({
  selector: 'app-contact',
  imports: [RevealOnScroll, IconBadge, BrandWave],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly contactContent = signal<ContactPageContent>(CONTACT_CONTENT.content);
  protected readonly contactLinks = signal<readonly ContactLink[]>(CONTACT_CONTENT.links);
  protected readonly emailHref = computed(() => `mailto:${this.contactContent().email}`);
}
