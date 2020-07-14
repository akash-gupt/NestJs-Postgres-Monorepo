import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { ValidationError } from 'class-validator';

@Catch(ValidationError)
export class ClassValidatorExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {}
}
