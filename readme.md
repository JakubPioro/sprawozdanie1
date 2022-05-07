# Sprawozdanie 1 Jakub Pióro 92995

## Zadanie 1
Zadanie zostało zrealizowane w pliku index.js

## Zadamie 2
Zadanie zostało zrealizowane w pliku Dockerfile

## Zadanie 3
a. zbudowania opracowanego obrazu kontenera
```
docker build -t sprawozdanie1:v1 . 
```

b. uruchomienia kontenera na podstawie zbudowanego obrazu,
```
docker run -it -p 3000:3000 --name sprawozdanie1 sprawozdanie1:v1    
```

c. sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera
(patrz: punkt 1a),
```
docker logs sprawozdanie1
```

d. sprawdzenia, ile warstw posiada zbudowany obraz
```
docker history sprawozdanie1:v1
```

## Zadanie 4
Niestety nie udało mi się zbudować obrazów kontenera z aplikacją opracowaną w punkcie nr 1, które będą pracował na architekturach: linux/arm/v7, linux/arm64/v8 oraz linux/amd64 oraz umieścić ich na swoim repozytorium na DockerHub poniewaz korzystam z macbooka z procesorem jednak aby to zrealizować nalezy wywołać następujące kompendy
```
docker buildx create --name sprawozdanie1     
docker buildx use sprawozdanie1          
docker buildx inspect --bootstrap      
docker buildx build -t jppollub/sprawozdanie1 --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .
```