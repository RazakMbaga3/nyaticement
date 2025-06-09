'use client';

import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider } from './components/ui/Toast';
import SkeletonProvider from './components/ui/SkeletonProvider';

export function Providers({ children }) {
  return (
    <LanguageProvider>
      <ToastProvider>
        <SkeletonProvider>
          {children}
        </SkeletonProvider>
      </ToastProvider>
    </LanguageProvider>
  );
}
