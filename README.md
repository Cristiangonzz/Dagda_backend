
## Installation

```bash
$ npm install
```

```bash
$ docker-compose up --build -d
$ docker exec -it mysql_db mysqk -u academy -p

docker build -t tu_usuario_docker/nombre_de_tu_imagen .
docker login
docker push tu_usuario_docker/nombre_de_tu_imagen

```
## MYSQL
 SHOW DATABASES;
 USE academy;
SHOW TABLES;

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
