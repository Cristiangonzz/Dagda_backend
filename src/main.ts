// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as express  from 'express';
// import * as bodyParser from 'body-parser';
// import * as morgan from 'morgan';//es para ver por consola las peticiones 
// import routerMercadoPago from './infrastructure/controllers/mercadopago.controller';
// import {PORT , HOST ,NGROK,MERCADOPAGO_API_KEY,CORS_ORIGIN} from "./config/config"
// import { join } from 'path';
// const path = require('path');

// //Mercado Pago
// const multer = require('multer');
// const upload = multer({ limits: { fileSize: 5 * 1024 * 1024 } });
// const routes = require("./config/upload-imagen");
// const conn = require("express-myconnection");

// const mysql = require("mysql2");
// const cors = require('cors');

// const appExpress = express();
// appExpress.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`);
// });
// appExpress.use(express.static(path.join(__dirname,'../images')));

// appExpress.use("/", routes);
// appExpress.use(bodyParser.urlencoded({ extended: true ,parameterLimit:100000,limit: '100mb'}));
// appExpress.use(express.json({ limit: '100mb' }));
// appExpress.use(morgan('dev'));
// appExpress.use(cors());
// // Middleware para analizar el cuerpo de las solicitudes con formato JSON
// // appExpress.use(bodyParser.json());
// // Middleware para analizar el cuerpo de las solicitudes con formato de formulario
// appExpress.use(routerMercadoPago);

// async function bootstrap() {

  

//   const app = await NestFactory.create(AppModule);
  
//   app.use('/images', express.static('images'));
 
//   app.enableCors({
//     origin: "*",
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true
//   });
  
  
//   const config = new DocumentBuilder()
//     .setTitle('Cats example')
//     .setDescription('The cats API description')
//     .setVersion('1.0')
//     .addTag('cats')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);
  
//   await app.listen(PUERTO_SERVIDOR);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import {PUERTO_SERVIDOR,CORS_ORIGIN} from "./config/config" 


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/images', express.static('images'));
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: '100mb' }));
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(morgan('dev'));

  app.enableCors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Dagda')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('dagda')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PUERTO_SERVIDOR);
}
bootstrap();