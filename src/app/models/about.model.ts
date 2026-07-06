export interface AboutContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly additionalDescription: string;
}

export interface AboutHighlight {
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

export interface AboutFocusArea {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
}

export interface AboutProjectExposure {
  readonly title: string;
  readonly description: string;
  readonly points: readonly string[];
}

export interface AboutWorkflowStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}