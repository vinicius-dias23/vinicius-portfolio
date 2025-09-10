
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Code2, Database, Cloud, Smartphone, 
  Globe, Cpu, GraduationCap, Languages,
  Award, Briefcase
} from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()

  const skills = [
    { name: 'Golang', level: 95, category: 'backend' },
    { name: 'React/Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Vue.js', level: 80, category: 'frontend' },
    { name: 'C# .NET', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 90, category: 'database' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'Docker', level: 90, category: 'devops' },
    { name: 'Kubernetes', level: 85, category: 'devops' },
    { name: 'AWS', level: 80, category: 'cloud' },
    { name: 'RabbitMQ', level: 85, category: 'backend' },
    { name: 'Microservices', level: 95, category: 'architecture' }
  ]

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Educbank',
      period: '06/2025 - Present',
      location: 'São Paulo, Brazil',
      description: 'Financial services company for Brazilian schools. Developing features with DDD architecture, clean code practices, and strong security standards.',
      technologies: ['Golang', 'Vue.js', '.NET C#', 'MongoDB', 'PostgreSQL', 'Datadog']
    },
    {
      title: 'Full Stack Developer',
      company: 'Linear Sistemas',
      period: '03/2019 - 05/2025',
      location: 'Belo Horizonte, Brazil',
      description: 'ERP software for large supermarkets and retail stores. Developed microservices, APIs, and responsive interfaces.',
      technologies: ['Golang', 'React', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes', 'ArgoCD']
    }
  ]

  const education = [
    {
      degree: 'Bachelor in Software Engineering',
      school: 'PUC MINAS',
      period: '02/2021 - attending',
      location: 'Belo Horizonte, Brazil'
    },
    {
      degree: 'English as a Second Language Course',
      school: 'ILAC',
      period: '06/2024 - 12/2024',
      location: 'Vancouver, Canada'
    },
    {
      degree: 'IT Technician',
      school: 'COTEMIG',
      period: '02/2018 - 12/2020',
      location: 'Belo Horizonte, Brazil'
    }
  ]

  const languages = [
    { name: 'Portuguese', level: 'Native', flag: '🇧🇷' },
    { name: 'English', level: 'Advanced C1', flag: '🇺🇸' }
  ]

  const certifications = [
    'IELTS Certification (11-2024)',
    '7 Back-End Development Certificates (Alura, Udemy)',
    '11 Front-End Development Certificates (Alura, Udemy)',
    '3 DevOps Certificates (Alura, Udemy)',
    'English Course Certificate - 6 months Canada (12-2024)'
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.about.subtitle}
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Education & Languages Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-7 w-7 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.education}</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-600">{edu.location}</p>
                    <Badge variant="outline" className="mt-2">
                      {edu.period}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Languages className="h-7 w-7 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.languages}</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="p-0 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium text-gray-900">{lang.name}</span>
                    </div>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-900">{t.about.certifications}</h4>
              </div>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
