# Boilerplate de API em camadas

API com **Express** e **Mongoose**, organizada em camadas. O recurso **Item** é o exemplo: copie o caminho dele para criar os recursos do seu projeto.

## Como rodar

1. `npm install`
2. Copie o **.env.example** para **.env** e coloque a sua `MONGO_URI`.
3. Em **src/config/conexao.js**, troque o **dbName** pelo nome do banco do seu projeto.
4. `npm start`

## O caminho de uma requisição

```
Postman → routes → controller → service → repository → model → MongoDB
```

| Pasta | Responsabilidade |
| :--- | :--- |
| **routes** | Qual função do controller atende cada caminho |
| **controllers** | Recebe **req** e **res**, chama o service e responde (com try/catch) |
| **services** | As **regras de negócio** |
| **repositories** | A **única** que usa o Model: fala com o banco |
| **models** | O Schema |
| **middlewares** | Funções que rodam antes das rotas |
| **config** | A conexão com o banco |

## Rotas do exemplo

| Método | Caminho | Respostas |
| :--- | :--- | :--- |
| GET | /itens | 200 |
| GET | /itens/:id | 200, 404, 400 |
| POST | /itens | 201, 400 |
| PUT | /itens/:id | 200, 404, 400 |
| DELETE | /itens/:id | 200, 404, 400 |

```json
{ "nome": "Caderno", "quantidade": 3 }
```

## Checklist de novo recurso

1. **models/**: crie o Model (ex.: `Produto.js`) com os campos e as validações.
2. **repositories/**: copie o `itemRepository.js`, renomeie e troque o Model importado.
3. **services/**: copie o `itemService.js`, renomeie as funções e o import do repository.
4. **controllers/**: copie o `itemController.js`, renomeie as funções, o import do service e as mensagens de erro.
5. **routes/**: copie o `itemRoutes.js`, renomeie a função e os caminhos (ex.: `/produtos`).
6. **app.js**: importe a função de rotas e chame-a, como o `itemRoutes(router)`.
7. Teste no **Postman**: 201, 200, 400 e 404.
