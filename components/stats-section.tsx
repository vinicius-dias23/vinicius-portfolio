
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/language-context'
import { Code, Users, Award, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

export function StatsSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  
  const stats: Stat[] = [
    { icon: <Clock className="h-8 w-8" />, value: 6, label: t.about.experience, suffix: '+' },
    { icon: <Code className="h-8 w-8" />, value: 50, label: t.about.projects, suffix: '+' },
    { icon: <Award className="h-8 w-8" />, value: 21, label: t.about.certifications },
    { icon: <Users className="h-8 w-8" />, value: 2, label: t.about.languages },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              animate={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  stat: Stat
  index: number
  animate: boolean
}

function StatCard({ stat, index, animate }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate) return

    const timer = setTimeout(() => {
      const increment = stat.value / 30
      const updateCount = () => {
        setCount(prev => {
          if (prev < stat.value) {
            setTimeout(updateCount, 50)
            return Math.min(prev + increment, stat.value)
          }
          return stat.value
        })
      }
      updateCount()
    }, index * 200)

    return () => clearTimeout(timer)
  }, [animate, stat.value, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-blue-600 mb-4 flex justify-center">
        {stat.icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {Math.floor(count)}{stat.suffix || ''}
      </div>
      <div className="text-gray-600 font-medium">
        {stat.label}
      </div>
    </motion.div>
  )
}
