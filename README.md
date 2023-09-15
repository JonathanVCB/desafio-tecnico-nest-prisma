## 🛠️ Inicialização

- Para conseguir rodar esta API, é preciso fazer algumas configurações previas.

### :one: Primeira etapa

É preciso criar um banco de dados <strong><i>postgresql</i></strong>, onde todos os dados são amarzenados. Então no exemplo abaixo irei utilizar o <a href="https://dbeaver.io/download/">dbeaver</a>. Após abrir o <a href="https://dbeaver.io/download/">dbeaver</a>, você se deparará com está tela:

<div>
  <img src="https://user-images.githubusercontent.com/101361395/226995412-664a41aa-b1dc-4fb0-b078-f78779523222.png"/>
</div>

<p>Você precisará clicar no canto superio esquerdo, onde é mostrado na imagem abaixo, e selecionar o postgresql e avançar.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227004042-b71d3686-3e26-4625-981c-da0f0cc2467b.png"/>
</div>

<p>Abrirá um outro model de configuração do banco. você precisará prencher o campo <strong>password</strong> com a senha criada na instalação do programa, clicar no botão <strong>Test Connection</strong> e se der tudo certo, pode clicar em <strong>concluir</strong>.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227006529-8fb5d2fd-442f-4eb2-a45b-2f15be5dbc04.png"/>
</div>

Para criar uma base de dados, você precisará selecionar a opção <strong>SQL</strong> na barra de opções a cima e precisará utilisar um comando SQL demostrado na imagem abaixo.

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227008368-c54b5b76-8cda-42b4-a912-f358b7c2b225.png"/>
</div>

### :two: Segunda etapa

1. **Fazer o clone do repositório** <br>
2. **Abra o terminal na raiz do projeto e dê o comando "npm i"** <br>
3. **faça uma copia do arquivo <i>.env.example</i>, remova o ".example" do final e preencha com os dados do seu banco postgres.** <br>

**O banco, se você não alterou, irá rodar na porta 5432 e no host localhost. Você irá preencher os demais campos com os dados da seu banco**

- **DATABASE_URL="postgresql://user:pass.@host:port/db?schema=public"** = Esta chave voce precisará substituir os campos "user" pelo nome do seu usuario postgre, "pass" sua senha postgre, "host" pelo host que rodara a api(localhost), "port" (5432), "db" nome do seu banco de dados.

- **SECRET=KEY** = Essa chave precisa conter qualquer valor, só não pode ser nula.

---

Pronto, deu tudo certo? basta inicializar o servidor com o seguinte comando:

```
npm run start:dev
```

O servidor provavelmente estara rodando em http://localhost:3000

---

## :bullettrain_side: Rotas

### :boy: Rotas de users

🟢 **POST - /login**

- Rota para fazer o login.

**Request:**

```
{
	"email": "teste2@mail.com",
	"name": "Jonathan2"
}
```

