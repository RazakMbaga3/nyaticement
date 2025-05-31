'use client';

import { useLanguage } from '../contexts/LanguageContext';

export function useTranslations() {
  const { translations, isLoading } = useLanguage();

  const t = (key) => {
    if (isLoading) return '';
    if (!key) return '';

    // Handle nested keys (e.g., 'nav.home')
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Only log warnings in development, not in production
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Translation key not found: ${key}`);
        }
        return key;
      }
    }

    return value || key;
  };

  return { t, isLoading };
}
