import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ ADD THIS LINE
  app.enableCors({
  origin: ['https://jobboard-frontend-o1lc.onrender.com'],
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  credentials: true,
});
}
bootstrap();
