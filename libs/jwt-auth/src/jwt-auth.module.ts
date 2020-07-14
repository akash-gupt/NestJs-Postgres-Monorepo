import { Module, DynamicModule } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { IJwtAuthService } from './jwt-auth.interface';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@gypsy/config';
import { JWT_AUTH_SERVICE_TOKEN } from './jwt-auth.token';

@Module({
  providers: [JwtAuthService],
  exports: [JwtAuthService],
})
export class JwtAuthModule {
  static register(jwtAuthService: IJwtAuthService): DynamicModule {
    return {
      module: JwtAuthModule,
      exports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      providers: [
        ConfigModule,
        {
          provide: JWT_AUTH_SERVICE_TOKEN,
          useValue: jwtAuthService,
        },
      ],
    };
  }
}
