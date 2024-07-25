import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NEST JS POC')
    .setDescription('NEST JS POC')
    .setVersion('1.0')
    .addTag('NEST JS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.APP_PORT;
  if (!PORT) {
    console.log('Port is not defined');
    process.exit(1);
  }
  await app.listen(PORT).then(() => {
    console.log(`${process.env.NODE_ENV} Server is listening on port ${PORT}`);
  });
}
bootstrap();
