import { computed, ref } from 'vue';

const STORAGE_KEY = 'portfolio-theme-preference';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const themePreference = ref('system');
const resolvedTheme = ref('light');

let initialized = false;
let mediaQuery = null;

const themeMetaColors = {
  light: '#f5f1e9',
  dark: '#08111c',
};

const getStoredThemePreference = () => {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY);

  return storedValue === 'light' || storedValue === 'dark' ? storedValue : 'system';
};

const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  if (!mediaQuery) {
    mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
  }

  return mediaQuery.matches ? 'dark' : 'light';
};

const applyThemeToDocument = (theme) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', themeMetaColors[theme]);
  }
};

const syncResolvedTheme = () => {
  resolvedTheme.value = themePreference.value === 'system' ? getSystemTheme() : themePreference.value;
  applyThemeToDocument(resolvedTheme.value);
};

const handleSystemThemeChange = () => {
  if (themePreference.value === 'system') {
    syncResolvedTheme();
  }
};

const bindSystemThemeListener = () => {
  if (!mediaQuery) {
    return;
  }

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return;
  }

  mediaQuery.addListener(handleSystemThemeChange);
};

export const initTheme = () => {
  if (initialized || typeof window === 'undefined') {
    return;
  }

  initialized = true;
  mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
  themePreference.value = getStoredThemePreference();
  syncResolvedTheme();
  bindSystemThemeListener();
};

export const useTheme = () => {
  initTheme();

  const isDark = computed(() => resolvedTheme.value === 'dark');
  const isSystem = computed(() => themePreference.value === 'system');
  const currentThemeLabel = computed(() => (isDark.value ? 'Dark' : 'Light'));
  const nextThemeLabel = computed(() => (isDark.value ? 'light' : 'dark'));

  const toggleTheme = () => {
    if (typeof window === 'undefined') {
      return;
    }

    themePreference.value = isDark.value ? 'light' : 'dark';
    window.localStorage.setItem(STORAGE_KEY, themePreference.value);
    syncResolvedTheme();
  };

  const resetThemeToSystem = () => {
    if (typeof window === 'undefined') {
      return;
    }

    themePreference.value = 'system';
    window.localStorage.removeItem(STORAGE_KEY);
    syncResolvedTheme();
  };

  return {
    themePreference,
    resolvedTheme,
    isDark,
    isSystem,
    currentThemeLabel,
    nextThemeLabel,
    toggleTheme,
    resetThemeToSystem,
  };
};
