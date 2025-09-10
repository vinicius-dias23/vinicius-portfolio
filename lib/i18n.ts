
export interface Language {
  code: 'pt' | 'en'
  name: string
  flag: string
}

export const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

export const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Início',
      about: 'Sobre',
      portfolio: 'Portfólio',
      freelancer: 'Freelancer',
      contact: 'Contato'
    },
    // Home Page
    home: {
      title: 'Vinícius Dias',
      subtitle: 'Engenheiro de Software Full-Stack',
      description: 'Desenvolvedor experiente com 6+ anos, especializado em Golang, React, e arquitetura de microserviços. Transformo ideias em soluções tecnológicas robustas.',
      cta: 'Ver Portfólio',
      ctaContact: 'Entre em Contato',
      stats: {
        years: 'Anos',
        projects: 'Projetos', 
        technologies: 'Tecnologias'
      },
      skills: {
        fullstack: 'Full-Stack',
        performance: 'Performance',
        quality: 'Qualidade'
      }
    },
    // About Page
    about: {
      title: 'Sobre Mim',
      subtitle: 'Engenheiro de Software apaixonado por tecnologia',
      description: 'Profissional formando em Engenharia de Software, com mais de 6 anos de experiência em desenvolvimento full-stack. Especializado em tecnologias como Golang e ReactJS, com expertise em ferramentas DevOps como Docker e Kubernetes.',
      experience: 'Anos de Experiência',
      projects: 'Projetos Concluídos',
      certifications: 'Certificações',
      skills: 'Habilidades Técnicas',
      languages: 'Idiomas',
      education: 'Formação'
    },
    // Portfolio Page
    portfolio: {
      title: 'Meus Projetos',
      subtitle: 'Alguns dos meus trabalhos recentes',
      viewCode: 'Ver Código',
      liveDemo: 'Demo ao Vivo'
    },
    // Freelancer Page
    freelancer: {
      title: 'Serviços Freelancer',
      subtitle: 'Soluções personalizadas para seu negócio',
      description: 'Ofereço serviços de desenvolvimento web completos, desde sistemas de gestão até e-commerce e logística. Cada projeto é desenvolvido com foco na qualidade, performance e escalabilidade.',
      services: {
        title: 'Serviços Oferecidos',
        web: 'Desenvolvimento Web',
        ecommerce: 'E-commerce',
        management: 'Sistemas de Gestão',
        logistics: 'Logística',
        api: 'APIs e Microserviços',
        devops: 'DevOps e Cloud'
      },
      cta: 'Solicitar Orçamento',
      pricing: 'Preços sob consulta - cada projeto é único'
    },
    // Contact Page
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos conversar sobre seu projeto',
      form: {
        name: 'Nome',
        email: 'Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem'
      },
      info: {
        email: 'Email',
        phone: 'Telefone',
        location: 'Localização'
      }
    },
    // Common
    common: {
      getInTouch: 'Entre em Contato',
      learnMore: 'Saiba Mais',
      viewAll: 'Ver Todos',
      backToTop: 'Voltar ao Topo'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      freelancer: 'Freelancer',
      contact: 'Contact'
    },
    // Home Page
    home: {
      title: 'Vinícius Dias',
      subtitle: 'Full-Stack Software Engineer',
      description: 'Experienced developer with 6+ years, specialized in Golang, React, and microservices architecture. I transform ideas into robust technological solutions.',
      cta: 'View Portfolio',
      ctaContact: 'Get in Touch',
      stats: {
        years: 'Years',
        projects: 'Projects',
        technologies: 'Technologies'
      },
      skills: {
        fullstack: 'Full-Stack',
        performance: 'Performance',
        quality: 'Quality'
      }
    },
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'Software Engineer passionate about technology',
      description: 'Professional graduating in Software Engineering, with over 6 years of experience in full-stack development. Specialized in technologies like Golang and ReactJS, with expertise in DevOps tools like Docker and Kubernetes.',
      experience: 'Years of Experience',
      projects: 'Completed Projects',
      certifications: 'Certifications',
      skills: 'Technical Skills',
      languages: 'Languages',
      education: 'Education'
    },
    // Portfolio Page
    portfolio: {
      title: 'My Projects',
      subtitle: 'Some of my recent work',
      viewCode: 'View Code',
      liveDemo: 'Live Demo'
    },
    // Freelancer Page
    freelancer: {
      title: 'Freelancer Services',
      subtitle: 'Custom solutions for your business',
      description: 'I offer complete web development services, from management systems to e-commerce and logistics. Each project is developed with focus on quality, performance, and scalability.',
      services: {
        title: 'Services Offered',
        web: 'Web Development',
        ecommerce: 'E-commerce',
        management: 'Management Systems',
        logistics: 'Logistics',
        api: 'APIs & Microservices',
        devops: 'DevOps & Cloud'
      },
      cta: 'Request Quote',
      pricing: 'Custom pricing - each project is unique'
    },
    // Contact Page
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s talk about your project',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      }
    },
    // Common
    common: {
      getInTouch: 'Get in Touch',
      learnMore: 'Learn More',
      viewAll: 'View All',
      backToTop: 'Back to Top'
    }
  }
}

export type TranslationKey = keyof typeof translations['pt']
