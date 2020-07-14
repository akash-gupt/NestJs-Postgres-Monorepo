import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    switch (exception.code) {
      case 11000:
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply>();
        response.statusCode = HttpStatus.FORBIDDEN;
        response.send({
          statusCode: HttpStatus.FORBIDDEN,
          timestamp: new Date().toISOString(),
          message: 'You are already registered',
        });
    }
  }
}
