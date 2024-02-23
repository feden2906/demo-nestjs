import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as process from 'process';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './configs/config.type';
import { GlobalExceptionFilter } from './common/http/http-exception.filter';

async function bootstrap() {
  console.log(process.env.POSTGRES_DB);
  const app = await NestFactory.create(AppModule);
  const documentConfig = new DocumentBuilder()
    .setTitle('DEMO example')
    .setDescription('The demo API description')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      defaultModelsExpandDepth: 3,
      persistAuthorization: true,
    },
  });
  const configService = app.get(ConfigService);
  const config = configService.get<AppConfig>('app');
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(config.port, () => {
    const url = `http://${config.host}:${config.port}`;
    Logger.log(`Server started ${url}`);
    Logger.log(`Swagger started ${url}/docs`);
  });
}

void bootstrap();
