import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { ApiLoggerService } from './shared/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Microsserviço Authentication B2B')
    .setDescription('Documentação do microsserviço')
    .setVersion('1.0')
    .addTag(
      'Authentication B2B',
      'Controlador com a função de integracão com a string de dados do Authentication B2B',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger.json', JSON.stringify(document));

  if (process.env.ENVIRONMENT === 'development') {
    SwaggerModule.setup('swagger', app, document);
  }
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(new ApiLoggerService('App'));

  await app.listen(3000);
}
bootstrap();
