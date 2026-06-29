import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));

  const port = parseInt(process.env['PORT'] ?? '3000', 10);
  await app.listen(port);

  app.get(Logger).log(`Atlas API listening on port ${port}`, 'Bootstrap');
}

bootstrap();
