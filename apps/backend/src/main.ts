import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://reservou.onrender.com',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  
  app.useGlobalPipes(new ValidationPipe());

  // console.log('JWT_SECRET:', process.env.JWT_SECRET);

  await app.listen(3000);
  console.log('🚀 Backend rodando em http://localhost:3000');
}
bootstrap();
