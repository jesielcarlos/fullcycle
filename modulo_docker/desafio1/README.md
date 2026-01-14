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
docker build -t jcarlos/fullcycle .
```

## Como executar
```bash
docker run --rm jcarlos/fullcycle
```

Saida esperada:
```
Full Cycle Rocks!!
```

## Publicar no Docker Hub
```bash
docker push jcarlos/fullcycle
```

## Checar tamanho da imagem
```bash
docker images jcarlos/fullcycle
```
