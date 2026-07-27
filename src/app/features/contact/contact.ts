import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { CONTACT_CONTENT } from '@core/constants/section-content.constant';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";
import { ContactAvailability, ContactLink, ContactPageContent } from '@models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly contactContent = signal<ContactPageContent>(CONTACT_CONTENT.content);
  protected readonly contactLinks = signal<readonly ContactLink[]>(CONTACT_CONTENT.links);
  protected readonly availability = signal<ContactAvailability>(CONTACT_CONTENT.availability);
}
