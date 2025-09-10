
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Language, languages } from '@/lib/i18n'

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.pt
  languages: Language[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage?.getItem?.('preferred-language')
    if (saved) {
      const lang = languages?.find?.(l => l?.code === saved)
      if (lang) setCurrentLanguage(lang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    if (!lang) return
    setCurrentLanguage(lang)
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('preferred-language', lang.code)
    }
  }

  const t = translations[currentLanguage?.code] || translations.pt

  const value = {
    currentLanguage: currentLanguage || languages[0],
    setLanguage,
    t,
    languages: languages || []
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
