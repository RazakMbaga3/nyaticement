'use client'

import { LanguageProvider } from './contexts/LanguageContext'
import ClientLayout from './components/ClientLayout'

export default function AppClientWrapper({ children }) {
  return (
    <LanguageProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </LanguageProvider>
  )
}
