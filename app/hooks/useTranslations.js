'use client';

import { useLanguage } from '../contexts/LanguageContext';

export function useTranslations() {
  const { translations, isLoading } = useLanguage();
  const t = (key, fallback = '') => {
    if (isLoading) return fallback || '';
    if (!key) return fallback || '';

    // Handle nested keys (e.g., 'nav.home')
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // In development, log missing keys
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation key not found: ${key}`);
        }
        return fallback || key;
      }
    }

    // Make sure we're not returning an object
    if (value !== null && typeof value === 'object') {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Translation value is an object, not a string: ${key}`);
      }
      return fallback || key;
    }

    return value || fallback || key;
  };

  return { t, isLoading };
}
