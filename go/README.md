# Desafio go

[voltar](../README.md)

### 1. Constrindo a Imagem:

```sh
$ docker build -t rafaelbarros/fullcycle .
```

### 2. Testando imagem local:

```sh
$ docker run --rm rafaelbarros/fullcycle
```

### 3. Publicando a Imagem no Docker Hub

Faça login no Docker Hub:

```sh
$ docker login
```

E envie a imagem:

```sh
$ docker push rafaelbarros/fullcycle
```

### 4. Testando a Imagem do Docker Hub

Excluindo imagem local para garantir que vai baixar uma imagem nova:

```sh
$ docker rmi -f rafaelbarros/fullcycle
Untagged: rafaelbarros/fullcycle:latest
Untagged: rafaelbarros/fullcycle@sha256:51368728845063425387a0b77c4b83ad9aedebbb1117b8f996f0fe02cbbe632f
Deleted: sha256:3cf9350c4bf593f29efae752332aa1fe40de30ad4b581b61345f45f25d762cd6
```

Testando a imagem para garantir que está funcionando corretamente:

```sh
$ docker run rafaelbarros/fullcycle
Unable to find image 'rafaelbarros/fullcycle:latest' locally
latest: Pulling from rafaelbarros/fullcycle
e29425946852: Already exists
Digest: sha256:51368728845063425387a0b77c4b83ad9aedebbb1117b8f996f0fe02cbbe632f
Status: Downloaded newer image for rafaelbarros/fullcycle:latest
Full Cycle Rocks!!
```

### 5. Docker Hub:

Link: https://hub.docker.com/r/rafaelbarros/fullcycle

Fazendo pull da imagem:

```sh
$ docker pull rafaelbarros/fullcycle
```

Excecutando a imagem:

```sh
$ docker run rafaelbarros/fullcycle
```

[voltar](../README.md)
