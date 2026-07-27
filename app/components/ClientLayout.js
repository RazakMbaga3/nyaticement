'use client';

import { Suspense } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import Navbar from './ui/navbar';
import Footer from './ui/footer';
import LoadingOverlay from './ui/LoadingOverlay';
import LoadingIndicator from './ui/LoadingIndicator';
import LanguageSwitcher from './ui/LanguageSwitcher';
import ScrollToTop from './ui/ScrollToTop';
import PageProgress from './ui/PageProgress';
import PageTransition from './ui/PageTransition';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const { isLoading } = useLanguage();
  const pathname = usePathname();
  
  // Check if we're on a news article page to avoid duplicate language switchers
  const isNewsArticlePage = pathname && pathname.startsWith('/news/') && pathname !== '/news';
  
  return (
    <>
      {isLoading && <LoadingOverlay />}
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingIndicator />
      </Suspense>
      <PageProgress color="#F49545" height={3} showOnlyBelowFold={true} />
      <Navbar />
      {/* Fixed Language Switcher - don't show on news article pages */}
      {!isNewsArticlePage && (
        <div className="fixed lg:top-24 lg:right-4 top-16 right-2 z-50">
          <LanguageSwitcher />
        </div>
      )}
      
      <main className="flex-grow w-full">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
