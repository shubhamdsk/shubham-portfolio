export interface ContactPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly icon: string;
  readonly isExternal?: boolean;
}

export interface ContactAvailability {
  readonly title: string;
  readonly description: string;
  readonly points: readonly string[];
}
