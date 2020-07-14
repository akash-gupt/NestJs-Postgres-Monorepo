import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@gypsy/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('db.uri'),
        user: config.get('db.user'),
        pass: config.get('db.pass'),
        retryAttempts: 3,
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
        useUnifiedTopology: true,
      }),
      imports: [ConfigModule],
    }),
  ],
})
export class DatabaseModule {}
