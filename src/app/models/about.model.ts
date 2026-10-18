import { IconName, IconTone } from '@models/icon.model';

export interface AboutContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly additionalDescription: string;
}

export interface AboutHighlight {
  readonly icon: IconName;
  readonly tone: IconTone;
  readonly title: string;
  readonly description: string;
}
