export interface ProjectPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectItem {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly routeLabel?: string;
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
}