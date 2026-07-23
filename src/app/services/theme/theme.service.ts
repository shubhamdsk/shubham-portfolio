import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';
type ThemePreference = ThemeMode | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme-preference';
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  private readonly systemTheme = signal<ThemeMode>(this.getSystemTheme());
  private readonly preference = signal<ThemePreference>(this.getStoredPreference());

  readonly theme = computed<ThemeMode>(() =>
    this.preference() === 'system' ? this.systemTheme() : (this.preference() as ThemeMode)
  );

  readonly isDarkTheme = computed(() => this.theme() === 'dark');

  constructor() {
    this.mediaQuery.addEventListener('change', this.onSystemThemeChange);

    effect(() => {
      const preference = this.preference();
      const theme = this.theme();

      this.persistPreference(preference);
      this.applyTheme(theme);
    });
  }

  toggleTheme(): void {
    this.preference.set(this.isDarkTheme() ? 'light' : 'dark');
  }

  private readonly onSystemThemeChange = (event: MediaQueryListEvent): void => {
    this.systemTheme.set(event.matches ? 'dark' : 'light');
  };

  private getSystemTheme(): ThemeMode {
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  private getStoredPreference(): ThemePreference {
    const storedPreference = localStorage.getItem(this.storageKey);

    if (storedPreference === 'light' || storedPreference === 'dark') {
      return storedPreference;
    }

    return 'system';
  }

  private persistPreference(preference: ThemePreference): void {
    if (preference === 'system') {
      localStorage.removeItem(this.storageKey);

      return;
    }

    localStorage.setItem(this.storageKey, preference);
  }

  private applyTheme(theme: ThemeMode): void {
    const root = this.document.documentElement;
    const themeColorMeta = this.document.querySelector('meta[name="theme-color"]');
    const resolvedThemeColor = theme === 'dark' ? '#0f172a' : '#f4f7fb';

    root.dataset['theme'] = theme;
    root.style.colorScheme = theme;

    themeColorMeta?.setAttribute('content', resolvedThemeColor);
  }
}
