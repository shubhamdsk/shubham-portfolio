export interface ExperiencePageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface ExperienceItem {
  readonly role: string;
  readonly company: string;
  readonly duration: string;
  readonly location: string;
  readonly summary: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}

export interface ExperienceHighlight {
  readonly value: string;
  readonly label: string;
  readonly description: string;
}