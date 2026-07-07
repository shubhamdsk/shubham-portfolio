export interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly sectionId?: string;
  readonly exact?: boolean;
  readonly ariaLabel: string;
}