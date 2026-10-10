# Angular Blog (estudo)

> **MVP de um Blog de Receitas Culinárias desenvolvido com Angular**  
> Projeto de caráter acadêmico voltado ao estudo prático, consolidação de conceitos e boas práticas do ecossistema Angular moderno.

---

## 📖 Sobre o Projeto

O **Angular Blog (estudo)** é um produto mínimo viável (MVP) concebido como laboratório de experimentação com o framework **Angular**. A aplicação simula um portal gastronômico interativo no qual o usuário pode visualizar uma galeria de pratos e receitas, navegar dinamicamente entre artigos e conferir detalhes formatados com uma estética inspirada em livros de receitas clássicos.

O projeto explora funcionalidades fundamentais da arquitetura moderna do Angular, incluindo componentes autônomos (*Standalone Components*), a sintaxe declarativa de fluxo de controle (*Built-in Control Flow* `@for` / `@empty`), roteamento parametrizado e design responsivo customizado em Vanilla CSS.

---

## 🛠️ Tecnologias & Stack Utilizada

A arquitetura do projeto foi estruturada com foco em leveza, performance e aderência aos padrões contemporâneos do frontend:

| Tecnologia | Versão / Descrição |
|---|---|
| **Angular** | `17.3.0` (Core, Common, Router, Standalone Components) |
| **TypeScript** | `~5.4.2` |
| **Node.js** | `>= 18.19.0` ou `>= 20.9.0` (recomendado) |
| **Estilização** | Vanilla CSS (Flexbox, CSS Grid, Design Responsivo fluido com `clamp()`) |
| **Tipografia & Ícones** | Google Fonts (*League Gothic*, *Staatliches*), FontAwesome CDN |
| **Build & Tooling** | Angular CLI 17 com novo pipeline Vite/esbuild |

---

## ✨ Principais Funcionalidades

- **Home com Vitrine Dinâmica:** Listagem de receitas gerada a partir de fonte centralizada de dados mockados (`postData.ts`).
- **Cards Interativos e Fluidos:** Componente de cards pequenos com efeitos visuais de profundidade (*hover/lift*) e vinculação de rotas nativas com `RouterLink`.
- **Página de Conteúdo Temática (Livro de Receitas):** Rota dinâmica (`/content/:id`) com renderização detalhada de título, categoria, foto de capa, ingredientes destacados e instruções passo a passo de preparo.
- **Página 404 Personalizada:** Rota curinga para tratamento amigável de páginas não encontradas com atalho de retorno ao início.

---

## 🚀 Como Executar o Projeto Localmente

Siga o passo a passo abaixo para clonar, instalar as dependências e iniciar o servidor de desenvolvimento em seu ambiente local:

### 1. Pré-requisitos

Certifique-se de possuir instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (versão 18.19+ ou 20.9+)
- **[Git](https://git-scm.com/)**
- **NPM** (instalado automaticamente junto ao Node.js)

*(Opcional)* É recomendável possuir o **Angular CLI** instalado globalmente:
```bash
npm install -g @angular/cli@17
```

---

### 2. Clonando o Repositório

Abra o terminal e execute:
```bash
git clone https://github.com/hugonorte/Angular-Blog-Estudo-Repo.git
cd Angular-Blog-Estudo-Repo
```

---

### 3. Instalando as Dependências

Execute o gerenciador de pacotes para baixar as bibliotecas do projeto:
```bash
npm install
```

---

### 4. Executando o Servidor de Desenvolvimento

Inicie a aplicação local com o script:
```bash
npm start
```
> *Alternativamente, você pode utilizar `ng serve` ou `npx ng serve`.*

Assim que a compilação for concluída, acesse em seu navegador:
```text
http://localhost:4200/
```

O servidor conta com *Hot Reload*; qualquer alteração realizada nos arquivos fonte recarregará a aplicação automaticamente.

---

### 5. Demais Comandos Úteis

- **Build de Produção:**
  Gera os artefatos otimizados e minificados no diretório `dist/`:
  ```bash
  npm run build
  ```

- **Execução de Testes Unitários:**
  Executa a suíte de testes automatizados via Karma e Jasmine:
  ```bash
  npm test
  ```

---

## 📂 Estrutura de Pastas

```text
src/
├── app/
│   ├── components/         # Componentes compartilhados (cards, hero, nav-menu, footer)
│   ├── data/               # Modelos e conjuntos de dados mockados (postData.ts)
│   ├── pages/              # Páginas e views de rotas (Home, Content, 404)
│   ├── app.component.*     # Componente raiz da aplicação
│   └── app.routes.ts       # Definição e mapeamento de rotas
├── assets/                 # Mídias estáticas (imagens de pratos e banners)
├── index.html              # Ponto de entrada HTML e fontes externas
└── styles.css              # Regras globais de tipografia e reset
```

---

## 👨‍💻 Autor & Propósito

Projeto desenvolvido por **Hugo Norte** para fins estritamente educacionais e aprofundamento prático na tecnologia Angular.

Sinta-se à vontade para explorar o código, clonar o projeto e utilizá-lo como referência de estudos!
