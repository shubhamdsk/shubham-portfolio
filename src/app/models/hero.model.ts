export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface HeroAction {
  readonly label: string;
  readonly path?: string;
  readonly href?: string;
  readonly download?: string;
  readonly variant: 'primary' | 'secondary';
}

export interface HeroCodeLine {
  readonly prefix?: string;
  readonly content: string;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
}