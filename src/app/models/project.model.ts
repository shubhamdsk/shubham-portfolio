export interface ProjectPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface ProjectItem {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly points: readonly string[];
  readonly technologies: readonly string[];
  readonly links: readonly ProjectLink[];
}

export interface ProjectGroup {
  readonly title: string;
  readonly note: string;
  readonly items: readonly ProjectItem[];
}
