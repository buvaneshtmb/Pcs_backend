import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe(
      {
      whitelist: true,
    }
    ),
  );

  const options = new DocumentBuilder()
      .setTitle(`First App`)
      .setDescription(`The Back-end API documentation for First App`)
      .setVersion('1.0')
      // .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  const port = 8080
  console.log("Running port-------->",port)
  app.enableCors()
  await app.listen(port);
}
bootstrap();
