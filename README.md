# QR Code Generator

![QR Code Generator](https://img.shields.io/badge/QR%20Code-Generator-blue)
![Next.js](https://img.shields.io/badge/next.js-14-black)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-3-cyan)

Um gerador de QR Code simples, rápido e gratuito desenvolvido com Next.js e TypeScript.

## 🚀 Funcionalidades

- ✅ Geração rápida de QR Codes (menos de 1 minuto!)
- 🎨 Personalização completa com cores do QR Code e do fundo
- 📝 Adicione título e descrição ao seu QR Code
- 💾 Faça download do QR Code em formato PNG
- 🔄 Conversão automática de URLs (adiciona https:// quando necessário)
- 📱 Design responsivo para todos os dispositivos

## 🖥️ Demonstração

[![Tutorial QR Code Generator](https://img.youtube.com/vi/XA399axTVbc/maxresdefault.jpg)](https://www.youtube.com/watch?v=XA399axTVbc)

*👆 Clique na imagem acima para assistir ao tutorial completo*

O vídeo demonstra como usar o gerador de QR Code, desde a inserção da URL até o download da imagem final personalizada.

## 🛠️ Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [qrcode.react](https://www.npmjs.com/package/qrcode.react) - Biblioteca React para geração de QR Codes
- [Lucide React](https://lucide.dev/) - Ícones bonitos e consistentes

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/qrcode-generator.git qrcode-generator
   cd qrcode-generator
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. Execute o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📝 Uso do Projeto

1. Cole o seu link (com ou sem https://)
2. Opcional: Adicione um título para seu QR Code
3. Opcional: Adicione uma descrição para seu QR Code
4. Opcional: Personalize as cores do QR Code
5. Clique em "Gerar QR Code"
6. Baixe seu QR Code clicando no botão "Baixar QR Code"

## 🧪 Testes

Para executar os testes:

```bash
npm run test
# ou
yarn test
# ou
pnpm test
# ou
bun test
```

## 📦 Build e Deploy

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
# ou
bun build
```

Este projeto pode ser facilmente implantado na [Vercel](https://vercel.com/), uma plataforma otimizada para projetos Next.js.

## 🔍 Estrutura do Projeto

```
/
|-- public/              # Arquivos estáticos
|-- src/                 # Código fonte
|   |-- app/             # Arquivos de rotas (App Router do Next.js)
|   |   |-- globals.css  # Estilos globais
|   |   |-- layout.tsx   # Layout principal da aplicação
|   |   |-- page.tsx     # Página principal
|   |
|   |-- components/      # Componentes React reutilizáveis
|       |-- noScript.tsx         # Componente exibido quando JavaScript está desativado
|       |-- paginaPrincipal.tsx  # Componente principal com o formulário e QR code
|
|-- package.json        # Dependências e scripts
|-- tailwind.config.js  # Configuração do Tailwind CSS
|-- tsconfig.json       # Configuração do TypeScript
|-- README.md           # Este arquivo que você está lendo
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📧 Contato

Eduardo B. - [website](https://eduardobrito.dev) - [report@eduardobrito.dev](mailto:report@eduardobrito.dev)

Link do projeto: [https://github.com/Duduubas/qr-code-generator](https://github.com/Duduubas/qr-code-generator)

## 🙏 Agradecimentos

- [qrcode.react](https://www.npmjs.com/package/qrcode.react) por fornecer a biblioteca de geração de QR Codes
- [Tailwind CSS](https://tailwindcss.com/) por facilitar o desenvolvimento da interface
- [Next.js](https://nextjs.org/) pelo framework incrível
- Todos os contribuidores que ajudaram a melhorar este projeto 😎