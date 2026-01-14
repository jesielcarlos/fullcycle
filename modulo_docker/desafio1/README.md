# Desafio 1 - Full Cycle Docker

## Objetivo
Gerar uma imagem Docker com menos de 2MB que execute um binario Go e imprima
exatamente:

```
Full Cycle Rocks!!
```

## Estrutura
- `main.go`: implementa o "Ola Mundo".
- `Dockerfile`: build multi-stage com imagem final `scratch`.

## Como buildar
```bash
docker build -t jesielcarlos/fullcycle .
```

## Como executar
```bash
docker run --rm jesielcarlos/fullcycle
```

Saida esperada:
```
Full Cycle Rocks!!
```

## Publicar no Docker Hub
```bash
docker push jesielcarlos/fullcycle
```

## Checar tamanho da imagem
```bash
docker images jesielcarlos/fullcycle
```

## Link para a imagem no Docker Hub
[Link da imagem](https://hub.docker.com/repository/docker/jesielcarlos/fullcycle/tags/latest/sha256-6c3d9d2d021b9f34cee40e872038caeca146e30cc672f165ed31125261c615eb)

