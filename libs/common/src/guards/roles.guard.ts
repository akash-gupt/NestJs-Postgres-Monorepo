import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GypsyLogger } from '@gypsy/logger';

const logger = GypsyLogger.scope('RolesGuard');

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      logger.debug(`Role not found so allowed to access the endpoint`);
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    logger.debug(`User Found`, user);

    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
