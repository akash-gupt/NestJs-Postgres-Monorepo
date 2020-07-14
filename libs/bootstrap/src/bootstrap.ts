import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { handleValidationException } from './class-validator.exception';
import { IBootstrapConfig } from './config/bootstrap.config';
import { DEFAULT_BOOTSTRAP_CONFIG } from './config/bootstrap.default.config';
import { configureSwagger } from './swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

const logger = new Logger('bootstrap');

export async function createNestApp(
  AppModule,
  port: number,
  config: IBootstrapConfig = DEFAULT_BOOTSTRAP_CONFIG,
) {
  config = {
    ...config,
    ...DEFAULT_BOOTSTRAP_CONFIG,
  };

  const { plugin, swagger, globalPrefix } = config;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  swagger ? configureSwagger(app) : logger.debug('swagger is disabled.');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
      forbidNonWhitelisted: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: handleValidationException,
    }),
  );

  return app.listen(port);
}
