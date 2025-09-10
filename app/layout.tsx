
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinícius Dias - Software Engineer',
  description: 'Full-Stack Software Engineer with 6+ years of experience in Golang, React, and microservices architecture.',
  keywords: ['software engineer', 'full-stack developer', 'golang', 'react', 'microservices', 'freelancer'],
  authors: [{ name: 'Vinícius Dias' }],
  openGraph: {
    type: 'website',
    title: 'Vinícius Dias - Software Engineer',
    description: 'Full-Stack Software Engineer with 6+ years of experience in Golang, React, and microservices architecture.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navigation />
            <main className="pt-20">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
