'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
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
        setTranslations(response.default);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English if translation file fails to load
        const fallback = await import('../translations/en.json');
        setTranslations(fallback.default);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, []);
  const switchLanguage = async (newLanguage) => {
    try {
      setIsLoading(true);
      const response = await import(`../translations/${newLanguage}.json`);
      setTranslations(response.default);
      setLanguage(newLanguage);
      
      // Only access localStorage on the client side
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
      }
    } catch (error) {
      console.error('Error switching language:', error);
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
