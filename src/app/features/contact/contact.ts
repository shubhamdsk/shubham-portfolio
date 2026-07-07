import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ContactAvailability, ContactLink, ContactPageContent, } from '@models/contact.model';
import { PORTFOLIO_LINKS } from '@core/constants/portfolio.constant';
import { RevealOnScroll } from "@core/directives/reveal-on-scroll/reveal-on-scroll";

@Component({
  selector: 'app-contact',
  imports: [RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly contactContent = signal<ContactPageContent>({
    eyebrow: 'Contact',
    title: 'Let’s connect and discuss frontend opportunities.',
    description:
      'I am open to frontend development opportunities where I can work with Angular, TypeScript, scalable UI architecture, and enterprise web applications.',
  });

  protected readonly contactLinks = signal<readonly ContactLink[]>([
    {
      label: 'Email',
      value: 'shubhamdeshm37@gmail.com',
      href: 'mailto:shubhamdeshm37@gmail.com',
      ariaLabel: 'Send email to Shubham Deshmukh',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shubham-deshmukh1720',
      href: PORTFOLIO_LINKS.linkedin,
      ariaLabel: 'Visit Shubham Deshmukh LinkedIn profile',
      isExternal: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/shubhamdsk',
      href: PORTFOLIO_LINKS.github,
      ariaLabel: 'Visit Shubham Deshmukh GitHub profile',
      isExternal: true,
    },
    {
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: 'https://www.google.com/maps/place/Pune,+Maharashtra',
      ariaLabel: 'View Pune Maharashtra location on Google Maps',
      isExternal: true,
    },
  ]);

  protected readonly availability = signal<ContactAvailability>({
    title: 'Currently open to frontend roles',
    description:
      'I am interested in frontend developer roles where I can contribute to Angular applications, UI development, API integration, and clean frontend architecture.',
    points: [
      'Frontend Developer roles',
      'Angular / TypeScript projects',
      'Enterprise UI development',
      'Remote, hybrid, or Pune/Bangalore-based opportunities',
    ],
  });
}