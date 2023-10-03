# API

## Instalação

Instalar os pacotes
`npm install`

## Configuração
Copie o arquivo `.env.example` para um novo arquivo `.env`

Altere as variaveis conforme a sua conexao, se nao souber a porta execute no seu mysql/mariadb:

`SHOW GLOBAL VARIABLES LIKE 'PORT'`

Caso ainda não tenha o banco de dados, crie-o.

`CREATE DATABASE nome_do_banco`

## Criar as tabelas do banco

Entre no terminal da sua aplicação e execute os seguintes comandos:

`node src/entity/Category.js`

`node src/entity/Customer.js`

## Execução
Dentro do terminal da aplicação, execute o servidor do express:

`npx nodemon public/index.js`

Caso ainda não possua o nodemon, instale-o através do comando:

`npm i -g nodemon`

## Endpoints

Para acessar as categorias, acesse via HTTP Client:
`GET http://localhost:8000/categorias`


Para excluir uma categoria, acesse via HTTP Client:
`DELETE http://localhost:8000/categorias/:id`