import { UnauthorizedException } from '@nestjs/common';
import { ApiError } from '../error-messages';

export class HttpUnauthorizedException extends UnauthorizedException {
  constructor(message: string, error?: any) {
    super(message || ApiError.userNotAuthorized, error);
  }
}
