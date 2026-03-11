# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
    Java Script

- O que é o Node.js?
    Ambiente para rodar Java Script em um servidor

- O que é o NPM?
    Gerenciador de pacotes para o Node, permite adicionar e remover pacotes do projeto

- O que é o Express.js?
    Framework não opinativo, deixando livre para usar a estrutura dele no projeto e construir APIS

- O que é API?
    Interface para o frontend se comunicar com o backend

- Como mudar o formato de importação de "require" (padrão commonjs) para module? package json -> type: module

- O que é HTTP?
    Hypertext Transfer Protocol

- Quais os métodos de requisição HTTP e para que serve cada um deles? GET: pegar
    POST: postar
    PUT: atualização/edição (completa)
    PATCH: atualização/edição (parcial)
    DELETE: excluir

- Para que serve o --watch ao rodar o servidor?

- Para que serve o Router do Express?
    Separar em arquivos um conjunto de rotas/endpoints similares. Para facilitar a manutenção e escalabilidade do código

- Padrões de projetos:
    MVC (Model-View-Controller)
        MODEL - Regra de negócios, acesso a base de dados
        VIEW - Fluxo da aplicação, camada de apresentação, front-end
        CONTROLLER - Controle do Fluxo de Aplicação, Entrada, Processamento (lógico), Saída

- O que é um ORM?
    Faz a comunicação entre Database e back-end

- Quais as vantagens de utilizar um ORM?
    Trocar n sei o que sem muito esforço

- É possível criar as tabelas de um banco de dados a partir do modelo prisma?


### Comandos do Prisma

- Instalação
    npm i prisma -D
    npm i dotenv -D
para Mysql e Mariadb
    npm install @prisma/client @prisma/adapter-mariadb

- Init
    npx prisma init --datasource-provider mysql --output ../generated/prisma

    npm prisma db pull
    npm prisma db push - gera o banco de dados a partir do schema do prisma

- Gerar as funções para interagir com os modelos mapeados no esquema
    npm prisma generate