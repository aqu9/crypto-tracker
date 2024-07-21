import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter(app));
  app.enableCors();
  if (!process.env.PORT) {
    process.env.PORT = '3001';
  }

  await app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
  });
}
bootstrap();
