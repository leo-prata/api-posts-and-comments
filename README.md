# API para posts e comentários

Abaixo seguem as instruções para execução do servidor :)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) (versão recomendada: 16.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/download/) (versão recomendada: 13.x ou superior)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/leo-prata/api-posts-and-comments
2. Navegue até o diretório do projeto em um terminal:
   ```sh
   cd api-posts-and-comments
3. Instale as dependências no diretório do projeto:
    ```sh
    npm install


## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL para o projeto:
   - Na barra de pesquisa do Windows procure por pgAdmin
   - Já no pgAdmin, na barra de menus superior, selecione a opção "Object", depois "Create", depois "Database"
   - Escolha um nome para o banco de dados
   - Clique no botão "Save"

2. Configure a URL do banco de dados no arquivo .env (veja a seção de Variáveis de Ambiente).
3. Execute as migrações do Prisma para criar as tabelas no banco de dados (no diretório do projeto):
   ```sh
   npx prisma migrate dev

## Variáveis de Ambiente

Para rodar este projeto, você precisará configurar as seguintes variáveis de ambiente no arquivo .env na raiz do projeto. Crie o arquivo .env caso ele ainda não exista e adicione esta linha:
  ```sh
  DATABASE_URL="postgresql://usuario:senha@localhost:5432/name_db?schema=public"
  ```
- Substitua *usuario* pelo seu usuário do PostgreSQL
- Substitua *senha* pela sua senha do PostgreSQL
- Substitua *name_db* pelo nome do banco de dados que você criou.

## Rodando o Servidor

###  Em ambiente de desenvolvimento

Para rodar o servidor em modo de desenvolvimento, utilize o script dev (no diretório do projeto):
  ```sh
  npm run dev
  ```
O servidor estará disponível em http://localhost:3111

### Em modo de produção

Para rodar o servidor em modo de produção:

1. Compile o TypeScript para JavaScript:
  ```sh
  npm run build
  ```
2. Inicie o servidor:
  ```sh
  npm run start
  ```

O servidor estará disponível em http://localhost:3111

## Notas Adicionais
- Certifique-se de que o PostgreSQL está rodando em sua máquina antes de executar as migrações ou o servidor.
- Caso encontre erros nas migrações, verifique a conexão no DATABASE_URL e se o banco de dados foi criado corretamente.


# Descrição do Projeto

Este projeto é uma API RESTful desenvolvida em Node.js com TypeScript, utilizando o framework Express para gerenciar requisições HTTP. 
O banco de dados é modelado com o Prisma ORM e utiliza PostgreSQL como sistema de gerenciamento de banco de dados. 
A API foi projetada para permitir a criação, listagem e remoção de posts e comentários, estabelecendo uma relação de um-para-muitos entre posts e comentários.

## Modelagem do Banco de Dados

O banco de dados é composto por duas tabelas principais: posts e comments. Abaixo está a descrição das entidades conforme definidas no schema do Prisma:

**Tabela** `posts`

- `id`: Identificador único (inteiro, autoincrementado).
- `title`: Título do post (string).
- `content`: Conteúdo do post (string).
- `createdAt`: Data de criação (timestamp, valor padrão: data atual).
- `updatedAt`: Data de atualização (timestamp, atualizado automaticamente).
- `comments`: Relação um-para-muitos com a tabela `comments`, indicando que um post pode ter vários comentários.

**Tabela** `comments`

- `id`: Identificador único (inteiro, autoincrementado).
- `content`: Conteúdo do comentátio (string).
- `createdAt`: Data de criação (timestamp, valor padrão: data atual).
- `updatedAt`: Data de atualização (timestamp, atualizado automaticamente).
- `postId`: Chave estrangeira que referencia o `id` da tabela `posts` (inteiro).
- `post`: Relação muitos-para-um com a tabela `posts`, configurada com `onDelete: Cascade`, o que significa que, ao deletar um post, todos os seus comentários associados são automaticamente removidos.

## Endpoints Desenvolvidos

A API oferece endpoints para gerenciar posts e comentários, implementados com o Express e organizados em rotas específicas. Abaixo estão os detalhes de cada endpoint:

**Rotas de Posts**

- `POST /posts`
  - **Descrição:** Cria um novo post.
  - **Controlador:** CreatePostController.handle.
  - **Corpo da Requisição:** JSON com title (string) e content (string).
  - **Resposta:** JSON com os dados do post criado (id, title, content, createdAt, updatedAt).

- `GET /posts`
  - **Descrição:** Lista todos os posts existentes.
  - **Controlador:** ListPostController.handle.
  - **Resposta:** JSON com uma lista de posts, cada um contendo id, title, content.

- `DELETE /posts/:id`
  - **Descrição:** Remove um post específico pelo seu id.
  - **Controlador:** RemovePostController.handle.
  - **Parâmetros:** id (inteiro) na URL.
  - **Resposta:** JSON com uma mensagem de sucesso e os dados do post removido. Os comentários associados são automaticamente deletados devido à configuração onDelete: Cascade.

**Rotas de Comentários**

- `POST /comments`
  - **Descrição:** Cria um novo comentário associado a um post.
  - **Controlador:** CreateCommentController.handle.
  - **Corpo da Requisição:** JSON com content (string) e postId (inteiro).
  - **Resposta:** JSON com os dados do comentário criado (id, content, postId, createdAt, updatedAt).

- `GET /comments/:postId`
  - **Descrição:** Lista todos os comentários de um post específico.
  - **Controlador:** ListCommentsByPostController.handle.
  - **Parâmetros:** postId (inteiro) na URL.
  - **Resposta:** JSON com uma lista de comentários associados ao postId, cada um contendo id, content.

- `DELETE /comments/:id`
  - **Descrição:** Remove um comentário específico pelo seu id.
  - **Controlador:** RemoveCommentController.handle.
  - **Parâmetros:** id (inteiro) na URL.
  - **Resposta:** JSON com uma mensagem de sucesso e os dados do comentário removido.


