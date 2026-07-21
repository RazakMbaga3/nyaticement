'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { useTranslations } from '@/app/hooks/useTranslations'

interface SubscribeStatus {
  success: boolean;
  message: string;
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<SubscribeStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslations();
  const [pageTranslations, setPageTranslations] = useState<Record<string, any>>({});

  // Load page-specific translations for the newsletter
  useEffect(() => {
    const loadPageTranslations = async () => {
      try {
        const response = await import(`@/app/translations/csr-${language}.json`);
        setPageTranslations(response.default);
      } catch (error) {
        console.error('Error loading newsletter translations:', error);
        try {
          const fallback = await import('@/app/translations/csr-en.json');
          setPageTranslations(fallback.default);
        } catch (fallbackError) {
          console.error('Error loading fallback translations:', fallbackError);
        }
      }
    };

    loadPageTranslations();
  }, [language]);
  // Helper function to get translated content from page translations or fallback to global translations
  const getTranslation = (key: string) => {
    // Check if we have the key in page-specific translations
    if (pageTranslations && pageTranslations.newsletter) {
      const keys = key.split('.');
      if (keys.length === 2 && keys[0] === 'newsletter') {
        const newsletterKey = keys[1];
        if (pageTranslations.newsletter[newsletterKey]) {
          return pageTranslations.newsletter[newsletterKey];
        }
      }
    }
    // Fallback to global translations
    return t(key);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send the email to your backend
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubscribeStatus({
        success: true,
        message: getTranslation('newsletter.successMessage')
      });
      setEmail('');
    } catch (error) {
      setSubscribeStatus({
        success: false,
        message: getTranslation('newsletter.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="bg-blue-900 text-white rounded-sm py-8 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-nyati-light-orange font-bold mb-4">
          {getTranslation('newsletter.title')}
        </h2>
        <p className="mb-8">{getTranslation('newsletter.subtitle')}</p>

        {subscribeStatus && (
          <div className={`mb-6 p-4 rounded-sm text-left ${subscribeStatus.success ? 'bg-green-800/50 text-green-100' : 'bg-red-800/50 text-red-100'}`}>
            {subscribeStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder={getTranslation('newsletter.inputPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-sm bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-nyati-orange"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-sm bg-nyati-orange text-white font-medium hover:bg-nyati-navy transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? getTranslation('newsletter.subscribingButton') : getTranslation('newsletter.subscribeButton')}
          </button>
        </form>
      </div>
    </section>
  )
}
