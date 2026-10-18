import { IconName, IconTone } from '@models/icon.model';

export interface SkillPageContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface SkillGroup {
  readonly icon: IconName;
  readonly tone: IconTone;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
}
