import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/marketplace');
  app.enableCors();
  const swagger = new DocumentBuilder()
    .setTitle('API MarketPlace')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt-token',
    )
    .addApiKey(
      { type: 'apiKey', name: 'x-api-key', in: 'header' }, // Configuración de API key
      'api-key', // Identificador del esquema
    )
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api/swagger', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
