# MLPR - Melhor livro para relembrar

Este é uma api desenvolvida em `TypeScript` usando `NodeJS` com `Express`
.

# Boas vindas

Seja bem vindo, este é uma api para gerenciamento armazenamento de registros sobre livros em uma base de dados.

Use o comando `yarn dev` para executar o api.

<br>

# Endpoints

Acessando a rota <i>get</i> `/books` sem passar nenhum parâmetro, o endpoint retorna todos os livros na base de dados.

A mesma rota <i>get</i> `/books` acessada com parâmetros retorna os registros especificos daquele parâmetro .

A rota <i>post</i> `/books` fica encarregada por registrar os dados.

A rota <i>put</i> `/books` recebe um registro por parâmetro e atualiza esse registro com os elementos vindos do `body` da requisição.

A rota <i>delete</i> `/books` recebe um registro por parâmetro e deleta esse registro da base de dados.

<br>

## Validações

Todas os endpoints são validados usando a biblioteca `yup`.

<br>

## Database

O projeto usa como base de dados o `MongoDB`.

<br>

## ORM

Na modelagem de registros para o banco de dados foi usada a ferramenta `Typegoose`.

<br>

### [Linter]()

Esse projeto usa o `prettier` com `eslint` (padrão <i>airbnb</i>) para estilo de código.
