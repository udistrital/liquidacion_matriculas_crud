import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/configuration';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = +configService.get<number>( SERVER_PORT ) || 3000;

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('matricula_crud')
    .setDescription('API CRUD para matriculas para el cliente')
    .setVersion('1.0')
    .addTag('plan')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger.json", JSON.stringify(document, null, 4));
  SwaggerModule.setup('api', app, document);

  await app.listen( port );
  console.log("LISTENING ON PORT" + await app.getUrl())

}
bootstrap();