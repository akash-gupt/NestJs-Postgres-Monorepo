import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import {
  HttpExceptionFilter,
  ClassValidatorExceptionFilter,
  MongoExceptionFilter,
} from './filters';
import { TransformInterceptor } from './interceptors';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: ClassValidatorExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MongoExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  imports: [DatabaseModule],
})
export class CoreModule {}
