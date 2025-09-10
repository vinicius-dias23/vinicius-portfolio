
# 🚀 Portfólio Vinícius Dias

Site de portfólio profissional desenvolvido em Next.js, destacando habilidades de desenvolvimento full-stack e serviços freelancer.

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Executar](#como-executar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Deploy](#deploy)

## 📖 Sobre

Portfólio profissional bilíngue (Português/Inglês) desenvolvido para destacar:
- 6+ anos de experiência em desenvolvimento de software
- Expertise em tecnologias como Golang, React e microserviços
- Serviços freelancer para desenvolvimento web
- Projetos em destaque: Educbank.School, go-micro, devbook

## 🛠 Tecnologias

### Frontend
- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Animações fluidas
- **Radix UI** - Componentes acessíveis

### Desenvolvimento
- **Yarn** - Gerenciador de pacotes
- **ESLint** - Linting de código
- **Prettier** - Formatação de código

### Funcionalidades
- **Responsivo** - Design adaptativo para todos os dispositivos
- **Bilíngue** - Suporte a Português e Inglês
- **Animações** - Transições suaves e interativas
- **SEO Otimizado** - Meta tags e performance

## ✨ Funcionalidades

- 🌐 **Site Bilíngue** - Alternância entre Português e Inglês
- 📱 **Design Responsivo** - Otimizado para mobile e desktop
- ⚡ **Performance** - Carregamento rápido e otimizado
- 🎨 **Animações Suaves** - Interface interativa com Framer Motion
- 📧 **Formulário de Contato** - Integração com Gmail
- 🔗 **Links Sociais** - GitHub e LinkedIn integrados
- 🎯 **Seção Freelancer** - Destaque para serviços profissionais

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **Yarn** (gerenciador de pacotes recomendado)
- **Git** (para clonar o repositório)

### Verificar instalações:
```bash
node --version
yarn --version
git --version
```

## ⚙️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd vinicius_portfolio
```

2. **Navegue para o diretório do app**
```bash
cd app
```

3. **Instale as dependências**
```bash
yarn install
```

## 🔧 Configuração

### Variáveis de Ambiente

O projeto pode funcionar sem configurações adicionais, mas para funcionalidades completas, crie um arquivo `.env.local`:

```bash
# Opcional - para funcionalidades de autenticação (se necessário)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu-secret-aqui

# Opcional - para analytics ou outras integrações
# GOOGLE_ANALYTICS_ID=seu-id-aqui
```

### Personalização

Para personalizar informações pessoais, edite o arquivo:
```
app/lib/i18n.ts
```

## 🚀 Como Executar

### Desenvolvimento
```bash
# Executar em modo de desenvolvimento
yarn dev
```

O site estará disponível em: **http://localhost:3000**

### Produção
```bash
# Construir para produção
yarn build

# Executar versão de produção
yarn start
```

### Visualizar Build
```bash
# Verificar se o build funciona corretamente
yarn build && yarn start
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev          # Inicia servidor de desenvolvimento

# Build
yarn build        # Cria build de produção
yarn start        # Executa build de produção

# Qualidade de Código
yarn lint         # Verifica problemas no código
yarn lint --fix   # Corrige problemas automaticamente

# Utilitários
yarn tsc          # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

```
vinicius_portfolio/
├── app/                          # Diretório principal do Next.js
│   ├── app/                      # App Router do Next.js
│   │   ├── about/               # Página "Sobre"
│   │   ├── contact/             # Página "Contato" 
│   │   ├── freelancer/          # Página "Freelancer"
│   │   ├── portfolio/           # Página "Portfólio"
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página inicial
│   ├── components/              # Componentes reutilizáveis
│   │   ├── ui/                  # Componentes da interface
│   │   ├── hero-section.tsx     # Seção hero da homepage
│   │   ├── navbar.tsx           # Barra de navegação
│   │   └── ...
│   ├── contexts/                # Contextos React
│   │   └── language-context.tsx # Contexto de idioma
│   ├── lib/                     # Utilitários e configurações
│   │   └── i18n.ts              # Configurações de internacionalização
│   ├── public/                  # Arquivos públicos
│   ├── package.json             # Dependências do projeto
│   └── tailwind.config.js       # Configuração do Tailwind
└── README.md                    # Este arquivo
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao [Vercel](https://vercel.com)
2. Configure o diretório raiz como `app/`
3. Deploy automático a cada push

### Netlify
1. Configure build command: `yarn build`
2. Configure publish directory: `app/.next`
3. Defina diretório base: `app/`

### Docker (Opcional)
```bash
# Na pasta app/
docker build -t vinicius-portfolio .
docker run -p 3000:3000 vinicius-portfolio
```

## 🐛 Troubleshooting

### Problemas Comuns:

**1. Erro de dependências**
```bash
rm -rf node_modules yarn.lock
yarn install
```

**2. Erro de TypeScript**
```bash
yarn tsc --noEmit
```

**3. Erro de build**
```bash
rm -rf .next
yarn build
```

**4. Porta 3000 ocupada**
```bash
# Use uma porta diferente
yarn dev -p 3001
```

## 📞 Contato

- **Email**: viniciussd23@gmail.com
- **Telefone**: +55 (31) 99501-3271
- **LinkedIn**: [linkedin.com/in/vinicius-diast](https://www.linkedin.com/in/vinicius-diast)
- **GitHub**: [github.com/vinicius-dias23](https://github.com/vinicius-dias23)

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados a Vinícius Dias.

---

**Desenvolvido por Vinícius Dias**
