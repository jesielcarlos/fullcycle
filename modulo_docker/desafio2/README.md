# Desafio 2 - Full Cycle Docker

## Objetivo
Subir uma aplicacao Node.js com MySQL e Nginx via Docker Compose.
A resposta deve exibir:

```
<h1>Full Cycle Rocks!</h1>
```

seguida pela lista de nomes inseridos no banco.

## Estrutura
- `docker-compose.yml`: orquestracao dos servicos.
- `db/init.sql`: cria a tabela `people`.
- `app/index.js`: app Node + Express.
- `app/Dockerfile`: build da aplicacao.
- `nginx/nginx.conf`: proxy reverso.

## Como rodar
```bash
docker compose up --build
```

Acesse:
```
http://localhost:8080
```

## Como parar
```bash
docker compose down
```

## Observacoes
- Os nomes sao inseridos apenas uma vez na inicializacao.
- Para limpar o banco, use:
```bash
docker compose down -v
```
