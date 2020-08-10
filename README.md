# Scaffold para proyecto de nodejs y mongodb en docker

Scaffold para proyectos en docker con nodejs y mongodb


## Clonar el proyecto 


``` sh
git@github.com:jeastman19/nodejs-mongodb-docker-scaffold.git
```


## Uso

## Levantar el entorno

``` sh
$ docker-compose up -d
```

### Instalar paquetes

desde la raíz del proyecto

``` sh
$ yarn add <nombre del paquete>
```


### Visualizar el log del API

``` sh
$ docker-compose logs -f api
```


### Visualizar el log de mongodb

``` sh
$ docker-compose logs -f mongo
```


### Ejecutar pruebas

``` sh
$ docker-compose exec api npm run test
```

### Ejecutar pruebas y quedar observardo los cambios

``` sh
$ docker-compose exec api npm run test:watch
```
