export interface HeroContent {
  readonly status: string;
  readonly title: string;
  readonly titleHighlight: string;
  readonly description: string;
}

export interface HeroAction {
  readonly label: string;
  readonly path: string;
  readonly variant: 'primary' | 'secondary';
}

import { IconName, IconTone } from '@models/icon.model';

export interface HeroProfileRow {
  readonly icon: IconName;
  readonly tone: IconTone;
  readonly label: string;
  readonly value: string;
  readonly detail?: string;
}

export interface HeroTechItem {
  readonly name: string;
  readonly icon: string;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
}
