
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioPage() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Educbank.School',
      description: {
        pt: 'Plataforma ERP completa para gestão financeira de escolas brasileiras. Desenvolvida com arquitetura DDD, práticas de código limpo e padrões de segurança robustos.',
        en: 'Complete ERP platform for financial management of Brazilian schools. Built with DDD architecture, clean code practices, and robust security standards.'
      },
      image: '/api/placeholder/600/400',
      technologies: ['C#', '.NET', 'ABP Framework', 'JavaScript', 'HTML/CSS', 'Docker'],
      githubUrl: 'https://github.com/vinicius-dias23/Educbank.School',
      liveUrl: null,
      category: 'ERP System',
      stats: {
        languages: 'C# 83.1% • JavaScript 10.4% • HTML 5.1% • CSS 1.2%',
        framework: 'ABP Framework with ASP.NET Core'
      }
    },
    {
      title: 'go-micro',
      description: {
        pt: 'Sistema de microserviços em Go com autenticação completa, logging, mensageria RabbitMQ, serviço de email e deploy com Docker Swarm. Inclui configuração DNS e hosting Akamai.',
        en: 'Go microservices system with complete authentication, logging, RabbitMQ messaging, email service, and Docker Swarm deployment. Includes DNS configuration and Akamai hosting.'
      },
      image: '/api/placeholder/600/400',
      technologies: ['Go', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Docker Swarm', 'Akamai'],
      githubUrl: 'https://github.com/vinicius-dias23/go-micro',
      liveUrl: null,
      category: 'Microservices',
      stats: {
        services: 'Auth • Logging • Email • Message Queue',
        infrastructure: 'Docker Swarm • Akamai CDN'
      }
    },
    {
      title: 'devbook',
      description: {
        pt: 'Aplicação completa em Go demonstrando as melhores práticas de desenvolvimento. Inclui autenticação, CRUD operations, design responsivo e arquitetura bem estruturada.',
        en: 'Complete Go application showcasing development best practices. Features authentication, CRUD operations, responsive design, and well-structured architecture.'
      },
      image: '/api/placeholder/600/400',
      technologies: ['Go', 'HTML', 'JavaScript', 'CSS', 'PostgreSQL'],
      githubUrl: 'https://github.com/vinicius-dias23/devbook',
      liveUrl: null,
      category: 'Web Application',
      stats: {
        languages: 'Go 71.3% • HTML 19.1% • JavaScript 8.2% • CSS 1.4%',
        features: 'Authentication • CRUD • Responsive Design'
      }
    }
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
            {t.portfolio.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-indigo-100 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-blue-200">
                        <Code2 className="h-24 w-24" />
                      </div>
                    </div>
                    {/* Technology Icons Overlay */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {project.description.pt}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Project Stats */}
                        <div className="space-y-2 text-sm text-gray-500">
                          {project.stats.languages && (
                            <p><strong>Languages:</strong> {project.stats.languages}</p>
                          )}
                          {project.stats.framework && (
                            <p><strong>Framework:</strong> {project.stats.framework}</p>
                          )}
                          {project.stats.services && (
                            <p><strong>Services:</strong> {project.stats.services}</p>
                          )}
                          {project.stats.infrastructure && (
                            <p><strong>Infrastructure:</strong> {project.stats.infrastructure}</p>
                          )}
                          {project.stats.features && (
                            <p><strong>Features:</strong> {project.stats.features}</p>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button 
                          variant="default" 
                          asChild
                          className="group"
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            {t.portfolio.viewCode}
                          </a>
                        </Button>
                        
                        {project.liveUrl && (
                          <Button variant="outline" asChild>
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {t.portfolio.liveDemo}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Projects on GitHub
            </h3>
            <p className="text-gray-600 mb-6">
              Explore all my repositories and contributions
            </p>
            <Button size="lg" asChild>
              <a 
                href="https://github.com/vinicius-dias23" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
