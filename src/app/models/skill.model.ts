export interface SkillPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly skills: readonly string[];
}

export interface SkillHighlight {
  readonly title: string;
  readonly description: string;
}
