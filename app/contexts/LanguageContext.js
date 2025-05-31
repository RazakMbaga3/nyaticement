'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Default translations to use when keys are missing
const defaultFallbacks = {
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

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(defaultFallbacks);
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
        setIsLoading(false);      }
    };

    loadTranslations();
  }, []);

  const switchLanguage = async (newLanguage) => {
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

  return (
    <LanguageContext.Provider value={{
      language,
      translations,
      switchLanguage,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
