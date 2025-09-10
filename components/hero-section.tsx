
'use client'

import { ArrowRight, Download, Github, Linkedin, Code, Zap, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  const { t } = useLanguage()

  const handleEmailContact = () => {
    const subject = encodeURIComponent('Contato - Portfólio')
    const body = encodeURIComponent('Olá Vinícius,\n\nGostaria de conversar sobre...')
    window.open(`mailto:viniciussd23@gmail.com?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Mobile Hero - More Visual */}
            <div className="block lg:hidden">
              {/* Visual Stats for Mobile */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600">6+</div>
                    <div className="text-xs text-gray-600">{t.home.stats.years}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-gray-600">{t.home.stats.projects}</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-600">15+</div>
                    <div className="text-xs text-gray-600">{t.home.stats.technologies}</div>
                  </div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl font-bold text-gray-900 mb-3"
              >
                {t.home.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-blue-600 font-semibold mb-6"
              >
                {t.home.subtitle}
              </motion.p>

              {/* Key Skills Icons - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center gap-6 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-600">{t.home.skills.fullstack}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-2">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-600">{t.home.skills.performance}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-600">{t.home.skills.quality}</span>
                </div>
              </motion.div>
            </div>

            {/* Desktop Hero - Original Layout */}
            <div className="hidden lg:block">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
              >
                {t.home.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-blue-600 font-semibold mb-6"
              >
                {t.home.subtitle}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.home.description}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <Link href="/portfolio">
                <Button size="lg" className="w-full sm:w-auto group">
                  {t.home.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleEmailContact}
                className="w-full sm:w-auto"
              >
                {t.home.ctaContact}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/vinicius-dias23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-diast"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-gray-700" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Smaller on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-56 h-56 lg:w-72 lg:h-72 bg-white rounded-full flex items-center justify-center">
                  <span style={{ fontSize: '2.50rem' }}  className="text-4xl lg:text-6xl font-bold text-blue-600">vinicius.ca</span>
                </div>
              </div>
              {/* Floating elements - Smaller on Mobile */}
              <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-8 h-8 lg:w-12 lg:h-12 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-4 lg:-left-8 w-4 h-4 lg:w-6 lg:h-6 bg-pink-400 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
