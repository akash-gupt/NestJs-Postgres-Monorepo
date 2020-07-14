import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureSwagger = app => {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Gypsy')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .setBasePath('/api')
    .addBearerAuth({ type: 'oauth2', name: 'authorization' }, 'header')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    swaggerUrl: `/api/docs-json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
};
