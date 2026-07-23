(() => {
  const storageKey = 'portfolio-theme-preference';
  const storedPreference = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme =
    storedPreference === 'light' || storedPreference === 'dark'
      ? storedPreference
      : prefersDark
        ? 'dark'
        : 'light';
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  themeColorMeta?.setAttribute('content', theme === 'dark' ? '#0f172a' : '#f4f7fb');
})();
