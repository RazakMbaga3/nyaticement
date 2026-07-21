'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Nested translation JSON structure - shape varies per page/locale file
type Translations = Record<string, any>;

interface LanguageContextValue {
  language: string;
  translations: Translations;
  switchLanguage: (newLanguage: string) => Promise<void>;
  isLoading: boolean;
}

// Create the language context
const LanguageContext = createContext<LanguageContextValue | null>(null);

// Default translations to use when keys are missing
const defaultFallbacks: Translations = {
  common: {
    loading: 'Loading...',
    readMore: 'Read More',
    contactUs: 'Contact Us',
    learnMore: 'Learn More',
    home: 'Home',
    breadcrumbs: {
      home: 'Home',
    }
  }
};

// Language Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState<Translations>(defaultFallbacks);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved language preference
    let savedLanguage = 'en';

    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      savedLanguage = localStorage.getItem('language') || 'en';
      setLanguage(savedLanguage);
    }

    // Load translations
    const loadTranslations = async () => {
      try {
        const response = await import(`../translations/${savedLanguage}.json`);
        // Merge with default fallbacks
        setTranslations({...defaultFallbacks, ...response.default});
      } catch (error) {
        // In production, don't log errors to console
        if (process.env.NODE_ENV !== 'production') {
          console.error('Error loading translations:', error);
        }
        // Fallback to English if translation file fails to load
        try {
          const fallback = await import('../translations/en.json');
          setTranslations({...defaultFallbacks, ...fallback.default});
        } catch (fallbackError) {
          // If even English fails, just use defaults
          setTranslations(defaultFallbacks);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, []);

  const switchLanguage = async (newLanguage: string) => {
    try {
      setIsLoading(true);
      const response = await import(`../translations/${newLanguage}.json`);
      // Merge with default fallbacks
      setTranslations({...defaultFallbacks, ...response.default});
      setLanguage(newLanguage);

      // Only access localStorage on the client side
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    } catch (error) {
      // In production, don't log errors to console
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error switching language:', error);
      }

      // If switching fails, revert to defaults with fallbacks
      try {
        const fallback = await import('../translations/en.json');
        setTranslations({...defaultFallbacks, ...fallback.default});
      } catch (fallbackError) {
        setTranslations(defaultFallbacks);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // The value that will be provided to consumers of this context
  const contextValue: LanguageContextValue = {
    language,
    translations,
    switchLanguage,
    isLoading
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
