export interface ContactPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly location: string;
}

export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly isExternal?: boolean;
}