**Response:**

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkBtYWlsLmNvbSIsImlhdCI6MTY5NDgwMTYxMCwiZXhwIjoxNjk0ODA1MjEwLCJzdWIiOiIzNGM4NWRhNS1mMDJkLTRiYzctYTk0Zi02MzUxNjQ5YTlhMmQifQ.nFCkgH0GvgIryYeqGFjZhhcJ981khfavkgVTwUZcg_o"
}
```

🟢 **POST - /users**

- Rota para fazer registro do usuário.

**Request:**

```
{
  "name": "Jonathan2",
	"email": "teste2@mail.com",
	"birthDate": "07/11/1999",
	"bio": "testando"
}
```

**Response:**

```
{
  "id": "34c85da5-f02d-4bc7-a94f-6351649a9a2d",
	"createdAt": "2023-09-15T17:57:27.570Z",
	"name": "Jonathan2",
	"email": "teste2@mail.com",
	"birthDate": "07/11/1999",
	"bio": "testando"
}
```

🔵 **GET - /users**

- Rota para retornar todos usuarios.

**Response:**

```
[
	{
		"id": "0621198498498489adsa",
		"createdAt": "1970-01-01T00:00:00.000Z",
		"name": "Jonathan",
		"email": "asdads@mail.com",
		"birthDate": "07/11/199",
		"bio": "asdasdsa",
		"posts": [
			{
				"id": "1",
				"content": "aconteceu",
				"userId": "0621198498498489adsa",
				"createdAt": "1970-01-01T00:00:00.000Z"
			}
		]
	},
	{
		"id": "00d92848-ae5e-4eb8-9902-b2d42702fb8a",
		"createdAt": "2023-09-15T14:45:59.378Z",
		"name": "Jonathan",
		"email": "teste@mail.com",
		"birthDate": "07/11/1999",
		"bio": "testando",
		"posts": [
			{
				"id": "d597c003-86e4-4e82-b89e-3fe8270179a1",
				"content": "testando denovo",
				"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a",
				"createdAt": "2023-09-15T15:05:59.971Z"
			}
		]
	}
]
```

🔵 **GET - /users/:id**

- Rota para retornar um usuario especifico.

**Response:**

```
{
	"id": "00d92848-ae5e-4eb8-9902-b2d42702fb8a",
	"createdAt": "2023-09-15T14:45:59.378Z",
	"name": "Jonathan",
	"email": "teste@mail.com",
	"birthDate": "07/11/1999",
	"bio": "testando",
	"posts": [
		{
			"id": "5a1d1cf9-17b7-4d1f-b469-98681d759b72",
			"content": "testando",
			"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a",
			"createdAt": "2023-09-15T14:49:33.087Z"
		},
		{
			"id": "d597c003-86e4-4e82-b89e-3fe8270179a1",
			"content": "testando denovo",
			"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a",
			"createdAt": "2023-09-15T15:05:59.971Z"
		}
	]
}
```

🟡 **PATCH - /users/:id**

- Rota para atualizar um usuario

**Request:**

```
{
	"name": "Jonathan atualizado"
}
```

**Response:**

```
{
	"id": "7b330c59-8081-401c-9d56-bdca47eb8d34",
	"createdAt": "2023-09-15T14:10:38.179Z",
	"name": "Jonathan atualizado",
	"email": "teste@mail.com",
	"birthDate": "07/11/1999",
	"bio": "testando"
}
```

🔴 **DELETE - /users/:id**

- Rota para deletar um usuario

**Response:**

```
No content
```

### :boy: Rotas para posts

🟢 **POST - /posts/:id** (campo id seria o id do usuario dono do post)

- Rota para fazer registro de um post vinculado a um usuario.
  **ROTA PROTEGIDA POR JWT**

**Request:**

```
{
"content": "testando denovo cm jwt"
}`
```

**Response:**

```
{
	"id": "8e4aeeaf-c892-4149-bf03-6b8647ab637a",
	"createdAt": "2023-09-15T18:14:33.209Z",
	"content": "testando denovo cm jwt",
	"userId": "34c85da5-f02d-4bc7-a94f-6351649a9a2d"
}
```

🔵 **GET - /posts**

- Rota para retornar todos os posts.

**Response:**

```
[
	{
		"id": "1",
		"createdAt": "1970-01-01T00:00:00.000Z",
		"content": "aconteceu",
		"userId": "0621198498498489adsa"
	},
	{
		"id": "d597c003-86e4-4e82-b89e-3fe8270179a1",
		"createdAt": "2023-09-15T15:05:59.971Z",
		"content": "testando denovo",
		"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a"
	}
]
```

🔵 **GET - /posts/:id**

- Rota para retornar um post especifico.

**Response:**

```
{
	"id": "5a1d1cf9-17b7-4d1f-b469-98681d759b72",
	"createdAt": "2023-09-15T14:49:33.087Z",
	"content": "testando",
	"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a"
}
```

🟡 **PATCH - /posts/:id**

- Rota para atualizar um post
  **ROTA PROTEGIDA POR JWT**

**Request:**

```
{
	"content": "atualizado"
}
```

**Response:**

```
{
	"id": "5a1d1cf9-17b7-4d1f-b469-98681d759b72",
	"createdAt": "2023-09-15T14:49:33.087Z",
	"content": "atualizado",
	"userId": "00d92848-ae5e-4eb8-9902-b2d42702fb8a"
}
```

🔴 **DELETE - /users/:id**

- Rota para deletar um post
  **ROTA PROTEGIDA POR JWT**

**Response:**

```
No content
```
