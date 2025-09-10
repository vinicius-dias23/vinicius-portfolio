
'use client'

import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { useState } from 'react'

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: any) => {
    if (language && language.code) {
      setLanguage(language)
      setIsOpen(false)
    }
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={toggleDropdown}
        className="gap-2"
        type="button"
      >
        <Globe className="h-4 w-4" />
        {currentLanguage?.flag || '🇧🇷'} {currentLanguage?.name || 'Português'}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 min-w-[120px]">
          {languages?.map?.((language) => (
            <button
              key={language?.code || 'lang'}
              onClick={() => handleLanguageChange(language)}
              className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
              type="button"
            >
              {language?.flag} {language?.name}
            </button>
          ))}
        </div>
      )}
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
