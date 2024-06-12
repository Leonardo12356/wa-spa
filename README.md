# Documentação do Frontend

## Descrição
Esta é a aplicação frontend do sistema de gestão de estoque.

## Tecnologias Utilizadas
- **Linguagem de Programação:** JavaScript
- **Framework:** Vue.js 3
- **Gerenciador de Estado:** Pinia
- **Roteamento:** Vue Router
- **UI Framework:** Vuetify
- **Biblioteca de Gráficos:** Chart.js com Vue Chart.js
- **HTTP Client:** Axios
- **Mock de API:** JSON Server
- **Ferramenta de Construção:** Vite

## Estrutura do Projeto

- **.vscode/**: Configurações específicas do Visual Studio Code.
- **node_modules/**: Módulos do Node.js.
- **public/**: Arquivos públicos.
  - **index.html:** Arquivo HTML principal.
- **src/**
  - **assets/**: Arquivos estáticos (imagens, estilos, etc).
  - **components/**: Componentes Vue reutilizáveis.
  - **composables/**: Funções reutilizáveis (hooks) da aplicação.
  - **router/**: Configuração das rotas da aplicação.
  - **services/**: Serviços para comunicação com APIs.
  - **store/**: Configuração do Pinia para gerenciamento de estado.
  - **utils/**: Funções utilitárias.
  - **views/**: Páginas da aplicação.
  - **App.vue:** Componente raiz da aplicação.
  - **main.js:** Ponto de entrada da aplicação.
- **.env.development:** Arquivo de variáveis de ambiente para desenvolvimento.
- **.gitignore:** Arquivo de configuração do Git para ignorar arquivos.
- **index.html:** Arquivo HTML principal.
- **package-lock.json:** Arquivo de bloqueio de versões do npm.
- **package.json:** Arquivo de configuração do npm.
- **README.md:** Documentação do projeto.
- **vite.config.js:** Configuração do Vite.

## Configuração do Ambiente de Desenvolvimento

1. Instale o Node.js e o npm.
2. Clone o repositório do projeto.
3. Navegue até o diretório do projeto e instale as dependencias com `npm i`
