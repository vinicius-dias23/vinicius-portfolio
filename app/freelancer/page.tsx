
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, ShoppingCart, Database, Truck, 
  Cloud, Code, MessageSquare, CheckCircle,
  ArrowRight, Star, Users
} from 'lucide-react'

export default function FreelancerPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: t.freelancer.services.web,
      description: {
        pt: 'Desenvolvimento de sites e aplicações web modernas, responsivas e otimizadas para performance.',
        en: 'Development of modern, responsive websites and web applications optimized for performance.'
      },
      features: ['React/Next.js', 'Vue.js', 'Responsive Design', 'SEO Optimized']
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: t.freelancer.services.ecommerce,
      description: {
        pt: 'Plataformas de e-commerce completas com pagamentos, gestão de produtos e análise de vendas.',
        en: 'Complete e-commerce platforms with payments, product management, and sales analytics.'
      },
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Analytics']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: t.freelancer.services.management,
      description: {
        pt: 'Sistemas ERP customizados para gestão empresarial, automação de processos e relatórios.',
        en: 'Custom ERP systems for business management, process automation, and reporting.'
      },
      features: ['Custom ERP', 'Process Automation', 'Reports & Analytics', 'Multi-user']
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: t.freelancer.services.logistics,
      description: {
        pt: 'Soluções para logística, controle de estoque, rastreamento e otimização de rotas.',
        en: 'Logistics solutions, inventory control, tracking, and route optimization.'
      },
      features: ['Inventory Control', 'Route Optimization', 'Real-time Tracking', 'Integrations']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t.freelancer.services.api,
      description: {
        pt: 'APIs robustas e microserviços escaláveis com documentação completa e testes.',
        en: 'Robust APIs and scalable microservices with complete documentation and testing.'
      },
      features: ['RESTful APIs', 'Microservices', 'Documentation', 'Testing']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: t.freelancer.services.devops,
      description: {
        pt: 'Deploy, monitoramento e otimização de infraestrutura em cloud (AWS, Docker, Kubernetes).',
        en: 'Deployment, monitoring, and cloud infrastructure optimization (AWS, Docker, Kubernetes).'
      },
      features: ['AWS Deployment', 'Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring']
    }
  ]

  const testimonials = [
    {
      name: 'João Silva',
      company: 'TechStart',
      text: {
        pt: 'Vinícius entregou um sistema excepcional. Comunicação clara e prazo cumprido.',
        en: 'Vinícius delivered an exceptional system. Clear communication and deadline met.'
      },
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'E-commerce Plus',
      text: {
        pt: 'Profissional experiente que entende as necessidades do negócio. Recomendo!',
        en: 'Experienced professional who understands business needs. Highly recommended!'
      },
      rating: 5
    }
  ]

  const handleContactForQuote = () => {
    const subject = encodeURIComponent('Solicitação de Orçamento - Freelancer')
    const body = encodeURIComponent('Olá Vinícius,\n\nTenho interesse em seus serviços freelancer.\n\nDetalhes do projeto:\n- Tipo de projeto: \n- Prazo estimado: \n- Orçamento: \n- Descrição: \n\nAguardo seu retorno.\n\nObrigado!')
    window.open(`mailto:viniciussd23@gmail.com?subject=${subject}&body=${body}`, '_blank')
  }

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
            {t.freelancer.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.freelancer.subtitle}
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.freelancer.description}
            </p>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">6+ Anos de Experiência</h3>
              <p className="text-gray-600">Experiência sólida em desenvolvimento full-stack e projetos diversos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunicação Clara</h3>
              <p className="text-gray-600">Atualizações constantes e comunicação transparente durante todo o projeto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Código limpo, testes, documentação e suporte pós-entrega</p>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.freelancer.services.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description.pt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Depoimentos de Clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text.pt}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl mb-2 opacity-90">
              {t.freelancer.pricing}
            </p>
            <p className="text-lg mb-8 opacity-80">
              Entre em contato para uma consulta gratuita
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={handleContactForQuote}
              className="group"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {t.freelancer.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
