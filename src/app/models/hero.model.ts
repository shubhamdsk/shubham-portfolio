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

export interface HeroProfileRow {
  readonly label: string;
  readonly value: string;
  readonly detail?: string;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
}
