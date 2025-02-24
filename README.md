# Projeto de Cadastro de Usuários em React

Este é um projeto simples de cadastro de usuários desenvolvido em React. A aplicação permite cadastrar, listar e deletar usuários, utilizando uma API para gerenciamento dos dados.

## Tecnologias Utilizadas

- React
- Axios (para requisições HTTP)
- CSS (para estilização)

## Estrutura do Projeto

```
/projeto
├── /src
│   ├── /assets
│   │   └── lixo.svg
│   ├── /components
│   │   └── Home.js
│   ├── /services
│   │   └── api.js
│   ├── /style.css
│   └── index.js
└── package.json
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

2. Acesse a aplicação em seu navegador pelo endereço [http://localhost:3000](http://localhost:3000).

3. Preencha os campos de Nome, Idade e E-mail e clique em "Cadastrar" para adicionar um novo usuário à lista.

4. Para deletar um usuário, clique no ícone de lixeira ao lado do usuário desejado.

## API

A API utilizada para gerenciar os usuários está localizada na pasta `/services/api.js`. Certifique-se de que a API esteja rodando e que o endpoint `/users` esteja acessível.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
