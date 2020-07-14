import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createNestApp } from '@gypsy/bootstrap';
import * as config from 'config';

const port = config.get<number>('server.userport');
const globalPrefix = '/api';

createNestApp(AppModule, port, { globalPrefix }).then(() => {
  console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  console.log(
    'Swagger at http://localhost:' + port + '/' + globalPrefix + '/docs',
  );
  console.log(`i am running on ${process.env.NODE_ENV} Environemnt`);
});
