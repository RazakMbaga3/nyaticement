'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();
  const { t } = useTranslations();
  
  return (
    <div className="flex items-center space-x-2 text-sm bg-white/80 backdrop-blur-sm p-1 rounded shadow-sm">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-nyati-navy text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('sw')}
        className={`px-2 py-1 rounded ${
          language === 'sw'
            ? 'bg-nyati-navy text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Kiswahili
      </button>
    </div>
  );
}
