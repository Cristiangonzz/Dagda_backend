import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express  from 'express';
import * as morgan from 'morgan';//es para ver por consola las peticiones 
import routerMercadoPago from './infrastructure/controllers/mercadopago.controller';
import {PORT , HOST ,NGROK,MERCADOPAGO_API_KEY,CORS_ORIGIN} from "./config/config"

//Mercado Pago
const appExpress = express();
const bodyParser = require('body-parser');
const cors = require('cors');
appExpress.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
appExpress.use(morgan('dev'));
appExpress.use(cors());
// Middleware para analizar el cuerpo de las solicitudes con formato JSON
appExpress.use(bodyParser.json());
// Middleware para analizar el cuerpo de las solicitudes con formato de formulario
appExpress.use(bodyParser.urlencoded({ extended: true }));
appExpress.use(routerMercadoPago);

async function bootstrap() {

  

  const app = await NestFactory.create(AppModule);

 
  app.enableCors({
    origin: CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });
  
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
